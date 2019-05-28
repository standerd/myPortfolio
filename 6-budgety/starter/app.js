//BUDGET CONTROLLER
//-------------------------
//-------------------------

// set expense values from user input
let budgetController = (function() {
  let Expenses = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  //calculate the expense % of income
  Expenses.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expenses.prototype.getPercentage = function() {
    return this.percentage;
  };

  //set the income values from the user input
  let Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // calculate the total for the header of the page
  let calculateTotal = function(type) {
    let sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  let data = {
    allItems: {
      exp: [],
      inc: []
    },

    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  //return each item that was added to be logged in the body of the app
  return {
    addItem: function(type, des, val) {
      let newItem, ID;
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      if (type === "exp") {
        newItem = new Expenses(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);
      return newItem;
    },

    // set the delete item functionality to remove the item from the body

    deleteItem: function(type, id) {
      let ids, index;

      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {
      // calculate the total income and expenses
      calculateTotal("exp");
      calculateTotal("inc");

      //calculate the budget surplus or deficit
      data.budget = data.totals.inc - data.totals.exp;

      // calculation the percentage income that was spent

      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    //calculate the expense % to be shown next to the expense
    calculatePercentages: function() {
      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },
    // return these %'s to be use in the UI section
    getPercentages: function() {
      let allPerc = data.allItems.exp.map(function(cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },

    //return all the data to the main module to generate the HTML
    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    //console test to ensure that init has loaded
    testing: function() {
      console.log(data);
    }
  };
})();

//UI CONTROLLER
//---------------------------
//----------------------------

// setup all DOM elements that are going to be required
let UIController = (function() {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
    dateLabel: ".budget__title--month",
    expensesPercLabel: ".item__percentage"
  };

  // function to format the numbers in a nice format
  let formatNumber = function(num, type) {
    let numSplit, int, dec;

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split(".");
    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];

    return (type === "exp" ? "- " : "+ ") + int + "." + dec;
  };

  let nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  //returns the data from the user input
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    // adds the items to the main page of the HTML document
    addListItem: function(obj, type) {
      let html, newHTML, element;

      if (type === "inc") {
        element = DOMstrings.incomeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMstrings.expensesContainer;
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace the placeholders in the HTML with the Object returned
      newHTML = html.replace("%id%", obj.id);
      newHTML = newHTML.replace("%value%", formatNumber(obj.value, type));
      newHTML = newHTML.replace("%description%", obj.description);

      //Insert HTML into the DOM

      document.querySelector(element).insertAdjacentHTML("beforeend", newHTML);
    },

    deleteListItem: function(selectorID) {
      let el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFields: function() {
      let fields, fieldsArr;

      // convert a list returned by querySelector to a Array

      //initialised the totals to be "" on page load
      fields = document.querySelectorAll(
        DOMstrings.inputDescription + "," + DOMstrings.inputValue
      );
      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current, index, arraay) {
        current.value = "";
      });

      // set the focus on the description
      fieldsArr[0].focus();
    },

    // sets the heading values of the budget income, expense and surplus/deficit
    displayBudget: function(obj) {
      let type;
      obj.budget > 0 ? (type = "inc") : (type = "exp");

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(
        obj.budget,
        type
      );
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(
        obj.totalInc,
        "inc"
      );
      document.querySelector(
        DOMstrings.expensesLabel
      ).textContent = formatNumber(obj.totalExp, "exp");

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "--";
      }
    },

    // header month and year function
    displayMonth: function() {
      let now, year, month, months;

      now = new Date();

      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      month = now.getMonth();

      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent =
        months[month] + " " + year;
    },

    // sets the percentages next to the expense items in the HTML body
    displayPercentages: function(percentages) {
      let fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      nodeListForEach(fields, function(current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + "%";
        } else {
          current.textContent = "--";
        }
      });
    },

    //changes the color of the button and input boxes based on inc/exp
    changedType: function() {
      let fields = document.querySelectorAll(
        DOMstrings.inputType +
          "," +
          DOMstrings.inputDescription +
          "," +
          DOMstrings.inputValue
      );

      nodeListForEach(fields, function(cur) {
        cur.classList.toggle("red-focus");
      });

      document.querySelector(DOMstrings.inputBtn).classList.toggle("red");
    },

    // returns the DOMStrings values for use outside of the private function
    getDomstrings: function() {
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
//-------------------------------------
//-------------------------------------

let controller = (function(budgetCntr, UICntr) {
  
  // Setup of event listeners
  //_______________________________
  let setupEventListeners = function() {
    let DOM = UICntr.getDomstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);

    document
      .querySelector(DOM.inputType)
      .addEventListener("change", UICntr.changedType);
  };

  // master update budget heading totals
  //_______________________________________

  let updateBudget = function() {
    // 1. Calculate the budget
    budgetCntr.calculateBudget();

    // 2. Return the budget
    let budget = budgetCntr.getBudget();

    // 3. Display the budget on the UI
    UICntr.displayBudget(budget);
  };

  // master update percentages next to the expenses items listed
  //_____________________________________________________________

  let updatePercentages = function() {
    //1. Calculate percentage
    budgetCntr.calculatePercentages();

    //2. Read percentages from the budget controller
    let percentages = budgetCntr.getPercentages();

    //3. Update the UI with the new percentages
    UICntr.displayPercentages(percentages);
  };

// master code for adding an item
//_____________________________________

  let ctrlAddItem = function() {
    let input, newItem;

    //1. Get the field inout data
    input = UICntr.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      //2. Add the item to the budget controller
      newItem = budgetCntr.addItem(input.type, input.description, input.value);

      //3. Add the item to UI
      UICntr.addListItem(newItem, input.type);

      //3.1 Clear fields after submitting
      UICntr.clearFields();

      //4. Calculate and update the budget
      updateBudget();

      //5. Calc and update the percentages
      updatePercentages();
    }
  };

// master code if item is deleted
//________________________________

  let ctrlDeleteItem = function(event) {
    let itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      //1. delete the item from the data structure
      budgetCntr.deleteItem(type, ID);

      //2. Delte the item from the UI

      UICntr.deleteListItem(itemID);

      //3. Uodate and show the new budget
      updateBudget();

      //4. Calculate and update percentages
      updatePercentages();
    }
  };

  // sets the initialise function
  return {
    init: function() {
      console.log("Init started");
      UICntr.displayMonth();
      UICntr.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });

      setupEventListeners();
    }
  };
})(budgetController, UIController);

//CALL INTITIALISE FUNCTION
//-------------------------------
//-------------------------------

controller.init();

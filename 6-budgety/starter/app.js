let budgetController = (function() {
  var Expenses = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },

    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      let newItem, ID;
     if(data.allItems[type].length > 0){
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
     } else{
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
        testing:function(){
            console.log(data);
    }
  };
})();

let UIController = (function() {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDomstrings: function() {
      return DOMstrings;
    }
  };
})();

let controller = (function(budgetCntr, UICntr) {
  let setupEventListeners = function() {
    let DOM = UICntr.getDomstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  let ctrlAddItem = function() {
    let input, newItem;

    //main controler code
    input = UICntr.getInput();

    newItem = budgetCntr.addItem(input.type, input.description, input.value);
    
  };

  return {
    init: function() {
      console.log("Init started");
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();

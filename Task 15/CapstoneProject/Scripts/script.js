// NAVBAR COLLAPSE FUNCTION
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* ========================
ANIMATIONS
==========================*/

function homeLoad() {
  $("#iconImg")
    .animate({ left: "90%" }, 5000)
    .animate({ height: "0px" }, 1000, function() {
      $("#welcome").fadeIn("1500");
    });
}

function animateCart() {
  $(".cartIcon")
    .animate({ left: "46%" }, 5000)
    .animate(
      { deg: -45 },
      {
        duration: 600,
        step: function(now) {
          $("#shopCart").css({ transform: "rotate(" + now + "deg)" });
        }
      }
    )
    .animate({ left: "44%" }, 2000)
    .animate(
      { deg: 0 },
      {
        duration: 600,
        step: function(now) {
          $("#shopCart").css({ transform: "rotate(" + now + "deg)" });
        }
      }
    );
}
//=================================
// SHIPS PRODUCT PAGE ARRAY
//=================================

let ships = [
  {
    name: "Albatros",
    price: "2999.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "480mm",
    width: "180mm",
    height: "380mm",
    difficulty: ' <i class="fas fa-anchor"></i>',
    descriptionL:
      "The Albatros is a low difficulty model, it is not too large in size" +
      " it will take around 150-200 hours to complete. It comes with reasonably detailed" +
      " instructions that are easy to follow. It is double plank on hull" +
      " and is a good choice for your first build.",
    descriptionS: "The Albatros is an easy difficulty model",
    total: "2999.90",
    type: "ship"
  },
  {
    name: "Apostol Felipe",
    price: "3699.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "520mm",
    width: "150mm",
    height: "420mm",
    difficulty: ' <i class="fas fa-anchor"></i>',
    descriptionL:
      "The Apostol Felipe is a low difficulty model, it is not too large in size" +
      " it will take around 150-200 hours to complete. It comes with reasonably detailed" +
      " instructions that are easy to follow. It is double plank on hull" +
      " and is a good choice for your first build.",
    descriptionS: "The Apostol Felipe is a low difficulty model",
    total: "3699.90",
    type: "ship"
  },
  {
    name: "Bounty",
    price: "6999.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "780mm",
    width: "280mm",
    height: "580mm",
    difficulty:
      ' <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i>',
    descriptionL:
      "The Bounty is a high difficulty model, it is large in size and requires space" +
      " it will take around 600 hours to complete, it comes with reasonably detailed" +
      " instructions. However they are not so easy to follow if you have no experience" +
      " in building model ships, not a good first choice",
    descriptionS: "The Bounty is a high difficulty model",
    total: "6999.90",
    type: "ship"
  },
  {
    name: "Endeavour",
    price: "5999.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "780mm",
    width: "300mm",
    height: "680mm",
    difficulty: ' <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i>',
    descriptionL:
      "The Endeavour is a medium difficulty model, it is medium in size and requires a " +
      "reasonable amount of space it will take around 300 - 400 hours to complete, it comes" +
      " with fairly detailed instructions. However they are not so easy to follow if you have no experience" +
      " in building model ships, not a good first choice",
    descriptionS: "The Endeavour is a medium difficulty model.",
    total: "5999.90",
    type: "ship"
  },
  {
    name: "Gorch Fork",
    price: "6999.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "880mm",
    width: "200mm",
    height: "680mm",
    difficulty:
      ' <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i>',
    descriptionL:
      "The Gorch Fork is a high difficulty model, it is large in size and requires space" +
      " it will take around 600 hours to complete, it comes with reasonably detailed" +
      " instructions. However they are not so easy to follow if you have no experience" +
      " in building model ships, not a good first choice",
    descriptionS: "The Gorch Fork is a high difficulty model",
    total: "6999.90",
    type: "ship"
  },
  {
    name: "HMS Revenge",
    price: "4299.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "780mm",
    width: "210mm",
    height: "590mm",
    difficulty: ' <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i>',
    descriptionL:
      "The HMS Revenge is a medium difficulty model, it is medium in size and requires a " +
      "reasonable amount of space it will take around 300 - 400 hours to complete, it comes" +
      " with fairly detailed instructions. However they are not so easy to follow if you have no experience" +
      " in building model ships, not a good first choice",
    descriptionS: "The HMS Revenge is a medium difficulty model",
    total: "4299.90",
    type: "ship"
  },
  {
    name: "HMS Terror",
    price: "5299.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "820mm",
    width: "195m",
    height: "520mm",
    difficulty: ' <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i>',
    descriptionL:
      "The HMS Terror is a medium difficulty model, it is medium in size and requires a " +
      "reasonable amount of space it will take around 300 - 400 hours to complete, it comes" +
      " with fairly detailed instructions. However they are not so easy to follow if you have no experience" +
      " in building model ships, not a good first choice",
    descriptionS: "The HMS Terror is a medium difficulty model",
    total: "5299.90",
    type: "ship"
  },
  {
    name: "MS Mercedes",
    price: "8999.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "1100mm",
    width: "230mm",
    height: "980mm",
    difficulty:
      ' <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i>',
    descriptionL:
      "The MS Mercedes is a high difficulty model, it is large in size and requires space" +
      " it will take around 600 hours to complete, it comes with reasonably detailed" +
      " instructions. However they are not so easy to follow if you have no experience" +
      " in building model ships, definataly not a good first choice",
    descriptionS: "The MS Mercedes is a high difficulty model",
    total: "8999.90",
    type: "ship"
  },
  {
    name: "Basic Tools",
    price: "1199.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    descriptionL:
      "This basic toolset has sufficient tools to assist you in" +
      " completing most of the models on the site.",
    descriptionS: "Basic Toolset for assembling models",
    total: "1199.90",
    type: "tools"
  },
  {
    name: "Cutting Mat",
    price: "599.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    descriptionL:
      "This is a very handy cutting mat that heals itself and help protect work surfaces" +
      " form cutting marks and damage.",
    descriptionS: "Large cutting mat for cutting anything",
    total: "599.90",
    type: "tools"
  },
  {
    name: "Flex Sander",
    price: "399.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    descriptionL:
      "Model ships have a lot of curved surfaces, this little tool helps in sanding" +
      " these tricky little spots with ease",
    descriptionS: "Flex Sander for sanding curved areas",
    total: "399.90",
    type: "tools"
  },
  {
    name: "Pin Pusher",
    price: "499.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    descriptionL:
      "This tool is awesome to fix the nails that are included in the kit without" +
      " having to drill holes and use a hammer",
    descriptionS: "Pin pusher for pinning kit nails",
    total: "499.90",
    type: "tools"
  },
  {
    name: "Rigid Sander",
    price: "299.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    descriptionL:
      "This sander is the opposite of the flex sander, it is very rigid and sands" +
      " and surface with ease and is very comfortable",
    descriptionS: "Rigid sander for sanding rigid areas",
    total: "299.90",
    type: "tools"
  },
  {
    name: "Work Bench",
    price: "1399.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    descriptionL:
      "This little work bench has plenty of space to keep all your tools" +
      " and kit parts out of your wife's way",
    descriptionS: "Work bench to keep things organised",
    total: "1399.90",
    type: "tools"
  },
  {
    name: "San Defenso",
    price: "9999.90",
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
    img4: "/4.jpg",
    length: "1200mm",
    width: "250mm",
    height: "1050mm",
    difficulty:
      ' <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i> <i class="fas fa-anchor"></i>',
    descriptionL:
      "The San Defenso is a high difficulty model, it is large in size and requires space" +
      " it will take around 1000 hours to complete, it comes with limited instructions" +
      " that experience modelers will understand. This is an extremely difficult and time" +
      " consuming model, recommended for modeller with at least 3 prior builds",
    descriptionS: "The San Defenso is a very high difficulty model",
    total: "9999.90",
    type: "ship"
  }
];

/*=======================================
LOAD MAIN PRODUCT PAGE FROM SHIPS ARRAY
=========================================*/

let mainContent = document.querySelector(".mainContent");
let dropDownList = document.querySelector("#showDropDown");

function loadContent() {
  for (let i = 0; i < ships.length; i++) {
    let shipIndex = ships[i];
    let products =
      '<div class="col-4 imgHov"><h5 style="text-align:center;">' +
      shipIndex.name +
      "</h5>" +
      '<a href="productInfo.html"><img class="contentImg" ' +
      'onclick="setID(this.id)" id="' +
      i +
      '" src="Images/photos/' +
      shipIndex.name +
      shipIndex.img1 +
      '" alt=""' +
      '/></a><p class="description">' +
      shipIndex.descriptionS +
      '</p><div class="row content">' +
      '<div class="price col-9"><span>R ' +
      shipIndex.price +
      '</span></div><div class="col-3 buy">' +
      '<a id="' +
      i +
      '" onclick="setID(this.id), showCart()" class="buy" href="#">' +
      '<i class="fas fa-cart-plus"></i></a></div></div>' +
      '<div class="row content"><div class="info col-12">' +
      '<a class="infoLink" href="productInfo.html" onclick="setID(this.id)" id="' +
      i +
      '">More Info</a></div>' +
      "</div></div>";

    if (shipIndex.type === "ship") {
      mainContent.insertAdjacentHTML("beforeend", products);
    }
  }
  for (let i = 0; i < ships.length; i++) {
    let shipIndex = ships[i];
    let listHTML =
      '<li class="quickListItem"><a href="productInfo.html"><img class="contentImg" ' +
      'onclick="setID(this.id)" id="' +
      i +
      '" src="Images/photos/' +
      shipIndex.name +
      shipIndex.img1 +
      '" alt=""' +
      "/></a><br> " +
      shipIndex.name +
      "</li>";
    if (shipIndex.type === "ship") {
      dropDownList.insertAdjacentHTML("beforeend", listHTML);
    }
  }
}

$("#showDropDown").mousedown(function() {
  $(".quickListItem").slideDown(3000);
});

$(".menu").mouseleave(function() {
  $(".quickListItem").slideUp(3000);
});

/*=======================================
LOAD TOOLS PRODUCT PAGE
=========================================*/

let mainContentTools = document.querySelector(".mainContentTools");
let dropDownListTools = document.querySelector("#showDropDownTools");

function loadContentTools() {
  for (let i = 0; i < ships.length; i++) {
    let shipIndex = ships[i];
    let products =
      '<div class="col-4 imgHov"><h5 style="text-align:center;">' +
      shipIndex.name +
      "</h5>" +
      '<a href="productInfo.html"><img class="contentImg" ' +
      'onclick="setID(this.id)" id="' +
      i +
      '" src="Images/photos/' +
      shipIndex.name +
      shipIndex.img1 +
      '" alt=""' +
      '/></a><p class="description">' +
      shipIndex.descriptionS +
      '</p><div class="row content">' +
      '<div class="price col-9"><span>R ' +
      shipIndex.price +
      '</span></div><div class="col-3 buy">' +
      '<a id="' +
      i +
      '" onclick="setID(this.id), showCart()" class="buy" href="#">' +
      '<i class="fas fa-cart-plus"></i></a></div></div>' +
      '<div class="row content"><div class="info col-12">' +
      '<a class="infoLink" href="productInfo.html" onclick="setID(this.id)" id="' +
      i +
      '">More Info</a></div>' +
      "</div></div>";

    if (shipIndex.type === "tools") {
      mainContentTools.insertAdjacentHTML("beforeend", products);
    }
  }
  for (let i = 0; i < ships.length; i++) {
    let shipIndex = ships[i];
    let listHTML =
      '<li class="quickListItemT"><a href="productInfo.html"><img class="contentImg" ' +
      'onclick="setID(this.id)" id="' +
      i +
      '" src="Images/photos/' +
      shipIndex.name +
      shipIndex.img1 +
      '" alt=""' +
      "/></a><br> " +
      shipIndex.name +
      "</li>";
    if (shipIndex.type === "tools") {
      dropDownListTools.insertAdjacentHTML("beforeend", listHTML);
    }
  }
}

$("#showDropDownTools").mousedown(function() {
  $(".quickListItemT").slideDown(3000);
});

$(".menu").mouseleave(function() {
  $(".quickListItemT").slideUp(3000);
});

/*====================================
LOAD STORED CART ARRAY ON PAGE LOAD
======================================*/

let cartArray = [];

function myLoad() {
  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("cart", JSON.stringify(cartArray));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    cartArray = JSON.parse(sessionStorage.getItem("cart"));
  }

  if (JSON.parse(sessionStorage.getItem("cart")).length === 1) {
    basket.innerHTML =
      "  " + JSON.parse(sessionStorage.getItem("cart")).length + " item";
  } else {
    basket.innerHTML =
      " " + JSON.parse(sessionStorage.getItem("cart")).length + " items";
  }
}

/*================================================
SET ID FOR PRODUCT INFO PAGE AND QUICK ADD TO CART
==================================================*/

function setID(id) {
  let idNo = Number(id);
  localStorage.setItem("id", idNo);
  localStorage.setItem("id2", id);
}

/*=====================
GENERATE PRODUCT PAGE 
======================*/

let infoContent = document.querySelector(".mainPage");

function openProduct() {
  let idIndex = localStorage.getItem("id");
  let productDetails =
    "<h1>" +
    ships[idIndex].name +
    "</h1>" +
    '<div class="col-2 leftImg"><div class="left">' +
    '<img onclick="changeImg(this.src)" class="sideImg"' +
    'src="Images/photos/' +
    ships[idIndex].name +
    '/1.jpg" alt=""/></div>' +
    '<div class="left">' +
    '<img onclick="changeImg(this.src)" class="sideImg"' +
    'src="Images/photos/' +
    ships[idIndex].name +
    '/2.jpg" alt=""/></div>' +
    '<div class="left">' +
    '<img onclick="changeImg(this.src)" class="sideImg"' +
    'src="Images/photos/' +
    ships[idIndex].name +
    '/3.jpg" alt=""/></div>' +
    '<div class="left">' +
    '<img onclick="changeImg(this.src)" class="sideImg"' +
    'src="Images/photos/' +
    ships[idIndex].name +
    '/4.jpg"' +
    'alt=""/></div></div>' +
    '<div class="col-8">' +
    '<img class="mainImgClick mainImg" id="mainImg"' +
    'onclick="changeMainImg(this.src)"' +
    'src="Images/photos/' +
    ships[idIndex].name +
    '/1.jpg" alt=""/>' +
    '<div class="row">' +
    '<div class="col-3 details1">' +
    "<ul><li>Difficulty: " +
    ships[idIndex].difficulty +
    "</li>" +
    "<li>Height: " +
    ships[idIndex].height +
    "</li><li>Length: " +
    ships[idIndex].length +
    "</li><li>Width :  " +
    ships[idIndex].width +
    "</li></ul>" +
    '</div><div class="col-8 details"><p>' +
    ships[idIndex].descriptionL +
    "</p>" +
    "</div></div></div>" +
    '<div class="col-2 right"><div class="aside">' +
    '<h3 style="text-align: center;">Buy Now</h3>' +
    "<h4>Price: R " +
    ships[idIndex].price +
    "</h4>" +
    '<div class="addCart">' +
    '<a href=""><i class="fas fa-cart-plus"></i> Add to Cart</a></div>' +
    '<div class="pmtOptions">' +
    '<i class="fab fa-cc-visa icon"></i><i class="fab fa-cc-amex icon"></i>' +
    '<i class="fab fa-cc-diners-club icon"></i><i class="fab fa-cc-paypal icon"></i>' +
    '<i class="fas fa-money-bill-wave icon"></i><i class="fab fa-bitcoin icon"></i>' +
    "</div></div></div>";

  let toolsDetails =
    "<h1>" +
    ships[idIndex].name +
    "</h1>" +
    '<div class="col-2 leftImg"><div class="left">' +
    '<img onclick="changeImg(this.src)" class="sideImg"' +
    'src="Images/photos/' +
    ships[idIndex].name +
    '/1.jpg" alt=""/></div>' +
    '<div class="left">' +
    '<img onclick="changeImg(this.src)" class="sideImg"' +
    'src="Images/photos/' +
    ships[idIndex].name +
    '/2.jpg" alt=""/></div>' +
    "</div>" +
    '<div class="col-8">' +
    '<img class="mainImgClick mainImg" id="mainImg"' +
    'onclick="changeMainImg(this.src)"' +
    'src="Images/photos/' +
    ships[idIndex].name +
    '/1.jpg" alt=""/>' +
    '<div class="row">' +
    '<div class="col-12 details"><p>' +
    ships[idIndex].descriptionL +
    "</p>" +
    "</div></div></div>" +
    '<div class="col-2 right"><div class="aside">' +
    '<h3 style="text-align: center;">Buy Now</h3>' +
    "<h4>Price: R " +
    ships[idIndex].price +
    "</h4>" +
    '<div class="addCart">' +
    '<a href=""><i class="fas fa-cart-plus"></i> Add to Cart</a></div>' +
    '<div class="pmtOptions">' +
    '<i class="fab fa-cc-visa icon"></i><i class="fab fa-cc-amex icon"></i>' +
    '<i class="fab fa-cc-diners-club icon"></i><i class="fab fa-cc-paypal icon"></i>' +
    '<i class="fas fa-money-bill-wave icon"></i><i class="fab fa-bitcoin icon"></i>' +
    "</div></div></div>";
  if (ships[idIndex].type === "ship") {
    infoContent.insertAdjacentHTML("beforeend", productDetails);
  } else {
    infoContent.insertAdjacentHTML("beforeend", toolsDetails);
  }

  // add to cart button click event listener
  let cartButton = document.querySelector(".addCart");
  cartButton.addEventListener("click", showCart);

  // Product info page, image animation
  let img = document.querySelector("#mainImg");
  let r = 1;
  let interval;

  // if ship, slide 4 images
  function slide() {
    if (r < 4) {
      r++;
      img.src = "Images/photos/" + ships[idIndex].name + "/" + r + ".jpg";
    } else {
      r = 1;
      img.src = "Images/photos/" + ships[idIndex].name + "/" + r + ".jpg";
    }
  }

  // if tools, only slide 2 images
  function slide2() {
    if (r < 2) {
      r++;
      img.src = "Images/photos/" + ships[idIndex].name + "/" + r + ".jpg";
    } else {
      r = 1;
      img.src = "Images/photos/" + ships[idIndex].name + "/" + r + ".jpg";
    }
  }

  img.addEventListener("mouseenter", function() {
    if (ships[idIndex].type === "ship") {
      interval = setInterval(slide, 1500);
    } else {
      interval = setInterval(slide2, 1500);
    }
  });

  img.addEventListener("mouseout", function() {
    clearInterval(interval);
  });
}

/*=================================
SET SHOPPING CART ARRAY AND STORE
===================================*/

let cartDetails = document.querySelector(".insertCart");

let basket = document.getElementById("cartQty");

function showCart() {
  let cartItem = localStorage.getItem("id2");
  cartArray = JSON.parse(sessionStorage.getItem("cart"));
  cartArray.push(Number(cartItem));
  sessionStorage.setItem("cart", JSON.stringify(cartArray));
  basket.innerHTML =
    " " + JSON.parse(sessionStorage.getItem("cart")).length + " items";
  console.log(cartItem);
  alert(
    "Your item has been successfully added \nYour total order exluding shipping is\n" +
      "R " +
      orderTotal().toFixed(2)
  );
}

/*=================================
GENERATE SHOPPING CART HTML PAGE
===================================*/

let lineSum;
let orderTotalValue = document.querySelector(".orderTotal");

function updateCartItems() {
  cartArray = JSON.parse(sessionStorage.getItem("cart"));
  for (let i = 0; i < cartArray.length; i++) {
    let cartRow =
      '<tr><td class="imgColumn"><img class="cartImg" src="Images/photos/' +
      ships[cartArray[i]].name +
      '/1.jpg" alt="" /></td>' +
      '<td class="lineName">' +
      ships[cartArray[i]].name +
      "</td><td>R " +
      ships[cartArray[i]].price +
      '</td><td><input id="' +
      i +
      '" onchange="getQty(this.value, this.id)"' +
      'class="lineQty" type="number" value="1" min="1"/></td>' +
      '<td class="lineTotal">R ' +
      (ships[cartArray[i]].total * lineTotal).toFixed(2) +
      "</td>" +
      '<td><a onclick="deleteItem(this.id)" id="' +
      i +
      '" href=""><i class="fas fa-trash-alt" /></a></td></tr>';
    cartDetails.insertAdjacentHTML("beforeend", cartRow);
    lineSum = document.getElementsByClassName("lineTotal");

    // SET SHIPPING OPTION ON LOAD

    if (sessionStorage.getItem("shipCost") == 45) {
      shippingOption[0].checked = true;
    } else if (sessionStorage.getItem("shipCost") == 99) {
      shippingOption[1].checked = true;
    } else if (sessionStorage.getItem("shipCost") == 125) {
      shippingOption[2].checked = true;
    } else if (sessionStorage.getItem("shipCost") == 0) {
      shippingOption[3].checked = true;
    } else if (sessionStorage.getItem("shipCost") === null) {
      shippingOption[3].checked = true;
      sessionStorage.setItem("shipCost", 0);
    }

    //CALL FUNCTIONS TO GENERATE THE TOTALS
    checkCouponLoaded();
    showOrderTotal();
    showShippingCost();
    showTotalPayable();
    getSelectedShip();
  }
}

/*=======================================================
FUNCTIONS TO GENERATE AND DISPLAY SHOPPING CART TOTALS
=========================================================*/

function showShippingCost() {
  document.getElementById("shippingCost").innerHTML =
    "R " + sessionStorage.getItem("shipCost");
}

function showTotalPayable() {
  let discount = sessionStorage.getItem("cpnValue");
  totalPayable.innerHTML =
    "R " +
    (
      parseFloat(orderTotal()) +
      parseFloat(sessionStorage.getItem("shipCost")) -
      discount
    ).toFixed(2);
}

function showOrderTotal() {
  orderTotalValue.innerHTML = "R " + orderTotal().toFixed(2);
}

let totalPayable = document.getElementById("totalPayable");

function orderTotal() {
  cartArray = JSON.parse(sessionStorage.getItem("cart"));
  let orderTotal = 0;
  for (let i = 0; i < cartArray.length; i++) {
    orderTotal += Number(ships[cartArray[i]].total);
  }
  return orderTotal;
}

// update the the line totals if the qty is changed
let lineTotal = 1;

function getQty(value, id4) {
  lineTotal = parseFloat(value);
  console.log(typeof lineTotal);
  ships[cartArray[id4]].total = ships[cartArray[id4]].price * lineTotal;
  lineSum[id4].innerHTML = "R " + ships[cartArray[id4]].total.toFixed(2);
  showOrderTotal();
  getSelectedShip();
  showTotalPayable();
}

// delete items if trashCan is clicked
function deleteItem(id3) {
  cartArray = JSON.parse(sessionStorage.getItem("cart"));
  cartArray.splice(id3, 1);
  sessionStorage.setItem("cart", JSON.stringify(cartArray));
  checkCouponLoaded();
}

/*================================
COUPON VALIDATION AND APPLICATION
==================================*/

let coupon = document.getElementById("coupValue");
let couponHTML = document.querySelector(".coup");
let couponSubmit = document.getElementById("submitCoupon");
let couponValue;
let discountValue = 0;

coupon.addEventListener("change", function() {
  couponValue = coupon.value;
});

couponSubmit.addEventListener("click", verifyCoupon);

function verifyCoupon() {
  if (couponValue === "coupon50") {
    discountValue = (50.0).toFixed(2);
    couponHTML.classList.remove("coup");
  } else if (couponValue === "coupon100") {
    discountValue = (100.0).toFixed(2);
    couponHTML.classList.remove("coup");
  } else if (couponValue === "coupon200") {
    discountValue = (200.0).toFixed(2);
    couponHTML.classList.remove("coup");
  } else {
    alert("The coupon that you have entered is not valid");
    discountValue = (0.0).toFixed(2);
    couponHTML.classList.add("coup");
  }
  sessionStorage.setItem("cpnValue", discountValue);
  document.getElementById("coupon").innerHTML = "(R " + discountValue + ")";
  showTotalPayable();
}

//if there is a coupon applied, show the coupon on page refresh

function checkCouponLoaded() {
  let couponStatus = sessionStorage.getItem("cpnValue");

  if (couponStatus > 0) {
    couponHTML.classList.remove("coup");
    document.getElementById("coupon").innerHTML = "(R " + couponStatus + ")";
  }
}

//==========================================
//SET SHIPPING COST
//==========================================

let shippingOption = document.getElementsByName("shipping");
let shippingCost;

function getSelectedShip() {
  for (let i = 0; i < shippingOption.length; i++) {
    shippingOption[i].addEventListener("change", function() {
      shippingCost = shippingOption[i].value;
      sessionStorage.setItem("shipCost", shippingCost);
      showShippingCost();
      showTotalPayable();
    });
  }
}

/*===========================
ORDER NUMBER GENERATE
===========================*/

function orderNo() {
  let orderNo;
  let orderString = "";
  for (let i = 0; i < 10; i++) {
    orderNo = Math.floor(Math.random() * 10);
    orderString += orderNo.toString();
  }

  cartArray = JSON.parse(sessionStorage.getItem("cart"));
  cartArray.splice(0, cartArray.length);
  sessionStorage.setItem("cart", JSON.stringify(cartArray));
  sessionStorage.setItem("cpnValue", 0);
  sessionStorage.setItem("shipCost", 0);

  alert(
    "Thank you for your order. \nYour order number is " +
      orderString +
      "\nPlease keep this number handy for future correspondance"
  );
}

//==============================================
//PRODUCT SPECIFIC INFORMATION PAGE IMG DISPLAY
//==============================================

function changeImg(source) {
  let changeImg = document.querySelector(".mainImg");
  changeImg.src = source;
}

function changeMainImg(source) {
  myWindow = window.open("", "myWindow", "width=1200,height=auto");
  myWindow.document.write(
    '<img style="width:100%;"class="mainImgClick mainImg" src=' +
      source +
      ' alt="" />'
  );
}

'use strict';

var productImages = [];

var incrementClick = 0;

function ImageProducts (imageID, imageName, filePath) {
  this.imageID = imageID;
  this.imageName = imageName;
  this.filePath = filePath;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  productImages.push(this);

}

var catalogEntryOne = new ImageProducts('bag', 'C3PO Luggage Bag', 'assets/bag.jpg');

var catalogEntryTwo = new ImageProducts('banana', 'Banana Slicer', 'assets/banana.jpg');

var catalogEntryThree = new ImageProducts('bathroom', 'iPad and Toilet Roll Holder', 'assets/bathroom.jpg');

var catalogEntryFour = new ImageProducts('boots', 'Toeless Boots','assets/boots.jpg');

var catalogEntryFive = new ImageProducts('breakfast', 'The Ultimate Breakfast Maker','assets/breakfast.jpg');

var catalogEntrySix = new ImageProducts('bubblegum', 'Meatball Bubblegum', 'assets/bubblegum.jpg');

var catalogEntrySeven = new ImageProducts('chair', 'Red Chair','assets/chair.jpg');

var catalogEntryEight = new ImageProducts('cthulhu', 'Green Creature Figurine','assets/cthulhu.jpg');

var catalogEntryNine = new ImageProducts('dog-duck', 'Dog Duck Muzzle','assets/dog-duck.jpg');

var catalogEntryTen = new ImageProducts('dragon', 'Dragon Meat', 'assets/dragon.jpg');

var catalogEntryEleven = new ImageProducts('pen','Utensil Pen Covers', 'assets/pen.jpg');

var catalogEntryTwelve = new ImageProducts('pet-sweep', 'Pet Foot Mops','assets/pet-sweep.jpg');

var catalogEntryThirteen = new ImageProducts('scissors','Perfect Pizza Cutter', 'assets/scissors.jpg');

var catalogEntryFourteen = new ImageProducts('shark', 'Shark Sleeping Bag','assets/shark.jpg');

var catalogEntryFifteen = new ImageProducts('sweep', 'Baby Mop Onesie','assets/sweep.png');

var catalogEntrySixteen = new ImageProducts('tauntaun', 'Tauntaun Sleeping Bag','assets/tauntaun.jpg');

var catalogEntrySeventeen = new ImageProducts('unicorn', 'Unicorn Meat','assets/unicorn.jpg');

var catalogEntryEighteen = new ImageProducts('usb','Tentacle USB Drive','assets/usb.gif');

var catalogEntryNineteen = new ImageProducts('water-can', 'Ridiculous Watering Can', 'assets/water-can.jpg');

var catalogEntryTwenty = new ImageProducts('wine-glass', 'Death Star Wine Glass', 'assets/wine-glass.jpg');

var imagePlaces = ['firstImage','secondImage', 'thirdImage'];
var currentImages = [];
var el = document.getElementById('imageContainer');

var previousImages = [];

function loadProductsFromLocalStorage() {
  if (localStorage.allProducts) {
    productImages = JSON.parse(localStorage.allProducts);
  }
}

loadProductsFromLocalStorage();

function saveProductsToLocalStorage(products){  // use productImages as that is my array that stores the images.
  localStorage.allProducts = JSON.stringify(products);  //saves to local storage and converts to strings
  console.log('Saved to localStorage!');
}

function generateRanNumber () {
  var genNumber = Math.floor(Math.random() * (productImages.length - 1));
  return genNumber;
}

function generateImageOrder () {
  var numberOfImages = 3;
  while (currentImages.length < numberOfImages) {
    var randNum = generateRanNumber();
    // console.log(randNum);
    if (currentImages.includes(randNum) === false && previousImages.includes(randNum) === false) {
      currentImages.push(randNum);
      console.log(randNum);
    }
  }
  previousImages = currentImages;
}

function displayThreeImages () {
  generateImageOrder();
  for (var i = 0; i < imagePlaces.length; i++) {
    productImages[currentImages[i]].timesDisplayed++;
    var firstFigure = document.createElement('figure');
    firstFigure.setAttribute('id', productImages[currentImages[i]].imageID);
    var firstImage = document.createElement('img');
    firstImage.setAttribute('src', productImages[currentImages[i]].filePath);
    firstImage.setAttribute('alt', productImages[currentImages[i]].imageName);
    firstImage.dataset.indexNumber = currentImages[i];
    var firstCaption = document.createElement('figcaption');
    firstCaption.textContent = productImages[currentImages[i]].imageName;
    firstFigure.appendChild(firstImage);
    firstFigure.appendChild(firstCaption);
    el.appendChild(firstFigure);
  }
};
displayThreeImages();

function displayClicks() {
  var elData = document.getElementById('listData');
  var displayDataInUL = document.createElement('ul');
  for (var i = 0; i < productImages.length; i++) {
    var displayDataInLI = document.createElement('li');
    displayDataInLI.textContent = productImages[i].imageName + ': ' + productImages[i].timesClicked;
    displayDataInUL.appendChild(displayDataInLI);
  }
  elData.appendChild(displayDataInUL);
}

el.addEventListener('click', handleClick);

function handleClick (event) {
  event.preventDefault();
  event.stopPropagation();
  // console.log(event);
  // console.log('hello world', event.target.dataset.indexNumber);
  productImages[event.target.dataset.indexNumber].timesClicked++;
  // console.log(productImages[event.target.dataset.indexNumber]);
  if (incrementClick < 25) {
    incrementClick++;
    currentImages = [];
    el.innerHTML = '';
    displayThreeImages();
  } else {
    displayClicks();
    saveProductsToLocalStorage(productImages);
    el.removeEventListener('click', handleClick);
  }
}

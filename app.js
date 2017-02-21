'use strict';

var productImages = [];

function ImageProducts (imageID, imageName, filePath) {
  this.imageID = imageID;
  this.imageName = imageName;
  this.filePath = filePath;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  productImages.push(this);

}

ImageProducts.prototype.getTimesClicked = function () {

};

ImageProducts.prototype.getTimesDisplayed = function () {

};

var catalogEntryOne = new ImageProducts('bag', 'C3PO Luggage Bag', 'assets/bag.jpg');

var catalogEntryTwo = new ImageProducts('banana', 'Banana Slicer', 'assets/banana.jpg');

var catalogEntryThree = new ImageProducts('bathroom', 'iPad and Toilet Roll Holder', 'assets/bathroom.jpg');

var catalogEntryFour = new ImageProducts('boots', 'Toeless Boots','assets/boots.jpg');

var catalogEntryFive = new ImageProducts('breakfast', 'The Ultimate Breakfast Maker','assets/breakfast.jpg');

var catalogEntrySix = new ImageProducts('bubblegum', 'Meatball Bubblegum', 'assets/bubblegum.jpg');

var catalogEntrySeven = new ImageProducts('chair', 'Red Chair','assets/chair.jpg');

var catalogEntryEight = new ImageProducts('cthulhu', 'Green Creature Figurine','assets/cthulhu.jpg');

var catalogEntryNine = new ImageProducts('dog-duck', 'Dog Duck Muzzel','assets/dog-duck.jpg');

var catalogEntryTen = new ImageProducts('dragon', 'Dragon Meat', 'assets/dragon.jpg');

var catalogEntryEleven = new ImageProducts('pen','Pen Utensil Covers', 'assets/pen.jpg');

var catalogEntryTwelve = new ImageProducts('pet-sweep', 'Pet Foot Mops','assets/pet-sweep.jpg');

var catalogEntryThirteen = new ImageProducts('scissors','Perfect Pizza Cutter', 'assets/scissors.jpg');

var catalogEntryFourteen = new ImageProducts('shark', 'Shark Sleeping Bag','assets/shark.jpg');

var catalogEntryFifteen = new ImageProducts('sweep', 'Baby Mop Onesie','assets/sweep.png');

var catalogEntrySixteen = new ImageProducts('tauntaun', 'Tauntaun Sleeping Bag','assets/tauntaun');

var catalogEntrySeventeen = new ImageProducts('unicorn', 'Unicorn Meat','assets/unicorn.jpg');

var catalogEntryEighteen = new ImageProducts('usb','Tentacle USB Drive','assets/usb.gif');

var catalogEntryNineteen = new ImageProducts('water-can', 'Ridiculous Watering Can', 'assets/water-can.jpg');

var catalogEntryTwenty = new ImageProducts('wine-glass', 'Death Star Wine Glass', 'assets/wine-glass.jpg');

var imagePlaces = ['firstImage','secondImage', 'thirdImage'];
var currentImages = [];

function displayThreeImages () {
  for (var i = 0; i < imagePlaces.length; i++) {
    var el = document.getElementById(imagePlaces[i]);
    var correctValue = false;
    while (correctValue === false) {
      var randomNumber = Math.floor(Math.random() * (productImages.length - 1));
      var found = false;
      for (var j = 0; j < currentImages.length; j++) {
        if (randomNumber === currentImages[j]) {
          found = true;
        }
      }
      if (found !== true) {
        currentImages.push(randomNumber);
        correctValue = true;
      }
    }
    var firstFigure = document.createElement('figure');
    firstFigure.setAttribute('id', productImages[currentImages[i]].imageID);
    var firstImage = document.createElement('img');
    firstImage.setAttribute('src', productImages[currentImages[i]].filePath);
    firstImage.setAttribute('alt', productImages[currentImages[i]].imageName);
    var firstCaption = document.createElement('figcaption');
    firstCaption.textContent = productImages[currentImages[i]].imageName;
    firstFigure.appendChild(firstImage);
    firstFigure.appendChild(firstCaption);
    el.appendChild(firstFigure);
  }
};

displayThreeImages();

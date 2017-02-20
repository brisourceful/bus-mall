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

var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bananaImage = new ImageProducts ('banImage', 'Banana Cutter', './assets/banana.jpg');
var bathroomImage = new ImageProducts ('bathroomImage', 'iPad and Toilet Roll Holder', './assets/bathroom.jpg');
var bootsImage = new ImageProducts ('bootsImage', 'Toeless Boots', './assets/boots.jpg');
var breakfastImage = new ImageProducts ('breakfastImage', 'The Ultimate Breakfast Maker', './assets/breakfast.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');
var bagImage = new ImageProducts ('bagImage', 'C3PO Luggage Bag', './assets/bag.jpg');

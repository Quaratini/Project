'use strict';

// *** This page is where global objects and their prototypes are defined *** //

// Banner Material

var Banner = function() {
  this.bannerText;
  this.loadBanner();
};

Banner.prototype.loadBanner = function() {
  this.bannerText = JSON.parse(localStorage.getItem('announcement'));
};

Banner.prototype.announcementHandler = function(event) {
  //    stringify the text to our local storage
  //    update announcement div with the annoucement 
  //    save the annoucement in the text area
  event.preventDefault();
  localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
  console.log(localStorage.announcement);
};

Banner.prototype.textDefault = function() {
  document.getElementById('announcement').value = this.bannerText;
};



// Password material

var Password = function() {
  this.password;
  this.getPassword();
};

Password.prototype.getPassword = function() {
  // var temp = JSON.parse(localStorage.getItem('password'));

  if (!localStorage.password) {
    this.password = 'reset';
    localStorage.setItem('password', JSON.stringify(this.password));
  } else {
    this.password = JSON.parse(localStorage.getItem('password'));
  }

};


// Beer Card Constructors

var Inventory = function(){
  this.beers = [];
};

Inventory.prototype.addInventory = function() {
  this.beers.push(new Beercard());
};

Inventory.prototype.saveToLocalStorage = function(){
  localStorage.setItem('beerInventory', JSON.stringify(this.beers));
};

Inventory.prototype.loadBeerInventory = function(){
  this.beers = JSON.parse(localStorage.getItem('beerInventory')) || [];
};

Inventory.prototype.removeItem = function(item){
  this.beers.splice(item, 1);
};


var Beercard = function(){
  this.beername = document.getElementById('beerName').value;
  this.beertype = document.getElementById('beerTypeInput').value;
  this.abv = document.getElementById('abv').value;
  this.hopType = document.getElementById('hopType').value;
  this.shortDescription = document.getElementById('shortDesc').value;
  this.longDescription = document.getElementById('longDesc').value;

  this.display = true;
  this.sales = false;
};


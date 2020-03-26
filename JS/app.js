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

// Inventory.prototype.addInventory = function() {
//   this.beers.push(new Beercard());
// };

Inventory.prototype.saveToLocalStorage = function(){
  localStorage.setItem('beerInventory', JSON.stringify(this.beers));
};

Inventory.prototype.loadBeerInventory = function(){
  this.beers = JSON.parse(localStorage.getItem('beerInventory')) || [];
  for (var i = 0; i < this.beers.length; i++) {
    this.beers[i] = new Beercard(
      this.beers[i].beername,
      this.beers[i].beertype,
      this.beers[i].abv,
      this.beers[i].hopType,
      this.beers[i].shortDescription,
      this.beers[i].longDescription,
      this.beers[i].display,
      this.beers[i].sales,
    )
  };
};

Inventory.prototype.removeItem = function(item){
  this.beers.splice(item, 1);
};


var Beercard = function(a, b, c, d, e, f, g, h){
  this.beername = a;
  this.beertype = b;
  this.abv = c;
  this.hopType = d;
  this.shortDescription = e;
  this.longDescription = f;

  this.display = g;
  this.sales = h;
};

Beercard.prototype.toggleDisplay = function() {
  if (this.display) {
    this.display = false;
  } else {
    this.display = true;
  }
};

Beercard.prototype.toggleSale = function() {
  if (this.sales) {
    this.sales = false;
  } else {
    this.sales = true;
  }
};
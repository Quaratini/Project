'use strict';

// *** This page is where global objects and their prototypes are defined *** //


// ** Banner Material ** //

// Banner Constructor
var Banner = function() {
  this.bannerText;
  this.loadBanner();
};

// Loads each banner object from local storage into the javascript for the current page
Banner.prototype.loadBanner = function() {
  this.bannerText = JSON.parse(localStorage.getItem('announcement'));
};

// Event handler that stores banner text to local storage on the control.html page
Banner.prototype.announcementHandler = function(event) {
  event.preventDefault();
  localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
  console.log(localStorage.announcement);
};
// Preloads the banner content into its update form on control.hmtl
Banner.prototype.textDefault = function() {
  document.getElementById('announcement').value = this.bannerText;
};



// ** Password material ** //

// Password Contructor
var Password = function() {
  this.password;
  this.getPassword();
};

// Grabs password from local storage to be used on indes.html page or creates a default one
Password.prototype.getPassword = function() {
  if (!localStorage.password) {
    this.password = 'reset';
    localStorage.setItem('password', JSON.stringify(this.password));
  } else {
    this.password = JSON.parse(localStorage.getItem('password'));
  }
};


// ** Beer Card Material ** //

// Inventory Constructor that will hold the Beercard objects
var Inventory = function(){
  this.beers = [];
};

// Saves inventory list of Beercards to local storage
Inventory.prototype.saveToLocalStorage = function(){
  localStorage.setItem('beerInventory', JSON.stringify(this.beers));
};

// Extracts beer items from local storage for reinstatiation
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
      this.beers[i].sales
    );
  }
};

// Removes Beercard item from current page's inventory
Inventory.prototype.removeItem = function(item){
  this.beers.splice(item, 1);
};

// Create BeerCards on Index page
Inventory.prototype.writeCards = function(){
  var main = document.getElementById('beerCardSection');
  main.innerHTML= '';

  for (var i = 0; i < currentInventory.beers.length; i++) {
    var card = document.createElement('div');
    card.className = this.beers[i].beertype;

    if (!this.beers[i].display) {
      card.style.display = 'none';
    }

    var backgroundImg = document.createElement('img');
    backgroundImg.src = 'assets/Hop.png';
    backgroundImg.className = 'backgroundImg';
    card.appendChild(backgroundImg);

    var saleImg = document.createElement('img');
    saleImg.src = 'assets/sale-tag.png';
    saleImg.className = 'saleImg';
    card.appendChild(saleImg);

    if (!this.beers[i].sales) {
      saleImg.style.display ='none';
    }

    var title = document.createElement('h2');
    title.innerText = this.beers[i].beername;
    title.className = 'beerCardTitle';
    card.appendChild(title);

    var type = document.createElement('h3');
    type.innerText = this.beers[i].beertype;
    type.className = 'beerCardType';
    card.appendChild(type);

    var abv = document.createElement('h3');
    abv.innerText = (this.beers[i].abv + '%');
    abv.className = 'beerCardAbv';
    card.appendChild(abv);

    var hopType = document.createElement('h3');
    hopType.innerText = this.beers[i].hopType;
    hopType.className = 'beerCardhopType';
    card.appendChild(hopType);

    var shortDescription = document.createElement('h3');
    shortDescription.innerText = this.beers[i].shortDescription;
    shortDescription.className = 'beerCardshortDescription';
    card.appendChild(shortDescription);

    var longDescription = document.createElement('h4');
    longDescription.innerText = this.beers[i].longDescription;
    longDescription.className = 'beerCardlongDescription';
    // longDescription.style.display = 'none';
    card.appendChild(longDescription);

    main.appendChild(card);
  }

};

// Reinstantiates beer objects as Beercards
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

// Toggles the display property of a Beercard
Beercard.prototype.toggleDisplay = function() {
  if (this.display) {
    this.display = false;
  } else {
    this.display = true;
  }
};

// Toggles the sales property of a Beercard
Beercard.prototype.toggleSale = function() {
  if (this.sales) {
    this.sales = false;
  } else {
    this.sales = true;
  }
};
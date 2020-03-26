'use strict';

// *** This page is where functions specific to the home page are colled *** //


// Instantiates banner object
var banner = new Banner;

// Instantiates inventory object
var currentInventory = new Inventory();
currentInventory.loadBeerInventory();

// Writes currentInventory beer cards to the beer card section
currentInventory.writeCards();

// Posts banner as the page loads
function postBanner() {
  var bannerEl = document.getElementById('announcementBar');
  var announcementEl = document.createElement('h2');
  announcementEl.innerText = banner.bannerText;
  bannerEl.appendChild(announcementEl);
}
postBanner();

// Sets the Page up correctly upon entering site
function hideMainContents() {
  document.getElementById('aboutSection').style.display = 'none';
  document.getElementById('beerSection').style.display = 'none';
  document.getElementById('locationSection').style.display = 'none';
  document.getElementById('contactSection').style.display = 'none';
}
hideMainContents();
document.getElementById('aboutSection').style.display = 'block';

// Gets the password from local storage for the javascript on index.html
var password = new Password();

// Asks for password and only grants access to the admin page with the correct password
function passwordPrompt() {
  var response = prompt('Please enter password');
  if (response !== password.password) {
    alert('Try Again');

  } else {
    window.location.href = 'control.html';
  }
}

document.getElementById('link').addEventListener('click', passwordPrompt);


// Navbar Event Handler and Listener that chooses what to display based on what is clicked
function navHandler(event) {
  hideMainContents();
  switch (event.target.id) {
  case 'aboutUs':
    document.getElementById('aboutSection').style.display = 'block';
    break;
  case 'ourBeers':
    document.getElementById('beerSection').style.display = 'block';
    break;
  case 'locations':
    document.getElementById('locationSection').style.display = 'block';
    break;
  case 'contactUs':
    document.getElementById('contactSection').style.display = 'block';
    break;
  }
}

document.getElementById('nav').addEventListener('click', navHandler);


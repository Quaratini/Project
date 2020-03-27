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

// Filter Toggle Event Handelr and Listener
// Displays all if none are clicked, if any are clicked, then those are displayed
function filterHandler(event) {
  // console.log(event);
  // Only does things if a checkbox is clicked
  if (event.target.type === 'checkbox') {

    // Checks if all of the checkboxes are currently unchecked
    if (
      document.getElementsByClassName('beerFilter')[0].checked === false &&
      document.getElementsByClassName('beerFilter')[1].checked === false &&
      document.getElementsByClassName('beerFilter')[2].checked === false &&
      document.getElementsByClassName('beerFilter')[3].checked === false &&
      document.getElementsByClassName('beerFilter')[4].checked === false &&
      document.getElementsByClassName('beerFilter')[5].checked === false
    ) {
      for (var i = 0; i < currentInventory.beers.length; i++) {
        currentInventory.beers[i].display = true;
      }
    }

    // Checks if any of the checkboxes are checked
    if (
      document.getElementsByClassName('beerFilter')[0].checked === true ||
      document.getElementsByClassName('beerFilter')[1].checked === true ||
      document.getElementsByClassName('beerFilter')[2].checked === true ||
      document.getElementsByClassName('beerFilter')[3].checked === true ||
      document.getElementsByClassName('beerFilter')[4].checked === true ||
      document.getElementsByClassName('beerFilter')[5].checked === true
    ) {

      // makes all beercards hidden
      for (var i = 0; i < currentInventory.beers.length; i++) {
        currentInventory.beers[i].display = false;
      }

      // If any beercards have a beertype of IPA, then their display property will be set to true
      if (document.getElementsByClassName('beerFilter')[0].checked === true) {
        for (var i = 0; i < currentInventory.beers.length; i++) {
          if (currentInventory.beers[i].beertype === 'IPA' ) {
            currentInventory.beers[i].display = true;
          }
        }
      }

      // If any beercards have a beertype of Pale Ale, then their display property will be set to true
      if (document.getElementsByClassName('beerFilter')[1].checked === true) {
        console.log('test2');
        for (var i = 0; i < currentInventory.beers.length; i++) {
          if (currentInventory.beers[i].beertype === 'Pale Ale' ) {
            currentInventory.beers[i].display = true;
          }
        }
      }

      // If any beercards have a beertype of Porter, then their display property will be set to true
      if (document.getElementsByClassName('beerFilter')[2].checked === true) {
        for (var i = 0; i < currentInventory.beers.length; i++) {
          if (currentInventory.beers[i].beertype === 'Porter' ) {
            currentInventory.beers[i].display = true;
          }
        }
      }

      // If any beercards have a beertype of Stout, then their display property will be set to true
      if (document.getElementsByClassName('beerFilter')[3].checked === true) {
        for (var i = 0; i < currentInventory.beers.length; i++) {
          if (currentInventory.beers[i].beertype === 'Stout' ) {
            currentInventory.beers[i].display = true;
          }
        }
      }

      // If any beercards have a beertype of Hefeweizen, then their display property will be set to true
      if (document.getElementsByClassName('beerFilter')[4].checked === true) {
        for (var i = 0; i < currentInventory.beers.length; i++) {
          if (currentInventory.beers[i].beertype === 'Hefeweizen' ) {
            currentInventory.beers[i].display = true;
          }
        }
      }

      // If any beercards have a beertype of Domestic, then their display property will be set to true
      if (document.getElementsByClassName('beerFilter')[5].checked === true) {
        for (var i = 0; i < currentInventory.beers.length; i++) {
          if (currentInventory.beers[i].beertype === 'Domestic' ) {
            currentInventory.beers[i].display = true;
          }
        }
      }
    }
    currentInventory.writeCards();
  }
}

document.getElementById('toggleSwitches').addEventListener('click', filterHandler);

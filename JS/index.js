'use strict';

// *** This page is where functions specific to the home page are colled *** //

// Instantiates banner object
var banner = new Banner;

// Instantiates inventory object
var currentInventory = new Inventory();

// Posts banner as the page loads
function postBanner() {
  // grab the annoucement text from local storage and add it to the dom
  var bannerEl = document.getElementById('announcementBar');
  // var displayAnnouncement = JSON.parse(localStorage.getItem('announcement'));
  console.log(banner.bannerText);

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

// Password event handler + listener
var password = new Password();


function passwordPrompt() {
  var response = prompt('Please enter password');
  if (response !== password.password) {
    alert('Try Again');

  } else {
    window.location.href = 'control.html';
  }
}

document.getElementById('link').addEventListener('click', passwordPrompt);


// Navbar Event Handler and Listener
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
'use strict';

// *** This page is where functions specific to the home page are colled *** //

// Instantiates banner object
var banner = new Banner;

// Instantiates inventory object
var currentInventory = new Inventory();

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


<<<<<<< HEAD
// About Us button handler

function aboutButtonHandler(event) {
  
  localStorage.setItem('aboutUs', JSON.stringify(document.getElementById('aboutUS')));
  console.log(localStorage.aboutButton);
      function aboutUsEl() {
        document.getElementById('main').innerHTML = '';
        // creates p tag
        var aboutPara = document.createElement('p');
        // creates a text node
        var aboutNode = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. A arcu cursus vitae congue mauris rhoncus. Cursus sit amet dictum sit amet. Amet risus nullam eget felis eget nunc lobortis mattis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Nunc sed augue lacus viverra vitae congue. Consequat nisl vel pretium lectus quam id leo in vitae. Purus in massa tempor nec. Iaculis eu non diam phasellus vestibulum lorem sed risus. Consectetur lorem donec massa sapien faucibus et.');
        // appened to text node
        aboutPara.appendChild(aboutNode);
        // append to existing elemnt
        var aboutEl = document.getElementById('main');
        aboutEl.appendChild(aboutPara)
        
      }
      
      aboutUsEl();
    }
    
    document.getElementById('aboutUs').addEventListener('click', aboutButtonHandler)
    
    
    // Our Beers button handler
    
    function beersButtonHandler(event) {
      
      localStorage.setItem('ourBeers', JSON.stringify(document.getElementById('ourBeers')));
      console.log(localStorage.beersButton);
    
      function ourBeersEl() {
        document.getElementById('main').innerHTML = '';
        var beerPara = document.createElement('p');
        var beerNode = document.createTextNode('beer');
        beerPara.appendChild(beerNode);
        var beersEl = document.getElementById('main');
        beersEl.appendChild(beerPara);
      }
      ourBeersEl();
    }
    
    document.getElementById('ourBeers').addEventListener('click', beersButtonHandler)
    
    // Locations button handler
    
    function locationsButtonHandler(event) {
      
      localStorage.setItem('locations', JSON.stringify(document.getElementById('locations')));
      console.log(localStorage.locationsButton);
      function ourLocationEl() {
        document.getElementById('main').innerHTML = '';
        var locationPara = document.createElement('iframe');
        var locationNode = document.createTextNode('Our Location');
        locationPara.setAttribute('src', 'https://g.page/CodeFellows-Seattle?share');
        locationPara.appendChild(locationNode);
        var locationEl = document.getElementById('main');
        locationEl.appendChild(locationPara);
      }
      ourLocationEl();
    }

document.getElementById('locations').addEventListener('click', locationsButtonHandler)

// Contact Us button handler

function contactButtonHandler(event) {
  
  localStorage.setItem('contactUs', JSON.stringify(document.getElementById('contactUS')));
  console.log(localStorage.contactButton);

  function contactUsEl() {
    document.getElementById('main').innerHTML = '';
    var contactPara = document.createElement('p');
    var contactNode = document.createTextNode('Phone: (555)-555-5555 Email: welovebeer@gmail.com');
    contactPara.appendChild(contactNode);
    var contactEl = document.getElementById('main');
    contactEl.appendChild(contactPara);
=======
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
>>>>>>> c4ae899de0b7323fd2b7126b0833e77a8d48bcbe
  }
}

document.getElementById('nav').addEventListener('click', navHandler);
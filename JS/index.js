'use strict';

// *** This page is where functions specific to the home page are colled *** //

var banner = new Banner;

var currentInventory = new Inventory();

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

// Password material
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

// nav bar eventlisteners and handler\

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
  }
  contactUsEl();
}

document.getElementById('contactUs').addEventListener('click', contactButtonHandler)




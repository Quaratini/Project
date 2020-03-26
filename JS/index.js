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
        var aboutNode = document.createTextNode('Welcome to Quarantini Hop-Shop. We are a small local PNW brewery located in the heart of Seattle. We brew and carry beers of all backgrounds. We started off brewing in our parents garages. What was originally just a fun off to the side hobby, then turned into a local well known beer brand. We then figured since we\'ve been doing this for so long and had so many request from friends and family, that we\'d go into business.');
        // appened to text node
        aboutPara.appendChild(aboutNode);
        // append to existing elemnt
        var aboutEl = document.getElementById('main');
        aboutEl.appendChild(aboutPara)
        var img = document.createElement('img'); 
            img.src =  
            'pics/cask.jpeg'; 
            document.getElementById('main').appendChild(img); 
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
        var mainEl = document.getElementById('main');
        var beerCard = document.createElement('div');
        beerCard.setAttribute('id', 'beerCardSection');
        // var beerNode = document.createTextNode('beerDisplayPanel');
        mainEl.appendChild(beerCard);
        var toggleEl = document.createElement('div');
        toggleEl.setAttribute('id', 'toggleSwitches');
        beerCard.appendChild(toggleEl);
        var cardEl = document.createElement('div');
        cardEl.setAttribute('id', 'cards');
        beerCard.appendChild(cardEl);
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
        locationPara.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10757.597109467359!2d-122.3517917!3d47.6183694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3d3fd29c55db518!2sCode%20Fellows!5e0!3m2!1sen!2sus!4v1585175602619!5m2!1sen!2sus');
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




'use strict';

// *** This page is where functions specific to the home page are colled *** //

var banner = new Banner;

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
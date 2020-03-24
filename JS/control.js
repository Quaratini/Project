'use strict';

// *** This page is where functions specific to the control page are colled *** //

var banner;

function loadBanner() {
  var bannerText = JSON.parse(localStorage.getItem("announcement"));
  banner = new Banner(bannerText);
}
loadBanner();
banner.textDefault();

function announcementHandler(event) {
  event.preventDefault();
  // console.log("test")
  //    stringify the text to our local storage
  //    update announcement div with the annoucement 
  //    save the annoucement in the text area
  localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
  console.log(localStorage.announcement);
}

document.getElementById('announcementBannerForm').addEventListener('submit', announcementHandler);

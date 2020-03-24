'use strict';

// *** This page is where functions specific to the control page are colled *** //

var banner = new Banner();

banner.textDefault();


// Discretely Defined Event Handler - *** had issues using event handlers in conjunction with the Banner object protoype ***
function announcementHandler(event) {
  event.preventDefault();
  //    stringify the text to our local storage
  //    update announcement div with the annoucement 
  //    save the annoucement in the text area
  localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
  console.log(localStorage.announcement);
}

document.getElementById('announcementBannerForm').addEventListener('submit', announcementHandler);

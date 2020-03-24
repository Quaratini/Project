'use strict'


function postBanner() {
    // grab the annoucement text from local storage and add it to the dom
    var bannerEl = document.getElementById('announcementBar');
    var textDefault = document.getElementById('announcement');
    var displayAnnouncement = JSON.parse(localStorage.getItem('announcement'));
    console.log(displayAnnouncement);

    var announcementEl = document.createElement('h2');
    announcementEl.innerText = displayAnnouncement;
    bannerEl.appendChild(announcementEl);

}
  postBanner();
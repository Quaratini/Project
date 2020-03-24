"use strict";

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

  function postBanner() {
    // grab the annoucement text from local storage and add it to the dom
    var bannerEl = document.getElementById('announcementBar');
    var textDefault = document.getElementById('announcement');
    var displayAnnouncement = JSON.parse(localStorage.getItem('announcement'));
    console.log(displayAnnouncement);
    textDefault.value = displayAnnouncement;

    var announcementEl = document.createElement('h2');
    announcementEl.innerText = displayAnnouncement;
    bannerEl.appendChild(announcementEl);

}
  postBanner();

  function saveAnnouncement() {
    var bannerEl = document.getElementById('announcementBar');
    var textDefault = document.getElementById('announcement');
    var displayAnnouncement = JSON.parse(localStorage.getItem('announcement'));
    console.log(displayAnnouncement);
    textDefault.value = displayAnnouncement;
  }

  saveAnnouncement();
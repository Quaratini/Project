'use strict';

// *** This page is where global objects and their prototypes are defined *** //

var Banner = function(bannerText) {
  // this.bannerEl = document.getElementById('announcementBar');
  // this.textDefault = document.getElementById('announcement');
  // this.displayAnnouncement = JSON.parse(localStorage.getItem('announcement'));
  this.bannerText = bannerText;
};

Banner.prototype.announcementHandler = function(event) {
  //    stringify the text to our local storage
  //    update announcement div with the annoucement 
  //    save the annoucement in the text area
  event.preventDefault();
  localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
  console.log(localStorage.announcement);
};

Banner.prototype.saveAnnouncement = function() {
  // var textDefault = document.getElementById('announcement');
  // var displayAnnouncement = JSON.parse(localStorage.getItem('announcement'));
  // console.log(displayAnnouncement);
  this.textDefault.value = this.displayAnnouncement;
};

Banner.prototype.textDefault = function() {
  document.getElementById('announcement').value = this.bannerText;
};


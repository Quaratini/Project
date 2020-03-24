'use strict';

// *** This page is where global objects and their prototypes are defined *** //

var Banner = function() {
  this.bannerText;
  this.loadBanner();
};

Banner.prototype.loadBanner = function() {
  this.bannerText = JSON.parse(localStorage.getItem('announcement'));
};

Banner.prototype.announcementHandler = function(event) {
  //    stringify the text to our local storage
  //    update announcement div with the annoucement 
  //    save the annoucement in the text area
  event.preventDefault();
  localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
  console.log(localStorage.announcement);
};

Banner.prototype.textDefault = function() {
  document.getElementById('announcement').value = this.bannerText;
};


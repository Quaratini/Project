'use strict'

var Banner = function() {
    this.bannerEl = document.getElementById('announcementBar');
    this.textDefault = document.getElementById('announcement');
    this.displayAnnouncement = JSON.parse(localStorage.getItem('announcement'));
}

Banner.prototype.announcementHandler = function(event) {
    event.preventDefault();
    // console.log("test")
    //    stringify the text to our local storage
    //    update announcement div with the annoucement 
    //    save the annoucement in the text area
    localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
    console.log(localStorage.announcement);
  }

Banner.prototype.saveAnnouncement = function() {
    // var textDefault = document.getElementById('announcement');
    // var displayAnnouncement = JSON.parse(localStorage.getItem('announcement'));
    // console.log(displayAnnouncement);
    
    this.textDefault.value = this.displayAnnouncement;
  }



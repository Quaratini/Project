'use strict';

// *** This page is where functions specific to the control page are colled *** //

var banner = new Banner();
banner.textDefault();

var currentInventory = new Inventory();
currentInventory.loadBeerInventory();
console.log(currentInventory);

renderTable();

// Function that grabs form input from beerInventoryForm and uses its information to create Beercard instances
function createBeercard() {
  var beername = document.getElementById('beerName').value;
  var beertype = document.getElementById('beerTypeInput').value;
  var abv = document.getElementById('abv').value;
  var hopType = document.getElementById('hopType').value;
  var shortDescription = document.getElementById('shortDesc').value;
  var longDescription = document.getElementById('longDesc').value;

  var display = true;
  var sales = false;
  var beercard = new Beercard(beername, beertype, abv, hopType, shortDescription, longDescription, display, sales);
  currentInventory.beers.push(beercard);
}


// Announcement Handler + Listener
function announcementHandler(event) {
  event.preventDefault();
  localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
  console.log(localStorage.announcement);
}

document.getElementById('announcementBannerForm').addEventListener('submit', announcementHandler);

// Password Handler + Listener
function passwordHandler(event) {
  event.preventDefault();
  localStorage.setItem('password', JSON.stringify(document.getElementById('password').value));
  console.log(localStorage.password);
}

document.getElementById('passwordResetForm').addEventListener('submit', passwordHandler);

// Beer Form Handler + Listener
function beerFormHandler(event){
  event.preventDefault();
  createBeercard();
  currentInventory.saveToLocalStorage();
  renderTable();
  // console.log(currentInventory);
}

document.getElementById('beerInventoryForm').addEventListener('submit', beerFormHandler);

// Takes Care of Making the Inventory Table
function renderTable() {
  clearTable();
  showTable();
}

// Erases all current content in the body of the table
function clearTable() {
  document.getElementById('body').innerHTML = '';
}

// Draws Table based on what is in currentInventory on control.js
function showTable() {

  for (var i = 0; i < currentInventory.beers.length; i++) {

    var report = document.getElementById('body');
    var toggleButton = document.createElement('input');
    toggleButton.setAttribute('type', 'checkbox');
    toggleButton.setAttribute('name', i );
    var toggleButton2 = document.createElement('input');
    toggleButton2.setAttribute('type', 'checkbox');
    toggleButton2.setAttribute('name', i);
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Remove Item';
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('name', i);

    var tableRow = document.createElement('tr');
    var nameCell = document.createElement('td');
    var saleCell = document.createElement('td');
    var displayCell = document.createElement('td');
    var deleteCell = document.createElement('td');

    nameCell.textContent = currentInventory.beers[i].beername;
    saleCell.appendChild(toggleButton);
    displayCell.appendChild(toggleButton2);
    deleteCell.appendChild(deleteButton);

    tableRow.appendChild(nameCell);
    tableRow.appendChild(saleCell);
    tableRow.appendChild(displayCell);
    tableRow.appendChild(deleteCell);

    report.appendChild(tableRow);
  }
}

// Handler for removing selected item from Beer Inventory + Listener
function removeItemFromCart(event) {
  if (event.target.type === 'button') {
    currentInventory.removeItem(event.target.name);
    currentInventory.saveToLocalStorage();
    renderTable();
  }
}

document.getElementById('body').addEventListener('click', removeItemFromCart);

// Handler for Toggling Beercard Display
function displayToggle(event) {
  console.log(event);
  // if (event.target.type === checkbox)
};

document.getElementById('body').addEventListener('click', displayToggle);

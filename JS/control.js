'use strict';

// *** This page is where functions specific to the control page are colled *** //

var banner = new Banner();

var currentInventory = new Inventory();
currentInventory.loadBeerInventory();
banner.textDefault();

renderTable();


// Discretely Defined Event Handler - *** had issues using event handlers in conjunction with the Banner object protoype ***
function announcementHandler(event) {
  event.preventDefault();
  localStorage.setItem('announcement', JSON.stringify(document.getElementById('announcement').value));
  console.log(localStorage.announcement);
}

document.getElementById('announcementBannerForm').addEventListener('submit', announcementHandler);

function passwordHandler(event) {
  event.preventDefault();
  localStorage.setItem('password', JSON.stringify(document.getElementById('password').value));
  console.log(localStorage.password);
}

document.getElementById('passwordResetForm').addEventListener('submit', passwordHandler);

function beerFormHandler(event){
  event.preventDefault();
  currentInventory.addInventory();
  currentInventory.saveToLocalStorage();
  currentInventory.loadBeerInventory();
  renderTable();
  console.log(currentInventory);

}

document.getElementById('beerInventoryForm').addEventListener('submit', beerFormHandler);

function renderTable() {
  currentInventory.loadBeerInventory();
  clearTable();
  showTable();
}

function clearTable() {
  document.getElementById('body').innerHTML = '';
}

function showTable() {

  for (var i = 0; i < currentInventory.beers.length; i++) {

    var report = document.getElementById('body');
    var toggleButton = document.createElement('input');
    toggleButton.setAttribute('type', 'checkbox');
    toggleButton.setAttribute('id', ('sale' + i ))
    var toggleButton2 = document.createElement('input');
    toggleButton2.setAttribute('type', 'checkbox');
    toggleButton2.setAttribute('id', ('display' + i))
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Remove Item';
    deleteButton.setAttribute('class', 'removeButton');
    deleteButton.setAttribute('id', ('delete' + i));

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
  console.log(report);
}

function removeItemFromCart(event) {

  currentInventory.removeItem(event.target.id);
  // console.log(event.target.id);
  currentInventory.saveToLocalStorage();
  renderTable();
}

document.getElementById('body').addEventListener('click', removeItemFromCart());

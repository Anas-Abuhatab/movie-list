'use strict';

let imgArr=[
  ' Action,./img/action.png',
  'Adventure,./img/adventure.png',
  'Animation,./img/animation.png',
  'Comedy,./img/comedy.png',
  'Detective,./img/detective.png',
  'Fantasy,./img/fantasy.png',
  'History,./img/history.png',
  'Horror,./img/horror.png',
  'Musical,./img/musical.png',
  'Pirate,./img/pirate.png',
  'Romantic,./img/romantic.png',
  'SCIFI,./img/sci-fi.png',
  'War,./img/war.png',
  'Western,./img/western.png'
];


let form = document.getElementById('form');
let table = document.getElementById('table');

function Move(moviename, moviecategory, issueyear) {
  this.moviename = moviename;
  this.moviecategory = moviecategory;
  this.issueyear = issueyear;
  Move.arr.push(this);
}
Move.arr = [];
let newDataArr = [];


function tableHead() {
  let trhead = document.createElement('tr');
  table.appendChild(trhead);

  let th4 = document.createElement('th');
  trhead.appendChild(th4);
  th4.textContent = ('Dell Row');

  let th1 = document.createElement('th');
  trhead.appendChild(th1);
  th1.textContent = ('movie name');

  let th2 = document.createElement('th');
  trhead.appendChild(th2);
  th2.textContent = ('movie category');

  //   let th5 = document.createElement('th');
  //   trhead.appendChild(th5);
  //   th5.textContent = ('IMG');

  let th3 = document.createElement('th');
  trhead.appendChild(th3);
  th3.textContent = ('issue year');
}

Move.prototype.render = function () {

  let trdata = document.createElement('tr');
  table.appendChild(trdata);

  let tdDel = document.createElement('td');
  trdata.appendChild(tdDel);
  let delButton = document.createElement('button');
  tdDel.appendChild(delButton);
  delButton.setAttribute('onclick', 'delFun(this)');
  delButton.textContent = ('X');
  let tdName = document.createElement('td');
  tdName.textContent = this.moviename;
  trdata.appendChild(tdName);

  let tdCategory = document.createElement('td');
  trdata.appendChild(tdCategory);
  tdCategory.textContent = this.moviecategory;


  //   for (let i = 0; i < imgArr.length; i++) {
  //     if (this.moviecategory === imgArr[i].split(',')[0] ) {
  //       let img =document.createElement('img');
  //       tdCategory.appendChild(img);
  //       img.setAttribute('src' ,'imgArr[i].split(',')[1]');
  //     }

  //   }


  let tdYear = document.createElement('td');
  trdata.appendChild(tdYear);
  tdYear.textContent = this.issueyear;

};
tableHead();
function delFun(r) {
  let i = r.parentNode.parentNode.rowIndex;
  Move.arr.splice(i - 1, 1);
  localStorage.userData = JSON.stringify(Move.arr);
  location.reload();

}

getData();
form.addEventListener('submit', user);
function user(event) {
  event.preventDefault();
  let movienameUser = event.target.moviename.value;
  let moviecategoryUser = event.target.moviecategory.value;
  let issueyearUser = event.target.date.value;

  let userData = new Move(movienameUser, moviecategoryUser, issueyearUser);


  userData.render();

  localStorage.userData = JSON.stringify(Move.arr);

}

function getData() {
  if (localStorage.userData) {
    let data = JSON.parse(localStorage.userData);

    for (let i = 0; i < data.length; i++) {

      newDataArr[i] = new Move(data[i].moviename, data[i].moviecategory, data[i].issueyear);

      newDataArr[i].render();
    }
  }
}

function clearLs() {
  localStorage.removeItem('userData');
  location.reload();
}

'use strict'

let global = document.getElementById('global');
let form = document.getElementById('form');
let dataForm = [];
let heading = ['Student Name', 'Student Grade', 'Course']
Data.arr = []

function Data(name, course, grade){

    this.name = name;
    this.grade = grade;
    this.course = course;
    // this.pass = pass;
    Data.arr.push(this);
};

function getRandomGrade(min, max) {
    return  Math.ceil(Math.random() * (max - min) + min);
}

form.addEventListener('submit',function (event){
    event.preventDefault();
    saveInLS ();

dataForm = [];
let name = event.target.name.value;
dataForm.push(name)
let course = event.target.course.value;

dataForm.push(getRandomGrade(0,100))
dataForm.push(course)
let newIns = new Data (name, getRandomGrade(0,100), course)

Data.prototype.render();
retFromLS ();
});

let table = document.createElement('table')
global.appendChild(table)

function firstRow(){
    let fRow = document.createElement('tr')
    table.appendChild(fRow);

    for(let i =0; i < heading.length; i++){
        let th = document.createElement('th')
    fRow.appendChild(th)
    th.textContent = heading[i]
    }

}


firstRow();

Data.prototype.render = function (){
    let rows = document.createElement('tr');
    table.appendChild(rows);

    for( let i = 0; i < heading.length; i++){
        let td = document.createElement('td');
    table.appendChild(td);
    td.textContent = dataForm[i];
    }
}

function saveInLS (){
    let saved = JSON.stringify(Data.arr)
    console.log(saved);
localStorage.setItem('Data', saved);

}

function retFromLS (){
let retrieved = localStorage.getItem('Data')
let converted = JSON.parse(retrieved);
console.log(converted);
}
for( let i = 0; i < heading.length; i++){
    let reIni = new Data (converted[i].name, converted[i].grade, converted[i].course)
}


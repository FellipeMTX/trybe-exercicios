function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // 🚀 Exercício 1:

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const elementUl = document.getElementById('days');

 function createNumbersOfCalendar(){
   
    for (let index = 0; index < dezDaysList.length; index += 1) {
    let elementLi = document.createElement('li');
    
    if(dezDaysList[index] === 25){
      elementLi.className = 'day holiday friday';
      elementLi.innerHTML = dezDaysList[index];
      elementUl.appendChild(elementLi);
    }else if(dezDaysList[index] === 24 || dezDaysList[index] === 31){
      elementLi.className = 'day holiday';
      elementLi.innerHTML = dezDaysList[index];
      elementUl.appendChild(elementLi);
    }else if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18){
      elementLi.className = 'day friday';
      elementLi.innerHTML = dezDaysList[index];
      elementUl.appendChild(elementLi);
    }else{ 
    elementLi.className = 'day';
    elementLi.innerHTML = dezDaysList[index];
    elementUl.appendChild(elementLi);
    }
  }
}
createNumbersOfCalendar();

// 🚀 Exercício 2:

function createHolidayButton (buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton); 
};
createHolidayButton('Feriados');

// 🚀 Exercício 3:

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

//🚀 Exercício 4:

function createFridayButton (buttonName){
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.id = newButtonID;
  newButton.innerHTML = buttonName;
  buttonContainer.appendChild(newButton);
};
createFridayButton('Sexta-feira');

// 🚀 Exercício 5:

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

// 🚀 Exercício 6:

function dayMouseOver(){
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut(){
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';

  })
};

dayMouseOut();
dayMouseOver();

// 🚀 Exercício 7:

function addMyTasks(task){
  let tasksContainer = document.getElementsByClassName('my-tasks')[0];
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

addMyTasks('Cozinhar');

// 🚀 Exercício 8:

function createSubtitle(color){
  let getMytasksClass = document.querySelector('.my-tasks')
  let createDiv = document.createElement('div');

  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;
  getMytasksClass.appendChild(createDiv);

};

createSubtitle('green');
  
// 🚀 Exercício 9:

function createSelectedTask(){

let myDivs = document.querySelector('.task');

myDivs.addEventListener('click', function(event) {
  if(event.target.className !== "task selected" ){
    event.target.className = 'task selected';
  } else {
    event.target.className = 'task';
  }
})
};

createSelectedTask();

// 🚀 Exercício 10:

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();




/* eslint-disable no-undef */
'use strict';

function correctAnswer(){
  //changes the state of the message to correct and flashes the ul background to green
  correct++;
  console.log('Thats right!');
  //feedback class that floats set to visible for a bit
}

function incorrectAnswer(){
  //changes the state of the message to incorrect and flashes the ul background to Red
  //feedback class that floats set to visible for a bit
}

function gradeAnswer(item){
//return the choice key based on the answer chosen
  let answer = $(item)
    .closest('li')
    .data('item-id');

  answer = Number(answer);

  return STATE.answers[index][answer].choice;

}

function updateScore(input){
  if(input==='start'){
    correct = 0;
    index = 1;
    STATE.score = 0;
    return ;
  } else if(input === true){
    correctAnswer();
  } else if(input === false){
    incorrectAnswer();
  }

  console.log(`${correct} correct answers out of ${index} questions`);

  if(index === 0){
    STATE.score = 0;
  }else STATE.score = parseInt((correct/index)*100);
  index++;
}

function handleAnswer(){
  $('.js-answer-list').on('click', '.answer', function(event){
    event.preventDefault();
    console.log('`HandleAnswer` ran');
    
    var choice = gradeAnswer(event.currentTarget);
    console.log(choice);
    updateScore(choice);
    renderState();
    //change the CSS of the button to flash green and then change the message to big green CORRECT
  });
}

function updateImage(image){
  $('.js-current-image').attr(image);
}

function generateAnswersHTML(choices){
  let choiceButtons = '';
  for(let i=0; i<choices.length; i++){
    choiceButtons = choiceButtons + `<li class="choice" data-item-id="${i}"><button class="answer">${choices[i].a}</button></li>`;
  }
  return choiceButtons;
}

function updateAnswers(index){
  console.log(`These are the answers for quetsion number ${index}`);
  const newAnswers = generateAnswersHTML(STATE.answers[index]);
  $('.js-answer-list').empty();
  $('.js-answer-list').append(newAnswers);

  // $('ul.js-answer-list').html(STATE.answers[index][0].a);
  // $('ul.js-answer-list').html(STATE.answers[index][1].a);
  // $('ul.js-answer-list').html(STATE.answers[index][2].a);
  // $('ul.js-answer-list').html(STATE.answers[index][3].a);  
}

function updateMessage(index){
  if(index <= 10){
    $('.js-message').html(STATE.message[index]);
  } else {
    STATE.message[11]=`You scored a ${STATE.score} on the quiz. Restart?`;
    $('.js-message').html(STATE.message[index]);
  }
}

function renderState(){
  $('.js-score').html(STATE.score);
  updateImage(STATE.images[index]);
  updateMessage(index);
  updateAnswers(index);
}

$(function(){
  renderState();
  handleAnswer();

});
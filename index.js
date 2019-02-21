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
  }else STATE.score = (correct/index)*100;
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



function updateAnswers(index){
  console.log(`These are the answers for quetsion number ${index}`);
  $('ul.js-answer-list .js-answer-A').html(STATE.answers[index][0].a);
  $('ul.js-answer-list .js-answer-B').html(STATE.answers[index][1].a);
  $('ul.js-answer-list .js-answer-C').html(STATE.answers[index][2].a);
  $('ul.js-answer-list .js-answer-D').html(STATE.answers[index][3].a);  
}

function renderState(){
  $('.js-score').html(STATE.score);
  $('.js-message').html(STATE.message[index]);
  updateAnswers(index);
}

$(function(){
  renderState();
  handleAnswer();

});
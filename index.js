/* eslint-disable no-undef */
'use strict';

function correctAnswer(){
  //changes the state of the message to correct and flashes the ul background to green
  STATE.correct = STATE.correct+1;
  console.log('Thats right!');
  //feedback class that floats set to visible for a bit
  $('.js-feedback').removeClass('success failure');
  $('.question').hide(500);
  $('.js-feedback').show().addClass('success').html('CORRECT').delay(500).hide(500);
  $('.question').show(500);    
}

function incorrectAnswer(){
  //changes the state of the message to incorrect and flashes the ul background to Red
  //feedback class that floats set to visible for a bit
  console.log('thats wrong');
  $('.js-feedback').removeClass('success failure');
  $('.question').hide(500);
  $('.js-feedback').show().addClass('failure').html('INCORRECT').delay(500).hide(500);
  $('.question').show(500);
  //$('.js-feedback').removeClass('failure');
}

function gradeAnswer(item){
//return the choice key based on the answer chosen
  let answer = $(item)
    .closest('li')
    .data('item-id');

  answer = Number(answer);
  console.log(answer);
  return STATE.answers[STATE.Qnum][answer].choice;
}

function restart(){
  STATE.correct = 0;
  STATE.Qnum = 1;
  STATE.score = 0;
  $('.js-message').removeClass('failure success');
}

function updateScore(input){
  if(input==='start'){
    restart();
    return ;
  } else if(input === true){
    correctAnswer();
  } else if(input === false){
    incorrectAnswer();
  }

  console.log(`${STATE.correct} correct answers out of ${index} questions`);

  if(STATE.Qnum === 0){
    STATE.score = 0;
  }else STATE.score = parseInt((STATE.correct/STATE.Qnum)*100);
  STATE.Qnum = STATE.Qnum+1;
}

function handleAnswer(){
  $('.question').on('click', '.answer', function(event){
    event.preventDefault();
    console.log('`HandleAnswer` ran');
    
    var choice = gradeAnswer(event.currentTarget);
    console.log(choice);
    updateScore(choice);
    renderState();
    //change the CSS of the button to flash green and then change the message to big green CORRECT
  });
}

function finalImage(){
  if(STATE.score<70){
    $('.js-current-image').attr(STATE.images[11]);
  } else{
    $('.js-current-image').attr(STATE.images[12]);
  }
}

function updateImage(image){
  if(STATE.Qnum <= 10){
    $('.js-current-image').attr(image);
  } else {
    finalImage();
  }
}

function generateAnswersHTML(choices){
  let choiceButtons = '';
  for(let i=0; i<choices.length; i++){
    choiceButtons = choiceButtons + `<li class="choice" data-item-id="${i}">
    <button aria-labelledby="answer${i}" class="answer">${choices[i].a}</button></li>`;
  }
  return choiceButtons;
}



function updateAnswers(Qnum){
  console.log(`These are the answers for quetsion number ${Qnum}`);
  const newAnswers = generateAnswersHTML(STATE.answers[Qnum]);
  $('.js-answer-list').empty();
  $('.js-answer-list').append(newAnswers);  
}

function finalResults(){
  STATE.message[11]=`You scored a ${STATE.score} on the quiz. Restart?`;
  $('.js-message').html(STATE.message[STATE.Qnum]);
  if(STATE.score<70){
    $('.js-message').addClass('failure');
  } else{
    $('.js-message').addClass('success');
  }
}

function updateMessage(Qnum){
  if(Qnum <= 10){
    $('.js-message').html(STATE.message[Qnum]);
  } else {
    finalResults();
  }
}

function renderState(){
  $('.js-score').html(STATE.score);
  updateImage(STATE.images[STATE.Qnum]);
  updateMessage(STATE.Qnum);
  updateAnswers(STATE.Qnum);
}

$(function(){
  renderState();
  handleAnswer();

});
'use strict';
let correct = 0;

let index = 0;




const STATE = {
  score: 0,
  message: [
    'Welcome to the Star trek quiz! Are you ready for some gatekeeping?',
    'Question 1: What do the native people of the planet orbited by the space station \'Deep Space 9\' refer to the captian of that space station as?',
    'Question 2: What is the color uniform worn by medical/science officers? (post \'The Original Series\'',
    'Question 3: (freebie)Which is the worst star trek series?',
    'Question 4: Which postings did Miles O\'Brien serve on?',
    'Question 5: Which crew members use the powers given to them by the being Q?',
    'Question 6: The all powerful being Q appears in how many star trek series?',
    'Question 7: In the parallel universe first seen in The Orginal Series, what is the name of the Star Fleet equivalent there?',
    'Question 8: Which Star Trek captain has an artificial heart?',
    'Question 9: Which character was genetically enhanced?',
    'Question 10: What was the warrior race primarily used by The Dominion?',
    `You scored a ${this.score} on the quiz. Restart?`
  ],
  answers: [
    [
      {a: 'I\'m ready', choice: 'start'},
      {a: 'Let\'s go', choice: 'start'},
      {a: 'Fake nerd coming thru', choice: 'start'},
      {a: 'What do I click?', choice: 'start'}
    ],
    [
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Red', choice: false},
      {a: 'Blue', choice: true},
      {a: 'Gold', choice: false},
      {a: 'Green', choice: false}
    ],
    [
      {a: 'Star Trek: Voyager', choice: true},
      {a: 'Star Trek: Voyager', choice: true},
      {a: 'Star Trek: Voyager', choice: true},
      {a: 'Star Trek: Voyager', choice: true}
    ],
    [
      {a: 'Enterprise-C', choice: false},
      {a: 'Enterprise-D', choice: true},
      {a: 'USS Deviant', choice: false},
      {a: 'USS Roundabout', choice: false}
    ],
    [
      {a: 'Captian Jean-Luc Picard', choice: false},
      {a: '1st officer William Riker', choice: true},
      {a: 'Wesley Crusher', choice: true},
      {a: 'Ship counselor Deanna Troi', choice: false}
    ],
    [
      {a: '1', choice: false},
      {a: '2', choice: false},
      {a: '3', choice: true},
      {a: '4', choice: false}
    ],
    [
      {a: 'Space Force', choice: false},
      {a: 'The Dominion', choice: false},
      {a: 'Terren Empire', choice: true},
      {a: 'Legion of the Chosen', choice: false}
    ],
    [
      {a: 'Kathryn Janeway', choice: false},
      {a: 'James T. Kirk', choice: false},
      {a: 'Jean-Luc Picard', choice: true},
      {a: 'Benjamin Sisko', choice: false}
    ],
    [
      {a: 'Julian Bashir', choice: true},
      {a: 'Odo', choice: false},
      {a: 'Data', choice: false},
      {a: 'Spock', choice: false}
    ],
    [
      {a: 'Klingons', choice: false},
      {a: 'Jem\'Hadar', choice: true},
      {a: 'Cardassians', choice: false},
      {a: 'Vorta', choice: false}
    ],
    [
      {a: 'Restart quiz', choice: 'start'}
    ]
  ],
  images: [
    {src: 'images/st-logo.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q1.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q2.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q3.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q4.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q5.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q6.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q7.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q8.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q9.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/q10.jpg', alt: 'Star Trek quiz start'},
    {src: 'images/result.jpg', alt: 'Star Trek quiz start'},
  ]
};
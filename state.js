'use strict';
let correct = 0;

let index = 0;




const STATE = {
  score: 155,
  message: [
    'Welcome to the Star trek quiz! Are you ready for some gatekeeping?',
    'Question 1: What do the native people of the planet orbited by the space station \'Deep Space 9\' refer to the captian of that space station as?',
    'Question 2:',
    'Question 3:',
    'Question 4:',
    'Question 5:',
    'Question 6:',
    'Question 7:',
    'Question 8:',
    'Question 9:',
    'Question 10:',
    'Restart?'
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
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Overlord', choice: false},
      {a: 'Ambassador', choice: false},
      {a: 'Mesiah', choice: false},
      {a: 'Emissary', choice: true}
    ],
    [
      {a: 'Restart quiz', choice: 'start'},
      {a: 'Restart quiz', choice: 'start'},
      {a: 'Restart quiz', choice: 'start'},
      {a: 'Restart quiz', choice: 'start'},
    ]
  ]
};
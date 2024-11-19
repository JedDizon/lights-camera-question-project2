let actadvQs = [
   {
    question: 'In Indiana Jones and the Last Crusade, who plays Indiana Jones’ father?',
    correctans: 'Sean Connery',
    incorrectans: ['Michael Caine', 'Harrison Ford', 'Anthony Hopkins'],
  },
   {
    question: 'What is the name of the island where Jurassic Park is located?',
    correctans: 'Isla Nublar',
    incorrectans: ['Isla Muerta', 'Isla Sorna', 'Skull Island'],
  },
  {
   question: 'Which 1980s action movie popularized the catchphrase, "I’ll be back"?',
   correctans: 'The Terminator',
   incorrectans: ['Die Hard', 'Predator', 'Total Recall'],
 },
 {
  question: 'In the Pirates of the Caribbean series, what is the name of Captain Jack Sparrow’s ship?',
  correctans: 'The Black Pearl',
  incorrectans: ['The Queen Anne’s Revenge', 'The Jolly Roger', 'The Flying Dutchman'],
},
{
 question: 'Who directed Mad Max: Fury Road (2015)?',
 correctans: 'George Miller',
 incorrectans: ['Ridley Scott', 'James Cameron', 'Christopher Nolan'],
},
{
 question: 'In The Matrix, which pill does Neo take to enter the real world?',
 correctans: 'Red',
 incorrectans: ['Blue', 'Green', 'Yellow'],
},
{
 question: 'Which actor plays John Wick in the John Wick series?',
 correctans: 'Keanu Reeves',
 incorrectans: ['Tom Cruise', 'Brad Pitt', 'Liam Neeson'],
},
{
 question: 'In Raiders of the Lost Ark, what ancient artifact is Indiana Jones trying to recover?',
 correctans: 'The Ark of the Covenant',
 incorrectans: ['The Holy Grail', 'The Spear of Destiny', 'The Philosopher\'s Stone'],
},
{
 question: 'Who is the main villain in Die Hard?',
 correctans: 'Hans Gruber',
 incorrectans: ['Hans Zimmer', 'Hugo Stiglitz', 'Anton Chigurh'],
},
{
 question: 'What is the name of the city where Black Panther takes place?',
 correctans: 'Wakanda',
 incorrectans: ['Asgard', 'Sokovia', 'Atlantis'],
},
{
 question: 'In Inception, what is the name of the device used to share dreams?',
 correctans: 'PASIV',
 incorrectans: ['Tether', 'Nexus', 'Proxy'],
},
{
 question: 'In The Lord of the Rings trilogy, who is the rightful king of Gondor?',
 correctans: 'Aragorn',
 incorrectans: ['Frodo', 'Boromir', 'Legolas'],
},
{
 question: 'In Mission: Impossible (1996), what does "IMF" stand for?',
 correctans: 'Impossible Missions Force',
 incorrectans: ['International Military Force', 'Intel Management Force', 'Internal Mission Force'],
},
{
 question: 'Who is the villain in The Dark Knight?',
 correctans: 'The Joker',
 incorrectans: ['Ra\'s al Ghul', 'Bane', 'The Penguin'],
},
{
 question: 'What famous director is known for his “one-shot” fight scenes in movies like Oldboy and Atomic Blonde?',
 correctans: 'Park Chan-wook',
 incorrectans: ['Quentin Tarantino', 'Christopher Nolan', 'Chad Stahelski'],
},
];

let questionsForQuiz = [];
for (let i = 0; i < actadvQs.length; i++) {
   questionsForQuiz.push(actadvQs[i].question);
}

/*
let incorrectansForQuiz = [];
for (let i = 0; i < actadvQs.length; i++) {
    let incorrectansarray = [];
    for (let j = 0; j < actadvQs[i].incorrectans.length; j++) {
        incorrectansarray.push(actadvQs[i].incorrectans[j]);
    }
    incorrectansForQuiz.push(incorrectansarray);
}*/

let incorrectansForQuiz = [];
for (let i = 0; i < actadvQs.length; i++) {
    incorrectansForQuiz.push(actadvQs[i].incorrectans);
}

let correctansForQuiz = [];
for (let i = 0; i < actadvQs.length; i++) {
    correctansForQuiz.push(actadvQs[i].correctans);
}
const actadvQs = [
   {
    question: 'In Indiana Jones and the Last Crusade, who plays Indiana Jones’ father?',
    answers: [
      { text: 'Sean Connery', correct: true },
      { text: 'Michael Caine', correct: false },
      { text: 'Harrison Ford', correct: false },
      { text: 'Anthony Hopkins', correct: false }
   ]
  }, 
  /*
  {
    question: 'What is the name of the island where Jurassic Park is located?',
    answers: [
        { text: 'Isla Nublar', correct: true },
        { text: 'Isla Muerta', correct: false },
        { text: 'Isla Sorna', correct: false },
        { text: 'Skull Island', correct: false }
    ]
},
{
    question: 'Which 1980s action movie popularized the catchphrase, "I’ll be back"?',
    answers: [
        { text: 'The Terminator', correct: true },
        { text: 'Die Hard', correct: false },
        { text: 'Predator', correct: false },
        { text: 'Total Recall', correct: false }
    ]
},
{
    question: 'In the Pirates of the Caribbean series, what is the name of Captain Jack Sparrow’s ship?',
    answers: [
        { text: 'The Black Pearl', correct: true },
        { text: 'The Queen Anne’s Revenge', correct: false },
        { text: 'The Jolly Roger', correct: false },
        { text: 'The Flying Dutchman', correct: false }
    ]
},
{
    question: 'Who directed Mad Max: Fury Road (2015)?',
    answers: [
        { text: 'George Miller', correct: true },
        { text: 'Ridley Scott', correct: false },
        { text: 'James Cameron', correct: false },
        { text: 'Christopher Nolan', correct: false }
    ]
},
{
    question: 'In The Matrix, which pill does Neo take to enter the real world?',
    answers: [
        { text: 'Red', correct: true },
        { text: 'Blue', correct: false },
        { text: 'Green', correct: false },
        { text: 'Yellow', correct: false }
    ]
},
{
    question: 'Which actor plays John Wick in the John Wick series?',
    answers: [
        { text: 'Keanu Reeves', correct: true },
        { text: 'Tom Cruise', correct: false },
        { text: 'Brad Pitt', correct: false },
        { text: 'Liam Neeson', correct: false }
    ]
},
{
    question: 'In Raiders of the Lost Ark, what ancient artifact is Indiana Jones trying to recover?',
    answers: [
        { text: 'The Ark of the Covenant', correct: true },
        { text: 'The Holy Grail', correct: false },
        { text: 'The Spear of Destiny', correct: false },
        { text: 'The Philosopher\'s Stone', correct: false }
    ]
},
{
    question: 'Who is the main villain in Die Hard?',
    answers: [
        { text: 'Hans Gruber', correct: true },
        { text: 'Hans Zimmer', correct: false },
        { text: 'Hugo Stiglitz', correct: false },
        { text: 'Anton Chigurh', correct: false }
    ]
},
{
    question: 'What is the name of the city where Black Panther takes place?',
    answers: [
        { text: 'Wakanda', correct: true },
        { text: 'Asgard', correct: false },
        { text: 'Sokovia', correct: false },
        { text: 'Atlantis', correct: false }
    ]
},
{
    question: 'In Inception, what is the name of the device used to share dreams?',
    answers: [
        { text: 'PASIV', correct: true },
        { text: 'Tether', correct: false },
        { text: 'Nexus', correct: false },
        { text: 'Proxy', correct: false }
    ]
},
{
    question: 'In The Lord of the Rings trilogy, who is the rightful king of Gondor?',
    answers: [
        { text: 'Aragorn', correct: true },
        { text: 'Frodo', correct: false },
        { text: 'Boromir', correct: false },
        { text: 'Legolas', correct: false }
    ]
},
{
    question: 'In Mission: Impossible (1996), what does "IMF" stand for?',
    answers: [
        { text: 'Impossible Missions Force', correct: true },
        { text: 'International Military Force', correct: false },
        { text: 'Intel Management Force', correct: false },
        { text: 'Internal Mission Force', correct: false }
    ]
},
{
    question: 'Who is the villain in The Dark Knight?',
    answers: [
        { text: 'The Joker', correct: true },
        { text: 'Ra\'s al Ghul', correct: false },
        { text: 'Bane', correct: false },
        { text: 'The Penguin', correct: false }
    ]
},
{
    question: 'What famous director is known for his “one-shot” fight scenes in movies like Oldboy and Atomic Blonde?',
    answers: [
        { text: 'Park Chan-wook', correct: true },
        { text: 'Quentin Tarantino', correct: false },
        { text: 'Christopher Nolan', correct: false },
        { text: 'Chad Stahelski', correct: false }
    ]
}
    */
];

const aniQs = [
  {
    question: 'In The Lion King, what is the name of Simba’s evil uncle?',
    answers: [
        { text: 'Scar', correct: true },
        { text: 'Mufasa', correct: false },
        { text: 'Rafiki', correct: false },
        { text: 'Timon', correct: false }
    ]
},
{
    question: 'Who voices the character of Woody in the Toy Story movies?',
    answers: [
        { text: 'Tim Allen', correct: false },
        { text: 'Tom Hanks', correct: true },
        { text: 'Robin Williams', correct: false },
        { text: 'Chris Pratt', correct: false }
    ]
},
{
    question: 'In Frozen, what is the name of the snowman who loves summer?',
    answers: [
        { text: 'Sven', correct: false },
        { text: 'Olaf', correct: true },
        { text: 'Hans', correct: false },
        { text: 'Kristoff', correct: false }
    ]
},
{
    question: 'What kind of fish is Nemo in Finding Nemo?',
    answers: [
        { text: 'Goldfish', correct: false },
        { text: 'Betta fish', correct: false },
        { text: 'Clownfish', correct: true },
        { text: 'Tuna', correct: false }
    ]
},
{
    question: 'Who is the main villain in The Incredibles?',
    answers: [
        { text: 'Bomb Voyage', correct: false },
        { text: 'Syndrome', correct: true },
        { text: 'Frozone', correct: false },
        { text: 'Mirage', correct: false }
    ]
},
{
    question: 'In Shrek, what kind of creature is Donkey’s love interest, Dragon?',
    answers: [
        { text: 'Unicorn', correct: false },
        { text: 'Phoenix', correct: false },
        { text: 'Dragon', correct: true },
        { text: 'Gryphon', correct: false }
    ]
},
{
    question: 'In Despicable Me, what is the name of Gru’s youngest adopted daughter?',
    answers: [
        { text: 'Edith', correct: false },
        { text: 'Agnes', correct: true },
        { text: 'Margo', correct: false },
        { text: 'Lucy', correct: false }
    ]
},
{
    question: 'In Inside Out, which emotion is voiced by Amy Poehler?',
    answers: [
        { text: 'Sadness', correct: false },
        { text: 'Joy', correct: true },
        { text: 'Fear', correct: false },
        { text: 'Anger', correct: false }
    ]
},
{
    question: 'What kind of animal is Po, the main character in Kung Fu Panda?',
    answers: [
        { text: 'Tiger', correct: false },
        { text: 'Monkey', correct: false },
        { text: 'Panda', correct: true },
        { text: 'Tortoise', correct: false }
    ]
},
{
    question: 'In Coco, what does Miguel dream of becoming?',
    answers: [
        { text: 'A chef', correct: false },
        { text: 'A singer', correct: true },
        { text: 'A mariachi', correct: false },
        { text: 'A shoemaker', correct: false }
    ]
},
{
    question: 'Who provides the voice for Maui in Disney’s Moana?',
    answers: [
        { text: 'Chris Hemsworth', correct: false },
        { text: 'Dwayne Johnson', correct: true },
        { text: 'Vin Diesel', correct: false },
        { text: 'Jason Momoa', correct: false }
    ]
},
{
    question: 'In Big Hero 6, what is the name of the inflatable healthcare robot?',
    answers: [
        { text: 'Hiro', correct: false },
        { text: 'Baymax', correct: true },
        { text: 'Tadashi', correct: false },
        { text: 'Wasabi', correct: false }
    ]
},
{
    question: 'What animated movie features the characters Hiccup and Toothless?',
    answers: [
        { text: 'Dragon Tales', correct: false },
        { text: 'How to Train Your Dragon', correct: true },
        { text: 'Brave', correct: false },
        { text: 'The Croods', correct: false }
    ]
},
{
    question: 'In Zootopia, what is Judy Hopps\' job?',
    answers: [
        { text: 'Detective', correct: false },
        { text: 'Farmer', correct: false },
        { text: 'Journalist', correct: false },
        { text: 'Police Officer', correct: true }
    ]
},
{
    question: 'In Ratatouille, what is Remy’s dream profession?',
    answers: [
        { text: 'Baker', correct: false },
        { text: 'Chef', correct: true },
        { text: 'Artist', correct: false },
        { text: 'Butcher', correct: false }
    ]
}
];

const claQs = [
  {
    question: 'In Casablanca, what song does Sam play that holds special meaning for Rick and Ilsa?',
    answers: [
        { text: 'La Vie en Rose', correct: false },
        { text: 'As Time Goes By', correct: true },
        { text: 'Moon River', correct: false },
        { text: 'Over the Rainbow', correct: false }
    ]
},
{
    question: 'Who starred as the lead character, Scarlett O’Hara, in Gone with the Wind?',
    answers: [
        { text: 'Katharine Hepburn', correct: false },
        { text: 'Bette Davis', correct: false },
        { text: 'Audrey Hepburn', correct: false },
        { text: 'Vivien Leigh', correct: true }
    ]
},
{
    question: 'In Singin\' in the Rain, who performs the iconic "Singin\' in the Rain" sequence?',
    answers: [
        { text: 'Fred Astaire', correct: false },
        { text: 'Gene Kelly', correct: true },
        { text: 'Bing Crosby', correct: false },
        { text: 'Donald O\'Connor', correct: false }
    ]
},
{
    question: 'In Psycho (1960), who is the owner of the Bates Motel?',
    answers: [
        { text: 'Norman Bates', correct: true },
        { text: 'Sam Loomis', correct: false },
        { text: 'Arbogast', correct: false },
        { text: 'Lila Crane', correct: false }
    ]
},
{
    question: 'What is the name of the character played by Marlon Brando in A Streetcar Named Desire?',
    answers: [
        { text: 'Terry Malloy', correct: false },
        { text: 'Don Vito Corleone', correct: false },
        { text: 'Stanley Kowalski', correct: true },
        { text: 'Fredo Corleone', correct: false }
    ]
},
{
    question: 'Which movie features the line, "Frankly, my dear, I don’t give a damn"?',
    answers: [
        { text: 'Gone with the Wind', correct: true },
        { text: 'Citizen Kane', correct: false },
        { text: 'The Maltese Falcon', correct: false },
        { text: 'Rebecca', correct: false }
    ]
},
{
    question: 'In Some Like It Hot, what instrument does Marilyn Monroe’s character, Sugar Kane, play?',
    answers: [
        { text: 'Saxophone', correct: false },
        { text: 'Clarinet', correct: false },
        { text: 'Piano', correct: false },
        { text: 'Ukulele', correct: true }
    ]
},
{
    question: 'Who played the titular role in Lawrence of Arabia?',
    answers: [
        { text: 'Richard Burton', correct: false },
        { text: 'Charlton Heston', correct: false },
        { text: 'Peter O\'Toole', correct: true },
        { text: 'Gregory Peck', correct: false }
    ]
},
{
    question: 'Which classic film is set during the Russian Revolution and stars Omar Sharif as a doctor and poet?',
    answers: [
        { text: 'Doctor Zhivago', correct: true },
        { text: 'War and Peace', correct: false },
        { text: 'The Ten Commandments', correct: false },
        { text: 'Ben-Hur', correct: false }
    ]
},
{
    question: 'Who directed the classic film Vertigo?',
    answers: [
        { text: 'Orson Welles', correct: false },
        { text: 'Alfred Hitchcock', correct: true },
        { text: 'Billy Wilder', correct: false },
        { text: 'John Ford', correct: false }
    ]
},
{
    question: 'In The Sound of Music, what song do the children sing to say goodnight at the party?',
    answers: [
        { text: 'Do-Re-Mi', correct: false },
        { text: 'My Favorite Things', correct: false },
        { text: 'So Long, Farewell', correct: true },
        { text: 'Edelweiss', correct: false }
    ]
},
{
    question: 'Which movie is famously known for the line, "Here\'s looking at you, kid"?',
    answers: [
        { text: 'Roman Holiday', correct: false },
        { text: 'It Happened One Night', correct: false },
        { text: 'Casablanca', correct: true },
        { text: 'The African Queen', correct: false }
    ]
},
{
    question: 'In Rear Window, what does James Stewart\'s character, L.B. Jefferies, do for a living?',
    answers: [
        { text: 'Architect', correct: false },
        { text: 'Journalist', correct: false },
        { text: 'Photographer', correct: true },
        { text: 'Detective', correct: false }
    ]
},
{
    question: 'Who played Holly Golightly in Breakfast at Tiffany’s?',
    answers: [
        { text: 'Grace Kelly', correct: false },
        { text: 'Marilyn Monroe', correct: false },
        { text: 'Audrey Hepburn', correct: true },
        { text: 'Elizabeth Taylor', correct: false }
    ]
},
{
    question: 'Which classic film ends with the line, "After all, tomorrow is another day"?',
    answers: [
        { text: 'Rebecca', correct: false },
        { text: 'Gone with the Wind', correct: true },
        { text: 'Roman Holiday', correct: false },
        { text: 'Sunset Boulevard', correct: false }
    ]
}
];

const comQs = [
  {
    question: 'In Dumb and Dumber, what are the names of the two main characters played by Jim Carrey and Jeff Daniels?',
    answers: [
        { text: 'Bill and Ted', correct: false },
        { text: 'Harry and Lloyd', correct: true },
        { text: 'Wayne and Garth', correct: false },
        { text: 'Tom and Jerry', correct: false }
    ]
},
{
    question: 'In Anchorman: The Legend of Ron Burgundy, what city is Ron Burgundy a news anchor in?',
    answers: [
        { text: 'San Diego', correct: true },
        { text: 'Los Angeles', correct: false },
        { text: 'San Francisco', correct: false },
        { text: 'Miami', correct: false }
    ]
},
{
    question: 'Which actor plays Mrs. Doubtfire in the 1993 film?',
    answers: [
        { text: 'Steve Martin', correct: false },
        { text: 'Eddie Murphy', correct: false },
        { text: 'Robin Williams', correct: true },
        { text: 'Bill Murray', correct: false }
    ]
},
{
    question: 'In Ferris Bueller\'s Day Off, what kind of car do Ferris and his friends "borrow" for the day?',
    answers: [
        { text: 'Lamborghini', correct: false },
        { text: 'Porsche', correct: false },
        { text: 'Ferrari', correct: true },
        { text: 'Aston Martin', correct: false }
    ]
},
{
    question: 'Who stars as Napoleon in the quirky comedy Napoleon Dynamite?',
    answers: [
        { text: 'Michael Cera', correct: false },
        { text: 'Jon Heder', correct: true },
        { text: 'Jesse Eisenberg', correct: false },
        { text: 'Jonah Hill', correct: false }
    ]
},
{
    question: 'In The Hangover, which actor\'s character loses a tooth during their wild night in Las Vegas?',
    answers: [
        { text: 'Zach Galifianakis', correct: false },
        { text: 'Ed Helms', correct: true },
        { text: 'Bradley Cooper', correct: false },
        { text: 'Ken Jeong', correct: false }
    ]
},
{
    question: 'In Mean Girls, what color do the "Plastics" wear on Wednesdays?',
    answers: [
        { text: 'Pink', correct: true },
        { text: 'Blue', correct: false },
        { text: 'Red', correct: false },
        { text: 'Purple', correct: false }
    ]
},
{
    question: 'Who plays Ace Ventura, the eccentric pet detective?',
    answers: [
        { text: 'Adam Sandler', correct: false },
        { text: 'Jim Carrey', correct: true },
        { text: 'Will Ferrell', correct: false },
        { text: 'Mike Myers', correct: false }
    ]
},
{
    question: 'In The Mask, what color suit does Stanley Ipkiss wear when he becomes the Mask?',
    answers: [
        { text: 'Blue', correct: false },
        { text: 'Green', correct: false },
        { text: 'Yellow', correct: true },
        { text: 'Red', correct: false }
    ]
},
{
    question: 'In Bridesmaids, what type of establishment do the bridesmaids visit that leads to a disastrous food poisoning incident?',
    answers: [
        { text: 'Brazilian steakhouse', correct: true },
        { text: 'Mexican restaurant', correct: false },
        { text: 'Italian restaurant', correct: false },
        { text: 'French bakery', correct: false }
    ]
},
{
    question: 'In Superbad, what fake name does McLovin choose for his ID?',
    answers: [
        { text: 'Mike', correct: false },
        { text: 'McGregor', correct: false },
        { text: 'Malcolm', correct: false },
        { text: 'McLovin', correct: true }
    ]
},
{
    question: 'What kind of business do the main characters start in Ghostbusters?',
    answers: [
        { text: 'Private detective agency', correct: false },
        { text: 'Exterminator service', correct: false },
        { text: 'Paranormal investigation and elimination service', correct: true },
        { text: 'Moving company', correct: false }
    ]
},
{
    question: 'In Airplane!, what is the name of the main pilot who is asked if he likes movies about gladiators?',
    answers: [
        { text: 'Ted Striker', correct: false },
        { text: 'Captain Rex Kramer', correct: false },
        { text: 'Roger Murdock', correct: false },
        { text: 'Captain Clarence Oveur', correct: true }
    ]
},
{
    question: 'Who stars as a clueless fashion model in Zoolander?',
    answers: [
        { text: 'Will Ferrell', correct: false },
        { text: 'Owen Wilson', correct: false },
        { text: 'Ben Stiller', correct: true },
        { text: 'Vince Vaughn', correct: false }
    ]
},
{
    question: 'In Home Alone, what are the nicknames of the two burglars who try to break into Kevin’s house?',
    answers: [
        { text: 'The Wet Bandits', correct: true },
        { text: 'The Sticky Bandits', correct: false },
        { text: 'The Bandit Brothers', correct: false },
        { text: 'The Slippery Bandits', correct: false }
    ]
}
];

const horQs = [
  {
    question: 'In Halloween (1978), what is the name of the masked killer?',
    answers: [
        { text: 'Jason Voorhees', correct: false },
        { text: 'Michael Myers', correct: true },
        { text: 'Freddy Krueger', correct: false },
        { text: 'Leatherface', correct: false }
    ]
},
{
    question: 'What is the setting for The Shining (1980)?',
    answers: [
        { text: 'Bates Motel', correct: false },
        { text: 'Amityville House', correct: false },
        { text: 'Overlook Hotel', correct: true },
        { text: 'Blackwood Manor', correct: false }
    ]
},
{
    question: 'In A Nightmare on Elm Street, Freddy Krueger attacks his victims in what way?',
    answers: [
        { text: 'Through dreams', correct: true },
        { text: 'Through mirrors', correct: false },
        { text: 'In their homes', correct: false },
        { text: 'In the woods', correct: false }
    ]
},
{
    question: 'What is the name of the possessed doll in The Conjuring universe?',
    answers: [
        { text: 'Chucky', correct: false },
        { text: 'Annabelle', correct: true },
        { text: 'Robert', correct: false },
        { text: 'Samara', correct: false }
    ]
},
{
    question: 'In Scream, what is the name of the killer\'s iconic costume?',
    answers: [
        { text: 'Ghostface', correct: true },
        { text: 'The Shape', correct: false },
        { text: 'The Creeper', correct: false },
        { text: 'The Phantom', correct: false }
    ]
},
{
    question: 'Which Stephen King novel was adapted into a 2017 horror movie about a terrifying clown named Pennywise?',
    answers: [
        { text: 'Salem\'s Lot', correct: false },
        { text: 'The Shining', correct: false },
        { text: 'It', correct: true },
        { text: 'Carrie', correct: false }
    ]
},
{
    question: 'What classic horror film features the line, "They\'re coming to get you, Barbara"?',
    answers: [
        { text: 'Psycho', correct: false },
        { text: 'Night of the Living Dead', correct: true },
        { text: 'The Exorcist', correct: false },
        { text: 'The Texas Chain Saw Massacre', correct: false }
    ]
},
{
    question: 'In Hereditary, what unusual object is used as a symbol throughout the movie?',
    answers: [
        { text: 'A doll', correct: false },
        { text: 'A bird', correct: false },
        { text: 'A miniature house', correct: true },
        { text: 'A crown', correct: false }
    ]
},
{
    question: 'What horror movie features a videotape that kills anyone who watches it within seven days?',
    answers: [
        { text: 'The Ring', correct: true },
        { text: 'The Grudge', correct: false },
        { text: 'Paranormal Activity', correct: false },
        { text: 'Poltergeist', correct: false }
    ]
},
{
    question: 'Who directed Get Out, the 2017 social horror thriller?',
    answers: [
        { text: 'Jordan Peele', correct: true },
        { text: 'Ari Aster', correct: false },
        { text: 'James Wan', correct: false },
        { text: 'Wes Craven', correct: false }
    ]
},
{
    question: 'In The Silence of the Lambs, who plays the role of Dr. Hannibal Lecter?',
    answers: [
        { text: 'Anthony Hopkins', correct: true },
        { text: 'Jack Nicholson', correct: false },
        { text: 'Robert De Niro', correct: false },
        { text: 'Al Pacino', correct: false }
    ]
},
{
    question: 'What is the name of the ancient, evil book in The Evil Dead series?',
    answers: [
        { text: 'The Book of Shadows', correct: false },
        { text: 'Necronomicon', correct: true },
        { text: 'The Grimoire', correct: false },
        { text: 'The Book of the Dead', correct: false }
    ]
},
{
    question: 'In The Blair Witch Project, where are the main characters attempting to locate the Blair Witch?',
    answers: [
        { text: 'Haunted house', correct: false },
        { text: 'Forest', correct: true },
        { text: 'Abandoned hospital', correct: false },
        { text: 'Cave', correct: false }
    ]
},
{
    question: 'What type of supernatural creature is featured in The Babadook?',
    answers: [
        { text: 'Ghost', correct: false },
        { text: 'Demon', correct: true },
        { text: 'Witch', correct: false },
        { text: 'Poltergeist', correct: false }
    ]
},
{
    question: 'In Poltergeist, what household item serves as a portal to another dimension?',
    answers: [
        { text: 'Television', correct: true },
        { text: 'Mirror', correct: false },
        { text: 'Closet', correct: false },
        { text: 'Basement', correct: false }
    ]
}
];

const romQs = [
  {
    question: 'In The Notebook, what is the name of the character played by Ryan Gosling?',
    answers: [
        { text: 'Jack', correct: false },
        { text: 'Noah', correct: true },
        { text: 'Duke', correct: false },
        { text: 'Sam', correct: false }
    ]
},
{
    question: 'Who stars opposite Julia Roberts in Pretty Woman?',
    answers: [
        { text: 'Richard Gere', correct: true },
        { text: 'Tom Cruise', correct: false },
        { text: 'Kevin Costner', correct: false },
        { text: 'Mel Gibson', correct: false }
    ]
},
{
    question: 'In Titanic, what is the famous line that Jack shouts on the ship\'s bow?',
    answers: [
        { text: 'I\'m king of the world!', correct: true },
        { text: 'I\'m on top of the world!', correct: false },
        { text: 'Look at me, Rose!', correct: false },
        { text: 'This is our kingdom!', correct: false }
    ]
},
{
    question: 'In 10 Things I Hate About You, which Shakespeare play is the movie based on?',
    answers: [
        { text: 'Macbeth', correct: false },
        { text: 'The Taming of the Shrew', correct: true },
        { text: 'Romeo and Juliet', correct: false },
        { text: 'A Midsummer Night\'s Dream', correct: false }
    ]
},
{
    question: 'In La La Land, what is Mia’s (Emma Stone) dream career?',
    answers: [
        { text: 'Dancer', correct: false },
        { text: 'Actress', correct: true },
        { text: 'Singer', correct: false },
        { text: 'Chef', correct: false }
    ]
},
{
    question: 'Who is the mysterious pen pal in You\'ve Got Mail, who Kathleen eventually meets?',
    answers: [
        { text: 'Joe Fox', correct: true },
        { text: 'Harry Burns', correct: false },
        { text: 'Lloyd Dobler', correct: false },
        { text: 'Mark Darcy', correct: false }
    ]
},
{
    question: 'In Pride and Prejudice, who is Elizabeth Bennet’s love interest?',
    answers: [
        { text: 'Mr. Bingley', correct: false },
        { text: 'Mr. Collins', correct: false },
        { text: 'Mr. Wickham', correct: false },
        { text: 'Mr. Darcy', correct: true }
    ]
},
{
    question: 'Which movie features the line, "You had me at hello"?',
    answers: [
        { text: 'Notting Hill', correct: false },
        { text: 'Jerry Maguire', correct: true },
        { text: 'Sleepless in Seattle', correct: false },
        { text: 'Sweet Home Alabama', correct: false }
    ]
},
{
    question: 'In To All the Boys I\'ve Loved Before, what does Lara Jean’s sister do with her secret love letters?',
    answers: [
        { text: 'Burns them', correct: false },
        { text: 'Reads them aloud', correct: false },
        { text: 'Sends them to her crushes', correct: true },
        { text: 'Throws them away', correct: false }
    ]
},
{
    question: 'What song do Baby and Johnny dance to at the end of Dirty Dancing?',
    answers: [
        { text: 'Unchained Melody', correct: false },
        { text: 'Time of My Life', correct: true },
        { text: 'Endless Love', correct: false },
        { text: 'Footloose', correct: false }
    ]
},
{
    question: 'In The Princess Bride, what is Westley’s famous line to Buttercup?',
    answers: [
        { text: 'I love you, Buttercup.', correct: false },
        { text: 'As you wish.', correct: true },
        { text: 'Forever and always.', correct: false },
        { text: 'I will protect you.', correct: false }
    ]
},
{
    question: 'Who plays the main couple in The Fault in Our Stars?',
    answers: [
        { text: 'Emma Stone and Andrew Garfield', correct: false },
        { text: 'Shailene Woodley and Ansel Elgort', correct: true },
        { text: 'Jennifer Lawrence and Josh Hutcherson', correct: false },
        { text: 'Hailee Steinfeld and Miles Teller', correct: false }
    ]
},
{
    question: 'In Notting Hill, what is the profession of Hugh Grant’s character, William Thacker?',
    answers: [
        { text: 'Actor', correct: false },
        { text: 'Writer', correct: false },
        { text: 'Travel agent', correct: false },
        { text: 'Bookshop owner', correct: true }
    ]
},
{
    question: 'Which romantic movie begins with the line, "This is a true story about love"?',
    answers: [
        { text: 'The Vow', correct: false },
        { text: 'A Walk to Remember', correct: false },
        { text: 'Moulin Rouge!', correct: true },
        { text: 'The Great Gatsby', correct: false }
    ]
},
{
    question: 'In When Harry Met Sally..., where do Harry and Sally first meet?',
    answers: [
        { text: 'On a train', correct: false },
        { text: 'At a wedding', correct: false },
        { text: 'In college', correct: false },
        { text: 'On a road trip', correct: true }
    ]
}
];

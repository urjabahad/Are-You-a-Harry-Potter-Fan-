var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName + ", to URJA's quiz on HARRY POTTER");
var score = 0;
console.log('\u001b[32mType 1 to ENTER or 0 to EXIT\u001b[0m');
var userChoice = parseInt(readlineSync.question("Your Choice:"));
if (userChoice === 0) {
  console.log("YAY! Your score is " + score);
} else if (userChoice === 1) {
  function ques(question, answer) {
    console.log(question);
    var userAnswer = readlineSync.question("Your answer?");
    if (answer.includes(userAnswer.toLowerCase())) {
      console.log('\u001b[34mYou\'re right!\u001b[0m');
     score = score + 1;
      console.log("Your score = " + score);
    } else {
      console.log('\u001b[34mYou\'re wrong!\u001b[0m');
      score = score - 1;
      console.log("Your score = " + score);
    }
    console.log('\u001b[33m-----------------------------------------\u001b[0m');
    }

  var arr = [
    {
      question: "What is the name of Harry Potter's owl?\na) Hedwig\nb) Errol\nc) Pigwidgeon\nd) Crookshanks",
      answer: ["a", "a) Hedwig", "Hedwig"]
    },
    {
      question: "Which house does Harry Potter belong to?\na) Gryffindor\nb) Hufflepuff\nc) Ravenclaw\nd) Slytherin",
      answer: ["a"]
    },
    {
      question: "Who is the author of the Harry Potter book series?\na) J.R.R. Tolkien \nb)J.K. Rowling \nc)C.S. Lewis \nd)Stephenie Meyer",
      answer: ["b", "b) J.K. Rowling", "J.K. Rowling"]
    },
    {
      question: "What is the name of Harry Potter's best friend?\na)Ron Weasley\nb) Hermione Granger \nc)Neville Longbottom \nd) Draco Malfoy",
      answer: ["a", "a) Ron Weasley", "Ron Weasley"]
    },
    {
      question: "What is the name of the Hogwarts School caretaker?\na)Severus Snape\nb) Rubeus Hagrid \nc)Argus Filch \nd)Minerva McGonagall",
      answer: ["c", "c) Argus Filch", "Argus Filch"]
    },
    {
      question: "What is the name of the train that takes students to Hogwarts?\na)The Knight Bus\nb)The Durmstrang Ship \nc)The Beauxbatons Carriage \nd)The Hogwarts Express",
      answer: ["d", "d) The Hogwarts Express", "The Hogwarts Express"]
    },
    {
      question: "Which Hogwarts professor teaches Potions?\na) Minerva McGonagall\nb) Severus Snape \nc)Albus Dumbledore \nd)Remus Lupin",
      answer: ["b", "b) Severus Snape", "Severus Snape"]
    },
    {
      question: "What is the name of Harry Potter's arch-nemesis?\na)Lucius Malfoy\nb)Draco Malfoy \nc)Tom Riddle \nd) Lord Voldemort",
      answer: ["d", "d) Lord Voldemort", "Lord Voldemort"]
    },
    {
      question: "Who is the headmaster of Hogwarts during Harry Potter's time at the school?\na)Albus Dumbledore\nb)Severus Snape \nc)Minerva McGonagall \nd)Dolores Umbridge",
      answer: ["a", "a) Albus Dumbledore", "Albus Dumbledore"]
    },
    {
      question: "Which magical creature guards the entrance to the Chamber of Secrets?\na)The Basilisk\nb)The Dementors \nc)The Hippogriff \nd)The Centaurs",
      answer: ["a", "a) The Basilisk", "The Basilisk"]
    }
  ];

  for (var i = 0; i < arr.length; i++) {
    ques(arr[i].question, arr[i].answer);
  }
  console.log("Well Done! Your Final Score is  " + score);
  console.log('\u001b[33m-----------------------------------------\u001b[0m');
  var highScore=[
    {
      name:"Daniel Radcliffe",
      score: "8"
    },
{
  name:"Emma Watson",
  score: "10"
}
];
  var flag=0;
    for(var k=0;k<highScore.length;k++)
    {
      if(score>=highScore[k].score)
      {
        flag=1;
        break;
      }
    }
  if(flag==1)
  {
    console.log('\u001b[36mCONGRATULATIONS!You have made it to the list of TOP SCORERS\u001b[0m');
    console.log('\u001b[36mDOBBY IS FREE NOW!\u001b[0m');
  }
    else
  {
    console.log('\u001b[36mUNFORTUNATELY!You did not make it to the list of TOP SCORERS\u001b[0m');
    console.log('\u001b[36mDOBBY IS CAPTURED!\u001b[0m'); 
  }
console.log('\u001b[32mTOP 2 HIGH SCORES\u001b[0m');
  for(var k=0;k<highScore.length;k++)
    { console.log("Name:"+highScore[k].name+"\nScore:"+highScore[k].score)
 }

     
  
} else {
  console.log('\u001b[31mWrong Input\u001b[0m'); 
  
}


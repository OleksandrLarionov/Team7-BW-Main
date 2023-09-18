const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];


const question=document.getElementById("question");
const answer=document.getElementById("answers");
const answ=[];
const confirm=document.createElement("button");
confirm.innerText="conferma";
const confirmdiv=document.getElementById("confirma");
confirmdiv.appendChild(confirm);
for(let i=0;i<4;i++)
{
     answ[i]=document.createElement("div");
     answ[i].addEventListener("click", function(e)
     {
        answ[i].classList.add("cellCelected")

     })
     
}

const varee=[];
for(let i=0;i<10;i++)
{
    let r=Math.floor(Math.random()*questions.length);
if(varee.indexOf(r)===-1)
{
    varee.push(r);
}
}
console.log(varee);

/*for(let i=0;i<questions.length;i++)
{
    if(questions.indexOf(r)===-1)
    {
        question.innerText=questions[r].question;
    }
    answ[0].innerText=questions[r].correct_answer;
    answer.appendChild(answ[0]);
    answ[1].innerText=questions[r].incorrect_answers[0];
    answer.appendChild(answ[1]);
    answ[2].innerText=questions[r].incorrect_answers[1];
    answer.appendChild(answ[2]);
    answ[3].innerText=questions[r].incorrect_answers[2];
    answer.appendChild(answ[3]);
    console.log(r);
    questions.splice(r,1);
    console.log(questions.length);
    
}
*/

console.log(questions);
//const confirm=document.createElement("div");









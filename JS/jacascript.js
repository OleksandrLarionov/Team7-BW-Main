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

const svuotatutto=function(e)
{
  
  const everytab=document.getElementsByClassName("cellSelected");
  const everytab1=Array.from(everytab);
  for (let i=0;i<everytab1.length;i++)
  {
    everytab1[i].classList.remove("cellSelected");
    }
    confirm.style.display = 'none'
  }
  
  const question=document.getElementById("question");
  const answer=document.getElementById("answers");
  const answ=[];
  let i = 0
  const confirm=document.createElement("button");
  confirm.classList.add("submit");
  confirm.innerText="conferma";
  const confirmdiv=document.getElementById("confirma");
  confirmdiv.appendChild(confirm);
  confirm.style.display = 'none'
  let score = 0
  const counter = document.getElementById('totalquest') 
  counter.innerText = i+1
  
  
  confirm.addEventListener("click", function ()
  {
 
  let risp = document.getElementsByClassName("cellSelected")
  let risp2=Array.from(risp);
  console.log(risp2[0].innerText)
  if (risp2[0].innerText === questions[i].correct_answer) 
  {
  score += 1
  console.log(score)
  }
  i++
  counter.innerText = i+1
  
  svuotatutto()

if(i<questions.length)
{
  question.innerText = questions[i].question
  
  if (questions[i].type === 'multiple') 
  {
    
    const randomNumArr = [0,1,2,3]
    const randomNum = function (){
        const i = Math.floor(Math.random()*randomNumArr.length)
        const randomNumber = randomNumArr.splice(i,1)[0]
        return randomNumber
}

    answ[0].innerText=questions[i].correct_answer;
    answ[1].innerText=questions[i].incorrect_answers[0];
    answ[2].innerText=questions[i].incorrect_answers[1];
    answ[3].innerText=questions[i].incorrect_answers[2];
    answer.appendChild(answ[randomNum()]);
    answer.appendChild(answ[randomNum()]);
    answer.appendChild(answ[randomNum()]);
    answer.appendChild(answ[randomNum()]);
    
    
  } 
  else if (questions[i].type==="boolean")
  {


    const randomNumArr = [0,1,2,3]
    const randomNum = function (){
        const i = Math.floor(Math.random()*randomNumArr.length)
        const randomNumber = randomNumArr.splice(i,1)[0]
        return randomNumber
}
    
    answ[0].innerText=questions[i].correct_answer;
    answ[1].innerText=questions[i].incorrect_answers[0];
    answ[2].innerText='';
    answ[3].innerText='';
    answer.appendChild(answ[randomNum()]);
    answer.appendChild(answ[randomNum()]);
    answer.appendChild(answ[randomNum()]);
    answer.appendChild(answ[randomNum()]);
  }
}
else
{
  alert("test finito, totale punteggio: "+ score);
}
})
for(let i=0;i<4;i++)
{
   answ[i]=document.createElement("div");
   answ[i].addEventListener("click", function(e)
   {
     svuotatutto(e)
     answ[i].classList.add("cellSelected")
     confirm.style.display = 'inline-block'
   })
   
}

const random=[0,1,2,3];
const r= function (){
let i = Math.floor(Math.random()*random.length);
let num = random.splice(i,1)[0]
return num
}


  
  question.innerText = questions[i].question
  answ[0].innerText=questions[i].correct_answer;
  answ[1].innerText=questions[i].incorrect_answers[0];
  answ[2].innerText=questions[i].incorrect_answers[1];
  answ[3].innerText=questions[i].incorrect_answers[2];
  answer.appendChild(answ[r()]);
  answer.appendChild(answ[r()]);
  answer.appendChild(answ[r()]);
  answer.appendChild(answ[r()]);
  console.log(i);
  console.log(questions[i].question)
  
  
  // const footer = document.getElementsByTagName('footer')[0]

  console.log(i)


// console.log(questions);
//const confirm=document.createElement("div");









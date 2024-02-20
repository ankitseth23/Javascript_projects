const questions =[
    {
        question : "What is the capital of India?",
        answer :[
            {text : "mumbai", correct: false},
            {text : "New Delhi", correct: true},
            {text : "Ahmebadbad", correct: false},
            {text : "Bengaluru", correct: false},
        ]
    },
    {
        question : "What is the largest ocean in the world?",
        answer :[
            {text : "Atlantic Ocean", correct: false},
            {text : "Indian Ocean", correct: false},
            {text : "Arctic Ocean", correct: false},
            {text : "Pacific Ocean", correct: true},
        ]
    },
    {
        question : "Who wrote the play Romeo and Juliet ?",
        answer :[
            {text : "William Shakespeare", correct: true},
            {text : "Jane Austen", correct: false},
            {text : "Charles Dickens", correct: false},
            {text : "Scott Fitzgerald", correct: false},
        ]
    },
    {
        question : "What is the currency of Finland ?",
        answer :[
            {text : "Yen", correct: false},
            {text : "Euro", correct: true},
            {text : "Dollar", correct: false},
            {text : "Rupee", correct: false},
        ]
    },
    {
        question : "Who is the author of the Harry Potter book series?",
        answer :[
            {text : "J.R.R. Tolkien", correct: false},
            {text : "J.K. Rowling", correct: true},
            {text : "George R.R. Martin", correct: false},
            {text : "Dan Brown", correct: false},
        ]
    },
    {
        question : "What is the national river of India?",
        answer :[
            {text : "Ganga", correct: true},
            {text : "Yamuna", correct: false},
            {text : "Godavari", correct: false},
            {text : "Brahmaputra", correct: false},
        ]
    },
    {
        question : "Which country has won the most Cricket World Cups?",
        answer :[
            {text : "Australia", correct: true},
            {text : "India", correct: false},
            {text : "west Indies", correct: false},
            {text : "Pakistan", correct: false},
        ]
    },
    {
        question : "Where does the Sushi come from?",
        answer :[
            {text : "Japan", correct: true},
            {text : "China", correct: false},
            {text : "America", correct: false},
            {text : "south Korea", correct: false},
        ]
    },
    {
        question : "Which county is the biggest grower of coffee?",
        answer :[
            {text : "Japan", correct: false},
            {text : "spain ", correct: false},
            {text : "India", correct: false},
            {text : "Brazil", correct: true},
        ]
    },
    {
        question : "What chemical element is designated as “Cu”?",
        answer :[
            {text : "Zinc", correct: false},
            {text : "copper", correct: true},
            {text : "cobalt", correct: false},
            {text : " Kurtz", correct: false},
        ]
    },
    {
        question : "What chemical element is used in the production of steel products?",
        answer :[
            {text : "Zinc", correct: false},
            {text : "Tin", correct: false},
            {text : "Iron", correct: true},
            {text : "Silver", correct: false},
        ]
    },
    {
        question : "How many times has Brazil won the World Cup?",
        answer :[
            {text : "4", correct: false},
            {text : "6", correct: false},
            {text : "5", correct: true},
            {text : "3", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex= 0;
    score =0;
    nextButton.innerHTML="Next";
    showQuestion();    
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let question = currentQuestionIndex + 1;
    questionElement.innerHTML= question + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {      
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}


function resetState(){
     nextButton.style.display="none";
     while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
     }
}

function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }else{
        selectedBtn.classList.add("incorrect");
     }

      Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
          button.disabled =true;
      })
       nextButton.style.display="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display ="block";

}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
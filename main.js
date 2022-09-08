const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById("question");

const input = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score} `;


question.innerText = `What is ${num1} multiply by ${num2}?`;


const correctAnswer = num1 * num2;



formEl.addEventListener("submit", () => {
    const userAnswer = +input.value;
    
     if(userAnswer === correctAnswer) {
        score++;
       updateLocalStorage();
     }
     else{
        score--;
        updateLocalStorage();
     }


});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
};









const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const question = document.getElementById("question");

question.innerText = `What is ${num1} multiply by ${num2}?`;


const formInput = document.getElementById("form");
const input = document.getElementById("id");

const correctAnswer = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

formInput.addEventListener("submit", ()=>{
    const userAnswer = +input.ariaValueMax;
    if(typeof userAnswer === "string"){
        console.log("Please enter number")
    }
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
    localStorage.setItem("score", JSON.stringify(score))
};









const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const question = document.getElementById("question");

const formInput = document.getElementById("form");
const input = document.getElementById("id");

let score = 0;

formInput.addEventListener("submit", ()=>{
    const userAnswer = +input.ariaValueMax;
    if(userAnswer = String){
        return console.log("Please enter number")
    }
     if(userAnswer === correctAnswer) {
        score++;
        console.log("score");
     }
     else{
        score--;
        console.log("score");
     }

    

});

question.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1 * num2;






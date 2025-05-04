questionObject = 
[
    {
        question: "How many licks to the center of a tootsie pop?",
        answers: ["zero", "one", "two", "three"],
        correctAnswer: 3,    
    },
    {
        question: "What smells like blue paint but looks like red paint",
        answers: ["Green paint", "Blue paint", "Red Paint", "Yellow Paint"],
        correctAnswer: 2,    
    },
    {
        question: "Can you select the right button?",
        answers: ["The Wrong Button", "The Right Button", "The Wrong Button", "The Wrong Button"],
        correctAnswer: 1,    
    },
    {
        question: "Which button hasn't been pressed yet?",
        answers: ["This one for sure", "This one, maybe?", "I think this one", "Gotta be this one"],
        correctAnswer: 0,    
    },
]

let currentIndex = 0;

const questionText = document.getElementById("question-text");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-question");

function displayQuestion()
{
    const question = questionObject[currentIndex];
    questionText.innerText = question.question;

    //Button answers choices
    button1.innerText = question.answers[0];
    button2.innerText = question.answers[1];
    button3.innerText = question.answers[2];
    button4.innerText = question.answers[3];

    feedback.innerText = 'please select answer';
}

function selectAnswer(selectedButton)
{
    const question = questionObject[currentIndex];
    const selectedAnswer = selectedButton.innerText;
    const correctAnswerText = question.answers[question.correctAnswer]; //TODO: This is painful to read

    if(selectedAnswer === correctAnswerText)
    {
        feedback.innerText = "Correct!";
    }
    else
    {
        feedback.innerText = `Incorrect, the correct answer was: ${correctAnswerText}`;
    }
}

function loadNextQuestion()
{
    currentIndex++;
    if(currentIndex < questionObject.length)
        {
            displayQuestion();
        }
    else
    {
        feedback.innerText = "End of quiz!";
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        button4.disabled = true;
    }
}

button1.addEventListener("click", () => selectAnswer(button1));
button2.addEventListener("click", () => selectAnswer(button2));
button3.addEventListener("click", () => selectAnswer(button3));
button4.addEventListener("click", () => selectAnswer(button4));

nextButton.addEventListener("click", () => loadNextQuestion());

displayQuestion()
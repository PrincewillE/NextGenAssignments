document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question: "What is the first book in the Bible?",
            choices: ["Mathew", "Esther", "Galatians", "Genesis" ],
            answer: "Genesis",
        },
        {
            question: "What is the last book in the Bible?",
            choices: [ "Mathew", "Revelation", "Galatians", "Titus"],
            answer: "Revelation",
        },
        {
            question: "Which book did Jesus directly write?",
            choices: ["Jude", "John", "None", "Exodus" ],
            answer: "None",
        },
        {
            question: "What is the longest book in the Bible?",
            choices: ["Psalms", "Ruth", "Numbers", "1John"],
            answer: "Psalms",
        },
        {
            question: "Who wrote the enter book of Psalms",
            choices: [ "David", "Jonathan", "Solomon", "Many writers"],
            answer: "Many writers",
        },
        {
            question: "What is the shortest book in the Bible?",
            choices: ["Reveletion", "Esther", "3John", "Jude"],
            answer: "3John",
        },
        {
            question: "How many books in the Old Testament?",
            choices: ["32", "39", "29", "48" ],
            answer: "39",
        },
        {
            question: "Who was David’s captain of his army?",
            choices: [ "Abimelech", "Nathan", "Joab", "Saul"],
            answer: "Joab",
        },
        {
            question: "Who was David’s son that started a rebellion against him?",
            choices: ["Absalom", "Obediah", "Cyrus", "Nathan" ],
            answer: "Absalom",
        },
        {
            question: "Who was Jesus' most famous cousin?",
            choices: ["John the Baptist", "Simon", "James", "Judas" ],
            answer: "John the Baptist",
        },
        {
            question: "How many books in the New Testament?",
            choices: ["44", "47", "30", "27" ],
            answer: "27",
        },
        {
            question: "Which NT book has Jesus' Sermon on the mount",
            choices: [ "Mathew", "Mark", "Luke", "Acts"],
            answer: "Mathew",
        },
        {
            question: "In what language was most of the OldTestament given?",
            choices: ["English", "Hebrew", "Aramic", "Latin" ],
            answer: "Hebrew",
        },
        {
            question: "What did Laban make Jacob do to finally marry Rachel?",
            choices: ["serve his son", "work for 2 more years", "Tend the flocks", "Work another seven years"],
            answer: "Work another seven years",
        },
        {
            question: " What did God change Jacob’s name to before his meeting with Esau?",
            choices: [ "David", "Jonathan", "Israel", "Isiah"],
            answer: "Israel",
        },
        {
            question: "How did Esau provide food for the family",
            choices: ["He hunted", "He made Tents", "plough the field", "he raised flocks"],
            answer: "He hunted",
        },
        {
            question: ": How many plagues did God send to Egypt",
            choices: ["8", "10", "12", "21" ],
            answer: "10",
        },
        {
            question: " Who was the first king of Israel?",
            choices: ["Moses", "Solomon", "David", "Saul" ],
            answer: "Saul",
        },
        {
            question: "Who anointed the first king of Israel?",
            choices: ["Jonathan", "Samuel", "Solomon", "Hezichaih" ],
            answer: "Samuel",
        },
        {
            question: "After they took over the Promised Land and Joshua died, who ruled Israel?",
            choices: [ "Judges", "Ruth", "Estha", "David"],
            answer: "Judges",
        }
    ];


    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener("click", startQuiz);

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showResult();
        }
    });

    restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score= 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    });

    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add("hidden");
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = ""; //previouse choices will be cleared
        questions[currentQuestionIndex].choices.forEach((choice) => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click", () => selectAnswer(choice));
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(choice){
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (choice === correctAnswer){
            score++;
        }
        nextBtn.classList.remove("hidden");
    }

    function showResult(){
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }


});
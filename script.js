const questions = [
    {
        question: "پایتخت ایران کدام شهر است؟",
        options: ["تهران", "مشهد", "اصفهان", "شیراز"],
        answer: 0
    },
    {
        question: "بزرگترین سیاره منظومه شمسی کدام است؟",
        options: ["زهره", "مریخ", "مشتری", "زمین"],
        answer: 2
    },
    {
        question: "آب در چند درجه به جوش می‌آید؟",
        options: ["50", "100", "150", "200"],
        answer: 1
    }
];

let currentQuestion = 0;
let timer;
let timeLeft = 30;

function loadQuestion() {
    // بارگذاری سوال جدید
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const timeLeftElement = document.getElementById("time-left");

    // سوال و گزینه‌ها را بارگذاری کنید
    questionElement.innerText = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    // تنظیم تایمر
    clearInterval(timer);
    timeLeft = 30;
    timeLeftElement.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeLeftElement.innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert("زمان به پایان رسید! باختید.");
            showCorrectAnswer();
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const correctIndex = questions[currentQuestion].answer;
    const optionsElement = document.getElementById("options").children;

    if (selectedIndex === correctIndex) {
        optionsElement[selectedIndex].classList.add("correct");
        //alert("تبریک! جواب درست است.");
        currentQuestion++;

        if (currentQuestion < questions.length) {
            setTimeout(loadQuestion, 1000); // رفتن به سوال بعد
        } else {
            //alert("تبریک! شما همه سوالات را درست جواب دادید.");
        }
    } else {
        optionsElement[selectedIndex].classList.add("wrong");
        optionsElement[correctIndex].classList.add("correct");
        //alert("اشتباه است! جواب درست مشخص شده است.");
    }
}

function showCorrectAnswer() {
    const correctIndex = questions[currentQuestion].answer;
    const optionsElement = document.getElementById("options").children;
    optionsElement[correctIndex].classList.add("correct");
}

loadQuestion();

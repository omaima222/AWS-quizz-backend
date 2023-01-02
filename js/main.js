//========pages=======//
let pageOne   = document.getElementById("first_pg");
let pageTwo   = document.getElementById("second_pg");
let pageThree = document.getElementById("third_pg");
pageTwo.style.display= "none";
pageThree.style.display= "none";

//========questions=======//
let AllAnswers =  document.getElementById("quizz_answers");
let Question =  document.getElementById("quizz_question");
let AnswerA  =  document.getElementById("A1");
let AnswerB  =  document.getElementById("A2");
let AnswerC  =  document.getElementById("A3");
let AnswerD  =  document.getElementById("A4");
let timeCount =  document.getElementById("timeCount");

//========progress=======//
let p_num = document.getElementById("P-num");
let progressBar = document.getElementById("progressBar");
let progress = document.getElementById("progressstart");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let steps = document.getElementById("stepss");

//========result=======//
let result = 0;
let resultnum = document.getElementById("resultnum");
let congrats = document.getElementById("congrats");
let answerscorrect = document.getElementById("answers");
let explications = [];

let randomQuestions;
let currentIndex;
let TimeCount;
moveInfo();


//========clicks=======//
AnswerA.onclick=function(){
    if(questions[currentIndex].options[0].isCorrect){
        result++
    }else{
        explications.push(questions[currentIndex].explanation)
    }
    currentIndex++;
    if(currentIndex>9){
        ShowResult()
    }
    NextQuestion(currentIndex)

}
AnswerB.onclick=function(){
    if(questions[currentIndex].options[1].isCorrect){
        result++
    }else{
        explications.push(questions[currentIndex].explanation)
    }
    currentIndex++;
    if(currentIndex>9){
        ShowResult()
    }
    NextQuestion(currentIndex)
}
AnswerC.onclick=function(){
    if(questions[currentIndex].options[2].isCorrect){
        result++
    }else{
        explications.push(questions[currentIndex].explanation)
    }
    currentIndex++;
    if(currentIndex>9){
        ShowResult()
    }
    NextQuestion(currentIndex)

}
AnswerD.onclick=function(){
    if(questions[currentIndex].options[3].isCorrect){
        result++
    }else{
        explications.push(questions[currentIndex].explanation)
    }
    currentIndex++;
    if(currentIndex>9){
        ShowResult()
    }
    NextQuestion(currentIndex)

}


//========functions=======//
function startQuizz(){
    pageOne.style.display= "none";
    pageTwo.style.display= "block";
    pageThree.style.display= "none";
    randomQuestions = questions.sort(()=> Math.random() - .5);
    currentIndex = 0;
    NextQuestion(currentIndex);
    circle3.classList.remove("active");
    circle2.classList.add("active");
    steps.style.height = 5+"rem"; 
}

function NextQuestion(index){
    displayQuestions(randomQuestions[index]);
    clearInterval(TimeCount)       
    timer();
}

function displayQuestions(questions){
    moveQuestions()
    Question.innerText = questions.question;
    AnswerA.innerText = questions.options[0].option;
    AnswerB.innerText = questions.options[1].option;
    AnswerC.innerText = questions.options[2].option;
    AnswerD.innerText = questions.options[3].option;

    let Acircle = document.createElement("div");
    Acircle.classList.add("quizz_answers_each_circle");
    Acircle.innerHTML="A";
    AnswerA.appendChild(Acircle);

    let Bcircle = document.createElement("div");
    Bcircle.classList.add("quizz_answers_each_circle");
    Bcircle.innerHTML="B";
    AnswerB.appendChild(Bcircle);

    let Ccircle = document.createElement("div");
    Ccircle.classList.add("quizz_answers_each_circle");
    Ccircle.innerHTML="C";
    AnswerC.appendChild(Ccircle);

    let Dcircle = document.createElement("div");
    Dcircle.classList.add("quizz_answers_each_circle");
    Dcircle.innerHTML="D";
    AnswerD.appendChild(Dcircle);
    

    p_num.innerText =  currentIndex+1;
    for(let i=0;i<currentIndex+1;i++){
        progress.style.width = i*4.1+"rem";
    }
}

function ShowResult(){
        moveRsult()
        pageTwo.style.display ="none"
        pageThree.style.display ="block"
        circle3.classList.add("active");
        steps.style.height = 10+"rem";
        resultnum.innerHTML= result;

        for(let i=0;i<explications.length;i++){
            let answerscorrect2 = document.createElement('li');
            answerscorrect2.classList.add("answers_Q");
            answerscorrect2.innerText=explications[i][0].question;
            let answersdiv = document.createElement('div');
            answersdiv.classList.add("answers_true");

            let corr = document.createElement('span');
            corr.innerText= explications[i][2].corr;
            corr.classList.add("answers_circle")
            answersdiv.appendChild(corr);

            let exp = document.createElement('p');
            exp.innerText= explications[i][1].exp;
            answersdiv.appendChild(exp);
           
            answerscorrect2.appendChild(answersdiv);
            answerscorrect.appendChild(answerscorrect2);
        }

        if(result>=8){
            congrats.innerHTML=" Great Job !"
        }else if(result==7 || result==6){
            congrats.innerHTML=" Good Job !"
        }else if(result<=5){
            congrats.innerHTML=" Meh :/ "
        }

}

function moveQuestions(){
    gsap.from(".quizz_answers_each", { 
        duration: 0.5,
        opacity:0,
        y: "10vh",
        ease: 'circ',
        stagger : .2,
        delay :0.5
    })
    gsap.from(".quizz_question", {
        duration: 0.7,
        x: "-10rem",
        opacity: 0,
        ease: 'circ'
    })
    gsap.from(".answers_Q" , {
        duration: 1,
        y: "100vh",
        delay: 1,
        stagger : .4,
        delay: 1,
        ease: 'circ'
    })
    gsap.from(".timeCount",{
        duration : 1,
        opacity:0,
        y: "-1rem",
        ease: 'circ',
        delay:1
    })
}

function moveInfo(){
    gsap.from(".contains_stepper",{
        duration: 1,
        x: "-5rem",
        ease: 'circ'
    })   
    gsap.from(".logo",{
        duration: 1,
        y: "-1rem",
        opacity:0,
        ease: 'circ'
    })   
    gsap.from(".infos_p",{
        duration: 1,
        y: "-1rem",
        opacity:0,
        ease: 'power2',
        delay: 0.5
    })   
    gsap.from(".exclam",{
        duration: 1,
        x: "-2rem",
        opacity:0,
        ease: 'circ',
        delay: 1
    })   
    gsap.from(".infos_list_items",{
        duration: 1,
        y: "-2rem",
        opacity:0,
        ease: 'sine',
        delay: 1.2,
        stagger:0.2
    })   
    gsap.from(".start_button",{
        duration: 1,
        opacity:0,
        ease: 'power2',
        delay:2
    })   
}

function moveRsult(){
    gsap.from(".congrats" , {
        duration: 1,
        opacity:0,
        ease: 'circ'
    })
    gsap.from(".result" , {
        duration: 1,
        opacity:0,
        y: "-5rem",
        ease: 'circ'
    })
    gsap.from(".explication_title" , {
        duration: 0.5,
        opacity:0,
        delay: 1,
        ease: 'circ'
    })
}

function timer(){
    let seconds = 31;
    TimeCount = setInterval(function(){
    seconds--;
    if(seconds>=0){
        if(seconds<10){
            seconds="0"+seconds;
        }
        timeCount.innerHTML ="00 : "+seconds;
    }
    if(seconds==00){
        console.log(currentIndex)
        explications.push(questions[currentIndex].explanation)
        if(currentIndex>=9){
            ShowResult()
        }
        currentIndex++;
        NextQuestion(currentIndex)
    }
    } , 1000)
}
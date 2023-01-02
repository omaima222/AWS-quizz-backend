

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sass/main.css">
    <title>Quizz</title>
</head>


<body class="main">

    <div class="contains_stepper">
        <div class="stepper">
            <div class="steps" id="stepss"></div>
            <div class="circle active" id="circle">1</div>
            <div class="circle" id="circle2">2</div>
            <div class="circle" id="circle3">3</div>
        </div>
    </div>

    <section class="first_pg"id="first_pg" >
       <section class="logo">
         <h1 class="logo_text" >aws</h1>   
         <img class="logo_img" src="sass/img/aws-logo.png" alt="logo pic"> 
       </section>
       <section class="infos">
            <p class="infos_p">Welcome to this aws quizz where you can test your AWS Practitioner knowledge</p>
            <section class="alist" >
                <span class="exclam">!</span>
                <ul class="infos_list">
                <li class="infos_list_items">This quizz contains 10 questions</li>
                <li class="infos_list_items">You have 4 options to choose the right answer from</li>
                <li class="infos_list_items">You have 30 seconds to choose your answer else it's not counted </li>
                </ul>
            </section>
            <button class="start_button" id="start_button" type="submit" onclick="startQuizz()">Start</button>
       </section>
    </section>

   <section class="second_pg" id="second_pg">
        <div class="Allprogress">
            <div  class="progress">
                <span class="progressNum"><span class="num" id="P-num" ></span>/10</span>
                <div class="progressBar" id="progressBar"></div>
                <div class=" progressstart" id="progressstart"></div>
            </div>
        </div>
        <section class="quizz" id="quizz">
            <div class="timer">
                <h1 class="timeCount" id="timeCount">00 : 30</h1>
            </div>
            <h2 class="quizz_question" id="quizz_question">question</h2>
            <section  class="quizz_answers" id="quizz_answers">
                <div class="The2options">
                    <button  class="quizz_answers_each" id="A1"><span class="quizz_answers_each_circle">A</span> Answer1</button>
                    <button  class="quizz_answers_each"id="A2"><span class="quizz_answers_each_circle">B</span> Answer2</button>
                </div>
                <div  class="The2options">
                    <button  class="quizz_answers_each"id="A3"><span class="quizz_answers_each_circle">C</span> Answer2</button>
                    <button  class="quizz_answers_each"id="A4"><span class="quizz_answers_each_circle">D</span> Answer3</button>
                </div>
            </section>
        </section>
   </section>

   <section class="third_pg" id="third_pg">
        <h1 class="congrats" id="congrats">Congrats !</h1>
        <section class="result">
            <h2>Your result</h2>
            <h2><span class="num" id="resultnum">8</span>/10</h2>
        </section>
        <section class="explication">
            <h2 class="explication_title">explanation for uncorrect answers</h2>
            <ul class="answers" id="answers">
                <!-- <li class="answers_Q" id="answers_Q">Why is AWS more economical than traditional data centers for applications with varying compute workloads?
                    <div class="answers_true" id="answers_true"><span class="answers_circle" id="corr">A</span><p id="exp">The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload.This is a more economical practice than purchasing enough on-premises servers to handle the peak load.</p></div>
                </li> -->
            </ul>
        </section>
   </section>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="js/ajax.js"></script>
<script src="js/data.js"></script>
<script src="js/main.js"></script>

</html>

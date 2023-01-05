
<?php
  include 'model/User.php'
?>


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
       <section class="first_logo">
         <h1 class="first_logo_text" >aws</h1>   
         <img class="first_logo_img" src="sass/img/aws-logo.png" alt="logo pic"> 
       </section>    
       <form action="" method="POST">
          <h3 class="label">Enter your name to start</h3>
          <input  class="name" type="text" name='name' required>
          <button class="submit" name="submit">Submit</button>
       </form>
</body>


<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="js/ajax.js"></script>
<script src="js/data.js"></script>
<script src="js/main.js"></script>
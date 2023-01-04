
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sass/main.css">
    <link rel="stylesheet" href="https://parsleyjs.org/src/parsley.css">
    <title>Quizz</title>
</head>
<body class="main">
       <section class="first_logo">
         <h1 class="first_logo_text" >aws</h1>   
         <img class="first_logo_img" src="sass/img/aws-logo.png" alt="logo pic"> 
       </section>    
       <form action="" method="POST" data-parsley-validate>
          <h3 class="label">Enter your name to start</h3>
          <input data-parsley-trigger="keyup"  data-parsley-type="text" class="name" type="text" required>
          <button class="submit">Submit</button>
       </form>
</body>
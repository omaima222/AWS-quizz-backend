


let ajax = new XMLHttpRequest();
let method = "POST";
let url = "model/Questions.php";
let asynchronous = true;

ajax.open(method,url,asynchronous);
ajax.send();
let questions =[];

ajax.onreadystatechange = function(){
    if(this.readyState == 4 &&  this.status==200){
      let data = JSON.parse(this.responseText);
      for(let i=0;i<data.length;i++){

        let options =[];
        options.push({option: data[i].option_A});
        options.push({option: data[i].option_B});
        options.push({option: data[i].option_C});
        options.push({option: data[i].option_D});

        let explanation=[];
        explanation.push({question: data[i].question});
        explanation.push({exp: data[i].explanation});
        explanation.push({corr: data[i].corr});
        explanation.push({answer: data[i].answer});
      
        questions.push({explanation,options,question: data[i].question });

      }
     
    }
}

console.log(questions);





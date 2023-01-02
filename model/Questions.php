
<?php
  require 'connection.php';

class Questions extends Connection {


   public function getdata(){
    $stmt = $this->connect()->prepare("SELECT * FROM questions 
                                      INNER JOIN options on options.id= questions.options_id
                                      INNER JOIN explanation on explanation.id= questions.explanation_id");
    $stmt->execute();

    $data = $stmt->fetchAll(); 

    echo json_encode($data);
    }
    
}

$que = new Questions();
$que->getdata();

?>


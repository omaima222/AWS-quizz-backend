
<?php
  require '../model/connection.php';

//   $conne = new Connection();

//   $conne->connect();

class Questions extends Connection {


   public function getdata(){
    $stmt = $this->connect()->prepare("SELECT * FROM questions ");
    $stmt->execute();
    $data = $stmt->fetchAll(); 
    echo json_encode($data);
   }
}

$que = new Questions();
$que->getdata();

?>
<script src="ajax.js"></script>

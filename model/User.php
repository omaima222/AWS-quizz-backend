
<?php
  require 'connection.php';

class User extends Connection {
    
    public function insertData(){
        $name = $_POST['name'];
        $ip = $_SERVER['REMOTE_ADDR'];
        $browserAndOS=$_SERVER['HTTP_USER_AGENT'];
        $date=date("Y-m-d h:i:s");
        $stmt= $this->connect()->prepare("INSERT INTO user VALUES(null,?,?,?,?,?)");
        $stmt->execute([$name,$ip,$browserAndOS,$date,0]);
    }
    public function update(){
        $score=3;
        $stmt = $this->connect()->prepare("UPDATE user SET score=?");
        $stmt->execute([$score]);
    }
}

if(isset($_POST['submit'])){
    $user = new User();
    $user->insertData();
    header('Location: app.php');
}

// if(isset($_POST['UserChoice'])){
//     $user = new User();
//     $user->update();
// }
?>

<?php


class Connection{
  
    private $username="root";
    private $password="";
    private $database_name="quizz";
    private $localhost="localhost";
  
    public function connect(){
        try {
            $conn = new PDO("mysql:host=$this->localhost;dbname=$this->database_name", $this->username, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $conn;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            return $e;
        }
    }
}








?>
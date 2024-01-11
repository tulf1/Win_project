<?php
$conn = mysqli_connect('localhost' , 'root', '', 'win_project_database');

if(!$conn){ 
    echo 'Error : ' . mysqli_connect_error();
}

?>
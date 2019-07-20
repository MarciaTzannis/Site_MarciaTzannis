<?php
    $host = 'localhost';
    $user = 'root';
    $pass = 'root';
    $banco = 'likes';   //Nome do meu Banco de Dados

    $conectar = mysql_connect($host,$user,$pass);
    if($conectar){
        mysql_select_db($banco);
    }

?>
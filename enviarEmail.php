<?php

if (isset($_POST['email']) && !empty($_POST['email']) ) {

$nome = ($_POST['nome']);
$email = ($_POST['email']);
$mensagem = ($_POST['mensagem']);

$to = "marciatzannis@gmail.com";
$subject = "Contato - Dev Márcia Tzannis";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;

$header = "From: marciatzannis@gmail.com"."\r\n".
          "Reply-To: ".$email."\r\n".
          "X=Mailer:PHP/".phpversion();

if (mail($to,$subject,$body,$header)) {
    echo("Email enviado com sucesso!");
} else {
    echo("O email não pode ser enviado!");
}

}

?>
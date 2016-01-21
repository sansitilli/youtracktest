<?php

require_once("settings.php") ;

function makeSane($var) {
    return htmlspecialchars( stripcslashes(  trim( $var ) ) ) ;
}



$senderEmail = filter_var( $_POST["Email"], FILTER_SANITIZE_EMAIL ) ;
$senderName =  makeSane($_POST["Name"] ) ;
$emailSubject =  makeSane( $_POST["Subject"] ) ;
$emailMessage =  makeSane( $_POST["Message"] ) ;




$headers = "From: $sentFromEmail" . "\r\n" .
           "Reply-To: $senderEmail" . "\r\n" .
           "X-Mailer: PHP/" . phpversion() ;




if ( $_POST && !$_POST["Phone"] ) { //Phone is the HoneyPot
    if (filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {

        $emailMessageOut =  "From: $senderName - $senderEmail \n".
                            "Subject: $emailSubject \n\n".
                            "Message: \n".
                            "---------------- \n".
                            $emailMessage
                            ;
        mail($email, $emailSubject, $emailMessageOut, $headers);
    }

}

die();
?>

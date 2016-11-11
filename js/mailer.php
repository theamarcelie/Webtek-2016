<?php
 
    // Prosesserer POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Tar inn formfeltet og fjerner whitespace
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Sjekker om data ble sendt til maileren
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Responderer ved feilkode 400 (bad request) og avslutter
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Setter mottager epost 
        $recipient = "peder.holm.design@gmail.com";

        // Setter epost subjektet
        $subject = "New contact from $name";

        // Bygger epost innholdet
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Bygger epost header
        $email_headers = "From: $name <$email>";

        // Sender epost
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Setter 200 som OK respons feilkode
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Setter 500 som intern server respons feilkode 
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Ikke POST forespørsel, setter 403 (forbidden) respons feilkode 
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>

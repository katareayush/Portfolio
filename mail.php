<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Format the email content
    $to = "katareayush2005@gmail.com";
    $subject = "New form submission";
    $email_body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    // Send the email
    mail($to, $subject, $email_body);
    
    // Redirect the user to a thank you page
    header('Location: thank_you.html');
    exit;
}
?>

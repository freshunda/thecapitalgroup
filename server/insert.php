<?php
// insert.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$connect = mysqli_connect("localhost", "root", "dru2hill", "capitalgroupins");
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
} 
echo "Connected successfully";

$form_data = json_decode(file_get_contents("php://input"));
$data = array();
$error = array();

if(empty($form_data->firstname))
{
    $error["firstname"] = "First Name is required";
}

if(empty($form_data->lastname))
{
    $error["lastname"] = "Last Name is required";
}

if(empty($form_data->email))
{
    $error["email"] = "A valid email address is required";
}

if(empty($form_data->phone))
{
    $error["phone"] = "A Phone Number is required";
}

if(empty($form_data->subject))
{
    $error["subject"] = "A brief message is required";
}

if(!empty($error))
{
    $data["error"] = $error;
}
else
{
    $firstname = mysqli_real_escape_string($connect, $data->firstname);
    $lastname = mysqli_real_escape_string($connect, $data->lastname);
    $email = mysqli_real_escape_string($connect, $data->email);
    $phone = mysqli_real_escape_string($connect, $data->phone);
    $subject = mysqli_real_escape_string($connect, $data->subject);

    $query = "INSERT INTO prospects(firstname, lastname, email, phone, subject) 
    VALUES ('$firstname', '$lastname', '$email', '$phone', '$subject')";

    if(mysqli_query($connect, $query))
        {
            $data["message"] = "Thank you for your inquiry!";
        }
}
echo json_encode($data);
?>

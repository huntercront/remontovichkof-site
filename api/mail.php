<?php
// Файлы phpmailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require './PHPMailer.php';
require './SMTP.php';
require './Exception.php';



// Переменные
header("Content-Type: application/json");
$v = json_decode(stripslashes($_GET["data"]));
$name = $v->name;
$number = $v->phone;
$from = $v->from;

$place = $v->place;//Что нужно отремонтировать
$placepize = $v->placesize; //Площадь помещения, м
$type = $v->type; //Тип недвижимости
$view = $v->view; //Вид ремонта
$services = $v->services; //доп.услуги
$expectedprice = $v->expectedprice; //цена из калькулятора





if($from == 'consult'){
	$Sub = "Заявка на консультацию";
	$Mail = "Имя - $name \nТелефон - $number";
}
if($from == 'inline'){
	$Sub = "Заявка на подбор и доставку";
	$Mail = "Имя - $name \nТелефон - $number";
}

if($from =='calculate'){
	$Sub = "Калькуляция цены";
	$Mail = "Имя - $name \nТелефон - $number\n\nЧто нужно отремонтировать - $place\nПлощадь помещения - $placesize\nТип недвижимости - $type\nВид ремонта - $view\nДоп.услуги - $services\n\nРисчитанная цена - $expectedprice руб.";
}
// if()

// Настройки
$mail = new PHPMailer;
// $mail->IsSMTP();  на локальном косте не работает
$mail->Host = "smtp.os.com"; 
$mail->SMTPAuth = true; 
$mail->Username = "localhosr@os.com"; // Ваш логин для smtp
$mail->Password = "123"; // Ваш пароль
$mail->SMTPSecure = "ssl"; 
$mail->Port = 587; // порт для smtp



$mail->setFrom("send@remontovichkof.ru"); // Ваш Email
$mail->addAddress("911@remontovichkof.ru"); // Email получателя

 
// Письмо


$mail->isHTML(true); 
$mail->Subject = $Sub; // Заголовок письма
$mail->Body = $Mail; // Текст письма

// Результат
if(empty($error)){
	if(!$mail->send()){
			$error[] = 'There was an error sending the mail. Please try again!';
	}
}
echo json_encode($v);
echo json_encode([
"status" => count($error)==0 ? 1 : 0,
"error" => $error
]);
?>
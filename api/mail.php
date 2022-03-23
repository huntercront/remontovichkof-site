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
$worktime = $v->worktime; //время ремонта из калькулятора
$location = $v->location; //локация




if($from == 'consult'){
	$Sub = "Заявка на консультацию - $location";
	$Mail = "Имя - $name \nТелефон - $number";
}
if($from == 'inline'){
	$Sub = "Заявка на подбор и доставку - $location";
	$Mail = "Имя - $name \nТелефон - $number";
}

if($from =='calculate'){
	$Sub = "Калькуляция цены - $location";
	$Mail = "Имя - $name \nТелефон - $number\n\nЧто нужно отремонтировать - $place\nПлощадь помещения - $placesize\nТип недвижимости - $type\nВид ремонта - $view\nДоп.услуги - $services\n\nРисчитанная цена - $expectedprice руб.\n\nРасчетное время - $worktime";
}
// if()

// Настройки
$mail = new PHPMailer;
// $mail->IsSMTP();  на локальном косте не работает
$mail->IsSMTP();
$mail->Host = $_ENV['mail_server']; 
$mail->SMTPAuth = true; 
$mail->Username = $_ENV['mail_login']; // Ваш логин для smtp
$mail->Password = $_ENV['mail_pwd']; // Ваш пароль
$mail->SMTPSecure = $_ENV['mail_secure_method'] ;
$mail->CharSet = 'UTF-8'; 
$mail->Port = $_ENV['mail_smtp_port']; // порт для smtp
// $mail->SMTPDebug = 2; для отладки 




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
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
$name = strip_tags($v->name);
$number = strip_tags($v->phone);
$from = strip_tags($v->from);

$place = strip_tags($v->place);//Что нужно отремонтировать
$placesize = strip_tags($v->placesize); //Площадь помещения, м
$type = strip_tags($v->type); //Тип недвижимости
$view = strip_tags($v->view); //Вид ремонта
$services = strip_tags($v->services); //доп.услуги
$expectedprice = strip_tags($v->expectedprice); //цена из калькулятора
$worktime = strip_tags($v->worktime); //время ремонта из калькулятора
$location = strip_tags($v->location); //локация




if($from == 'consult'){
	$Sub = "Заявка на консультацию - сайт $location";
	$Mail = "Имя - $name \nТелефон - $number";
}
if($from == 'inline'){
	$Sub = "Заявка на подбор и доставку - сайт $location";
	$Mail = "Имя - $name \nТелефон - $number";
}

if($from =='calculate'){
	$Sub = "Калькуляция цены - сайт $location";
	$Mail = "Имя - $name \nТелефон - $number\n\nЧто нужно отремонтировать - $place\nПлощадь помещения - $placesize\nТип недвижимости - $type\nВид ремонта - $view\nДоп.услуги - $services\nРисчитанная цена - $expectedprice руб.\nРасчетное время - $worktime";
}


// Настройки
$mail = new PHPMailer;
// $mail->IsSMTP();  на локальном хосте не работает
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
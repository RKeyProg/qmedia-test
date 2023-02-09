<?php
$to = 'rkey_rs@mail.ru';
if (!$to) {
  $BAD = 'Поле $to не заполнено';
}

$theme = 'Заявка на семинар';

if ($_POST["name"]) {
  $name = strip_tags($_POST["name"]);
} else {
  $BAD = 'Поле name не заполнено';
}

if ($_POST["email"]) {
  $email = strip_tags($_POST["email"]);
} else {
  $BAD = 'Поле email не заполнено';
}

if ($_POST["seminar"]) {
  $seminar = strip_tags($_POST["seminar"]);
} else {
  $BAD = 'Не выбран тип семинара';
}

$message = 'Пользователь ' . $name . ' с емайлом ' . $email . ' отправил заявку на семинар по ' . $seminar;

$send = @mail($to, $theme, $message);

if ($send) {
  echo 'Сообщение отправлено';
} else {
  echo 'не удалось отправить сообщение' . '<br />' . $BAD;
}
?>
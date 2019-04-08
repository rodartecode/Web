<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $text = htmlspecialchars($_POST['text']);
  $radio = htmlspecialchars($_POST['radio']);
  $check  = htmlspecialchars($_POST['check']);
  $option = htmlspecialchars($_POST['option']);
  echo 'text: ' $text, ' ', $radio, ' ', $check, ' ', $option;
?>
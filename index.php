<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/header.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="./css/animation.css" />
    <link rel="stylesheet" href="./css/class.css" />
    <data-js style="display: none;">
        <username><?php
if (!empty($_COOKIE["USERSP"])) {
  echo $_COOKIE["USERSP"];
} else {
  echo "NOT CONNECTED!";
}
setcookie("USERSP", "ATLAbanana35" , time() + 1000000, "/", "localhost")
?></username>
    </data-js>
</head>

<body>
    <header>
        <img src="./img/ACCOUNT_IMAGE.png" alt="ACCOUNT_IMAGE" />
        Connecté en tant que : <?php
if (!empty($_COOKIE["USERSP"])) {
  echo $_COOKIE["USERSP"];
} else {
  echo "NOT CONNECTED!";
}
?>

    </header>
    <main></main>
    <script src="./js/AppClient.js"></script>
    <script src="./js/Animation.js"></script>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Installing</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <main>
        <h1>Vous question : </h1>
        <?php
        echo "ARRAY GENERATING";
$Question = [];
foreach ($_POST as $key => $value) {
    if (explode("X", $key)[1] == "Q") {
        if ((int) $key[1].$key[2] != $key[1]."X") {
            $Question[$key[1].$key[2]] = [
                "Question" => $value,
            ];        } else {
                $Question[$key[1]] = [
                    "Question" => $value,
                ];
        }

    } elseif (explode("X", $key)[1] == "R") {
        if ((int) $key[1].$key[2] != $key[1]."R") {
            $Question[$key[1].$key[2]][$value] = explode("_",$key)[1];
        } else {
            $Question[$key[1]][$value] = explode("_",$key)[1];
        }
    }
}
echo "</br>ARRAY GENERATED! : ";
echo "<pre>";
print_r($Question);
echo "</pre>";
echo "</br>FILE ENR...";
file_put_contents("../client/qu.json",json_encode($Question));
file_put_contents("../client/progress.json","{}");
echo "</br>All OK";
?>
    </main>
    <style>
    body {
        background: rgb(182, 91, 91);
        font-family: Arial, Helvetica, sans-serif;
    }

    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 70%;
        background-color: white;
        border: 10px solid black;
        border-radius: 20px;
        box-shadow: inset 0 0 20px 0px;
        overflow: scroll;
    }

    input {
        padding: 10px;
        background-color: salmon;
        color: black;
        border-radius: 20px;
        transition: 0.5s;
    }

    input[type="submit"]:hover {
        letter-spacing: 5px;
    }

    .red {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: red;
    }
    </style>
</body>

</html>
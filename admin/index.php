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

        <h2>Entrez vos Questions</h2>
        <form action="./submit.php" method="post">
            <input type="submit" value="Valider" class="remove">

        </form>
        <br>
        <button class="addAsk">Add Question (avant de marquer qqch)</button>
        <script src="AppAdmin.js">
        </script>
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
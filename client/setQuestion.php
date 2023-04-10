<?php
if (!empty($_GET["Question"]) && !empty($_GET["username"])) {
    $JSON = json_decode(file_get_contents("./qu.json"));
    echo $_GET["Question"];
    if ($_GET["Question"] == "Z") {
        $_GET["Question"] = "0";
    }
    if (!empty($JSON->{$_GET["Question"]}) || $_GET["Question"] == "0") {
        echo "JSON_OK!";
        $REQUEST_JSON = json_decode(file_get_contents("./progress.json"));
        $REQUEST_JSON->{$_GET["username"]} = $_GET["Question"];
        file_put_contents("./progress.json", json_encode($REQUEST_JSON));
    }
}
?>
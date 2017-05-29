<?php


class Mclass {

    var $name;
    var $birth;

    function RequestInfo()
    {
        $name = $_GET["name"];
        $birth = $_GET["birth"];

        $this->name = $name;
        $this->birth = $birth;
    }

    function ResponseInfo($value='')
    {
        $data = array(
            "name" => $this->name,
            "birth" => $this->birth
        );

        echo json_encode($data);
    }

}

$user = new MClass();
$user->RequestInfo();
$user->ResponseInfo();
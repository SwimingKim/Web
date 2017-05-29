<?php

    $connect = mysqli_connect(
        'localhost',
        'root',
        'secret',
        'database'
    ) or die('Error'.mysqli_error($connect));

    // 조회
    $select_sql = "SELECT * from user_db;";

    // 삽입
    $insert_sql = 'INSERT INTO user_db(`id`, `pw`) VALUES ("devsu", "secret");';

    // 수정
    $update_sql = 'UPDATE user_db SET `pw`="newscret" WHERE `id`="devsu";';

    // 제거
    $delete_sql = 'DELETE FROM user_db WHERE `id`="devsu";';

    // echo $sql;
    // exit();

    $result = mysqli_query($connect, $sql);

    $response_data = array(
        "result_code" => "SUCCESS",
        "result_data" => array()
    );

//----------------------------------

    // 쿼리실행후리턴받은결과객체->num_rows : 조회결과 갯수
    if ($result->num_rows > 0) {
        $i = 0;
        // mysqli_fetch_assoc(쿼리실행후리턴받는결과객체)
        while ($row = mysqli_fetch_assoc($result)) {
            $response_data["result_data"][$i++] = $row;
        }
    }

    // mysqli_affected_rows(connect변수) : 쿼리성공 갯수
    $result_count = mysqli_affected_rows($connect);

//----------------------------------
    echo json_encode($response_data);
    mysqli_close($connect);

    


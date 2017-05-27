# HTML5 & CSS

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>총 정리</title>
    <style type="text/css">
        /*내부 스타일 정의*/

        th,
        td {
            border: 2px solid black;
        }
    </style>
    <!-- 외부 스타일 정의 -->
    <!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
    <script type="text/javascript" src="script.js">
        // 자바 스크립트 작성
    </script>
</head>

<body>
    <!-- 시맨틱 태그 -->
    <header>
        <nav>
        </nav>
    </header>
    <section>
        <article>
        </article>
    </section>
    <footer></footer>

    <p style="border:2px solid black"></p>
    <!-- 리스트 안내 -->
    <ul>
        <li>리스트1</li>
        <li>리스트2</li>
    </ul>
    <ol>
        <li>번호1</li>
        <li>번호2</li>
    </ol>
    <dl>
        <dt>용어1</dt>
        <dd>설명1</dd>
    </dl>

    <!-- 글자 효과 -->
    <p>한 단락 구분</p>
    <em>이탤</em><i>릭체</i>
    <b>강조</b>
    <br>한 줄 띄우기<br>
    <a href="http://naver.com">링크걸기</a>

    <!-- 폼 효과 -->
    <form>
        <p><label for="name">이름</label><input type="text" id="name"></p>
        <p><label for="radioOn">라디오on</label><input type="radio" name="radioSet" id="radioOn">
            <label for="radioOff">라디오off</label><input type="radio" name="radioSet" id="radioOff"></p>
        <p><label for="check">체크박스</label><input type="checkbox" id="check"></p>
        <p><input type="submit" value="전송"></p>
        <p><input type="reset" value="초기화"></p>
        <p><input type="button" value="닫기" onclick="self.close();"></p>
    </form>

    <!-- 제목 효과 -->
    <h1>첫번째</h1>
    <h2>두번째</h2>
    <h3>세번째</h3>

    <!-- 표 그리기 -->
    <table>
        <caption>캡션입니다</caption>
        <tr>
            <th>제목</th>
            <th>입니다</th>
        </tr>
        <tr>
            <td>내용</td>
            <td>이다</td>
        </tr>
    </table>

    <!-- 구분 -->
    <fieldset>
        <legend>제목을 정하고</legend>
        <p>내용을 이렇게 씁니다</p>
    </fieldset>

    <!-- 이미지맵 -->
    <img src="map.png" alt="이미지 맵" usemap="#map">
    <map name="map">
      <area shape="rect" coords="0,0,128,116" href="http://www.twitter.com" title="트위터">
      <area shape="rect" coords="129,0,250,116" href="http://www.facebook.com" title="페이스북">
    </map>
</body>

</html>
```

# JavaScript
## 기본문법
- 기본 자료형

```
기본자료형
  수치형(number), 문자형(string), 부울형(boolean),
  객체형(object), undefined
```

- 입출력

```
alert("알러트다");
confirm("컴펌이다");
prompt("프롬프다", "여기 뭐게?");
```

- 조건문

```
if (true) {} else {}

switch (x) {
    case 0:
        break;
    default:
}
```

- 반복문

```
for (var i = 0; i < 10; i++) {
    document.write(i + "<br>");
}
for (var x in myCar) {
  var txt = myCar[x];
  document.write(txt + "<br>");
}

while (true) {
}

do {
} while (true);
```

- 함수

```
function clac() {
    var x = document.getElementById("x").value;
    var sum = parseInt(x);
    document.getElementById("sum").value = sum;
}

func 함수이름(인자1, 인자2) {
  // 실행할 코드
  return 결과값;
}

func  msg(name, position) {
    alert(name + "과" + position);
}
var msg = function() {
    alert("안녕");
}
```

- 객체 생성

```
var newCar = {
    model: "benz",
    color: "black",
    speed: 60,
    brake: function() {
        this.speed -= 100;
    },
    accel: function() {
        this.speed += 100;
    }
}

function bag(color, price, qulity) {
    this.color = color;
    this.price = price;
    this.quality = qulity;
    this.up = function() {
        this.price += 100;
    }
    this.down = function() {
        this.price -= 100;
    }
}
var miniBag = new bag("blue", 1000, 5);
document.write(miniBag.price + "<br>");
miniBag.down();
document.write(miniBag.price + "<br>");
// 기존 생성자에 추가
miniBag.spot = "서울";
miniBag.change = function() {
    miniBag.color = "black";
};

function Point(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
}
Point.prototype.getDistance = function(p) {
    return Math.sqrt(this.x * this.y + this.y * this.x);
}
```

- 클로져

```
function makeCounterFunction(initVal) {
    var count = initVal;

    function Increase() {
        count++;
        console.log(count);
    }
    return Increase;
}
var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);
counter1();
counter2();
```

- 배열

```
var haha = ["apple", 3, true];
var array1 = new Array();
var array2 = new Array("1", "2", "3");
```


- document 연관 메소드

```
document.write("쓰기");
document.getElementById("id").value; // 해당 아이디 객체의 값
document.FormName["name"+0].value; // 이름이 FormName인 요소의 이름이 name0인 객체의 값
```

# JQuery - JQueryMobile
하이브리드 앱

# PHP #

```
<?php
    echo '문자열 출력'."</br>";
    $name = '이름;
    $damage = mt_rand(5, 30);

    $arr = array(10, array(1, 2, 3), 30, 40, 50, 60, 70, 80, 90, 100);
    print_r($arr[1][2]);

    $monsterDic1 = array(
        "name" => "오우거",
        "levle" => 5,
        "hp" => 100,
        "weapons" => array(
            "sword" => "빛나는 검",
            "gun" => "따발 총",
            "bow" => ""
        ),
        "stage" => array("stage1", "stage2", "stage3", "stage4", "stage5")
    );
    echo json_encode($monsterDic1);

    $getVal = $_GET["get"];
    $postVal = $_POST["post"];
?>
```

# MySQL
```
-- 삽입
INSERT INTO user_db (`id`, `password`, `best_click_count`, `total_click_count`, `ctype`) VALUES ('User6', '6666', 3, 10, 2);

-- 수정
UPDATE user_db SET `password`=2222 WHERE `id` = 'User2';

-- 삭제
DELETE FROM user_db WHERE `id` = 'User5';

-- 조회
SELECT*FROM user_db WHERE `id` = 'User4';
SELECT*FROM user_db WHERE `ctype` != 2;
SELECT*FROM user_db WHERE `total_click_count` BETWEEN 2 AND 6;
SELECT*FROM user_db WHERE `id` LIKE '%er%';
```
// 자바 스크립트 정리
//
// 기본자료형 : 수치형(number), 문자형(string), 부울형(boolean)
//           + 객체형(object), undefined
// 객체형 예시

var myCar = {
    model: "bmz",
    color: "red",
    hp: 100
};
document.write(myCar.color + "<br>");

// document 연관 메서드
/**
document.write("쓰기");
document.getElementById("id").value; // 해당 아이디 객체의 값
document.FormName["name"+0].value; // 이름이 FormName인 요소의 이름이 name0인 객체의 값
*/

// 조건문
// if (true) {} else {}

// switch (x) {
//     case 0:
//         break;
//     default:
// }

// 반복문
for (var i = 0; i < 10; i++) {
    document.write(i + "<br>");
}

// while (true) {
// }

// do {
// } while (true);

for (var x in myCar) {
    var txt = myCar[x];
    document.write(txt + "<br>");
}

// 배열
var haha = ["apple", 3, true];
var array1 = new Array();
var array2 = new Array("1", "2", "3");

// 함수
function clac() {
    var x = document.getElementById("x").value;
    var sum = parseInt(x);
    document.getElementById("sum").value = sum;
}

func  msg(name, position) {
    alert(name + "과" + position);
}
var msg = function() {
    alert("안녕");
}
// msg();

// 입출력
/**
alert("알러트다");
confirm("컴펌이다");
prompt("프롬프다", "여기 뭐게?");
*/

// 객체 생성 및 사용
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
document.write(newCar.speed + "<br>");
newCar.accel();
document.write(newCar.speed + "<br>");

// 생성자
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
var p1 = new Point(10, 20);
var d1 = p1.getDistance();
var p2 = new Point(10, 30);
var d2 = p2.getDistance();
document.write("d1=" + d1 + "<br>d2=" + d2 + "<br>");

// justObj.toString() = function() {
//   return "새로 생성된 객체입니다"
// }
// document.write(justObj.toString());
// document.write("메롱");



/////////////////////////////
// 주의할 함수
var num = 3;
num.constructor;
if (typeof num == 'number') {};
if (!num.a) {};

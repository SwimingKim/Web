var result = 0;

console.time('duration_sum');

for (let i = 0; i < 1000; i++) {
   result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

console.log('파일 이름 : %s', __filename);
console.log('파일 경로 : %s', __dirname);

var Person = {
   name: "소녀시대",
   age: 20
};
console.dir(Person);

console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

if (process.argv.length > 2) {
   console.log('세번째 파라미터의 값 : %s', process.argv[2]);
}

process.argv.forEach(function(item, index) {
   console.log(index + " : ", item);
});

// console.dir(process.env);
// console.log('OS 환경변수의 값 : ' + process.env[OS]);

// var calc = {};
// calc.add = function(a, b) {
//   return a+b;
// }
// console.log('모듈 분리 전 calc.add 결과 : %d', calc.add(10, 10));

exports.add = function(a, b) {
   return a + b;
}
var calc = require('./calc');
console.log('모듈 분리 후 calc.add 결과 : %d', calc.add(10, 10));

var calc2 = require('./calc2');
console.log('모듈 분리 후 calc2.add 결과 : %d', calc2.add(10, 10));

var nconf = require('nconf');
nconf.env();

console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));

var os = require('os');
console.log('hostname : %s', os.hostname());
console.log('메모리 : %s', os.freemem(), os.totalmem());
console.log('CPU정보\n');
console.log(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.log(os.networkInterfaces());

var path = require('path');

var direct

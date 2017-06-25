// Express 기본 모듈 불러오기
var express = require('express'),
    http = require('http'),
    path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    static = require('serve-static'),
    errorHandler = require('errorHandler');

// 오류 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');

// 몽고디비 모듈 사용
var mongodb = require('mongodb');
// mongose 모듈 불러들이기
var mongoose = require('mongoose');

// crypto 모듈 불러들이기
var crypto = require('crypto');

var user = require('./routes/user');
var config = require('./config');
var route_loader = require('./routes/route_loader');

// 익스플레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000)

// body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

// public 폴더를 static으로 오픈
app.use('/public', static(path.join(__dirname, 'public')));

// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));


// 데이터 베이스 객체를 위한 변수 선언
var database;
// 데이터베이스 스키마 객체를 위한 변수 선언
// var UserSchema;
// 데이터베이스 모델 객체를 위한 변수 선언
// var UserModel;

// 데이터베이스에 연결
function connectDB() {
    // 데이터베이스 연결 정보
    var databaseUrl = 'mongodb://localhost:27017/local';

    // 데이터베이스 연결
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;

    database.on('error', console.error.bind(console, 'mongoose connection error'));
    database.on('open', function() {
        // user 스키마 및 모델 객체 생성
        createUserSchema(database);
    });
    database.on('disconnected', connectDB);

    app.set('database', database);
}

// user 스키마 및 모델 객체 생성
function createUserSchema(database) {

    // init 호출
    // user.init(database, UserSchema, UserModel);

    // user_schema.js 모듈 불러오기
    database.UserSchema = require('./database/user_schema').createSchema(mongoose);

    // // UserModel 모델 정의
    database.UserModel = mongoose.model("users3", database.UserSchema);
    console.log('User Model 정의함');
}


// 라우터 객체 참조
var router = express.Router();
// 4. 로그인 처리 함수를 라우팅 모듈을 호출하는 것으로 수정
router.route('/process/login').post(user.login);
// 5. 사용자 추가 함수를 라우팅 모듈을 호출하는 것으로 수정
router.route('/process/adduser').post(user.adduser);
// 6. 사용자 리스트 함수를 라우팅 모듈을 호출하는 것으로 수정
router.route('/process/listuser').post(user.listuser);

// 라우터 객체 등록
app.use('/', router);



// ====== 404 오류 페이지 처리 ====== //
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

route_loader.init(app, express.Router());

// ====== 서버 시작 ====== //
http.createServer(app).listen(app.get('port'), function () {
    console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'))

    // 데이터베이스 연결
    connectDB();
});

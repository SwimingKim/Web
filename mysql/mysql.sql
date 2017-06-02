show databases;
use game_db;
use socialgame_db; 

-- 삽입
INSERT INTO user_db (`id`, `password`, `best_click_count`, `total_click_count`, `ctype`) VALUES ('User6', '6666', 3, 10, 2);

-- 수정
UPDATE user_db SET `password`=2222 WHERE `id` = 'User2';

-- 삭제
DELETE FROM user_db WHERE `password` = '1111';
DELETE FROM user_tb WHERE `total_star_count` = 3;
DELETE FROM plane_purchase_tb WHERE `user_id` = " 아이디로 로그인을 시도함.";
DELETE FROM user_tb WHERE `user_id` = " 아이디로 로그인을 시도함.";

-- 조회
SELECT*FROM user_db WHERE `id` = 'User4';
SELECT*FROM user_db WHERE `ctype` != 2;
SELECT*FROM user_db WHERE `total_click_count` BETWEEN 2 AND 6;
SELECT*FROM user_db WHERE `id` LIKE '%er%';
-- 랭킹 조회
SELECT `id`, `best_click_count` FROM user_db ORDER BY `best_click_count` DESC LIMIT 10;

SELECT*FROM user_db;
SELECT*FROM user_tb;
SELECT*FROM plane_purchase_tb;

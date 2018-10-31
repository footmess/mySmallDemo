<<<<<<< HEAD
<?php
//获取用户发来的数据
$message=$_POST['message'];
//通过switch，让回答跟合理
/*
		    每一次的随机 都是 先
			读取json文件  str
			json_decode() str->php数组
			获取随机的key	array_rand
			通过随机的key 返回 对应的值 echo $arr[$key]
*/
switch($message){
   case '你好':
              $jsonStr = file_get_contents('info/hello.json');
              $phpArr = json_decode($jsonStr);
              $randomKey = array_rand($phpArr,1);
              echo $phpArr[$randomKey];
              break;
    default:
               $jsonStr = file_get_contents('info/messages.json');
               $phpArr = json_decode($jsonStr);
               $randomKey = array_rand($phpArr,1);
               echo $phpArr[$randomKey];
               break;
}
=======
<?php
//获取用户发来的数据
$message=$_POST['message'];
//通过switch，让回答跟合理
/*
		    每一次的随机 都是 先
			读取json文件  str
			json_decode() str->php数组
			获取随机的key	array_rand
			通过随机的key 返回 对应的值 echo $arr[$key]
*/
switch($message){
   case '你好':
              $jsonStr = file_get_contents('info/hello.json');
              $phpArr = json_decode($jsonStr);
              $randomKey = array_rand($phpArr,1);
              echo $phpArr[$randomKey];
              break;
    default:
               $jsonStr = file_get_contents('info/messages.json');
               $phpArr = json_decode($jsonStr);
               $randomKey = array_rand($phpArr,1);
               echo $phpArr[$randomKey];
               break;
}
>>>>>>> 3492b03d624fc16b077c94c62587f9a59920f36b
?>
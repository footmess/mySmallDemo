<?php 
	// 读取json   str
	$str = file_get_contents('data/info.json');
	//一次想只返回一个
	// 转化为 php中的数组 str->php arr
	$arr = json_decode($str);
	// 从数组中 获取 某一个元素 array_rand(arr,1);  随机的index
	$randomKey = array_rand($arr,1);
	// 将获取到的单个 元素 返回给浏览器
	$one = $arr[$randomKey];    //这是PHP对象，传递数据只能是字符串
	// 所以需使用 json_encode 进行转化 obj ->str json 格式 字符串
	echo json_encode($one);
 ?>
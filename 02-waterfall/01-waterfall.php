<?php
  $jsonStr = file_get_contents('info/data.json');
  $toArr  = json_decode($jsonStr);
  $randomKeys = array_rand($toArr,10);
  $newArr=array();
  for($i=0;$i<count($randomKeys);$i++){
        $key = $randomKeys[$i];
        $obj = $toArr[$key];
        $newArr[$i] = $obj;
  }
  echo json_encode($newArr);
?>
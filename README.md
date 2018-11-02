# 记录前端学习中的小demo #

### 一.`小案例`   <br>
&nbsp;&nbsp;1.[带有定时器的无缝轮播图](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E5%B8%A6%E6%9C%89%E5%AE%9A%E6%97%B6%E5%99%A8%E7%9A%84%E6%97%A0%E7%BC%9D%E8%BD%AE%E6%92%AD%E5%9B%BE/index.html)    <br>
&nbsp;&nbsp;2.[旋转轮播图](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E6%A1%88%E4%BE%8B-%E6%97%8B%E8%BD%AC%E8%BD%AE%E6%92%AD%E5%9B%BE/index.html)     <br>
&nbsp;&nbsp;3.[手风琴](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E6%A1%88%E4%BE%8B-%E6%89%8B%E9%A3%8E%E7%90%B4/index.html)     <br>
&nbsp;&nbsp;4.[用户注册页](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E8%AE%BE%E8%AE%A1%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C%E9%A1%B5/index.html)     <br>
&nbsp;&nbsp;5.[搜索页](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E8%AE%BE%E8%AE%A1%E6%90%9C%E7%B4%A2%E9%A1%B5/index.html)     <br>
&nbsp;&nbsp;6.[日历表](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E8%AE%BE%E8%AE%A1%E6%97%A5%E5%8E%86%E8%A1%A8/index.html)      <br>
&nbsp;&nbsp;7.[放大镜](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E6%A1%88%E4%BE%8B-%E6%94%BE%E5%A4%A7%E9%95%9C/index.html
)       <br>
&nbsp;&nbsp;8.[花边框](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E8%AE%BE%E8%AE%A1%E8%8A%B1%E8%BE%B9%E6%A1%86/test.html
)       <br>
&nbsp;&nbsp;9.[跑步动画](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E8%B7%91%E6%AD%A5/index1.html)        <br>
&nbsp;&nbsp;10.[可折叠图片](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E8%AE%BE%E8%AE%A1%E5%8F%AF%E6%8A%98%E5%8F%A0%E5%9B%BE%E7%89%87/index.html)       <br>
&nbsp;&nbsp;11.[筋斗云导航栏](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E6%A1%88%E4%BE%8B-%E7%AD%8B%E6%96%97%E4%BA%91/index.html
)     <br>
&nbsp;&nbsp;12.[固定导航栏](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E6%A1%88%E4%BE%8B-%E5%9B%BA%E5%AE%9A%E5%AF%BC%E8%88%AA%E6%A0%8F/index.html)    <br>
### 二.`Ajax案例`    <br>
&nbsp;&nbsp;1.[聊天机器人](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/01-chatRobot/index.html)     <br>
&nbsp;&nbsp;2.[瀑布流加载](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/02-waterfall/index.html)     <br>
&nbsp;&nbsp;3.[一次加载一张图片](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/04-luowang/01-getMore%20%E6%A8%A1%E5%9D%97.html)    <br>

### 三.`综合项目`    <br>
&nbsp;&nbsp;1.[仿京东主页](https://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/仿京东主页/index.html)    <br>
&nbsp;&nbsp;2.[京东移动](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/%E4%BA%AC%E4%B8%9C%E7%A7%BB%E5%8A%A8/index.html)     <br>
&nbsp;&nbsp;3.[bootstrap案例](http://htmlpreview.github.io/?https://github.com/footmess/mySmallDemo/blob/master/bootstrap%E7%BB%83%E4%B9%A0/01.wjs.html)    <br>
### 四.JS中常用操作语句

####`判断操作语句`
>`if,else if,else`
```javascript
if(条件1){
     //=>条件1成立执行的操作 
}else if(条件2){
     //=>条件1不成立，条件2成立执行的操作
}
...
else{
    //=>以上都不成立执行的操作
}

如果好几个条件都成立了，只把第一个成立的条件执行，后面成立的条件忽略不管

条件：
A==B,A!=B,A>B,A<B
if(A){}先把A转换为布尔类型，判断真假以此来决定条件是否成立；
if(A>B && A<10){}
if(A>B || A<10){}
...
```
eg:
```javascript
var num = parseFloat('width:12.5px');
if(num == 12.5){
       alert(12.5);
}else if(num == NaN){
     alert(NaN);
}else if(typeof num == 'number'){
     alert(0);
}else{
  alert('啥也不是!');
}    //==>'0'
```
#### 三元运算符
>语法：`条件?条件成立执行：条件不成立执行；`
>
>等价于if(条件){}else if{}

```javascript
var num=10;
if(num>5 && num<=10){
     num++;
     console.log(num);
     }else if{
   }
//=>改为三元运算符
num>5 && num<10?(num++,console.log(num)):null；
```

#### switch case
>switch case应用于if，else中一个变量在不同值下的不同操作
```javascript
var num = 10;
switch(num){//=>switch后面小括号中存放的是一个值（一般我们都写变量，把变量存储的值拿来用，有时候也可能是一个计算）
     case 1:
        ...
        break;
     case 10://==>case后面放入的都是值，目的是验证switch后面的值和哪一种case后面的值相等，相等的进行对应的出理
        ...
        break;//=>每一种case结束后都要加break，结束当前的判断
     default;//switch后面的值和每一种case都不相等，执行最后的default,类似于else
     ...

}
```
>`switch case 中的比较使用的：===`
> =  :  赋值，等号左边是变量，右边是值
>  ==   : 比较，如果左右两边值得类型不一样，浏览器会默认转换为一样的然后再进行比较   
> === :   绝对比较，不仅要求值一样，并且类型也要完全一样

#### 循环操作语句
`for循环`
>创建for循环     ==>itar [TAB]  
```javascript
for( ; ; ){
    //=>循环体
}

for(var i=1;i<10;i+=2){
     if(i<5){
        i++;
        continue;   //结束当前循环，从加步长开始 contiuue后面的代码不执行
}else{
    i+=3;
    break;
}
     console.log(i);
}
console.log(i);    //10

```
#### for in 循环
>用来遍历（循环）对象键值对的
>创建for  in 循环      //==>itin  [TAB]

`for(property in expression)statement`
>1.property存储的值都是字符串格式的，（不管属性名是否为数字）
>2.在`for in`循环遍历的时候，大部分浏览器都是先把对象中的键值对进行排序（把数字属性名的排在前面，并且按由小到大排序），其次再把非数字的属性名按照声明顺序排序（小数算作字母不算做数字）

### 五.JS数据类型分类和检测
> - 基本数据类型（值类型）
>  + number:  数字
>   + string: 字符串 
>   + boolean ; 布尔
>   + null: 空对象指针
>   + undefined: 未定义
> - 引用数据类型
>   + object对象数据类型
>      + {}普通对象
>       + []数组
>       + /^$/正则
>       + ...
>     + function函数数据类型
```javascript
12 -12.5
'lyj' "lyj"  =>单双引号包裹起来的都是字符串 没区别
true false
null
undefined

{name:'lyj',age:1}
[12,23,34]
/^-?(\d|([1-9]\d+))(\.\d+)?$/
function fn(){}
...
```
#### 检测方式   => 4种
- typeof: 检测数据类型的操作符
- instanceof: 检测某个实例是否属于这个类
- constructor: 获取当前实例的构造器
- Object.prototype.toString.call: 获取当前实例的所属类信息

``typeof``
>使用typeof检测，返回的结果是一个字符串，字符串中包含的内容证明了值是属于什么类型的
>
>[局限性]
>1.typeof null 不是"null"而是"object";因为null虽然是单独的一个数据类型，但是它3原本意思是`空对象指针`，浏览器使用typeof检测时会把它按照对象来检测
>2.使用typeof无法具体细分出数字还是正则，因为返回的结果都是'object'
```javascript
typeof 12  //=>"number"
var num=12;
typeof num  //=>"number"
typeof null  //=>"object"
typeof undefined  //=>"undefined"
```
![Alt text](./捕获.PNG)
>eg: consloe.log(typeof typeof [ ]);     < ==>
>typeof [ ]   -->"object"
>typeof "object"   -->"string"


### 基本数据类型
#### 布尔
`Boolean()`  `把其它数据类型的值转换为布尔类型`
>只有`0.NaN.空字符串.null.undefined`这五个数据值转换为false，其余都会变成true
![Alt text](./1527508393336.png)

>!= : 不等于
>`!`在JS中还有一个作用： `取反`，先把值转换为布尔类型，然后再去取反
>`!!`在一个叹号取反的基础上再取反，相当于没操作，但把类型转换为布尔类型。相当于`Boolean( )`的效果


#### 字符串
>在JS中。单引号和双引号包起来的都是字符串
```javascript
21  ->number
'21' ->string
"[12,23]"  ->string
```
常用方法：
charAt   charCodeAt
substr   substring  slice
toUpperCase   toLowerCase
indexOf   lastIndexOf
split
replace
match
......


#### number数字类型
>0  12  -12  12.3   JS中有个特殊的number类型数据：`NaN`
>typeof NaN   ->"number"

`NaN`
>NaN  (not a number) :  不是一个数，但是属于number类型
>
>NaN == NaN ;   // =>false   NaN和任何其他值都不相等

`isNaN()`
>用来检测当前这个值是否是非有效数字 ，如果是非有效数字检测的结果是true，反之为false
```javascript
isNaN(0)   ->false
isNaN(NaN)  ->true

isNaN('12')  ->false 当我们使用isNaN检测值得时候，检测的值不是number类型时，浏览器会默认把值先转换为nubmer类型，然后再去检测
```

`Number()`
>把其它数据类型值转换为number类型的值
```javascript
Number('12')   ->12
Number('12px')   ->NaN  在使用Number转换的时候只要字符串中出现任何一个非有效数字字符，最后的结果都是NaN

Number(true)   ->1
Number(false)   ->0

Number(null)   ->0
Number(undefined)   ->NaN

Number([])  =>把引用数据类型转换为number，首先需要把引用数据类型转换为字符串（toString）,再把字符串转换为number即可 例如：[]->" "->0
Number([12])=>[12]->'12'->12
Number([12,23])=>[12,23]->"12,23"->NaN

Number({name:'lyj'})=>NaN
Number({})=>NaN
```


`parseInt`
>把字符串转换为number类型，和Number( )方法有区别
```javascript
Number('12px')   //NaN
parseInt('12px')   //12
parseInt('12px13')  //12   提取规则：从左到右依次查找有效数字字符，直到遇到非有效数字字符为止，把找到的转换为数字。
parseInt('px12')   //NaN
```
`parseFloat`
>在parseInt的基础上可以识别小数点
```javascript
parseInt('12.5px')   //12
parseFloat('12.5px')   //12.5
```

#### null和undefined
>null:空对象指针    
>undefined:未定义
>
>'  ':空字符串

`空字符串和null的区别`
>空字符串相对于null来说开辟了内存，消耗了一丢丢的性能

`null和undefined的区别`
>null一般都是暂时没有，预期中以后会有的（可能以后也没有达到预期），在JS中null一般都是手动先赋值为null，后期再给它赋具体值
>
>nudefined:完全没在预料之内的


### 引用数据类型
#### 对象数据类型object
>var obj = {name:'lyj',age:1};
>每个对象都是由零到多组`属性名（key键）：属性值（value值）`组成，或者说由多组键值对组成，每一组键值对中间用逗号分隔。
>
>属性：描述这个对象特点特征的
>对象的属性名是字符串或者数字格式的，存储的属性值可以是如何的数据类型
>
>对象名.属性名；  忽略了属性名的单双引号
>对象名[属性名]；  不能忽略单双引号

```javascript
var obj = {name:'lyj',age:1，5:true};
==>获取某个属性名对应的属性值
obj.name
obj.['name']
// 如果属性名是数字如何操作
obj.5  语法不支持
obj.[5]/  obj.['5']   都可以
//  如果操作的属性名在对象中不存在，获取的结果是undefined
obj.sex  ->undefined

//设置/修改
obj.sex='男';
obj['age']=2;

//删除
   //假删除：让其属性值赋值为null，但是属性还在对象中
   obj.sex = null;
   //真删除： 把整个属性都从对象中暴力移除
   delete obj.sex;

obj.key
obj['key']
obj[key] //`P85`
```
#### 函数数据类型
>函数数据类型也是按照引用地址来操作的
>
>具有一定功能的方法
```javascript
//=>创建函数
function fn（）{
       //=>函数体：实现某一功能的具体JS代码
}
//执行函数
fn（）；

函数只创建不执行没有意义：因为空间中存储的都是毫无意义的`字符串`；

```

### 基本数据类型和引用数据类型的区别
>JS是运行在浏览器中的（浏览器内核引擎），浏览器会为JS提供赖以生存的环境（提供给JS代码执行的环境）==>`全局作用域window(global)`
```javascript
var a = 12;
var b = a;
b = 13;
console.log(a);    //12

var obj1 = {name:'lyj'};
var obj2 = obj1;
obj2.name = 'fj';
console.log(obj1.name);    //'fj' 
```
`基本数据类型是按值操作的`：基本数据类型在赋值的时候，是直接把值赋给变量      `栈中`
`引用数据类型时按引用地址（空间地址）操作的`：引用数据类型在赋值的时候，把指向对象的指针赋给变量         `堆中`

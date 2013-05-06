﻿;
(function() {
	//定义测试模块
	module( "测试示例" );
	//定义一个简单的函数，判断参数是不是数字
	function simpleTest(para) {
	  if(typeof para == "number") {
	    return true;
	  }
	  else{
	    return false;
	  }
	}
	//开始单元测试
	test('simpleTest()', function() {
	  //列举各种可能的情况，注意使用 ! 保证表达式符合应该的逻辑
	  ok(simpleTest(2), '2是一个数字');
	  ok(!simpleTest("2"), '"2"不是一个数字');
	});
	$(document).ready(function(Q){
	    console.log("document onload ready:");
	    console.log(Q);
	    
	 	$("a").on("click",function(e){
			console.log(e.target)
		})
		$("a").trigger("click")
	});


})();
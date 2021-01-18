var arr=[1,5,6,3,-1,2,-1,2,1,5,5];
	//NO.1--ES5常用 双重for循环，再利用splice方法去重
	var unique1=function () {
	 	for(var i=0,len=arr.length;i<len;i++){
	 		for(var j=i+1,len=arr.length;j<len;j++){
	 			if(arr[i]===arr[j]){
	 				arr.splice(j,1);
	 				j--; //每删除一个数j的值就减1;
	 				len--;//j值减少时len也要相应减1(减少循环次数，节省性能)
	 			}
	 		}
	 	}
	 	console.log(arr) 
	 };

	 //NO.2--利用数组的indexOf()方法去重
	var unique2=function(){
		var arr2=[];
		for(var i=0,len=arr.length;i<len;i++){
			if(arr2.indexOf(arr[i])===-1){
				arr2.push(arr[i]);
			}
		}
		console.log(arr2)
	}  
	
	//NO.3--利用数组的sort方法去重(相邻元素对比法)
	//注：array.sort(function)参数必须是函数，可选，默认升序
	var unique3 = function(){
		arr=arr.sort();
		console.log(arr);
		var arr3=[arr[0]];
		for (var i = 1,len=arr.length; i < len; i++){
			if(arr[i]!==arr[i-1]){
				arr3.push(arr[i]);
			}
		}
		console.log(arr3);
	}

	//NO.4--利用数组的filter方法去重
	var unique4=function(){
		var arr4=arr.filter(function (item,index) {
			return arr.indexOf(item,0)===index;
		})
		console.log(arr4);
	}

	//NO.5--利用函数递归去重
	var unique5=function () {
		var arr5=arr;
		var len=arr5.length;
		arr5.sort((a,b)=>{
			return a-b;
		})
		function loop(index) {
			if(index>=1){
				if(arr5[index]===arr5[index-1]){
					arr5.splice(index,1);
				}
				loop(index-1); //递归loop,然后数组去重
			}
		}
		loop(len-1);
		console.log(arr5);
	}

	//NO.6--利用ES6中的Map方法去重
	//创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。
	var unique6=function () {
		let map=new Map();
		console.log(map);
		let arr6=[];
		for(let i=0,len=arr.length;i<len;i++){
			if(map.has(arr[i])){
				map.set(arr[i],true);
			}else{
				map.set(arr[i],false);
				arr6.push(arr[i]);
		    }
		}
		console.log(arr6);
	}

	//NO.7--利用ES6中的Set方法去重
	//Set为ES6新增的一个对象，允许存储任何类型(原始值或引用值)的唯一值
	var unique7=function() {
		console.log(Array.from(new Set(arr)));
	}
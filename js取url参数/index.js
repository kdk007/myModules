		function querystring(qs) {
			// var s=window.location.href;
			//例如下：
			var s='http://www.runoob.com/index.php?id=1&image=awesome.jpg';
			s=s.replace("?","?&").split("&");
			var re="";
			for(i=1;i<s.length;i++){
				if(s[i].indexOf(qs+"=")==0){
					re=s[i].replace(qs+"=","");
				}
			}
			// return re;	
			alert(re);

		}
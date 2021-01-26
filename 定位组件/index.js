$.ajax({
					// 根据ip定位
					url: 'http://api.map.baidu.com/location/ip?ak=ia6HfFL660Bvh43exmH9LrI6',
					//根据经纬度定位
					// url:'https://api.map.baidu.com/geocoder/v2/?ak=ia6HfFL660Bvh43exmH9LrI6&location=40.80772,111.62299&output=json&pois=0',
					type: 'POST',
					dataType: 'json',
					success:function(data) {
						// var a=JSON.stringify(data.content.address_detail.province + data.content.address_detail.city);
						// var reg = new RegExp("\"","g");
						// $("b").text(a.replace(reg,""));
						var a=JSON.stringify(data.content.address_detail.province);
						console.log(a);
						var reg = new RegExp("\"","g");
						var province=a.replace(reg,"");
						//调取省份赋code函数 	
						console.log(province);
					}
		});
var arrs=[];
	arrs[0]=[];
	arrs[1]=["秦皇岛","保定","石家庄","唐山"];
	arrs[2]=["济南","临沂","青岛","威海"];
	arrs[3]=["洛阳","郑州","开封","周口"];
	arrs[4]=["太原","大同","运城","忻州"];

	function selectShi() {
		var sheng=document.getElementById('sheng').value;
		console.log(sheng);
		var shi=document.getElementById("shi");
		console.log(shi);
		var shis=arrs[sheng];
		console.log(shis);

		var str="<option value=''>请选择市</option>";
		for (var i = 0; i < shis.length; i++) {
			str+="<option value=''>"+shis[i]+"</option>";
		}
		shi.innerHTML=str;
	}
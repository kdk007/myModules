$.ajax({
     type: "GET",
     url: "http://120.92.101.187/index.php/index/index/getImgList",
     success: function(data){
        console.log(data.data);
        var group=data.data;
        var str='';
        for(var i=0;i<data.data.length-2;i++){
        	str+='<li><img src="'+data.data[i]+'" /></li>' 
        }
        var htm='<ul>'+str+'</ul>';
        $(".bo").html(htm);
        
    }
 });
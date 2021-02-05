$.ajax({
        url: 'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp',
        type: 'get',
        success: function (data,status,xhr) {  
                console.log(data);
                console.log(status);           
                console.log(xhr);
                var str = xhr.getResponseHeader('Date');  //获取Response Header里面的Date
                console.log('str:'+str);
                var date = new Date(str).getTime(); //把Date转换成时间对象
                console.log('date:'+date);
                
                var myDate=new Date(date); //转化为北京时间，date为时间戳
                var year=myDate.getFullYear();
                var month=myDate.getMonth()+1; 
                var date=myDate.getDate(); 
                var hour=myDate.getHours();       //获取当前小时数(0-23)
                var minute=myDate.getMinutes();
                var second=myDate.getSeconds();
                console.log(year,month,date,hour,minute,second);

                alert(myDate);  //弹出北京时间
        }
    });
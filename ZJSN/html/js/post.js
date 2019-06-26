//登陆
var  login=function(){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if (xhr.readyState==4&&xhr.status==200)
			{
				var result=xhr.responseText;
				if (result==1)
				{
					alert('登陆成功')
					window.location.href='http://127.0.0.1:8080/official.html'
				}else if (result==0)
				{
					d1.innerHTML='用户名或者密码错误';
					return;
				}else{
					d1.innerHTML=result;
					return;
				}
			}
		};
		xhr.open('post','/zjsn/login',true);	
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		var formdata='uname='+uname.value+'&upwd='+upwd.value;
		xhr.send(formdata);
	}
//注册
var  reg=function(){
   			var xhr=new XMLHttpRequest();
   			xhr.onreadystatechange=function(){
   				if (xhr.readyState==4&&xhr.status==200)
   				{
   					var result=xhr.responseText;
   					if (result==1)
   					{
   						alert('注册成功')
						window.location.href='http://127.0.0.1:8080/login.html'
   					}else if(result==0){
   					  d1.innerHTML='注册失败'
   					}else{
					    d1.innerHTML=result;
						return
					}
   				}
   			}
				if (box.checked!==true)
					{
					d1.innerHTML='请仔细阅读条款'
					return
				  }
   			xhr.open('post','/zjsn/reg',true);
   			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
   			var formdata='uname='+uname.value+'&phone='+phone.value+'&upwd='+upwd.value+'&cpwd='+cpwd.value+'&user_name='+user_name.value+'&email='+email.value+'&code='+code.value;
   			xhr.send(formdata)
   		}
//修改
var  update=function(){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
		  if (xhr.readyState==4&&xhr.status==200)
			{
				var result=xhr.responseText;
				if (result==1)
				{
					alert('修改成功')
					window.location.href='http://127.0.0.1:8080/login.html'
				}else if(result==0){
					d1.innerHTML='修改失败';
					return;
				}else{
					d1.innerHTML=result;
					return;
				}
			}
		}
		xhr.open('put','/zjsn/update',true);
		var formdata='phone='+phone.value+'&upwd='+upwd.value+'&cpwd='+cpwd.value
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
		xhr.send(formdata)
		}

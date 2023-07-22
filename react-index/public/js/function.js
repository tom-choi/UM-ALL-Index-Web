//调试模式
var debugmod=1;

//输出到控制台
function Printf(log)
{
    if(debugmod==1)
    {
        console.log(log);
    }
}

//获取GET值
function Get(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return "";
}

//获取html
/*
如果在open方法中第三个参数async设置为false，则请求是同步进行的。
换句话说，JavaScript 执行在send()收到响应时暂停并恢复。有点像alert或prompt命令。
这是重写的示例，的第三个参数open是false：
*/
function Get_Html(url)
{
    var request = new XMLHttpRequest();
    request.open("get", url,false);
    request.send();
    if(request.status==200)
    {
        var html=request.response;
        //Printf("status code:200\n"+html);
        return html;

    }else
    {
        Printf("Error Can't open the page! Status code: "+request.status);
        return "";
    }

    

}

function Post_Html(url,send)
{
    var request = new XMLHttpRequest();
    request.open("post", url,false);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    //request.send('name=teswe&ee=ef');//发送请求 将情头体写在send中
    request.send(send);
    if(request.status==200)
    {
        var html=request.response;
        //Printf("status code:200\n"+html);
        return html;

    }else
    {
        Printf("Error Can't open the page! Status code: "+request.status);
        return "";
    }

    

}
//获取json
function Get_Json(html)
{

    if (html!="") {
      var json = JSON.parse(html);
      //Printf(json);
      return json;
      
    }else
    {
        Printf("Error can't do it!");
        return null;
        
    }
  
}



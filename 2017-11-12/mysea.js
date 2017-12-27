const mysea = {

    use(path,callback)
    {
        //1. 通过pass 将 mod 读取
        let xhr = new XMLHttpRequest();
        xhr.open("get",path,true);
        xhr.send();
        xhr.onreadystatechange = function()
        {
            if(xhr.readyState==4)
            {
                if(xhr.status>=200 && xhr.status<300)
                {
                    //成功
                    let str = xhr.responseText;
                    
                    function define(fn){
                        let moudle = {
                            exprots:{}
                        };


                        fn(function(){},moudle.exprots,moudle);


                        callback(moudle.exprots);
                    }

                    eval(str);

                }else
                {
                    //失败
                    alert("失败");
                }
            }
        }

    }

}
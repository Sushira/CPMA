// className(object)

 var ele = document.getElementById('res');
function cal(obj)
{
   
    var ip=obj.innerHTML;
    if (ip == "=") 
    { 
        ele.innerHTML = eval(ele.innerHTML);
        // document.getElementById('res').innerHTML=eval(document.getElementById('res').innerHTML);
        // eval-JS function to evaluate
    }
    else if (ip == "AC") 
    {
        ele.innerHTML="0";
    }
    else if (ip == "C")
    {
        var n = ele.innerHTML.length; 
        ele.innerHTML=ele.innerHTML.slice(0,(ele.innerHTML.length-1));
    }
    else
    {
        if (ele.innerHTML == "0") 
        {
            ele.innerHTML=ip;
        }
        else
        {
            ele.innerHTML=ele.innerHTML+ip;
        }
    }
    
}

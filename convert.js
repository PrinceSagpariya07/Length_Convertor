// document.write("Hello");
var selec1 = document.getElementById("inputType");
var selec2 = document.getElementById("resultType");
function converter()
{    
    var a = selec1.value;
    var b = selec2.value;
                
    // console.log(a);
    // console.log(b);

    if(a=="meter" && b=="kilometer")
    {
        var inpu = document.getElementById("input1");
        var z = inpu.value
        var re = z/1000;
        // console.log(re);
        document.getElementById("result1").value = re;

    }

    else if(a=="meter" && b=="centimeter")
    {
        var inpu = document.getElementById("input1");
        var z = inpu.value
        var re = z * 100;
        document.getElementById("result1").value = re;

    }
                
    else if(a=="kilometer" && b=="meter")
    {
        var inpu = document.getElementById("input1");
        var z = inpu.value
        var re = z * 1000;
        // console.log(re);
        document.getElementById("result1").value = re;

    }

    else if(a=="kilometer" && b=="centimeter")
    {
        var inpu = document.getElementById("input1");
        var z = inpu.value
        var re = z * 100000;
        document.getElementById("result1").value = re;

    }

    else if(a=="centimeter" && b=="meter")
    {
        var inpu = document.getElementById("input1");
        var z = inpu.value
        var re = z/100;
        document.getElementById("result1").value = re;

    }

    else if(a=="centimeter" && b=="kilometer")
    {
        var inpu = document.getElementById("input1");
        var z = inpu.value
        var re = z/100000;
        document.getElementById("result1").value = re;

    }

    else
    {
        var inpu = document.getElementById("input1");
        var z = inpu.value
        document.getElementById("result1").value = z;

    }

}
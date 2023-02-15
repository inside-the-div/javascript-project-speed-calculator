document.getElementById("OutputResult").style = "display: none";
document.getElementById("OutputInfo").style = "display: flex";

function SpeedCalculatorFormValidate()
{
    RemoveAllErrorMessage();
    var validDistance = true, validTime = true, validSpeed = true;
    var distance = document.getElementById("distance").value;
    var time = document.getElementById("time").value;
    var speed = document.getElementById("speed").value;

 
    if(IsInputFieldEmpty("distance"))
    {
        ShowErrorMessageBottomOfTheInputFiled("distance", "Enter a value.");
        validDistance = false;
    }
    else if(isNaN(distance))
    {
        ShowErrorMessageBottomOfTheInputFiled("distance", "Enter correct value.");
        validDistance = false;
    }
    
    if(parseFloat(distance) < 1)
    {
        ShowErrorMessageBottomOfTheInputFiled("distance", "Enter correct value.");
        validDistance = false;
    }
    
    if(IsInputFieldEmpty("time"))
    {
        ShowErrorMessageBottomOfTheInputFiled("time", "Enter a value.");
        validTime = false;
    }   
    else if(isNaN(time))
    {
        ShowErrorMessageBottomOfTheInputFiled("time", "Enter correct value.");
        validTime = false;
    }
    
    if((parseFloat(time)) < 1)
    {
        ShowErrorMessageBottomOfTheInputFiled("time", "Enter correct value.");
        validTime = false;
    }

    if(IsInputFieldEmpty("speed"))
    {
        ShowErrorMessageBottomOfTheInputFiled("speed", "Enter a value.");
        validSpeed = false;
    }   
    else if(isNaN(speed))
    {
        ShowErrorMessageBottomOfTheInputFiled("speed", "Enter correct value.");
        validSpeed = false;
    }
    
    if((parseFloat(speed)) < 1)
    {
        ShowErrorMessageBottomOfTheInputFiled("speed", "Enter correct value.");
        validSpeed = false;
    }

    if(validDistance == true && validSpeed == true || validDistance == true && validTime == true || validTime == true && validSpeed == true)
    {
        RemoveAllErrorMessage();
        return true;
    }

    return false;
}

function SpeedCalculatorReset()
{
    document.getElementById("distance").value = "";
    document.getElementById("time").value = "";
    document.getElementById("speed").value = "";
    document.getElementById("speedName").innerHTML = "Value";
    document.getElementById("speedResult").innerHTML = "0.00";
    RemoveAllErrorMessage();
}

function SpeedCalculation()
{
    var count = 0;
    var distance = document.getElementById("distance").value;
    var speed = document.getElementById("speed").value;
    var time = document.getElementById("time").value;
    let calculatedSpeed, calculatedTime, calculatedDistance;

    if(SpeedCalculatorFormValidate())
    {
        if(count == 0)
        {
            document.getElementById("OutputInfo").style = "display: none";
            document.getElementById("OutputResult").style = "display: flex";
            count++;
        }

        if(distance == "")
        {
            calculatedDistance = speed * time;
            document.getElementById("distance").value = Number(calculatedDistance).toFixed(2);
            document.getElementById("distance").focus();
            document.getElementById("speedName").innerHTML = "Distance";
            document.getElementById("speedResult").innerHTML = Number(calculatedDistance).toFixed(2) + " km";
        }
        else if(speed == "")
        {
            calculatedSpeed = distance / time;
            document.getElementById("speed").value = Number(calculatedSpeed).toFixed(2);
            document.getElementById("speed").focus();
            document.getElementById("speedName").innerHTML = "Speed";
            document.getElementById("speedResult").innerHTML = Number(calculatedSpeed).toFixed(2) + " km/h";
        }
        else if(time == "")
        {
            calculatedTime = distance / speed;
            document.getElementById("time").value = Number(calculatedTime).toFixed(2);
            document.getElementById("time").focus();
            document.getElementById("speedName").innerHTML = "Time";
            document.getElementById("speedResult").innerHTML = Number(calculatedTime).toFixed(2) + " h";
        }
        else
        {
            document.getElementById("speedName").innerHTML = "Result";
            document.getElementById("speedResult").innerHTML = "N/A";
        }
    }
}
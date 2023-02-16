_cmnHideElement("OutputResult");

function SpeedCalculatorFormValidate()
{
    RemoveAllErrorMessage();
    var validDistance = true, validTime = true, validSpeed = true;
    var distance = document.getElementById("distance").value;
    var time = document.getElementById("time").value;
    var speed = document.getElementById("speed").value;

 
    if(IsInputFieldEmpty("distance") || (isNaN(distance) && distance <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("distance", "Enter correct value.");
        validDistance = false;
    }
    
    if(IsInputFieldEmpty("time") || (isNaN(time) && time <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("time", "Enter correct value.");
        validTime = false;
    }   
    
    if(IsInputFieldEmpty("speed") || (isNaN(speed) && speed <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("speed", "Enter correct value.");
        validSpeed = false;
    }   

    if(
        validDistance == true && validSpeed == true 
        || validDistance == true && validTime == true 
        || validTime == true && validSpeed == true
      )
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
    
    RemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function SpeedCalculation()
{
    var distance = document.getElementById("distance").value;
    var speed = document.getElementById("speed").value;
    var time = document.getElementById("time").value;
    let calculatedSpeed, calculatedTime, calculatedDistance;

    if(SpeedCalculatorFormValidate())
    {
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

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}
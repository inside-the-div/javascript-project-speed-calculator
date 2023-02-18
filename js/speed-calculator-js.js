function ValidateSpeedCalculatorForm()
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

function ResetSpeedCalculator()
{
    document.getElementById("distance").value = "";
    document.getElementById("time").value = "";
    document.getElementById("speed").value = "";
    
    RemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function CalculateSpeedDistanceAndTime()
{
    var distance = document.getElementById("distance").value;
    var speed = document.getElementById("speed").value;
    var time = document.getElementById("time").value;
    let calculatedSpeed, calculatedTime, calculatedDistance;

    if(ValidateSpeedCalculatorForm())
    {
        _cmnHideElement("speedResult");
        _cmnHideElement("distanceResult");
        _cmnHideElement("timeResult");
        if(distance == "")
        {
            calculatedDistance = speed * time;
            document.getElementById("distance").value = Number(calculatedDistance).toFixed(2);
            document.getElementById("distance").focus();
            document.getElementById("calculatedDisstanceResult").innerHTML = Number(calculatedDistance).toFixed(2);
            _cmnShowElement("distanceResult", "flex");
        }
        else if(speed == "")
        {
            calculatedSpeed = distance / time;
            document.getElementById("speed").value = Number(calculatedSpeed).toFixed(2);
            document.getElementById("speed").focus();
            document.getElementById("calculatedSpeedResult").innerHTML = Number(calculatedSpeed).toFixed(2);
            _cmnShowElement("speedResult", "flex");
        }
        else if(time == "")
        {
            calculatedTime = distance / speed;
            document.getElementById("time").value = Number(calculatedTime).toFixed(2);
            document.getElementById("time").focus();
            document.getElementById("calculatedTimeResult").innerHTML = Number(calculatedTime).toFixed(2);
            _cmnShowElement("timeResult", "flex");
        }
        else
        {
            document.getElementById("calculatedDisstanceResult").innerHTML = distance;
            document.getElementById("calculatedSpeedResult").innerHTML = speed;
            document.getElementById("calculatedTimeResult").innerHTML = time;
            _cmnShowElement("distanceResult", "flex");
            _cmnShowElement("speedResult", "flex");
            _cmnShowElement("timeResult", "flex");
        }

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}
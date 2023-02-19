function ValidateSpeedCalculatorForm(distance,time,speed)
{
    _cmnRemoveAllErrorMessage();
    var validDistance = true, validTime = true, validSpeed = true;
 
    if(distance =="" || (!isNaN(distance) && distance <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("distance", "Enter correct value.");
        validDistance = false;
    }
    
    if(time == "" || (!isNaN(time) && time <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("time", "Enter correct value.");
        validTime = false;
    }   
    
    if(speed == "" || (!isNaN(speed) && speed <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("speed", "Enter correct value.");
        validSpeed = false;
    }   

    if(
        validDistance == true && validSpeed == true 
        || validDistance == true && validTime == true 
        || validTime == true && validSpeed == true
      )
    {
        _cmnRemoveAllErrorMessage();
        return true;
    }

    return false;
}

function ResetSpeedCalculator()
{
    document.getElementById("distance").value = "";
    document.getElementById("time").value = "";
    document.getElementById("speed").value = "";
    
    _cmnRemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function CalculateSpeed()
{
    var distance = document.getElementById("distance").value;
    var time = document.getElementById("time").value;
    var speed = document.getElementById("speed").value;
    
    let calculatedSpeed, calculatedTime, calculatedDistance;

    if(ValidateSpeedCalculatorForm(distance,time,speed))
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
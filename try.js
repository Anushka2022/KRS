function printError(elemtId, hintMsg)
{
    document.getElementById(elemtId).innerHTML=hintMsg;
}


var submit=document.getElementById("registerButton")

console.log(submit)
submit.onclick=function()
{
    validateForm();
}

var usernameList=["aditya","malvika"]
function validateForm()
{
    // console.log("hsds")
    var form=document.getElementById("myform")
    var username=form.username.value
    var password=form.password.value
    var email=form.email.value
    var gender=form.gender.value
    var country=form.country.value


    var usernameErr = true;
    var emailErr = true;
    var countryErr = true;
    var genderErr = true;
    var passwordErr=true;

    if(username=="")
    {
        printError("usernameErr","Please enter valid username");
    }
    else{

        if(username.length<5)
        {
            printError("usernameErr","Please enter valid username");
        }
        else if(!usernameList.includes(username))
        {
            printError("usernameErr","Username is not registered");
        }
        else{
            printError("usernameErr","");
            usernameErr=false;
        }
    }
    if(password=="")
    {
        printError("passwordErr","Please enter valid password");
    }
    else{

        if(password.length<5)
        {
            printError("passwordErr","Please enter valid password");
        }
        
        else{
            printError("passwordErr","");
            passwordErr=false;
        }
    }
    
    if (email == "") {
        printError("emailErr", "Please enter your email address");
      } else {
        
        if (email.includes("@")) {
          printError("emailErr", "Please enter a valid email address");
        } else {
          printError("emailErr", "");
          emailErr = false;
        }
      }


      if (gender == "") {
        printError("genderErr", "Please select your gender");
      } else {
        printError("genderErr", "");
        genderErr = false;
      }

      if (country == "Select") {
        printError("countryErr", "Please select your country");
      } else {
        printError("countryErr", "");
        countryErr = false;
      }
    


    // console.log(usernameErr,passwordErr,emailErr)
    if((usernameErr|| passwordErr || emailErr || genderErr  || countryErr) == true)
    {
        return false;
    }
    else
    {
        var daataPreview = "You have entered the following details :\n"+ "Username :"+ username+"\n"+"password: "+password +"\n" +"email :" +email 
        +
        "Country: " +
        country +
        "\n" +
        "Gender: " +
        gender +
        "\n";
        alert(daataPreview);
    }
}

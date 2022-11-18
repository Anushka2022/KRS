function printError(elemtId, hintMsg)
{
    document.getElementById(elemtId).innerHTML=hintMsg;
}

// var form2 = document.getElementById("myform");
// if(myform.printError==true)
// {
//     console.log("Re-enter Name");

// }

var submit=document.getElementById("loginButton")

console.log(submit)
submit.onclick=function()
{
    validateForm();
}

var usernameList=["aditya","malvika"]
function validateForm()
{
    console.log("hsds")
    var form=document.getElementById("myform")
    var username=form.username.value
    var password=form.password.value

    var usernameErr =true;
    var passwordErr =true;

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

    console.log(usernameErr,passwordErr)
    if((usernameErr|| passwordErr ) == true)
    {
        return false;
    }
    else
    {
        var daataPreview = "You have entered the following details :\n"+ "Username :"+ username+"\n"+"password: "+password;
        alert(daataPreview);
    }
}

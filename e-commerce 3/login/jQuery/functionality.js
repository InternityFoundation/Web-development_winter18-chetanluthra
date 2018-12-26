$(function(){
    //validations for sign-up page
    var error_username = false;
    var error_password = false;
    var error_confirm_password = false;
    var error_email = false;

    function checkUserName() {
        var username_length = $("#UserName").val().length;
        if(username_length < 5 || username_length >20){
            alert("UserName Length is between 5-20 characers");
            error_username = true;
        }
    }
    function checkEmail(){
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if(!pattern.test($("#email_Registration").val())){
            alert("Enter valid Email address");
            error_email = true;
        }
    }
    function checkPassword(){
        var passwordlength = $("#password_Registration").val().length;
        if(passwordlength < 8){
            error_password = true;
            alert(" Password should be greater then 8 ");
        }
    }
    function checkConfirmPassword(){
        var password =  $("#password_Registration").val();
        var confirmpassword = $("#password-confirm").val();
        if(password != confirmpassword){
            alert("Password didn't Match");
            error_confirm_password = true;
        }
    }
    


    $( "#target" ).click(function() {
        error_username = false;
        error_password = false;
        error_confirm_password = false;
        error_email = false;
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkUserName();
        if(error_email == false && error_password ==false&& error_username ==false && error_confirm_password == false){
            return true;
        }
        else{
            return false;
        }
    });
    //validation for login page
    var error_email1 = false;
    var error_password1 = false;

    function checkEmail1(){
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if(!pattern.test($("#email").val())){
            alert("Enter valid Email address");
            error_email1 = true;
        }
    }
    function checkPassword1(){
        var password = $("#password").val();
        if(password != "chetan567"){
            alert("Wrong Password");
            error_password1 = true;
        }
    }


    $( "#target1" ).click(function() {
            error_email1 = false;
            error_password1 = false;
            checkEmail1();
            checkPassword1();
            if(error_email1 == false && error_password1 ==false){
                return true;
            }
            else{
                return false;
            }
      });



});



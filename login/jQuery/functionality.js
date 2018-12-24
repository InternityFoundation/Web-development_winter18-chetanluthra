$(function(){
    var error_username = false;
    var error_password = false;
    var error_confirm_password = false;
    var error_email = false;
    $("#UserName").focusout(function(){
        checkUserName();
    });
    $("#email_Registration").focusout(function(){
        checkEmail();
    });
    $("#password_Registration").focusout(function(){
        checkPassword();
    });
    $("#password-confirm").focusout(function(){
        checkConfirmPassword();
    });
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
    


    $("#Registration_form").submit(function(){    

        error_username = false;
        error_password = false;
        error_confirm_password = false;
        error_email = false;
        
        checkUserName();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        if(error_username == false && error_email == false && error_password == false && error_confirm_password){
            return true;
        }
        else{
            return false;
        }

    });


});



$(function(){
    var error_email = false;
    var error_password = false;

    function checkEmail(){
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if(!pattern.test($("#exampleInputEmail1").val())){
            alert("Enter valid Email address");
            error_email = true;
        }
    }
    function checkPassword(){
        var password = $("#exampleInputPassword1").val();
        if(password != "chetan567"){
            alert("Wrong Password");
            error_password = true;
        }
    }


    $( "#target" ).click(function() {
            error_email = false;
            error_password = false;
            checkEmail();
            checkPassword();
            if(error_email == false && error_password ==false){
                return true;
            }
            else{
                return false;
            }
      });


});



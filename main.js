function validation(){
    var name = document.getElementById('exampleInput1').Value;
    var email = document.getElementById('exampleInputEmail1').value;
    var number = document.getElementById('exampleInputNumber1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var cpassword = document.getElementById('exampleInputPassword2').value;

    var namecheck = /^[A-Za-z]{3,}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9!@#$%^&*]{8,17}$/;


    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML = '';
    }
    else{
        document.getElementById('errer-name').innerHTML = 'Use only Alphabets';
        return false;
    }
    if(emailcheck.test(email)){
        document.getElementById('error-email').innerHTML = '';
    }
    else{
        document.getElementById('error-email').innerHTML = 'Use valid email syntax. Ex: abc@gmail.com';
        return false;
    }
    if(numbercheck.test(number)){
        document.getElementById('error-number').innerHTML = '';
    }
    else{
        document.getElementById('error-number').innerHTML = 'Use 10 digit valid mobile number';
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById('error-password').innerHTML = '';
        
    }
    else{
        document.getElementById('error-password').innerHTML = 'Use Alphabets, numbers and symbols. Min: 8, Max: 16';
        return false;
    }

    if(cpassword.match(password)){
        document.getElementById('errror-cpassword').innerHTML = '';
    }
    else{
        document.getElementById('errror-cpassword').innerHTML = "Password doesn't match";

    }
}
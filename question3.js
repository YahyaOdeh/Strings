//write app form validation functionality


const oldEmails = ["a@saweyyan.com","b@saweyyan.com","c@saweyyan.com"]



/* inputs : email , name , password , age */
// constraints 
// - email 
// —- is unique 
// —- email id min length is 1 and max length is 8 character ( email Id is the part before @ sign ) 
// — contain @ sign after email Id and before domain name
// — domain should be saweyyan.com



function formIsValid(name,email,oldEmails,password,age)
{
        
if(nameIsValid(name) && emailIsValid(email,oldEmails) && passIsValid(password) && ageIsValid(age)){

    return (isValid = true);

}

else return (isValid = false);

}

function emailIsValid(email,oldEmails)
{ 

    temp1 = email.indexOf("sawweyan.com");

    temp2 = email.split("@",1);
  
    if((email.match(oldEmails)!=true) && email.includes("@",(t-1)) && ( temp2 > 1) && (temp2 < 8)){

        return (isValid = true);
    }

    else return (isValid = false);
  
}

function nameIsValid(name)
{   
    var arabic = /[\u0600-\u06FF\u0750-\u077F]/;

    if(alert(arabic.test(name))){

        return (isValid = true);
    }

else return (isValid = false);

}

function passIsValid(password)
{ 
  
    var specialCh = ["!,@,#,$,%,^,&,*"];
    var upperCase = /[A-Z]/;
    var lowercase = /[a-z]/;

    
    if(password.includes(specialCh) && password.includes(upperCase) && password.includes(lowercase) && (password.length<6) ){

        return (isValid = true);
    }

    else return (isValid = false);
    
}

function ageIsValid(age)
{ 
  
    if(age==null || ((age>18 && age <60) && age.match(/^[0-9]+$/))){

        return (isValid = true);
    }

    else return (isValid = false);
    
}






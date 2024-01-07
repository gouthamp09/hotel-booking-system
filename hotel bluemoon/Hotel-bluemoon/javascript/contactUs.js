function validationContact()
{
  var uname = document.contactForm.name;
  var uemail = document.contactForm.mail;
  var umessage = document.contactForm.mail;

  if(allLetter(uname))
  {
    if(ValidateEmail(uemail))
    {
     if(ValidateMessage(umessage))
     {
     }
    }
  }
return false;
alert('Form Successfully Submitted. We will get back to your enquiries as soon as possible');
window.location.reload()
}
function allLetter(uname)
{
  var letters = /^[A-Za-z]+$/;
  if(uname.value.match(letters))
  {
    return true;
  }
  else
    {
      alert('Name must have alphabet characters only');
      uname.focus();
      return false;
    }
}

function ValidateEmail(uemail)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(uemail.value.match(mailformat))
  {
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function ValidateMessage(umessage)
{
  var emptymessage = "";
  if(umessage.value.match(emptymessage))
  {
    alert("Please enter your message.");
    umessage.focus();
    return false;
  }
  else
  {
    alert("Form succesfully submitted. We will get back to you soon.");
    window.location.reload()
    return true;
  }
}

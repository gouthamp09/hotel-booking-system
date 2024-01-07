function validation(){

  var name = document.getElementById("name").value;
  var phoneNum = document.getElementById("phoneNum").value;
  var address = document.getElementById("address").value;
  var postcode = document.getElementById("postcode").value;
  var state = document.getElementById("state").value;
  var email = document.getElementById("email").value;

  var checkin = document.getElementById("checkin").required;
  var checkout = document.getElementById("checkout").required;

  var room = document.getElementById("room").required;
  var guest = document.getElementById("guest").value;
  var card = document.getElementById("cardNum").value;

  var x = "";

  if(document.getElementById("room").value == 220){
      x = "Deluxe Suite";
  }
  if(document.getElementById("room").value == 160){
      x = "Double Room";
  }
  if(document.getElementById("room").value == 250){
      x = "Premiere Junior";
  }
  if(document.getElementById("room").value == 120){
      x = "Single Superior";
  }


  var errorMessage = document.getElementById("errorMessage");

  if(name.length <5) {
    text = "Please enter your name";
    errorMessage.innerHTML = text;
    return false;
  }

  if(isNaN(phoneNum) || phoneNum.length != 10) {
    text = "Please enter your valid phone number";
    errorMessage.innerHTML = text;
    return false;
  }

  if(postcode.length != 5) {
    text = "Please enter the valid postal code";
    errorMessage.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1) {
    text = "Please enter your valid email";
    errorMessage.innerHTML = text;
    return false;
  }

  if(guest > 6) {
    text = "Guest cannot be more than 6 people";
    errorMessage.innerHTML = text;
    return false;
  }

  if(card.length != 16 && card == "Online") {
    text = "Please enter your valid card number";
    errorMessage.innerHTML = text;
    return false;
  }

  var print = confirm("Thank you! Your request has been submitted succesfully.\nClick print to print receipt.");
  if(print == true){

    var inputContents = new jsPDF();

    inputContents.setFontSize(14);
    inputContents.text(20, 20, "Here's your invoice. Please print this document as proof.")

    inputContents.setFontSize(30);
    inputContents.text(20, 40, "HOTEL DEL LUNA");

    inputContents.setFontSize(14);
    inputContents.text(20, 50, "Lane 2, Kota Syahbandar, Impression City\n75200, Bandar Melaka, Melaka, Malaysia.\nNo. Tel: +60 34-0219838");

    inputContents.setFontSize(22);
    inputContents.text(20, 80, "PERSONAL INFORMATION");

    inputContents.setFontSize(12);
    inputContents.text(20, 90, "Name: " + document.getElementById("name").value);
    inputContents.text(20, 95, "Phone No: " + document.getElementById("phoneNum").value);
    inputContents.text(20, 100, "Address: " + document.getElementById("address").value + ",\n" + document.getElementById("postcode").value + ", " + document.getElementById("state").value);
    inputContents.text(20, 110, "Email: " + document.getElementById("email").value);

    inputContents.setFontSize(22);
    inputContents.text(20, 125, "BOOKING INFORMATION");

    inputContents.setFontSize(12);
    inputContents.text(20, 135, "Room Type: " + x);
    inputContents.text(20, 140, "Check-in Date: " + document.getElementById("checkin").value + "  " + "Check-out Date: " + document.getElementById("checkout").value);
    inputContents.text(20, 145, "No. of Guest: " + document.getElementById("guest").value + " person(s)");

    inputContents.setFontSize(20);
    inputContents.text(20, 160, "TOTAL: RM" + document.getElementById("room").value);

    inputContents.setFontSize(12);
    inputContents.text(20, 170, "Total price for this booking does not included other services.\nAny cancellation should be made 1 day before arrival.");

    inputContents.setFontSize(11);
    inputContents.setFont("times");
    inputContents.text(20, 190,
      "At check-in, you must present the credit card used to make this booking if you use online\npayment method and valid identification card with the same name. Failure to do so may result\nin additional payment or your booking will be revoked. All rooms are guaranteed on the day of the arrival.\nYou're advised to check in after 12.00PM on the check-in date as to avoid any inconvenience.\nIn the case of a no-show, your room(s) will be released and you will be subjected to the terms and conditions\nof the Cancellation/No-Show Policy. Other accomodation provided can be checked on\nour website: www.hoteldelluna.com. If you have any inquiry regarding anything, do not hestitate\nto email us at inquiries@hoteldelluna.com.");

    inputContents.save("receipt.pdf");

  }

  return true;
}

function yesCheck() {

    if (document.getElementById("online").checked) {
        document.getElementById("ifOnline").style.display = "block";
    }
    else document.getElementById("ifOnline").style.display = "none";

    return;
}

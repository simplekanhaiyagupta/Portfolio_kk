function emailSend(){
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let subject = document.getElementById("Subject").value;
    let  messege = document.getElementById("Messege").value;
    let body = "Name    : " +name+ "<br/> Email  : " +email+ "<br/> Subject    : " +subject+ "<br/> Messege   : " +messege;
    console.log(body);


  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kanhaiyag8062@gmail.com",
    Password : "AEB0ADDADDCCE7B832E7DC50E0582F518B63",
    To : 'kanhaiya.bscitstudent21.8062@cimage.in',
    From : "kanhaiyag8062@gmail.com",
    Subject : "Information Reagarding message",
    Body : body
}).then(
 message =>  {
    if(message == 'OK'){
        swal("Successfull send massege!", "You clicked the button!", "success");
    }
    else{
        swal("Error", "You clicked the button!", "error");
    }
 }
);
}
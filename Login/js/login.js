var tabERP;
pss = document.getElementById('pass').value;
var userconnect={
    email:'',
    pss:''

}
    function verifconnect(){
        var tabconnect;
        if(localStorage.getItem('userconnect')!=null)
        {
            location.href = '../index.html';
        }

    }
function connect() {
   
    email = document.getElementById('username').value;
    pss = document.getElementById('pass').value;
    
 
    if (("admin" == email) && ("admin" == pss)) {
       
        console.log(pss)
   
            userconnect.email=email;
    userconnect.pss=pss;
    localStorage.setItem('userconnect',JSON.stringify(userconnect))
    location.href = '../index.html';
    }else{
        Consult()
 
    for (i = 0; i < ERP.Manager.length; i++) {
       
        if (( ERP.Manager[i].email == email) && ( ERP.Manager[i].passwrd == pss)) {
            
            console.log("hghgh"+ERP.Manager)
     
            userconnect.email=email;
    userconnect.pss=pss;
    localStorage.setItem('userconnect',JSON.stringify(userconnect))
    location.href = '../index.html';
        }
        
    }
    }
    

}
function Consult() {
 
    if (localStorage.getItem("ERP") == null) {
         tabERP = []
    }
    else {
        tabERP = JSON.parse(localStorage.getItem("ERP"));
        ERP.Manager = tabERP[1];
    }
       


}
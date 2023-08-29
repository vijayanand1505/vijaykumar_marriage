
function login(){
    const userName = document.getElementById("username").value;
    const Password = document.getElementById("password").value;

    const storedfullName = localStorage.getItem("fullname");
    const storedPassword = localStorage.getItem("new-password");

    if(userName== storedfullName && Password== storedPassword){
        event.preventDefault();
        window.location.href = 'Marriage.html';
        //window.location.href = 'https://www.idmtechpark.com/';
        //window.location.href = 'https://www.linkedin.com/feed/';
    }
    else if (userName == '' && Password == ''){
        alert('Please enter username and password');
    }
    else{
        alert('wrong username');
    }
    
}

function register() {
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("new-password").value;
  
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("new-password", newPassword);
    

    if (fullname.length > 0 && email.length > 0 && newPassword.length > 0) {
        event.preventDefault();
        //alert("ThankYou for Registration Pls Login!");
        window.location.href = 'index.html';
        //return false;
        //window.location.replace('index.html');
        //document.location.href = 'index.html',true;
        //window.location.replace('index.html');
        //window.location = 'index.html', true;

        //document.form.action = 'index.html';

      }

  }
  

document.getElementById(Loginform).addEventListener('submit',function(event){
    event.preventDefault();

    var username =  document.getElementById('username').value;
    var password = document.getElementById('password').value;

    window.location.href='index.html';
})
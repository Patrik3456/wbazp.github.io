document.addEventListener('DOMContentLoaded', function() {
    var emailform = document.getElementById('emailform');
    var vercodeform = document.getElementById('vercodeform');
    var emailinput = document.getElementById('emailinput');
    var emailbutton = document.getElementById('emailbutton');
    var emaillabel = document.getElementById('emaillabel');
    var codelabel = document.getElementById('codelabel');
    var codebutton = document.getElementById('codebutton');
    var newpassword = document.getElementById('newpassword');
    var codeinput = document.getElementById('codeinput');
    var password1 = document.getElementById('password1');
    var password2 = document.getElementById('password2');

    emailform.addEventListener('submit', function(event) {
    event.preventDefault();
    vercodeform.style.display = 'block';
    emailform.style.backgroundColor = 'light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))';
    emailinput.disabled = true;
    emaillabel.style.color = 'gray';
    emailbutton.style.display = 'none';
    });

    vercodeform.addEventListener('submit', function(event) {
    event.preventDefault();
    codelabel.style.color = 'gray';
    vercodeform.style.backgroundColor = 'light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))';
    codebutton.style.display = 'none';
    codeinput.disabled = true;
    newpassword.style.display = 'block';
    });
});
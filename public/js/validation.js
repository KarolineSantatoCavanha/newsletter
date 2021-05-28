function validation() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");

  if(name.value == "") {
    alert("Inserir nome");
    name.focus();
    return false;
  }
  if(email.value == "") {
    alert("Inserir email");
    email.focus();
    return;
  }
  alert("Formulário enviado!");

  forms.submit();
}
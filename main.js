// Crea una función para validar el correo electrónico
function validateEmail(email) {
  if (!email.value.includes("@")) {
    alert("El correo no es válido");
    return false;
  }
  return true;
}

// Crea una función para validar el formulario completo
function validateForm() {
  let email = document.getElementById("inputEmail");
  let name = document.getElementById("inputName");
  let phone = document.getElementById("inputPhone");

  // Usa la función validateField para cada campo
  if (
    validateField(email, "El campo correo es requerido") &&
    validateField(name, "El campo nombre es requerido") &&
    validateField(phone, "El campo teléfono es requerido")
  ) {
    // Usa la función validateEmail para el correo
    if (validateEmail(email)) {
      return true;
    }
  }
  return false;
}

// Crea una función para leer los datos del localStorage
function ReadData() {
  let listPeople;

  if (localStorage.getItem("listPeople") == null) {
    listPeople = [];
  } else {
    listPeople = JSON.parse(localStorage.getItem("listPeople"));
  }
  var html = "";

  listPeople.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.phone + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Eliminar Dato</button><button onclick="editData(' +
      index +
      ')" class="btn btn-warning">Editar Dato</button>';
    html += "</tr>";
  });

  document.querySelector("#tableData").innerHTML = html;
}

document.onload = ReadData()

function AddData(){
  if (validateForm() == true) {
    let email = document.getElementById("inputEmail").value;
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputPhone").value;

    var listPeople;
if (localStorage.getItem('listPeople') == null) {
  listPeople = [];
} else {
  listPeople = JSON.parse(localStorage.getItem('listPeople'));
}

listPeople.push({
  email: email,
  name: name,
  phone: phone
});
  }
localStorage.setItem('listPeople', JSON.stringify(listPeople));

ReadData();
document.getElementById('inputEmail').value= "";
document.getElementById('inputName').value= "";
document.getElementById('inputPhone').value= "";
}

function deleteData(index) {

let listPeople;

  if (localStorage.getItem("listPeople") == null) {
    listPeople = [];
  } else {
    listPeople = JSON.parse(localStorage.getItem("listPeople"));
  }

  listPeople.splice(index, 1);
localStorage.setItem('listPeolpe', JSON.stringify(listPeople));

  ReadData();
}

function editDataData(index) {
document.getElementById('btnAdd').style.display = 'none';
document.getElementById('btnUpdate').style.display = 'block';

let listPeople;

  if (localStorage.getItem("listPeople") == null) {
    listPeople = [];
  } else {
    listPeople = JSON.parse(localStorage.getItem("listPeople"));
  }
document.getElementById('inputEmail').value = listPeople[index].email;
document.getElementById('inputName').value = listPeople[index].name;
document.getElementById('inputPhone').value = listPeople[index].phone;

document.querySelector('#btnUpdate').onclick = function () {
if (validateForm() == true) {
listPeople[index].email = document.getElementById('inputEmail').value;
listPeople[index].name = document.getElementById('inputName').value;
listPeople[index].phone = document.getElementById('inputPhone').value;

localStorage.setItem('listPeolpe', JSON.stringify(listPeople));
ReadData();

document.getElementById('inputEmail').value = "";
document.getElementById('inputName').value = "";
document.getElementById('inputPhone').value = "";

document.getElementById('btnAdd').style.display = 'block';
document.getElementById('btnUpdate').style.display = 'none';
}
};

}




// Función constructora Consultorio
function Consultorio(nombre, paciente) {
  this.nombre = nombre;
  this.paciente = paciente;
}

// Función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}
//Get y Set para Pacientes
Paciente.prototype.getNombre = function(){
  return this.nombre;
};

Paciente.prototype.setNombre = function(nombre){
  this.nombre = nombre;
};

Paciente.prototype.getEdad = function(){
  return this.edad;
};

Paciente.prototype.setEdad = function(edad){
  this.edad = edad;
};

Paciente.prototype.getRut = function(){
  return this.rut;
};

Paciente.prototype.setRut = function(rut){
  this.rut = rut;
};

Paciente.prototype.getDiagnostico = function(){
  return this.diagnostico;
};

Paciente.prototype.setDiagnostico = function(diagnostico){
  this.diagnostico = diagnostico;
};

//Buscar pacientes por Nombre
Paciente.prototype.buscarPorNombre = function(nombre) {
  if (this.nombre === nombre) {
    return this;
  } else {
    return null;
  }
};

//Mostrar pacientes registrados
Paciente.mostrarTodos = function(pacientes){
  pacientes.forEach(function(paciente){
    console.log("Nombre: " + paciente.nombre);
    console.log("Edad: " + paciente.edad);
    console.log("Rut: " + paciente.rut);
    console.log("Diagnostico: " + paciente.diagnostico);
  });
};

// Crear un nuevo paciente
var paciente1 = new Paciente("Juan", 25, "12345678-9", "Dolor de cabeza");
var paciente2 = new Paciente("Ana", 30, "98765432-1", "Dolor de estómago");
var paciente3 = new Paciente("Pedro", 35, "12345678-9", "Dolor de espalda");

//Pacientes registrados
var pacientes = [paciente1, paciente2, paciente3];

//Mostrar todos los pacientes registrados
console.log("Todos los pacientes registrados: ");
Paciente.mostrarTodos(pacientes);

//Buscar paciente por nombre
var nombrePaciente = "Juan";
var pacienteEncontrado = null;
pacientes.forEach(function(paciente){
  if (paciente.buscarPorNombre(nombrePaciente)){
    nombrePaciente = paciente.buscarPorNombre(nombrePaciente);
  }
});

if (pacienteEncontrado !== null){
  console.log("Paciente encontrado:");
  console.log("Nombre: " + pacienteEncontrado.nombre);
  console.log("Edad: " + pacienteEncontrado.edad);
  console.log("Rut: " + pacienteEncontrado.rut);
  console.log("Diagnostico: " + pacienteEncontrado.diagnostico);
}
  else{
  console.log("No se encontró ningún paciente con ese nombre.")
  }

// Crear un nuevo consultorio y vincularlo con un paciente
var consultorio2 = new Consultorio("Consultorio 2", [paciente2]);

// Crear un nuevo consultorio y vincularlo con los pacientes
var consultorio = new Consultorio("Consultorio 1", [
  paciente1,
  paciente2,
  paciente3,
]);

// Mostrar el nombre del consultorio
console.log(consultorio.nombre);

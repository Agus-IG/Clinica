//Arreglos con todos los pacientes almacenados
let pacientes = []

//Arreglos de los pacientes para cada area de atencion (Cirugia, Traumatismo, Geriatria y Pediatria)
let pacientesCirugia = []
let pacientesTraumatismo = []
let pacientesGeriatria = []
let pacientesPediatria = []

//Arreglo para almacenar a todos los doctores
let doctores = []

//Arreglo para almacenar a todos los enfermeros
let enfermeros = []

//Arreglo para almacenar a todos los doctores y enfermeros
let personalMedico = []

//Clase clinica
class Clinica{
    constructor(nombre,dueño,responsabilidadJuridica,doctores,enfermeros){
        this.nombreC = nombre;
        this.dueño = dueño;
        this.responsabilidadJuridica = responsabilidadJuridica;
        this.doctores = doctores;
        this.enfermeros = enfermeros;
    }
}

//Clase personal medico
class Personal{
    constructor(nombre,apellido,matricula,pacientes){
        this.n = nombre;
        this.a = apellido;
        this.m = matricula;
        this.p = pacientes;
    }

    //Metodo para mostrar los turnos que sera heredado a las clases Doctor y Enfermero
    mostrarTurno(){
        
    }

}

class Doctor extends Personal{
    constructor(nombre,apellido,especialidad,matricula,pacientes){
        super(nombre,apellido,matricula,pacientes)
        this.e = especialidad;
    }   

    mostrarTurno(){
        return `Doctor:${this.n} ${this.a} || Matricula: ${this.m} ||  Pacientes: ${this.p}`
    }

    //Metodo para mostrar los datos del doctor
    mostrarDoctor(){
        return `Nombre: ${this.n} || Apellido: ${this.a} || Especialidad: ${this.e} || Matricula: ${this.m} ||` 
    }
}

//Creacion de 2 doctores
let doctor1 = new Doctor('Javier','Parra','Cirugia',455465,pacientesCirugia)
let doctor2 = new Doctor('Alejandro','Arriagada','Traumatismo',767668,pacientesTraumatismo)

//Los 2 doctores se almacenan en el arreglo designado
doctores.push(doctor1,doctor2)

//Funcion para mostrar todo el personal medico (Doctores y enfermeros)
function mostrarPersonal(){
    let ul = document.getElementById("ul")
    if(ul.value !== ""){
        ul.innerHTML = "Doctores:"
        for (const item of doctores) {
            let li = document.createElement("li")
            li.textContent = item.mostrarDoctor()
            ul.appendChild(li)
        }
    }else{
        for (const item of doctores) {
            let li = document.createElement("li")
            li.textContent = item.mostrarDoctor()
            ul.appendChild(li)
        }
    }


    let ul2 = document.getElementById("ul2")
    if(ul2.value !== ""){
        ul2.innerHTML = "Enfermeros:"
        for (const item of enfermeros) {
            let li = document.createElement("li")
            li.textContent = item.mostrarEnfermero()
            ul2.appendChild(li)
        }
    }else{
        for (const item of enfermeros) {
            let li = document.createElement("li")
            li.textContent = item.mostrarEnfermero()
            ul2.appendChild(li)
        }
    }

}

//Clase enfermero
class Enfermero extends Personal{
    constructor(nombre,apellido,matricula,licenciatura,pacientes){
        super(nombre,apellido,matricula,pacientes)
        this.l = licenciatura;
    }

    mostrarTurno(){
        return `Enfermero:${this.n} ${this.a} || Matricula: ${this.m} ||  Pacientes: ${this.p}`
    }

    mostrarEnfermero(){
        return `Nombre: ${this.n} ||
        Apellido: ${this.a} ||
        Licenciatura: ${this.l} ||
        Matricula: ${this.m} ||`
    }
}

let enfermero1 = new Enfermero('Bruno','Ruiz',547648,'Geriatria',pacientesGeriatria)
let enfermero2 = new Enfermero('Pepe','Alfonso',4378463,'Pediatria',pacientesPediatria)
enfermeros.push(enfermero1,enfermero2)

//Clase paciente
class Paciente{
    constructor(nombre,apellido,dni,fechaNac,areaAtencion,obraSocial){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNac = fechaNac;
        this.areaAtencion = areaAtencion;
        this.obraSocial = obraSocial;
    }

    //Metodo para calcular la edad del paciente usando la fecha de nacimiento
    edad(){
        let fechaActual = new Date()
        let fechaNacimiento = new Date(this.fechaNac)
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth()
        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
        ) {
            edad--
        }
        return edad
    }

    datosPaciente(){
        return `Nombre: ${this.nombre} || Apellido: ${this.apellido} || DNI: ${this.dni} || Edad: ${this.edad()} || Fecha de nacimiento: ${this.fechaNac} || Area de Atención: ${this.areaAtencion} || Obra social: ${this.obraSocial}`
    }
}

//Funcion que se activara al cargar un paciente en el formulario
function ingresarPaciente() {
    //Se obtienen los valores que se ingresaron en el formulario y se guardan en variables
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let dni = parseInt(document.getElementById("dni").value)
    let fechaNac = document.getElementById("fechaNac").value
    let areaAtencion = document.getElementById("areaAtencion").value
    let obraSocial = document.getElementById("obraSocial").value
    
    //Luego con esas variables se crea el objeto paciente
    let paciente = new Paciente(nombre,apellido,dni,fechaNac,areaAtencion,obraSocial)
    
    //El objeto paciente se almacena en el arreglo pacientes
    pacientes.push(paciente)

    //Dependiendo el area de atencion que se haya seleccionado se almacenara en su respectivo arreglo
    switch (areaAtencion) {
        case 'Cirugia':
            pacientesCirugia.push(`|Nombre:${paciente.nombre} - Apellido:${paciente.apellido} - DNI:${paciente.dni}|`)
            break;
    
        case 'Traumatismo':
            pacientesTraumatismo.push(`|Nombre:${paciente.nombre} - Apellido:${paciente.apellido} - DNI:${paciente.dni}|`)
            break;

        case 'Geriatria':
            pacientesGeriatria.push(`|Nombre:${paciente.nombre} - Apellido:${paciente.apellido} - DNI:${paciente.dni}|`)
        break;

        case 'Pediatria':
            pacientesPediatria.push(`|Nombre:${paciente.nombre} - Apellido:${paciente.apellido} - DNI:${paciente.dni}|`)
        break;
    }

    ul.innerHTML = ""
}

//Funcion para mostrar la lista de pacientes agregados
function mostrarPacientes(){
    let ul = document.getElementById("ul")
    if(ul.value !== ""){
        ul.innerHTML = "Pacientes:"
        for (const item of pacientes) {
            let li = document.createElement("li")
            li.textContent = item.datosPaciente()
            ul.appendChild(li)
        }
    }else{
        for (const item of pacientes) {
            let li = document.createElement("li")
            li.textContent = item.datosPaciente()
            ul.appendChild(li)
        }
    }

    ul2.innerHTML = ""
}

//Se almacenan los objetos doctores y enfermeros en el arreglo personalMedico
personalMedico.push(doctor1,doctor2,enfermero1,enfermero2)

//Funcion para listar los turnos (Los pacientes se mostraran por orden de llegada de izquierda a derecha)
function listarTurnos() {
    let ul = document.getElementById("ul")
    if(ul.value !== ""){
        ul.innerHTML = "Turnos:"
        for (const item of personalMedico) {
            let li = document.createElement("li")
            li.textContent = item.mostrarTurno()
            ul.appendChild(li)
        }
    }else{
        for (const item of personalMedico) {
            let li = document.createElement("li")
            li.textContent = item.mostrarTurno()
            ul.appendChild(li)
        }
    }

    ul2.innerHTML = ""
}

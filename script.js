var contactos = [
  { nombre: "Macarena Poo García", 
    empresa: "Retail Zipline", 
    email: "macarenapoo@gmail.com", 
    telefono: "5556801216" },
  { nombre: "Juan Fernando Donoso", 
    empresa: "Universidad Iberoamericana", 
    email: "juan.donoso@uia.mx", 
    telefono: "5555555555" }
];

function mostrarContacto(){
 var contactos =document.getElementById("contactos");
    contenedorContactos.insertAdjacentHTML("beforeend",
                                           
    `<li class="contacto">
        <div class="actions">
          <a><i class="fa fa-trash"></i></a>
        </div>
        <i class="userIcon fa fa-user"></i>
        <h4 class="nombre">`+ contacto.nombre +`</h4>
        <div class="datos">
          <div class="dato">
            <i class="fa fa-building"></i>
            <span>`+ contacto.empresa +`</span>
          </div>
          <div class="dato">
            <i class="fa fa-envelope"></i>
            <a href="mailto:`+ contacto.email +`">`+ contacto.email +`</a>
          </div>
          <div class="dato">
            <i class="fa fa-phone"></i>
            <a href="tel:`+ contacto.telefono +`">`+ contacto.telefono +`</a>
          </div>
        </div>
      </li>`);
}

function mostrarTodosLosContactos(){
    contactos.forEach(mostrarContacto);
}

function abrirModal(){
    var body = document.getElementsByTagName("body");
    var body = bodyTags[0];
    body.classList.add("modal-open");
}

function cerrarModal(){
    var body = document.getElementsByTagName("body");
    var body = bodyTags[0];
    body.classList.add("modal-open");
}

function validarContacto(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").vañue;
    var errores = [];
    
    if(nombre.lenght===0){
        errores.push("El nombre no puede estar vacio");
    }
    if (email.lenght===0){
        errores.push("El mail no puede estar valido");
    }
    
if(errores.lenght===0){
    agregarContacto();
}else{
    mostrarErrores();
}
}

function agregarContacto(){
    var nombre = document.getElementById("nombre").value;
     var nombre = document.getElementById("empresa").value;
     var nombre = document.getElementById("email").value;
     var nombre = document.getElementById("telefono").value;
         
contactos.push({
         nombre,
         empresa,
         email,
         telefono,
        
     });
    
    mostrarTodosLosContactos();
    limpiarFormulario();
    cerrarModal();
}

function LimpiarFormulario(){
    document.getElementById("nombre").value="";
    document.getElementById("empresa").value="";
    document.getElementById("email").value="";
    document.getElementById("telefono").value="";
}

function mostrarErrores(errores){
    var contenedorErrores = document.getElementById("errores");
    contenedorErrores.innerHTML="";
    errores.forEach(function(error){
    contenedorErrores.insertAdjacentHTML('beforeend', '<li>' + error + '</li<');
    }
                    }
mostrarTodosLosContactos();
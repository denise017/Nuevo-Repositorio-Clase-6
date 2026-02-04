// ============================================================
// TRABAJO INTEGRADOR - FUNDAMENTOS DE JAVASCRIPT
// Sistema de gestión para una biblioteca
// ============================================================

const prompt = require("prompt-sync")({ sigint: true });

// ============================================================
// ==========Actividad 1 : ESTRUCTURAS PRINCIPALES=============
// ============================================================

// ============================================================
// 1.a).Array de libros → contendrá los libros disponibles en la biblioteca
// ============================================================

// Cada elemento será un objeto con sus respectivos datos

let libros = [
  { id: 1, titulo: "Las montañas de la locura", autor: "H. P. Lovecraft", anio: 1936, genero: "Terror", disponible: true },
  { id: 2, titulo: "El club de la pelea", autor: "Chuck Palahniuk", anio: 1996, genero: "Drama", disponible: true },
  { id: 3, titulo: "Noches blancas", autor: "Fiódor Dostoyevski", anio: 1848, genero: "Romance", disponible: true },
  { id: 4, titulo: "El extranjero", autor: "Albert Camus", anio: 1942, genero: "Filosofia", disponible: true },
  { id: 5, titulo: "La metamorfosis", autor: "Franz Kafka", anio: 1915, genero: "Ficcion", disponible: true },
  { id: 6, titulo: "Misery", autor: "Stephen King", anio: 1987, genero: "Suspenso", disponible: true },
  { id: 7, titulo: "Console Wars", autor: "Blake J. Harris", anio: 2014, genero: "Tecnologia", disponible: true },
  { id: 8, titulo: "Tormenta de espadas", autor: "George R. R. Martin", anio: 2000, genero: "Fantasia", disponible: true },
  { id: 9, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Distopia", disponible: true },
  { id: 10, titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953, genero: "Ciencia ficcion", disponible: true }
];

// ============================================================
// 1.b). Array de usuarios → contendrá las personas registradas en el sistema
// ============================================================

let usuarios = [
  { id: 1, nombre: "Nastenka", email: "nastenka@gmail.com", librosPrestados: [] },
  { id: 2, nombre: "William Dyer", email: "william@gmail.com", librosPrestados: [] },
  { id: 3, nombre: "Tyrion Lannister", email: "tyrion@gmail.com", librosPrestados: [] },
  { id: 4, nombre: "Winston Smith", email: "winston@gmail.com", librosPrestados: [] },
  { id: 5, nombre: "Paul Sheldon", email: "paul@gmail.com", librosPrestados: [] }
];

// ============================================================
// Funciones simples para validar datos

function esEntero(numero) {
  return Number.isInteger(numero);
}

function textoNoVacio(texto) {
  return texto.trim() !== "";
}

function normalizarTexto(texto) {
  return texto.toLowerCase().trim();
}
// ============================================================


// ============================================================
// ==========Actividad 2: GESTION DE LIBROS====================
// ============================================================

// ============================================================
// 2.a) Agregar un libro al array libros
// ============================================================

function agregarLibro(id, titulo, autor, anio, genero) {
  // Validamos que el id sea un numero entero
  if (!esEntero(id)) {
    console.log("El id debe ser un numero entero");
    return;
  }

  // Validamos que no exista un libro con el mismo id
  let existe = libros.find(libro => libro.id === id);
  if (existe) {
    console.log("Ya existe un libro con ese id");
    return;
  }

  // Validamos textos
  if (!textoNoVacio(titulo) || !textoNoVacio(autor) || !textoNoVacio(genero)) {
    console.log("Titulo, autor y genero no pueden estar vacios");
    return;
  }

  // Creamos el nuevo libro
  let nuevoLibro = {
    id: id,
    titulo: titulo,
    autor: autor,
    anio: anio,
    genero: genero,
    disponible: true
  };

  // Agregamos el libro al array
  libros.push(nuevoLibro);
  console.log("Libro agregado correctamente");
}
// ============================================================
// 2.b) Buscar libros por titulo, autor o genero
// ============================================================

function buscarLibro(criterio, valor) {
  let resultados = [];

  // Validamos que el criterio sea correcto
  if (criterio !== "titulo" && criterio !== "autor" && criterio !== "genero") {
    console.log("Criterio invalido. Usar titulo, autor o genero");
    return resultados;
  }

  // Recorremos el array de libros uno por uno
  for (let i = 0; i < libros.length; i++) {

    // Comparamos el valor buscado con el campo indicado
    if (
      normalizarTexto(libros[i][criterio]).includes(normalizarTexto(valor))
    ) {
      resultados.push(libros[i]);
    }
  }

  // Devolvemos el array con los resultados encontrados
  return resultados;
}

// ============================================================
// 2.c) Ordenar libros por titulo o anio (bubble sort)
// ============================================================

function ordenarLibros(criterio) {

    // Validamos que el criterio sea correcto
  if (criterio !== "titulo" && criterio !== "anio") {
    console.log("Criterio invalido. Usar titulo o anio");
    return;
  }

  let copiaLibros = [...libros];

    // Aplicamos bubble sort
  for (let i = 0; i < copiaLibros.length - 1; i++) {
    for (let j = 0; j < copiaLibros.length - i - 1; j++) {
      let actual = copiaLibros[j][criterio];
      let siguiente = copiaLibros[j + 1][criterio];

            // Si el criterio es titulo, comparamos como texto
      if (criterio === "titulo") {
        actual = normalizarTexto(actual);
        siguiente = normalizarTexto(siguiente);
      }
      // Intercambiamos los valores si estan desordenados
      if (actual > siguiente) {
        let aux = copiaLibros[j];
        copiaLibros[j] = copiaLibros[j + 1];
        copiaLibros[j + 1] = aux;
      }
    }
  }

  console.log("Libros ordenados por " + criterio);
  console.table(copiaLibros);
}

// ============================================================
// 2.d) Borrar un libro por id
// ============================================================
//Se busca el indice y luego se elimina con splice
function borrarLibro(id) {
  let indice = libros.findIndex(libro => libro.id === id);

  if (indice === -1) {
    console.log("No se encontro el libro");
    return;
  }

  libros.splice(indice, 1);
  console.log("Libro eliminado correctamente");
}


// ============================================================
// ==========Actividad 3: GESTION DE USUARIOS=================
// ============================================================

// ============================================================
// 3.a) Registrar un nuevo usuario en el sistema
// ============================================================

function registrarUsuario(nombre, email) {

  // Validamos que los datos no esten vacios
  if (!textoNoVacio(nombre) || !textoNoVacio(email)) {
    console.log("El nombre y el email no pueden estar vacios");
    return;
  }

  // Verificamos que no exista otro usuario con el mismo email
  let existe = usuarios.find(usuario => usuario.email === email);

  if (existe) {
    console.log("Ya existe un usuario con ese email");
    return;
  }

  // Creamos el nuevo usuario
  let nuevoUsuario = {
  id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
    nombre: nombre,
    email: email,
    librosPrestados: []
  };

  // Agregamos el usuario al array
  usuarios.push(nuevoUsuario);
  console.log("Usuario registrado correctamente");
}

// ============================================================
// 3.b) Mostrar todos los usuarios registrados
// ============================================================

function mostrarTodosLosUsuarios() {
  return usuarios;
}

// ============================================================
// 3.c) Buscar un usuario por email
// ============================================================

function buscarUsuario(email) {

  // Recorremos el array y buscamos el email indicado
  let usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
    console.log("Usuario no encontrado");
  }

  return usuario;
}

// ============================================================
// 3.d) Borrar un usuario del sistema
// ============================================================

function borrarUsuario(nombre, email) {

  // Buscamos el indice del usuario
  let indice = usuarios.findIndex(
    u => u.nombre === nombre && u.email === email
  );

  if (indice === -1) {
    console.log("No se encontro el usuario");
    return;
  }

  usuarios.splice(indice, 1);
  console.log("Usuario eliminado correctamente");
}

// ============================================================
// ==========Actividad 4: SISTEMA DE PRESTAMOS=================
// ============================================================

// ============================================================
// 4.a) Prestar un libro a un usuario
// ============================================================

function prestarLibro(idLibro, idUsuario) {

  // Buscamos el libro por id
  let libro = libros.find(l => l.id === idLibro);

  // Buscamos el usuario por id
  let usuario = usuarios.find(u => u.id === idUsuario);

  // Validamos que existan el libro y el usuario
  if (!libro) {
    console.log("No se encontro el libro");
    return;
  }

  if (!usuario) {
    console.log("No se encontro el usuario");
    return;
  }

  // Verificamos que el libro este disponible
  if (!libro.disponible) {
    console.log("El libro no esta disponible");
    return;
  }

  // Realizamos el prestamo
  libro.disponible = false;
  usuario.librosPrestados.push(idLibro);

  console.log("Libro prestado correctamente");
}
// ============================================================
// 4.b) Devolver un libro prestado
// ============================================================

function devolverLibro(idLibro, idUsuario) {

  // Buscamos el libro por id
  let libro = libros.find(l => l.id === idLibro);

  // Buscamos el usuario por id
  let usuario = usuarios.find(u => u.id === idUsuario);

  // Validamos que existan el libro y el usuario
  if (!libro || !usuario) {
    console.log("Libro o usuario no encontrado");
    return;
  }

  // Verificamos que el usuario tenga el libro prestado
  if (!usuario.librosPrestados.includes(idLibro)) {
    console.log("El usuario no tiene este libro prestado");
    return;
  }

  // Realizamos la devolucion
  libro.disponible = true;
  usuario.librosPrestados = usuario.librosPrestados.filter(
    id => id !== idLibro
  );

  console.log("Libro devuelto correctamente");
}

// ============================================================
// ==========Actividad 5: REPORTES=============================
// ============================================================

// ============================================================
// 5.a) Generar reporte general de libros.
// En esta actividad utilizamos estos metodos de arrays:
// - filter(): para obtener libros prestados
// - map(): para transformar datos
// - reduce(): para realizar calculos y comparaciones
// ============================================================

function generarReporteLibros() {

  // Cantidad total de libros
  let totalLibros = libros.length;

  // Cantidad de libros prestados (filter)
  let cantidadPrestados = libros
    .filter(libro => libro.disponible === false)
    .length;

  // Cantidad de libros por genero (reduce)
  let cantidadPorGenero = libros.reduce((acumulador, libro) => {

    if (acumulador[libro.genero]) {
      acumulador[libro.genero]++;
    } else {
      acumulador[libro.genero] = 1;
    }

    return acumulador;
  }, {});

  // Libro mas antiguo (reduce)
  let libroMasAntiguo = libros.reduce((masAntiguo, libro) => {
    return libro.anio < masAntiguo.anio ? libro : masAntiguo;
  });

  // Libro mas nuevo (reduce)
  let libroMasNuevo = libros.reduce((masNuevo, libro) => {
    return libro.anio > masNuevo.anio ? libro : masNuevo;
  });

  // Usamos map para obtener solo los titulos 
  let titulos = libros.map(libro => libro.titulo);

  // Mostramos el reporte por consola
  console.log("----- REPORTE DE LIBROS -----");
  console.log("Cantidad total de libros:", totalLibros);
  console.log("Cantidad de libros prestados:", cantidadPrestados);
  console.log("Cantidad de libros por genero:", cantidadPorGenero);
  console.log("Libro mas antiguo:", libroMasAntiguo.titulo, "-", libroMasAntiguo.anio);
  console.log("Libro mas nuevo:", libroMasNuevo.titulo, "-", libroMasNuevo.anio);
  console.log("Titulos de los libros:", titulos);
}

// ============================================================
// ==========Actividad 6: IDENTIFICACION DE LIBROS=============
// ============================================================

// ============================================================
// 6.a) Libros cuyo titulo contiene mas de una palabra
// ============================================================

function librosConPalabrasEnTitulo() {

// Regex usada para comprobar que el titulo contenga solo letras (con tildes) y espacios
  let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  // Filtramos los libros que cumplen la condicion
  let titulos = libros
    .filter(libro => {
      let titulo = libro.titulo.trim();

      // Verificamos que tenga mas de una palabra
      let masDeUnaPalabra = titulo.split(" ").length > 1;

      // Verificamos que no tenga numeros ni caracteres especiales
      let tituloValido = soloLetras.test(titulo);

      return masDeUnaPalabra && tituloValido;
    })
    // Obtenemos solo los titulos
    .map(libro => libro.titulo);

  // Mostramos el resultado
  console.log("Titulos con mas de una palabra:");
  console.log(titulos);

  return titulos;
}

// ============================================================
// ==========Actividad 7: CALCULOS ESTADISTICOS================
// ============================================================

// ============================================================
// 7.a) Calcular estadisticas de los libros
// ============================================================

function calcularEstadisticas() {

  // Obtenemos un array con los años de publicacion
  let anios = libros.map(libro => libro.anio);

  // Calculamos el promedio de años
  let sumaAnios = anios.reduce((acum, anio) => acum + anio, 0);
  let promedio = Math.round(sumaAnios / anios.length);

  // Calculamos el año mas frecuente
  let contadorAnios = {};

  for (let i = 0; i < anios.length; i++) {
    let anio = anios[i];

    if (contadorAnios[anio]) {
      contadorAnios[anio]++;
    } else {
      contadorAnios[anio] = 1;
    }
  }

  let anioMasFrecuente = anios[0];
  let mayorFrecuencia = 0;

  for (let anio in contadorAnios) {
    if (contadorAnios[anio] > mayorFrecuencia) {
      mayorFrecuencia = contadorAnios[anio];
      anioMasFrecuente = anio;
    }
  }

  // Calculamos la diferencia entre el mas antiguo y el mas nuevo
  let anioMinimo = Math.min(...anios);
  let anioMaximo = Math.max(...anios);
  let diferencia = anioMaximo - anioMinimo;

  // Mostramos los resultados
  console.log("ESTADISTICAS");
  console.log("Promedio de años de publicacion:", promedio);
  console.log("Año de publicacion mas frecuente:", anioMasFrecuente);
  console.log("Diferencia entre el libro mas antiguo y el mas nuevo:", diferencia);
}

// ============================================================
// ==========Actividad 8: MANEJO DE CADENAS====================
// ============================================================

// ============================================================
// 8.a) Normalizar datos de libros y usuarios
// ============================================================

function normalizarDatos() {

  // Convertimos los titulos de los libros a mayusculas
  for (let i = 0; i < libros.length; i++) {
    libros[i].titulo = libros[i].titulo.toUpperCase();
  }

  // Eliminamos espacios en blanco en los autores
  for (let i = 0; i < libros.length; i++) {
    libros[i].autor = libros[i].autor.trim();
  }

  // Convertimos los emails de los usuarios a minusculas
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].email = usuarios[i].email.toLowerCase();
  }

  console.log("Datos normalizados correctamente");
}

// ============================================================
// ==========Actividad 9: MENU PRINCIPAL======================
// ============================================================
// En esta actividad usamos:
// - if: para validaciones
// - switch: para seleccionar opciones del menu
// - ciclos (do...while): para mantener el menu activo
// ============================================================

// ============================================================
// 9.a) Mostrar menu de opciones
// ============================================================

function mostrarMenu() {
  console.log("\n*** MENU PRINCIPAL - BIBLIOTECA ***");
  console.log("Seleccione una opcion ingresando el numero:");
  console.log("1) Agregar libro");
  console.log("2) Buscar libro");
  console.log("3) Ordenar libros");
  console.log("4) Borrar libro");
  console.log("5) Registrar usuario");
  console.log("6) Mostrar usuarios");
  console.log("7) Buscar usuario por email");
  console.log("8) Borrar usuario");
  console.log("9) Prestar libro");
  console.log("10) Devolver libro");
  console.log("11) Reporte de libros");
  console.log("12) Libros con mas de una palabra en el titulo");
  console.log("13) Calculos estadisticos");
  console.log("14) Normalizar datos");
  console.log("0) Salir");
}

// ============================================================
// 9.b) Logica del menu principal
// ============================================================

function menuPrincipal() {
  let opcion;

  do {
    mostrarMenu();
    opcion = prompt("Ingrese una opcion: ");

    // Validacion simple usando if
    if (opcion.trim() === "") {
      console.log("Debe ingresar una opcion valida");
      continue;
    }

    switch (opcion) {

      case "1":
        let id = parseInt(prompt("ID del libro: "));
        let titulo = prompt("Titulo: ");
        let autor = prompt("Autor: ");
        let anio = parseInt(prompt("Anio: "));
        let genero = prompt("Genero: ");
        agregarLibro(id, titulo, autor, anio, genero);
        break;

      case "2":
        let criterio = prompt("Buscar por (titulo / autor / genero): ");
        let valor = prompt("Ingrese el valor a buscar: ");
        let resultados = buscarLibro(criterio, valor);
        console.table(resultados);
        break;

      case "3":
        let criterioOrden = prompt("Ordenar por (titulo / anio): ");
        ordenarLibros(criterioOrden);
        break;

      case "4":
        let idBorrar = parseInt(prompt("ID del libro a borrar: "));
        borrarLibro(idBorrar);
        break;

      case "5":
        let nombre = prompt("Nombre del usuario: ");
        let email = prompt("Email del usuario: ");
        registrarUsuario(nombre, email);
        break;

      case "6":
        console.table(mostrarTodosLosUsuarios());
        break;

      case "7":
        let emailBuscar = prompt("Email del usuario: ");
        let usuario = buscarUsuario(emailBuscar);
        console.log(usuario);
        break;

      case "8":
        let nombreBorrar = prompt("Nombre del usuario: ");
        let emailBorrar = prompt("Email del usuario: ");
        borrarUsuario(nombreBorrar, emailBorrar);
        break;

      case "9":
        let idLibro = parseInt(prompt("ID del libro: "));
        let idUsuario = parseInt(prompt("ID del usuario: "));
        prestarLibro(idLibro, idUsuario);
        break;

      case "10":
        let idLibroDev = parseInt(prompt("ID del libro: "));
        let idUsuarioDev = parseInt(prompt("ID del usuario: "));
        devolverLibro(idLibroDev, idUsuarioDev);
        break;

      case "11":
        generarReporteLibros();
        break;

      case "12":
        librosConPalabrasEnTitulo();
        break;

      case "13":
        calcularEstadisticas();
        break;

      case "14":
        normalizarDatos();
        break;

      case "0":
        console.log("Saliendo del sistema...");
        break;

      default:
        console.log("Opcion invalida");
    }

  } while (opcion !== "0");
}

// ============================================================
// Inicio del programa
// ============================================================

menuPrincipal();

// ============================================================
// ========Actividad 10: COMENTANDO MI CODIGO :)===============
// ============================================================
// El codigo esta separado por actividades
// Cada actividad tiene un titulo claro
// Cada funcion tiene un comentario que explica que hace
// Se explican los pasos principales del codigo
// Se usan comentarios como en los ejercicios de clase
// ============================================================
'use strict';

class Disco {
  nombre = 'Nombre del disco';
  autor = 'Autor o banda del disco';
  codigo = 'Código numerico único del disco';
  pistas = [];
  static cantidadDiscos = 0;

  constructor() {
    console.log('Nuevo disco creado');
    Disco.cantidadDiscos++;
  };

  ingresarNombre() {
    let nombre;
    let banderita = 0;
    let banderitaError = false;
    do {
      if (banderita) {
        alert(`Error ${banderita}, debe ingresar un nombre`);
        if (banderita === 3) {
          banderitaError = true;
          break;
        }
      }
      nombre = prompt('Por favor, ingrese el nombre del disco');
      banderita++
      if (nombre) {
        nombre = nombre.toUpperCase();
      }
    } while (!isNaN(nombre));
    this.nombre = nombre;
    if (banderitaError) { window.location.href = "https://es.wikipedia.org/wiki/Nombre#:~:text=El%20nombre%20es%20la%20designaci%C3%B3n,abstracto%2C%20para%20distinguirlo%20de%20otros." };
    banderita = 0;
    banderitaError = false;
  };

  ingresarAutor() {
    let autor;
    let banderita = 0;
    let banderitaError = false;
    do {
      if (banderita) {
        alert(`Error ${banderita}, debe ingresar un autor o banda del disco`);
        if (banderita === 3) {
          banderitaError = true;
          break;
        }
      }
      autor = prompt('Ahora, ingrese el nombre del autor o banda del disco');
      banderita++;
      if (autor) {
        autor = autor.toUpperCase();
      }
    } while (!isNaN(autor));
    this.autor = autor;
    if (banderitaError) { window.location.href = "https://es.wikipedia.org/wiki/Autor#:~:text=El%20autor%20(en%20femenino%2C%20autora,sea%20art%C3%ADstica%2C%20literaria%20o%20cient%C3%ADfica." };
    banderita = 0;
    banderitaError = false;
  };

  ingresarCodigo() {
    let codigo;
    let banderita = 0;
    let banderitaError = false;
    do {
      if (banderita) {
        alert(`Error ${banderita}, debe ingresar un código válido`);
        if (banderita === 3) {
          banderitaError = true;
          break;
        }
      }
      codigo = parseFloat(prompt('Es momento de que ingrese el código numerico del disco'));
      banderita++;
      for (let i in discos) {
        while (discos[i].codigo == codigo) {
          codigo = alert('El código ingresado ya existe, ingrese un código único');
        };
      };
    } while (!(codigo >= 1 && codigo <= 999));
    this.codigo = codigo;
    if (banderitaError) {window.location.href = "https://es.wikipedia.org/wiki/N%C3%BAmero"};
    banderita = 0;
    banderitaError = false;
  };

  guardarPista(pista) {
    this.pistas.push(pista);
  };

  // metodo que devuelve la duracion de cada disco.
  // recorro las pistas y sumo su duracion.
  duracionTotal() {
    let duracionTotal = 0;
    for (let i in this.pistas) {
      duracionTotal += this.pistas[i].duracion;
    }
    return duracionTotal;
  };

  armar() {
    let m;
    m = `
            <p><strong>Nombre:</strong> ${this.nombre}</p>
            <p><strong>Autor:</strong> ${this.autor}</p>
            <p><strong>Código:</strong> ${this.codigo}</p>
            <p><strong>Cantidad de pistas:</strong> ${this.pistas.length}</p>
            <p><strong>Pistas:</strong></p>
            <ul>
        `;

    for (let pista of this.pistas) {
      m += pista.armar();
    }
    m += `</ul>`;

    // recorro las pistas para obtener la pista con mayor duracion y su nombre
    let mayorNum = 0;
    let name;
    for (let i in this.pistas) {
      if (this.pistas[i].duracion > mayorNum) {
        mayorNum = this.pistas[i].duracion;
        name = this.pistas[i].nombre;
      };
    };

    // creo la duración promdedio del disco
    let promedio;
    promedio = this.duracionTotal() / this.pistas.length;

    m += `
            <p><strong>Duración del disco:</strong> ${this.duracionTotal()} segundos</p>
            <p><strong>Pista con mayor duración:</strong> ${name.toUpperCase()} - ${mayorNum} segundos</p>
            <p><strong>Promedio de duración:</strong> ${promedio} segundos</p>`;

    return m;
  };
};

class Pista {
  nombre = 'Nombre de la pista';
  duracion = 'Duración de pista';

  constructor() {
    console.log('Nueva pista creada');
  };

  ingresarNombre() {
    let nombre;
    let banderita = 0;
    let banderitaError = false;
    do {
      if (banderita) {
        alert(`Error ${banderita}, debe ingresar un nombre`);
        if (banderita === 3) {
          banderitaError = true;
          break;
        }
      }
      nombre = prompt('Por favor, ingrese el nombre de la pista');
      banderita++
      if (nombre) {
        nombre = nombre.toUpperCase();
      }
    } while (!isNaN(nombre));
    this.nombre = nombre;
    if (banderitaError) {window.location.href = "https://es.wikipedia.org/wiki/Nombre#:~:text=El%20nombre%20es%20la%20designaci%C3%B3n,abstracto%2C%20para%20distinguirlo%20de%20otros."};
    banderita = 0;
    banderitaError = false;
  };

  ingresarDuracion() {
    let duracion;
    let banderita = 0;
    let banderitaError = false;
    do {
      if (banderita) {
        alert(`Error ${banderita}, debe ingresar una duración válida`);
        if (banderita === 3) {
          banderitaError = true;
          break;
        }
      }
      duracion = parseFloat(prompt('Ingrese la duración de la pista en segundos'));
      banderita ++;
    } while (!(duracion >= 0 && duracion <= 7200));
    this.duracion = duracion;
    if (banderitaError) {window.location.href = "https://es.wikipedia.org/wiki/Duraci%C3%B3n_(m%C3%BAsica)"};
    banderita = 0;
    banderitaError = false;
  };

  armar() {
    return `<li><strong>Nombre:</strong> ${this.nombre} - <strong style="color: ${this.duracion >= 180 ? 'red' : '#4A306D'}">Duración:</strong> ${this.duracion} segundos.</li>`;
  };
};

// Discos:
let discos = [];
let discoPrueba;
discoPrueba = new Disco;
discoPrueba.nombre = "L.E.A.L";
discoPrueba.autor = "Kelo Kamada";
discoPrueba.codigo = 1;
let pistaPrueba;
pistaPrueba = new Pista;
pistaPrueba.nombre = "Intro";
pistaPrueba.duracion = 1200;
let pistaPrueba1 = new Pista;
pistaPrueba1.nombre = "Doble Ipa";
pistaPrueba1.duracion = 100;
let pistaPrueba2 = new Pista;
pistaPrueba2.nombre = "Kamaleon";
pistaPrueba2.duracion = 4400;
let pistaPrueba3 = new Pista;
pistaPrueba3.nombre = "Represa";
pistaPrueba3.duracion = 3500;
let pistaPrueba4 = new Pista;
pistaPrueba4.nombre = "Atemporal";
pistaPrueba4.duracion = 150;
let pistaPrueba5 = new Pista;
pistaPrueba5.nombre = "Fractal";
pistaPrueba5.duracion = 2000;
discoPrueba.guardarPista(pistaPrueba);
discoPrueba.guardarPista(pistaPrueba1);
discoPrueba.guardarPista(pistaPrueba2);
discoPrueba.guardarPista(pistaPrueba3);
discoPrueba.guardarPista(pistaPrueba4);
discoPrueba.guardarPista(pistaPrueba5);
discos.push(discoPrueba);

// Función Cargar:
const Cargar = () => {
  // Cositas:
  let disco;
  disco = new Disco;
  disco.ingresarNombre();
  disco.ingresarAutor();
  disco.ingresarCodigo();
  do {
    let pista;
    pista = new Pista;
    pista.ingresarNombre();
    pista.ingresarDuracion();
    disco.guardarPista(pista);
  } while (confirm('Desea ingresar otra pista?'));
  discos.push(disco);
};

// Función Mostrar:
const Mostrar = () => {
  // ordeno los dicos alfabeticamente
  discos.sort((a, b) => {
    if (a.nombre > b.nombre) { return 1; }
    if (a.nombre < b.nombre) { return -1; }
    return 0;
  });
  // Variable para ir armando la cadena:
  let html = '';
  // Cositas:
  if (discos.length == 0) {
    alert('Debe ingresar un disco marmotin!');
  } else {
    html += `<h4><span>Cantidad de discos:</span> ${Disco.cantidadDiscos}</h4>`;
    html += `<hr />`;

    // busco el disco con mayor duracion, comparando la duracion de cada disco.
    // obtengo su nombre y el autor
    let maximaDuracion = 0;
    let nombreMaxima;
    let autorMaxima;
    for (let disco of discos) {
      if (maximaDuracion < disco.duracionTotal()) {
        nombreMaxima = disco.nombre;
        autorMaxima = disco.autor;
        maximaDuracion = disco.duracionTotal();
      };
      html += disco.armar();
      html += `<hr />`;
    }

    html += `<p><span>Disco con mayor duración:</span> ${nombreMaxima.toUpperCase()} - ${autorMaxima.toUpperCase()} - ${maximaDuracion} segundos</p>`;
  }

  document.getElementById('info').innerHTML = html;
};

const MostrarCodigo = () => {
  let html2 = ``;

  // pido el codigo unico numerico, analizo si existe y lo muestro.
  let cod;
  do {
    cod = parseFloat(prompt('Por favor, ingrese el código del disco'));
    for (let disco of discos) {
      if (cod == disco.codigo) {
        html2 += disco.armar();
      } else {
        alert('Debe ingresar un código existente!');
      }
    };
  } while (!(cod >= 0 && cod <= 999));

  document.getElementById('info').innerHTML = html2;
};

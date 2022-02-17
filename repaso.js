let numeros = [2, 4, 6];

function dobles(v) {
  return v * 2;
}

let dobleDeNumeros = numeros.map(dobles, 2);

let canasta = [
  "Banana",
  "Banana",
  "Pera",
  "Manzana",
  "Manzana",
  "Manzana",
  "Pera",
  "Naranja",
  "Melon",
]; // {Banana: 2, Manzana:3}

let objFrutas = canasta.reduce((objTotal, fruta, i) => {
  console.log(`vuelta --> ${i + 1} `, objTotal, `fruta --> ${fruta} `);
  objTotal[fruta] = (objTotal[fruta] || 0) + 1;
  return objTotal;
}, {});

let obj = {
  tel: 123,
};
let obj2 = {
  tel: 222,
};

obj.nombre = "Erika";
obj["apellido"] = "Diaz";

let propQueVieneDeAlgunLugar = "lalallala";

console.log(objFrutas);

let canasta2 = [
  "Banana",
  "Banana",
  "Pera",
  "Manzana",
  "Manzana",
  "Manzana",
  "Pera",
  "Naranja",
  "Melon",
];

let canasta3 = [...canasta, ...canasta2];

let banana = canasta2[0];
let [banana2, banana3, , asdasdasdasdasdasdasdasd] = canasta2;
console.log(banana, banana2, banana3, asdasdasdasdasdasdasdasd);

const orden = {
  id: "ñalshdpsadkjhasdjgha4209834s",
  monto: 500,
  direccion: {
    calle: "Rivadavia",
    numero: 123,
  }, //0x0012
};

const orden2 = {
  ...orden,
  direccion: {
    ...orden.direccion,
  },
};

let direccion2 = orden.direccion;
let { zaasa } = orden;

orden2.direccion.calle = "lasldasldasldlasd";
console.log(orden.direccion === orden2.direccion);

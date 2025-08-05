const motos = {
  "Harley-Davidson": {
    modelos: ["Iron 883", "Street Bob", "Fat Bob", "Sportster S", "Low Rider ST"],
    precios: { basico: [600, 1000], medio: [1000, 1800], personalizado: [1000, 3000] }
  },
  "Royal Enfield": {
    modelos: ["Interceptor 650", "Continental GT", "Meteor 350"],
    precios: { basico: [400, 800], medio: [800, 1200], personalizado: [800, 2000] }
  },
  "Honda": {
    modelos: ["Rebel 500", "Shadow 750"],
    precios: { basico: [250, 500], medio: [500, 900], personalizado: [700, 1500] }
  },
  "Bajaj": {
    modelos: ["Avenger 220", "Avenger 160"],
    precios: { basico: [150, 300], medio: [300, 600], personalizado: [500, 1000] }
  },
  "Keeway": {
    modelos: ["Superlight 200", "K-Light 202"],
    precios: { basico: [120, 250], medio: [250, 400], personalizado: [400, 800] }
  }
};

const marcaSelect = document.getElementById("marca");
const modeloSelect = document.getElementById("modelo");
const nivelSelect = document.getElementById("nivel");
const resultadoDiv = document.getElementById("resultado");

Object.keys(motos).forEach(marca => {
  const option = document.createElement("option");
  option.value = marca;
  option.textContent = marca;
  marcaSelect.appendChild(option);
});

marcaSelect.addEventListener("change", () => {
  const selectedMarca = marcaSelect.value;
  modeloSelect.innerHTML = "<option value=''>Seleccioná un modelo</option>";

  if (selectedMarca && motos[selectedMarca]) {
    modeloSelect.disabled = false;
    motos[selectedMarca].modelos.forEach(modelo => {
      const option = document.createElement("option");
      option.value = modelo;
      option.textContent = modelo;
      modeloSelect.appendChild(option);
    });
  } else {
    modeloSelect.disabled = true;
  }
});

function cotizar() {
  const marca = marcaSelect.value;
  const nivel = nivelSelect.value;

  if (!marca || !nivel) {
    resultadoDiv.innerHTML = "<p>Por favor completá todos los campos.</p>";
    return;
  }

  const rango = motos[marca].precios[nivel];
  const precio = getRandomInt(rango[0], rango[1]);

  resultadoDiv.innerHTML = `<p>💰 Estimado: <strong>USD ${precio}</strong></p>`;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

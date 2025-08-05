const motos = {
  "Harley-Davidson": {
    modelos: [
      "Sportster Iron 883",
      "Forty-Eight",
      "Street Bob",
      "Softail Standard",
      "Low Rider S",
      "Fat Bob",
      "Heritage Classic"
    ],
    precios: {
      basico: [500, 900],
      medio: [900, 1500],
      personalizado: [1000, 3000]
    }
  },
  "Royal Enfield": {
    modelos: [
      "Interceptor 650",
      "Continental GT 650",
      "Classic 500",
      "Bullet 350",
      "Meteor 350"
    ],
    precios: {
      basico: [300, 600],
      medio: [600, 900],
      personalizado: [800, 1600]
    }
  },
  "Bajaj": {
    modelos: ["Avenger 220 Cruise", "Avenger 160 Street"],
    precios: {
      basico: [150, 300],
      medio: [300, 500],
      personalizado: [500, 1000]
    }
  },
  "Keeway": {
    modelos: ["Superlight 200", "K-Light 202"],
    precios: {
      basico: [120, 250],
      medio: [250, 400],
      personalizado: [400, 900]
    }
  },
  "Motomel": {
    modelos: ["Custom 200"],
    precios: {
      basico: [100, 200],
      medio: [200, 350],
      personalizado: [350, 800]
    }
  },
  "Zanella": {
    modelos: ["Patagonian Eagle 250", "Ceccato V250i", "ZR 250"],
    precios: {
      basico: [100, 250],
      medio: [250, 400],
      personalizado: [400, 850]
    }
  }
};

const marcaSelect = document.getElementById("marca");
const modeloSelect = document.getElementById("modelo");

Object.keys(motos).forEach((marca) => {
  const option = document.createElement("option");
  option.value = marca;
  option.textContent = marca;
  marcaSelect.appendChild(option);
});

marcaSelect.addEventListener("change", () => {
  const marca = marcaSelect.value;
  modeloSelect.innerHTML = '<option value="">Seleccioná un modelo</option>';
  modeloSelect.disabled = !marca;

  if (marca) {
    motos[marca].modelos.forEach((modelo) => {
      const option = document.createElement("option");
      option.value = modelo;
      option.textContent = modelo;
      modeloSelect.appendChild(option);
    });
  }
});

function cotizar() {
  const marca = marcaSelect.value;
  const nivel = document.getElementById("nivel").value;

  if (!marca || !nivel) {
    document.getElementById("resultado").textContent =
      "Por favor, completá todos los campos.";
    return;
  }

  const precios = motos[marca].precios[nivel];
  const min = precios[0];
  const max = precios[1];
  const valor = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById(
    "resultado"
  ).textContent = `Precio estimado: USD ${valor}`;
}

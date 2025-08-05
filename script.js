const modelosPorMarca = {
  "Harley-Davidson": ["Sportster", "Softail", "Dyna", "Street Bob"],
  "Royal Enfield": ["Classic 500", "Interceptor 650", "Bullet"],
  "Bajaj": ["Avenger 220 Cruise", "Avenger Street 160"],
  "Keeway": ["Superlight 200", "K-Light 202"],
  "Motomel": ["Custom 200", "Strato Euro 150"],
  "Zanella": ["Patagonian Eagle 250", "ZR 150 OHV"],
  "UM": ["Renegade Commando", "Renegade Vegas"],
  "Mondial": ["HD 254A", "HD 250 Custom"],
  "Corven": ["TXR 250", "Energy 110 Chopper"]
};

const rangosPorMarca = {
  "Harley-Davidson": [150, 300, [600, 2000]],
  "Royal Enfield": [120, 250, [500, 1500]],
  "Bajaj": [90, 180, [400, 1000]],
  "Keeway": [80, 160, [350, 900]],
  "Motomel": [70, 140, [300, 800]],
  "Zanella": [60, 120, [250, 700]],
  "UM": [80, 150, [300, 850]],
  "Mondial": [60, 110, [250, 650]],
  "Corven": [50, 100, [200, 600]]
};

const marcaSelect = document.getElementById("marca");
const modeloSelect = document.getElementById("modelo");
const nivelSelect = document.getElementById("nivel");
const resultadoDiv = document.getElementById("resultado");
const whatsappLink = document.getElementById("whatsapp-link");

function cargarMarcas() {
  for (let marca in modelosPorMarca) {
    const option = document.createElement("option");
    option.value = marca;
    option.textContent = marca;
    marcaSelect.appendChild(option);
  }
}

function cargarModelos() {
  const marca = marcaSelect.value;
  modeloSelect.innerHTML = '<option value="">Seleccioná modelo</option>';
  if (!marca) {
    modeloSelect.disabled = true;
    return;
  }

  modelosPorMarca[marca].forEach(modelo => {
    const option = document.createElement("option");
    option.value = modelo;
    option.textContent = modelo;
    modeloSelect.appendChild(option);
  });

  modeloSelect.disabled = false;
}

function cotizar() {
  const marca = marcaSelect.value;
  const modelo = modeloSelect.value;
  const nivel = nivelSelect.value;

  if (!marca || !modelo || !nivel) {
    resultadoDiv.textContent = "Por favor, completá todos los campos.";
    whatsappLink.style.display = "none";
    return;
  }

  const rangos = rangosPorMarca[marca];
  let precio = 0;

  switch (nivel) {
    case "basico":
      precio = getRandomInt(rangos[0], rangos[0] + 50);
      break;
    case "medio":
      precio = getRandomInt(rangos[1], rangos[1] + 70);
      break;
    case "premium":
      precio = getRandomInt(rangos[2][0], rangos[2][1]);
      break;
  }

  resultadoDiv.textContent = `💰 Precio estimado: USD ${precio}`;

  const mensaje = `Hola! Quiero cotizar un trabajo para mi tanque:\nMarca: ${marca}\nModelo: ${modelo}\nNivel: ${nivel.toUpperCase()}\nPrecio estimado: USD ${precio}`;
  whatsappLink.href = `https://wa.me/5491170315100?text=${encodeURIComponent(mensaje)}`;
  whatsappLink.style.display = "inline-block";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Inicializar marcas y eventos
cargarMarcas();
marcaSelect.addEventListener("change", () => {
  cargarModelos();
  resultadoDiv.textContent = "";
  whatsappLink.style.display = "none";
});
modeloSelect.addEventListener("change", () => {
  resultadoDiv.textContent = "";
  whatsappLink.style.display = "none";
});
nivelSelect.addEventListener("change", () => {
  resultadoDiv.textContent = "";
  whatsappLink.style.display = "none";
});

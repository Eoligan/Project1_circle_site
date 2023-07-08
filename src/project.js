//Control the flow of navigation
const MAIN_PROJECT = "simplify";
const mainProjectLink = document.querySelectorAll("#main-project");

//Get DYNAMICALLY the article clicked, or by default the main project
//(now: simplify) when clicked in primary/secondary project button
async function getArticle() {
  const section = document.querySelector(".head-project-section");
  const article = section.querySelector(".container");

  let selectedLinkID = localStorage.getItem("selectedLinkID");

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const data = await response.json();

    if (selectedLinkID === null) {
      selectedLinkID = "simplify";
    }

    let item;

    for (const i in data) {
      if (data[i].name.toLowerCase() === selectedLinkID) {
        item = i;
        break;
      }
    }

    // Crear el elemento div para el encabezado del proyecto
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("head-project-header");

    // Crear el elemento h1 para el título del proyecto
    const titleH1 = document.createElement("h1");
    titleH1.classList.add("head-project-header__title");
    titleH1.textContent = data[item].name;

    // Crear el elemento div para el subtítulo del proyecto
    const subtitleDiv = document.createElement("div");
    subtitleDiv.classList.add("head-project-header__subtitle");

    // Crear el elemento p para la descripción del proyecto
    const subtitleP = document.createElement("p");
    subtitleP.classList.add("h-p-header__subtitle");
    subtitleP.textContent = data[item].description;

    // Crear el elemento p para la fecha completada del proyecto
    const dateP = document.createElement("p");
    dateP.classList.add("h-p-header__date");
    dateP.innerHTML = `<span>Completed on</span> ${data[item].completed_on}`;

    // Agregar los elementos al árbol DOM
    subtitleDiv.appendChild(subtitleP);
    subtitleDiv.appendChild(dateP);
    headerDiv.appendChild(titleH1);
    headerDiv.appendChild(subtitleDiv);
    article.appendChild(headerDiv);

    // Crear el elemento div para el contenedor de imágenes del proyecto
    const imgContainerDiv = document.createElement("div");
    imgContainerDiv.classList.add("head-project-img-container");

    // Crear la imagen principal del proyecto
    const frontImg = document.createElement("img");
    frontImg.src = data[item].image;
    frontImg.alt = "";
    frontImg.classList.add("head-project-img__front");

    // Crear la imagen de fondo del proyecto
    const bgImg = document.createElement("img");
    bgImg.src = data[item].image;
    bgImg.alt = "";
    bgImg.classList.add("head-project-img__bg");

    // Agregar las imágenes al contenedor
    imgContainerDiv.appendChild(frontImg);
    imgContainerDiv.appendChild(bgImg);
    article.appendChild(imgContainerDiv);

    // Crear el elemento p para el texto del proyecto
    const textP = document.createElement("p");
    textP.classList.add("head-project-text");
    textP.innerHTML = data[item].content;
    article.appendChild(textP);
  } catch (err) {
    console.log("Failed to fetch data");
    const textP = document.createElement("p");
    textP.classList.add("head-project-text");
    textP.style.color = "red";
    textP.style.fontWeight = "bold";
    textP.innerHTML = "Error: Failed to get data!";
    article.appendChild(textP);
  }
}

getArticle();

//Event that listens click on Projects link (primary or secondary)
//and go to main-project at that moment (now: simplify)

mainProjectLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    localStorage.setItem("selectedLinkID", MAIN_PROJECT);

    window.location.href = "/project.html";
  });
});

var imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png", "https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png"].reverse() 


function changeTitles() {
  let titleName = document.querySelector("h1")
  titleName.textContent = "Ce que j'ai appris à THP"

  let subTitleName = document.getElementsByClassName("lead text-body-secondary")
  subTitleName[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}


function changeCallToActions() {
  let buttonMain = document.querySelectorAll("p a")[0]
  buttonMain.textContent = "OK je veux tester !"
  buttonMain.setAttribute("href", "http://www.thehackingproject.org")
  
  let buttonSecondMain = document.querySelectorAll("p a")[1]
  buttonSecondMain.textContent = "Non, gros bouffon"
  buttonSecondMain.setAttribute("href", "https://www.pole-emploi.fr/accueil/")
}


function changeLogoName() {
  let logoHeader = document.querySelectorAll("div.navbar div.container a strong")[0]
  logoHeader.textContent = "The THP Experience"
  logoHeader.style.fontSize = "2em"
}



function createIMG(imagesArray) {
  let imageArrayElement = []
  imagesArray.forEach((image) => {
    let img = document.createElement("img")
    img.src = image
    imageArrayElement.push(img)
  })
  return imageArrayElement
}


function populateImages() {
  let img = createIMG(imagesArray)
  let svgElements = document.querySelectorAll("div.col div.card svg.card-img-top")
  svgElements.forEach ((svgElement) => {
    svgElement.replaceWith(img.pop())
  })
}

function deleteLastCards() {
  for(let i = 0; i < 3; i++){
    let allCard = document.querySelectorAll("div.album div.container div.row div.col")
    allCard[allCard.length - 1].remove()
  }
}


function changeCardsText() {
  const newTexts = [
      "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
      "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
      "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.",
  ];

  const cardTexts = document.querySelectorAll('.card .card-text');

  newTexts.forEach((text, index) => {
      if (cardTexts[index]) {
          cardTexts[index].textContent = text;
      }
  });
}


function changeViewButtons() {
  const viewButtons = document.querySelectorAll('.card .btn-outline-secondary');

  viewButtons.forEach(button => {
    if (button.textContent.trim().toLowerCase() === 'view') {
        button.classList.add('btn-success');
        button.classList.remove('btn-outline-secondary');
    }
});
}


changeTitles()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText();
changeViewButtons();


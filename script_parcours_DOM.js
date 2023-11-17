let paragrapheNumber = document.getElementsByTagName("p")
console.log("Nombre de paragraphes 'p' :" + paragrapheNumber.length)

let coucouElement = document.getElementById("coucou")
console.log("Voici l'élément 'coucou' :")
console.log(coucouElement)

let a3URL = document.getElementsByTagName("a")[2].href
console.log(a3URL)

let compteMoi = document.getElementsByClassName("compte-moi").length
console.log(`Il y a ${compteMoi} éléments 'compte-moi'`)

let compteMoiLi = document.querySelectorAll("li.compte-moi").length
console.log(`Ainsi que ${compteMoiLi} éléments Li dans la classe 'compte-moi'`)

let compteMoiLiInsideOl = document.querySelectorAll("ol li.compte-moi").length
console.log(compteMoiLiInsideOl)

let getElementDiv = document.querySelector("div").children[1].children[0].textContent
console.log(getElementDiv)
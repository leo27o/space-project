const container = document.querySelector(".container")

const acceuilTemplate = container.innerHTML

const planetes = document.getElementsByClassName("lienPlanete")


console.log(planetes)


const Terre = `
<div class="image">
  <img class="imageTemplate" src="terre.png">
</div>

<div class="texte">
  <h1>La Terre</h1>
  <div class="texteContainer">
      <p >
        La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que le diamètre.
        Par ailleurs, elle est le seul objet céleste connu pour abriter la vie.
        Elle orbite autour du Soleil en 365,256 jours solaires et réalise une rotation sur elle-même relativement au Soleil en 23 h 56 min 4 s soit un peu moins que son jour solaire de 24 h du fait de ce déplacement autour du Soleila.
        L'axe de rotation de la Terre possède une inclinaison de 23°, ce qui cause l'apparition des saisons. 
      </p>
  </div>  
</div>  
`

const Lune = `
<div class="image">
  <img class="imageTemplate" src="grandeLune.png">
</div>

<div class="texte">
  <h1>La Lune</h1>
  <div class="texteContainer">
      <p >
        La Lunea, dite aussi Terre Ib, est l'unique satellite naturel permanent de la planète Terre.
        Il s'agit du cinquième plus grand satellite naturel du Système solaire, et du plus grand des satellites planétaires par rapport à la taille de la planète autour de laquelle il orbite.
        Elle est le deuxième satellite le plus dense du Système solaire après Io, un satellite de Jupiterc. 
      </p>
  </div>  
</div>
`

const Mars = `
<div class="image">
  <img class="imageTemplate" src="mars.png">
</div>

<div class="texte">
  <h1>Mars</h1>
  <div class="texteContainer">
      <p >
        Mars est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse.
        Son éloignement au Soleil est compris entre 1,381 et 1,666 UA (206,6 à 249,2 millions de kilomètres), avec une période orbitale de 669,58 jours martiens (686,71 jours ou 1,88 année terrestre). 
      </p>
  </div>  
</div>
`

const Saturne = `
<div class="image">
  <img class="imageTemplate" src="saturne.png">
</div>

<div class="texte">
  <h1>Saturne</h1>
  <div class="texteContainer">
      <p >
        Saturne est la sixième planète du Système solaire par ordre d'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse.
        Son rayon moyen de 58 232 km est environ neuf fois et demi celui de la Terre et sa masse de 568,46 x 1024 kg est 95 fois plus grande.
        Orbitant en moyenne à environ 1,4 milliard de kilomètres du Soleil (9,5 unités astronomiques), sa période de révolution vaut un peu moins de 30 années tandis que sa période de rotation est estimée à 10 h 33 min. 
      </p>
  </div>  
</div>
`

const Venus = `
<div class="image">
  <img class="imageTemplate" src="venus.png">
</div>

<div class="texte">
  <h1>Venus</h1>
  <div class="texteContainer">
      <p >
        Vénus est la deuxième planète du Système solaire par ordre d'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre.
        Elle doit son nom à la déesse romaine de l'amour. 
      </p>
  </div>  
</div>
`

console.log (container)

const contentChange = (planete) => {
  container.innerHTML = planete
}

for (let  planete of planetes){
  planete.addEventListener("click", function(){
    console.log(planete) 

    if(planete.innerText ==  "Système Solaire"){
      contentChange(acceuilTemplate)
    }

    if(planete.innerText ==  "Terre"){
      contentChange(Terre)
    }

    if(planete.innerText ==  "Lune"){
      contentChange(Lune)
    }

    if(planete.innerText ==  "Mars"){
      contentChange(Mars)
    }

    if(planete.innerText ==  "Saturne"){
      contentChange(Saturne)
    }

    if(planete.innerText ==  "Venus"){
      contentChange(Venus)
      
    }
    
  })
}

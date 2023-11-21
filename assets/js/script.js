let text = document.getElementById("text")
let button = document.getElementById("button")
let conteneur = document.getElementById("inside")
let maxID = 0


button.addEventListener("click", function () {
    let saisie = text.value
    let tache = document.createElement("div")
    tache.setAttribute("class", "non_effectue")
    tache.setAttribute("id", maxID)
    conteneur.appendChild(tache)
    tache.innerHTML = saisie + "<span>X</span>"

    let X = tache.querySelector("span")
    X.addEventListener("click", function () {
        document.getElementById(tache.id).remove()
        console.log(tache.id)
    })

    tache.addEventListener("click", function() {
        tache.setAttribute("class", "effectue")
    })
    
    maxID++

    text.value = ""
})
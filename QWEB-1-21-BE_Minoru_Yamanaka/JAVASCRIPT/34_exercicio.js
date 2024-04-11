function resultado2(){ 
let pontuacaoLocal2 = Number(pontuacaoLocal.value)
let pontuacaoVisitante2 = Number(pontuacaoVisitante.value)

    if (pontuacaoLocal2>pontuacaoVisitante2) {
        resposta.innerText = "Vitória do time Local"
    } else if (pontuacaoLocal2< pontuacaoVisitante2) {
        resposta.innerText ="Vitória do time Visitante"
    } else {
        resposta.innerText = "Empate"
    }
}

// https://www.sp.senac.br/cursos-livres/curso-de-angular-interfaces-front-end

// leonid professor

const form = document.getElementById('heroiForm')
const resultadoDiv = document.getElementById('resultado')
const pathAssets = './assets/img/'
const rankHero = window.document.getElementById('rankHero')


form.addEventListener('submit', (event) => {
  event.preventDefault()

  const nameHero = document.getElementById('nameHero').value
  const xpHero = parseInt(document.getElementById('xpHero').value)

  const nivel = determinarNivelHeroi(xpHero);
  resultadoDiv.innerHTML = `O herói de nome ${nameHero} está no nível ${nivel} com um total de ${xpHero}xp`
});

function determinarNivelHeroi(xpHero) {
  const niveis = [
    { limiteInferior: 0, limiteSuperior: 1000, nome: "Ferro", src: "Iron_3_Rank.png" },
    { limiteInferior: 1001, limiteSuperior: 2000, nome: "Bronze", src: "Bronze_3_Rank.png" },
    { limiteInferior: 2001, limiteSuperior: 5000, nome: "Prata", src: "Silver_3_Rank.png" },
    { limiteInferior: 5001, limiteSuperior: 7000, nome: "Ouro", src: "Gold_3_Rank.png" },
    { limiteInferior: 7001, limiteSuperior: 8000, nome: "Platina", src: "Platinum_3_Rank.png" },
    { limiteInferior: 8001, limiteSuperior: 9000, nome: "Ascendente", src: "Ascendant_3_Rank.png" },
    { limiteInferior: 9001, limiteSuperior: 10000, nome: "Imortal", src: "Immortal_3_Rank.png" },
    { limiteInferior: 10001, limiteSuperior: Infinity, nome: "Radiante", src: "Radiant_Rank.png" }
  ];

  let nivel = ''
  for (let i = 0; i < niveis.length; i++) {
    const { limiteInferior, limiteSuperior, nome, src } = niveis[i]
    if (xpHero >= limiteInferior && xpHero <= limiteSuperior) {
      nivel = nome
      rankHero.src = `${pathAssets}${src}`
      break
    }
  }
  return nivel;
}

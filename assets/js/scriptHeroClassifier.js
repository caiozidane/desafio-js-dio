const form = document.getElementById('heroForm')
const divResult = document.getElementById('result')
const pathAssets = '/assets/img/'
const rankHero = window.document.getElementById('rankHero')


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameHero = document.getElementById('nameHero').value
  const xpHero = parseInt(document.getElementById('xpHero').value)

  const level = determineHeroLevel(xpHero)
  divResult.innerHTML = `O herói de name ${nameHero} está no nível ${level} com um total de ${xpHero}xp`
})

function determineHeroLevel(xpHero) {
  const levels = [
    { lowerLimit: 0, upperLimit: 1000, name: "Ferro", src: "Iron_3_Rank.png" },
    { lowerLimit: 1001, upperLimit: 2000, name: "Bronze", src: "Bronze_3_Rank.png" },
    { lowerLimit: 2001, upperLimit: 5000, name: "Prata", src: "Silver_3_Rank.png" },
    { lowerLimit: 5001, upperLimit: 7000, name: "Ouro", src: "Gold_3_Rank.png" },
    { lowerLimit: 7001, upperLimit: 8000, name: "Platina", src: "Platinum_3_Rank.png" },
    { lowerLimit: 8001, upperLimit: 9000, name: "Ascendente", src: "Ascendant_3_Rank.png" },
    { lowerLimit: 9001, upperLimit: 10000, name: "Imortal", src: "Immortal_3_Rank.png" },
    { lowerLimit: 10001, upperLimit: Infinity, name: "Radiante", src: "Radiant_Rank.png" }
  ];

  let level = ''
  for (let i = 0; i < levels.length; i++) {
    const { lowerLimit, upperLimit, name, src } = levels[i]
    if (xpHero >= lowerLimit && xpHero <= upperLimit) {
      level = name
      rankHero.src = `${pathAssets}${src}`
      break
    }
  }
  return level;
}
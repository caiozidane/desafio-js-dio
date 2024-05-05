const form = document.getElementById('playerForm');
const divResult = document.getElementById('result');
const pathAssets = '/assets/img/';
const rankHero = document.getElementById('rankHero');
const classifyButton = document.getElementById('classifyButton');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nickName = document.getElementById('nickName').value;
  const playerVictories = parseInt(document.querySelector('input#playerVictories').value);
  const playerDefeats = parseInt(document.querySelector('input#playerDefeats').value);

  const { winRate, level } = levelCalculate(playerVictories, playerDefeats);
  divResult.innerHTML += `O Player ${nickName} está no ranque ${level} com um total de ${winRate} vitórias<br>`;
});

function levelCalculate(playerVictories, playerDefeats) {
  const winRate = playerVictories - playerDefeats;
  let level = '';

  if (winRate <= 10) {
    level = "Ferro";
  } else if (winRate >= 11 && winRate <= 20) {
    level = "Bronze";
  } else if (winRate >= 21 && winRate <= 50) {
    level = "Prata";
  } else if (winRate >= 51 && winRate <= 80) {
    level = "Ouro";
  } else if (winRate >= 81 && winRate <= 90) {
    level = "Diamante";
  } else if (winRate >= 91 && winRate <= 100) {
    level = "Lendário";
  } else {
    level = "Imortal";
  }
  setRankImage(level); // Define a imagem do rank baseada no nível
  return { winRate, level };
}

function setRankImage(level) {
  const rankImages = {
      "Ferro": "Iron_3_Rank.png",
      "Bronze": "Bronze_3_Rank.png",
      "Prata": "Silver_3_Rank.png",
      "Ouro": "Gold_3_Rank.png",
      "Diamante": "Platinum_3_Rank.png",
      "Lendário": "Ascendant_3_Rank.png",
      "Imortal": "Immortal_3_Rank.png"
  };
  rankHero.src = `${pathAssets}${rankImages[level]}`;
}
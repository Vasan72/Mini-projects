const buttonRan = document.getElementById("buttonRan");
const searchBtn = document.getElementById("searchBtn");
const userValues = document.getElementById("userValues");

const superhero_token = "970322344669462";
const Base_url = `https://www.superheroapi.com/api.php/${superhero_token}`;

const getRanSuperHero = (id, name) => {
  fetch(`${Base_url}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      const superhero = json
       showHeroInfo(superhero)
    });
};
const searchHero = (name) => {
  console.log(userValues.value);
  fetch(`${Base_url}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const hero = json.results[0];
      console.log(hero);
     showHeroInfo(hero)
    });
};

const statsEmoji = {
intelligence:'🧠',
strength: '🦾',
speed: '🏃‍♂️',
durability: '🏋️‍♂️',
power: '🎇',
combat: '⚔'
}

const showHeroInfo = (character)=>{
  const name = `<h2>${character.name}</h2>`

  const image = `<img src = ${character.image.url} height = 200 width = 200/>`

  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statsEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`    
  }).join('')

  document.getElementById(
    "heroes-img"
  ).innerHTML = `<div class ='allDataDiv'>${name}${image}${stats}</div>`

}
  

const randomHero = () => {
  const numberOfHero = 731;
  return Math.floor(Math.random() * numberOfHero) + 1;
};
buttonRan.onclick = () => getRanSuperHero(randomHero());
userValues.onkeyup = () => {
  searchHero(userValues.value);
};
searchBtn.onclick = () => searchHero(userValues.value);

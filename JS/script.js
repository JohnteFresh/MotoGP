const riders = [
  {
    image: 'icons/MotoImg/L7mD2P5e.webp',
    name: 'Marco Bezzecchi',
    bike: 'Ducati',
    description: 'Bursting onto the Italian scene as runner-up in the CIV Moto3™ title in 2014, Italian Marco Bezzechi then went one better in his second year in the series as he took the title with an incredible seven wins...'
  },

  {
    image: 'icons/MotoImg/aijXUw2f.webp',
    name: 'Marc Marquez',
    bike: 'Honda',
    description: 'Marc Marquez became the youngest ever six-time World Champion after taking his fourth premier class crown in 2017...'
  },

  {
    image: 'icons/MotoImg/WBIOoIRV.webp',
    name: 'Brad Binder',
    bike: 'KTM',
    description: 'South African Brad Binder is a former Red Bull MotoGP Rookie and his star moment in the Cup came in Estoril in 2011 when he won the race from pole to flag by a margin of 15 seconds...'
  },

  {
    image: './icons/MotoImg/YW9dAEBJ.webp',
    name: 'Francesco Bagnaia',
    bike: 'Ducati',
    description: 'Italian Francesco Bagnaia moved to the highly competitive CEV Championship in Spain in 2010, and he came third overall that year...'
  },

  {
    image: 'icons/MotoImg/Fabioquartararo-1-.webp',
    name: 'Fabio Quartararo',
    bike: 'Yamaha',
    description: 'Frenchman Fabio Quartararo got his start in motorcycle racing at the age of four, moving to Spain to develop his career and proclaimed national champion in the 70, 80 and 125 categories...'
  },
];

// const cardsContainer = document.getElementById('drivers');

// driverCards.forEach((card) => {
//   const cardElement = document.createElement('div');
//   cardElement.className = 'racer';

//   cardElement.innerHTML = `
//               <img src="${card.image}" alt="Fabio Quartararo">
//               <div class="about-driver">
//                   <h3>${card.name}</h3>
//                   <h4>${card.bike}</h4>
  
//                   <${card.line}>
  
//                   <p>
//                       ${card.description}
//                   </p>
//               </div>
//           `;

//   cardsContainer.appendChild(cardElement);
// });

for(let i = 0; i < riders.length; i++){
  const driversSection = document.getElementById('drivers');

const driverCard = document.createElement('article');
driverCard.id = `driver${i}`;
if(i !== 0 && i !== 1){
  driverCard.classList.add('hidden');
}

const driverImage = document.createElement('img');
driverImage.alt = `driver#${i}`;
driverImage.src = riders[i].image;
driverCard.appendChild(driverImage);

const driverName = document.createElement('h3');
driverName.textContent = riders[i].name;
driverCard.appendChild(driverName);

const driverBike = document.createElement('h4');
driverBike.textContent = riders[i].bike;
driverCard.appendChild(driverBike);

const divider = document.createElement('hr');
driverCard.appendChild(divider);

const driverDescription = document.createElement('p');
driverDescription.textContent = riders[i].description;
driverCard.appendChild(driverDescription);

driversSection.appendChild(driverCard);
}
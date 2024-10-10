document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('sidebar-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Copenhagen Denmark",
	  location: "Copenhagen, Denmark",
	  dedicated: "2004, May, 23",
	  area: 15800,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-278232-wallpaper.jpg"
	},
      {
        templeName: "Cordoba Argentina",
	  location: "Cordoba, Argentina",
	  dedicated: "2015, May, 17",
	  area: 30000,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/2018/400x250/Cordoba-Argentina-Temple01.jpg"
	},
      {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-8204-thumb.jpg"
      }
    ];

  
    
      function displayTemples(filter) {
        const container = document.getElementById('temple-container');
        container.innerHTML = '';
  
        let filteredTemples = [];
        const currentDate = new Date();
  
        switch(filter) {
          case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1900, 0, 1));
            break;
          case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date(2000, 0, 1));
            break;
          case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
          case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
          default:
            filteredTemples = temples;
        }
  
        filteredTemples.forEach(temple => {
          const card = document.createElement('div');
          card.classList.add('temple-card');
  
          const templeName = document.createElement('h2');
          templeName.textContent = temple.templeName;
          card.appendChild(templeName);
  
          const templeLocation = document.createElement('p');
          templeLocation.textContent = `Location: ${temple.location}`;
          card.appendChild(templeLocation);
  
          const templeDedicated = document.createElement('p');
          templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
          card.appendChild(templeDedicated);
  
          const templeArea = document.createElement('p');
          templeArea.textContent = `Area: ${temple.area} sq ft`;
          card.appendChild(templeArea);
  
          const templeImage = document.createElement('img');
          templeImage.src = temple.imageUrl;
          templeImage.alt = temple.templeName;
          templeImage.loading = 'lazy';
          templeImage.classList.add('temple-image');
          card.appendChild(templeImage);
  
          container.appendChild(card);
        });
      }
  
      // Initial display of all temples
      displayTemples('all');
const clip = document.querySelectorAll('.clip')
      for (let i = 0; i < clip.length; i++) {
         clip[i].addEventListener('mouseover', function (e) {
            clip[i].play()
         })
         clip[i].addEventListener('mouseout', function (e) {
            clip[i].pause()
         })
      }



      const swiper = new Swiper('.swiper', {
         direction: 'horizontal',
         loop: true,

         pagination: {
            el: '.swiper-pagination',
         },

         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },

         scrollbar: {
            el: '.swiper-scrollbar',
         },
      });


      function setActiveLanguage(language) {
         const locatieElements = document.getElementById('locatie');
         const contacteElements = document.getElementById('contacte');
         const langElements = document.querySelectorAll('.language div');
         const slogan1Element = document.getElementById('slogan1');
         const slogan2Element = document.getElementById('slogan2');
         const subSlogan1Element = document.getElementById('sub-slogan1');
         const subSlogan2Element = document.getElementById('sub-slogan2');
         const graficElement = document.getElementById('grafic');
         const luniElement = document.getElementById('luni');
         const sambataElement = document.getElementById('sambata');
         const duminicaElement = document.getElementById('duminica');
         const inchisElement = document.getElementById('inchis');
         const deschisElement = document.getElementById('deschis');
      
         const olunaElements = document.querySelectorAll('.o-luna');
         const treiluniElement = document.getElementById('3-luni');
         const doispeluniElement = document.getElementById('12-luni');
         const nelimitat1Element = document.getElementById('nelimitat-1');
         const nelimitat2Element = document.getElementById('nelimitat-2'); // Add this element
         const nelimitat3Element = document.getElementById('nelimitat-3'); // Add this element
         const antrenorElement = document.getElementById('antrenor');
         const singlepElement = document.getElementById('single-p');
         const blaElement = document.getElementById('bla');
         const inchisdElement = document.getElementById('inchisd');


      
         langElements.forEach(element => element.classList.remove('active'));
         if (language === 'ro') {
            langElements[0].classList.add('active');
            locatieElements.textContent = 'Locatie:';
            contacteElements.textContent = 'Contacte:';
            slogan1Element.textContent = 'FII PUTERNIC,';
            slogan2Element.textContent = 'FII IN FORMA';
            subSlogan1Element.textContent = 'Atinge-ti obiectivele sportive alaturi';
            subSlogan2Element.textContent = 'de comunitatea CITY GYM';
            graficElement.textContent = 'Grafic de Lucru:';
            luniElement.textContent = 'Luni - Vineri:';
            sambataElement.textContent = 'Sambata:';
            duminicaElement.textContent = 'Duminica:';
            inchisElement.textContent = 'Inchis la moment';
            deschisElement.textContent = 'Deschis la moment!';
            blaElement.textContent = '1 LUNĂ';
            inchisdElement.textContent = 'inchis';
            
            // Translate elements with the class 'o-luna'
            olunaElements.forEach(element => element.textContent = '1 LUNĂ');
            treiluniElement.textContent = '3 LUNI';
            doispeluniElement.textContent = '12 LUNI';
            nelimitat1Element.textContent = 'nelimitat';
            nelimitat2Element.textContent = 'nelimitat'; // Add this line
            nelimitat3Element.textContent = 'nelimitat'; // Add this line
            antrenorElement.textContent = 'cu antrenor';
            singlepElement.textContent = 'O ȘEDINȚĂ';
         } else if (language === 'ru') {
            langElements[1].classList.add('active');
            locatieElements.textContent = 'Расположение:';
            contacteElements.textContent = 'Контакты:';
            slogan1Element.textContent = 'БУДЬ СИЛЬНЫМ,';
            slogan2Element.textContent = ' БУДЬ В ФОРМЕ';
            subSlogan1Element.textContent = 'Достигайте своих спортивных целей';
            subSlogan2Element.textContent = 'с сообществом CITY GYM';
            graficElement.textContent = 'Рабочая программа:';
            luniElement.textContent = 'Понед.-Пятница:';
            sambataElement.textContent = 'Суббота:';
            duminicaElement.textContent = 'Воскресенье:';
            inchisElement.textContent = 'Закрыто на данный момент';
            deschisElement.textContent = 'Открыто на данный момент!';
            blaElement.textContent = '1 МЕСЯЦ';
            inchisdElement.textContent ='закрыто';

            
            // Translate elements with the class 'o-luna'
            olunaElements.forEach(element => element.textContent = '1 МЕСЯЦ');
            treiluniElement.textContent = '3 МЕСЯЦА';
            doispeluniElement.textContent = '12 МЕСЯЦА';
            nelimitat1Element.textContent = 'неограниченный';
            nelimitat2Element.textContent = 'неограниченный'; 
            nelimitat3Element.textContent = 'неограниченный'; 
            antrenorElement.textContent = 'с тренером';
            singlepElement.textContent = 'СЕССИЯ';
         }
      }
      
      
      

      const currentDate = new Date();
      const currentDay = currentDate.getDay();
      const currentHour = currentDate.getHours();
      const deschisElement = document.getElementById('deschis');
      const inchisElement = document.getElementById('inchis');

      const openingHours = [
         { day: 'Luni - Vineri', hours: '9:00 - 22:00' },
         { day: 'Sambata', hours: '10:00 - 17:00' },
         { day: 'Duminica', hours: '0:00 - 0:00' }
      ];

      for (let i = 0; i < openingHours.length; i++) {
         const { day, hours } = openingHours[i];

         if (
            (currentDay === 0 && day.includes('Duminica')) ||
            (currentDay === 6 && day.includes('Sambata')) ||
            (currentDay >= 1 && currentDay <= 5 && day.includes('Luni - Vineri'))
         ) {
            const openingTime = parseInt(hours.split(':')[0]);
            const closingTime = parseInt(hours.split('-')[1].split(':')[0]);

            if (
               (currentDay === 0 && currentHour >= openingTime && currentHour < closingTime) ||
               (currentDay === 6 && currentHour >= openingTime && currentHour < closingTime) ||
               (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 22)
            ) {
               deschisElement.style.display = 'block'; // Display "Deschis la moment!"
               inchisElement.style.display = 'none';
            } else {
               deschisElement.style.display = 'none';
               inchisElement.style.display = 'block'; // Display "Închis la moment!"
            }
         }
      }

      document.getElementById("show-menu").addEventListener("click", function() {
         var menu = document.getElementById("menu");
         var currentOpacity = parseFloat(getComputedStyle(menu).opacity);
   
         if (currentOpacity === 0) {
           menu.style.opacity = "1";
           menu.style.display = "flex";
         } else {
           menu.style.opacity = "0";
           menu.style.display = "none";
         }
       });

       document.getElementById("close-menu").addEventListener("click", function() {
         var menu = document.getElementById("menu");
         var currentOpacity = parseFloat(getComputedStyle(menu).opacity);
   
         if (currentOpacity === 1) {
           menu.style.opacity = "0";
           menu.style.display = "none";
         } else {
           menu.style.opacity = "1";
           menu.style.display = "flex";
         }
       });
     

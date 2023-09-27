import svgIcons from '../img/sprite.svg';

const advantages = [
     { title: "легка", desc: "експлуатація" },
     { title: "проста", desc: "в обслуговуванні" },
     { title: "безпечна", desc: "для користувачів" },
     { title: "смертельна", desc: "для ворожих цілей" },
     { title: "доступна", desc: "для ЗСУ" }
];

const parameters = [
     { param: "до 4-х кілограм", desc: "корісне навантаження" },
     { param: "2,5-3 години", desc: "час польоту" },
     { param: "800-1500 метрів", desc: "висота польоту" },
     { param: "10x10 метрів", desc: "точність ураження" },
     { param: "Радіотиша", desc: "режим польоту" },
     { param: "Навігація", desc: "підтримка GPS, GLONASS, Galileoa Bei Duo" },
     { param: "Антиспуфінг", desc: "для безпечної роботи під час дії систем РЕБ" },
     { param: "Автопілот", desc: "повернення «додому» та автоматична посадка" },
     { param: "до 50 км", desc: "відстань перенесення корисного навантаження" },
     { param: "3-4 години", desc: "аеророзвідка без «вантажу»" },
     { param: "180-240 км", desc: "аеророзвідка без «вантажу»" }
];

let renderAdvantages = (advantages) => {
     return advantages.map(advantage => {
          return `<li class="advantages-item">
               <svg class="advantages-svg" width="41" height="41">
                    <use href="${svgIcons}#plus"></use>
               </svg>
               <div>
                    <p class="advantages-title">${advantage.title}</p>
                    <p class="advantages-desc">${advantage.desc}</p>
               </div>
          </li>`
     }).join('');
};

let renderParameters = (parameters) => {
     return parameters.map(parameter => {
          return `<li class="parameters-item">
               <p class="parameters-param">${parameter.param}</p>
               <p class="parameters-desc">${parameter.desc}</p>
     </li>`
     }).join('');
};

let advantagesList = document.querySelector('.advantages-list');
let parametersList = document.querySelector('.parameters-list');

advantagesList.innerHTML = renderAdvantages(advantages);
parametersList.innerHTML = renderParameters(parameters);
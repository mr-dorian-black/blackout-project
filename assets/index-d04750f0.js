(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const d="/blackout-project/assets/sprite-b788be45.svg",i=[{title:"легка",desc:"експлуатація"},{title:"проста",desc:"в обслуговуванні"},{title:"безпечна",desc:"для користувачів"},{title:"смертельна",desc:"для ворожих цілей"},{title:"доступна",desc:"для ЗСУ"}],c=[{param:"до 4-х кілограм",desc:"корисне навантаження"},{param:"2,5-3 години",desc:"час польоту"},{param:"800-1500 метрів",desc:"висота польоту"},{param:"10x10 метрів",desc:"точність ураження"},{param:"Радіотиша",desc:"режим польоту"},{param:"Навігація",desc:"підтримка GPS, GLONASS, Galileoa Bei Duo"},{param:"Антиспуфінг",desc:"для безпечної роботи під час дії систем РЕБ"},{param:"Автопілот",desc:"повернення «додому» та автоматична посадка"},{param:"до 50 км",desc:"відстань перенесення корисного навантаження"},{param:"3-4 години",desc:"аеророзвідка без «вантажу»"},{param:"180-240 км",desc:"аеророзвідка без «вантажу»"}];let l=r=>r.map(t=>`<li class="advantages-item">
               <svg class="advantages-svg" width="41" height="41">
                    <use href="${d}#plus"></use>
               </svg>
               <div>
                    <p class="advantages-title">${t.title}</p>
                    <p class="advantages-desc">${t.desc}</p>
               </div>
          </li>`).join(""),m=r=>r.map(t=>`<li class="parameters-item">
               <p class="parameters-param">${t.param}</p>
               <p class="parameters-desc">${t.desc}</p>
     </li>`).join(""),p=document.querySelector(".advantages-list"),u=document.querySelector(".parameters-list");p.innerHTML=l(i);u.innerHTML=m(c);const f=[{method:"Розрахунок комплексу висувається в заданий район, розгортає за 10-15хв. елементи комплексу, будує маршрут польоту (MissionPlanner), програмує автопілот, перевіряє роботу систем."},{method:"По готовності, БЛА виконує зліт в автоматичному режимі, набирає визначену висоту та переходить до виконання завдання."},{method:"Під час польоту взаданих координатах виконується увімкнення вимкнення камери для фіксації ураження цілі, визначається в автоматичному режимі момент скиду корисного навантаження та спрацьовує система скиду."},{method:"При неможливості виконання завдання, відбувається автоматичний пуск скиду корисного наватнаження (розвантаження) набезпечній відстані від розрахунку."},{method:"Можливий запуск багатьох БПЛА з інтервалом 15-20 хвилин з використанням однієї наземної станції та групи операторів"},{method:"Після виконання завдання БПЛА виконує автоматичну посадку взаданій точці. Оператор БПЛА знімає дані фото та відео запис, виконує технічний огляд БПЛА та підготовку до наступного вильоту."}],h=r=>r.map((t,a)=>`
          <li class="method-item">
               <div class="method-number-block"><span class="method-number">${a+1}</span></div>
               <p class="method-desc">${t.method}</p>
          </li>`).join("");let g=document.querySelector(".methods-list");g.innerHTML=h(f);
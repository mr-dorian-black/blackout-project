(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n="/blackout-project/assets/sprite-b788be45.svg",o=[{title:"легка",desc:"експлуатація"},{title:"проста",desc:"в обслуговуванні"},{title:"безпечна",desc:"для користувачів"},{title:"смертельна",desc:"для ворожих цілей"},{title:"доступна",desc:"для ЗСУ"}],l=[{param:"до 4-х кілограм",desc:"корисне навантаження"},{param:"2,5-3 години",desc:"час польоту"},{param:"800-1500 метрів",desc:"висота польоту"},{param:"10x10 метрів",desc:"точність ураження"},{param:"Радіотиша",desc:"режим польоту"},{param:"Навігація",desc:"підтримка GPS, GLONASS, Galileoa Bei Duo"},{param:"Антиспуфінг",desc:"для безпечної роботи під час дії систем РЕБ"},{param:"Автопілот",desc:"повернення «додому» та автоматична посадка"},{param:"до 50 км",desc:"відстань перенесення корисного навантаження"},{param:"3-4 години",desc:"аеророзвідка без «вантажу»"},{param:"180-240 км",desc:"аеророзвідка без «вантажу»"}];let d=r=>r.map(s=>`<li class="advantages-item">
               <svg class="advantages-svg" width="41" height="41">
                    <use href="${n}#plus"></use>
               </svg>
               <div>
                    <p class="advantages-title">${s.title}</p>
                    <p class="advantages-desc">${s.desc}</p>
               </div>
          </li>`).join(""),p=r=>r.map(s=>`<li class="parameters-item">
               <p class="parameters-param">${s.param}</p>
               <p class="parameters-desc">${s.desc}</p>
     </li>`).join(""),u=document.querySelector(".advantages-list"),m=document.querySelector(".parameters-list");u.innerHTML=d(o);m.innerHTML=p(l);

import svg from '../img/sprite.svg';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const payments = [
     {
          type: 'UAH', name: "UAH Перекази по Україні", details: [
               { info: `<span class="text-bold">ГО ‘БЛЕКАУТ’</span></br>ЄДРПОУ 44687081</br>Призначення платежу:</br>"Благодійний внесок на статутну діяльність"</br>Назва банку: АТ КБ "ПРИВАТБАНК"</br>UA383052990000026000045028181`, copy: "UA383052990000026000045028181" },

          ]
     },
     {
          type: "SWIFT", name: "Валютні SWIFT-перекази", details: [
               {
                    info: `<span class="text-bold">SWIFT in US dollars (USD)</span></br>BENEFICIARY FRONTLINE.CARE</br>IBAN: UA673052990000026002045026136`, copy: "UA673052990000026002045026136"
               },
               {
                    info: `<span class="text-bold">SWIFT in euros (EUR)</span></br>BENEFICIARY FRONTLINE.CARE</br>IBAN: UA713052990000026004035028012`, copy: "UA713052990000026004035028012"
               }
          ]
     },
     {
          type: "Crypto", name: "Криптовалюта", details: [
               {
                    info: `<span class="text-bold">Bitcoin:</span></br>159cWtQWWEmSZXbwZeL.pxuyuJMZAtZEWR8`, copy: "159cWtQWWEmSZXbwZeL.pxuyuJMZAtZEWR8"
               },
               {
                    info: `<span class="text-bold">USDT (TRC20):</span></br>TSIZNXJc3UifS5ErXeAmgGrpo32grv2n3F`, copy: "TSIZNXJc3UifS5ErXeAmgGrpo32grv2n3F"
               },
               {
                    info: `<span class="text-bold">ETH (ERC20):</span></br>0x2bd19782e5b0dda4469c87316080719cffc73d11`, copy: "0x2bd19782e5b0dda4469c87316080719cffc73d11"
               }
          ]
     },
     {
          type: "SEPA", name: "SEPA in euros (EUR)", details: [
               {
                    info: `<span class="text-bold">Bank: Clear Junction Limited</span></br>IBAN: G825CLJU00997183555952</br>BIC: CLJUGB21</br>Account Holder Name: NEDILKO ANDRII</br>Taxpayer Identification Number: 3522304691</br>Bank Address: 5 Kingsway, London WC2B 6UN`, copy: "G825CLJU00997183555952"
               }
          ]
     },
     {
          type: "Pay Pal", name: "Pay Pal", details: [
               {
                    info: `frontlinecare.paypal@gmail.com`, copy: "frontlinecare.paypal@gmail.com"
               }
          ]
     }
];


const detailsRender = (details) => {
     return details.map(({ info, copy }) => {
          return `<div class="payments-desc-content" >
                         <p class="payments-desc">${info}</p>
                         <button type="button" class="payments-button" data-copy="${copy}">копіювати
                         </button>
                    </div >`
     }).join('');
}

/* <svg class="icon-copy" width="18" height="18">
     <use href="${svg}#icon-copy"></use>
</svg> */

const paymentsRender = payments.map(({ name, details }) => {
     return `<li class="payments-item">
                    <p class="payments-label">${name}</p>
                    ${detailsRender(details)}
               </li>`
}).join('');

const paymentsList = document.querySelector('.payments-list');
paymentsList.innerHTML = paymentsRender;
const notyf = new Notyf({
     position: { x: 'center', y: 'top' },
     types: [
          {
               type: 'warning',
          },
          {
               type: 'error',
          },
          {
               type: 'success',
               className: 'clipboard-notif-success',
               background: 'transparent',
               icon: false
          }
     ],
     duration: 2000
});


paymentsList.addEventListener('click', event => {
     if (event.target.nodeName === 'BUTTON') {
          let copyText = event.target.dataset.copy;
          navigator.clipboard.writeText(copyText);
          notyf.success({ message: `Copied to clipboard: ${copyText}` })
     }
})

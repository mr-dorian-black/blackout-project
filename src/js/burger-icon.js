let render = `
<button class="burger-icon">
     <span></span>
     <span></span>
     <span></span>
</button>
`

let block = document.querySelectorAll('.burger-icon-block');
block.forEach(b => b.innerHTML = render);
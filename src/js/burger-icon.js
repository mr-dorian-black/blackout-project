let render = `
<button class="burger-icon">
     <div></div>
     <div></div>
     <div></div>
</button>
`

let block = document.querySelectorAll('.burger-icon-block');
block.forEach(b => b.innerHTML = render);
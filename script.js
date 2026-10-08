let container = document.querySelector('#container')
let button=document.querySelector('#reset')
let button2=document.querySelector('#create')
let div=document.querySelector('div')


div.addEventListener('mouseover', (e) => {
    e.target.style.opacity = Number(e.target.style.opacity) + 0.1
    })


    function createSquares (){
    let number= +prompt('Select sketch size up to 100', 0); 
     if(number>100) {
        number = +prompt('please select up to 100')
     }     
     createColumn(number);
         

}

createColumn(16)


function eraseGrid(){
    const column = document.querySelectorAll('.column')
    column.forEach(column => {
        column.remove()}
    )
    createSquares();
}


button2.addEventListener('click', eraseGrid)
button.addEventListener('click', resetButton)


function createColumn(size) {

    let container = document.querySelector('#container')
    for(let i=0; i<size; i++) {
     let column = document.createElement('div')
     column.setAttribute('style', 'border: 1px solid black; opacity=100%')
     column.classList.add('column')
    for(let j =1; j<= size; j++) {
        let row = document.createElement('div')
        row.setAttribute('style', 'border: 1px solid black;')
        row.classList.add('row')
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor='green'
        })
     column.appendChild(row)

        }
     container.appendChild(column)

    }}
      
    
    function resetButton() {
    const rows = document.querySelectorAll('.row')
    rows.forEach((row) => {
        row.style.backgroundColor = 'white'
    })
}




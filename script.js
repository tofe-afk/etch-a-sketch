let container = document.querySelector('#container')
let button=document.querySelector('#reset')
let button2=document.querySelector('#create')
let column=document.querySelector('.column')
let row = document.querySelector('.row')



function createSquares (){
    let number= +prompt('Select sketch size up to 100', 0); 
     if(number>100) {
        +prompt('please select up to 100')
     }     
     createColumn(number);
         

}

createColumn(10)


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
     column.setAttribute('style', 'border: 1px solid black;')
     column.classList.add('column')
    for(let j =1; j<= size; j++) {
        let row = document.createElement('div')
        row.setAttribute('style', 'border: 1px solid black;')
        row.classList.add('row')
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor='brown'
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




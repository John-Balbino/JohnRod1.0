const number = '11959768301'
const link ='https:wa.me/' + number
function whats(){
    window.open(link)
}


function orcamento(){
   
    const btn = document.querySelectorAll('.txt button')
    
    /*btn.addEventListener('click', orcamento)
    
    let texto = document.querySelectorAll('.txt p')[0].textContent
    let value = document.querySelectorAll('.txt span')[0].textContent
    window.alert(texto  + value)
    
    event.preventDefault(orcamento)*/

    btn.forEach((btn,index)=>{
        btn.addEventListener('click', (event) =>{
            event.preventDefault()

            let texto = document.querySelectorAll('.txt p')[index].textContent
            let value = document.querySelectorAll('.txt span')[index].textContent
            const msg = `Olá gostaria de uma ${texto}, no valor de : ${value}`
            window.open(`${link}?text=${msg}`)
        
        })
    })
}
orcamento();







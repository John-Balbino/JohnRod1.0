
//função para whatsapp
function whats(){
    const nEncode = 'MTE5NTk3NjgzMDE='
    const number = atob(nEncode)
    const link ='https://wa.me/' + number
    window.open(link)
}


//script para os cards sobre

$('.card-txt').hide();
$('.card-txt2').hide();
$('.card-txt3').hide();

$('#btn-txt').on('click',function(){
    $('.card-txt').slideToggle(1000);
    
})

$('#btn-txt2').on('click',function(){
    $('.card-txt2').slideToggle(1000);
})
$('#btn-txt3').on('click',function(){
    $('.card-txt3').slideToggle(1000);
})

//script para img estilos
//classes = thumb-img seleção e # ciaxa para imagens 

$('.thumb').on('click',function(){
    document.querySelector('#autoral').src = this.src
    
})
$('#autoral').on('click',function(){
    document.querySelector('#autoral').src = 'img/samurai.jpg'
})














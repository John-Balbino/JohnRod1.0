
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
    $('.card-txt').fadeToggle(1000);
    
})

$('#btn-txt2').on('click',function(){
    $('.card-txt2').fadeToggle(1000);
})
$('#btn-txt3').on('click',function(){
    $('.card-txt3').fadeToggle(1000);
})













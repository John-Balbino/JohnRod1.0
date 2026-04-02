

function whats(){
    const nEncode = 'MTE5NTk3NjgzMDE='
    const number = atob(nEncode)
    const link ='https://wa.me/' + number
    window.open(link)
}













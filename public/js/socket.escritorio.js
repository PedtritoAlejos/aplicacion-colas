var socket = io();


var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small')


$('h1').text('Escritorio ' + escritorio);
console.log(escritorio);


$('button').on('click', function() {
    console.log('click en buton');
    socket.emit('atenderTicket', { escritorio: escritorio }, function(rsp) {
        if (rsp === "No hay tickets") {
            label.text(rsp);
            return;
        }
        label.text('Ticket ' + rsp.numero);
        console.log(rsp);
    });
})
document.getElementById('formContato').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio tradicional do form

    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const empresa = document.getElementById('empresa').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá! Sou *${nome}*. \nMeu WhatsApp é *${whatsapp}*.\nSou responsável pela empresa *${empresa}*. \n${mensagem}`;

    const numeroDestino = '5541999160389'; // Ex: 5599999999999
    const url = `https://wa.me/5541999160389?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');

    // Exibir popup
    const popup = document.getElementById('popupSucesso');
    popup.style.display = 'flex';

    // Esconde o popup após 3 segundos
    setTimeout(() => {
        popup.style.display = 'none';
    }, 10000);

});




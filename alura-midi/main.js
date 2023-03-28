function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName) {

        elemento.play();
    } else {
        alert('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //templateString 
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = () => {
        tocaSom(idAudio);
    };

    tecla.onkeydown = (evento) => {

        //console.log(evento.code);
        const botoesValidos = ['Space', 'Enter'];

        //== : compara somente o texto
        //=== : compara o texto e o tipo, 
        //o mais recomendavel é utilizar o === para evitar erros 
        if (evento.code === botoesValidos[0] || evento.code === botoesValidos[1]) {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}

/* Função animação Typewriter */
var aText = new Array(
    "<h2><b>Olá Mundo! Meu nome é Márcia Tzannis,</b></h2>",
    "<p>sou <strong>desenvolvedora FullStack</strong> podendo participar de projetos com desenvoltura tanto no Frontend dominando o <strong>HTML, CSS, JavaScript e o Design Responsivo</strong> e com experiência no Backend, com conhecimentos em <strong> PHP, MySQL, Laravel e React</strong>.</p><br><p>Além de tecnologia, sou apaixonada por Vespa!</p>"
);
var iSpeed = 60; // atraso de tempo de impressão
var iIndex = 0; // começar a imprimir o array nesta posição
var iArrLength = aText[0].length; // o comprimento do array de texto
var iScrollAt = 20; // começar a rolar para cima neste muitas linhas

var iTextPos = 0; // inicializar a posição do texto
var sContents = ''; // inicializar variável de conteúdo
var iRow; // inicializar linha atual

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("me");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 300);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

typewriter();

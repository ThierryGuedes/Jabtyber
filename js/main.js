var x = Math.floor(Math.random() * 10)

var Lista = ['A vida e uma peça de teatro que nao permite ensaio, porem bastante improviso.',
'Apressa-te a viver bem e pensa que cada dia e, por si so, uma vida de forma a viver bem.',
'Aprenda a viver como se voce fosse viver para sempre pois o amanha se a ele pertence.',
'Sonhe como se fosse viver para sempre e viva como fosse morrer em um futuro proximo.',
'Viva o hoje, pois o ontem ja se foi e o amanha talvez nao venha da forma que queremos.',
'Se a inteligencia fizer perde o carater, que va para o diabo e nao me procure mais.',
'Mas onde se deve procurar a liberdade e nos sentimentos verdadeiros de cada um.',
'Sofra agora e viva o resto de sua vida como um campeao de uma modalidade.',
'O medo e um dos piores inimigos do amor e da felicidade do ser humano.',
'Na vida e no amor, nao temos garantias. Portando, nao procure de forma alguma.',
'Digite seu nome! No campo acima fazendo favor.']

$('.frase').text(Lista[10])
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

console.log(numPalavras)
var tempoJogo = $("#tempo");
var tempo = tempoJogo.text();
console.log(tempo)


var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);


var campo = $("#campo")
campo.on("input", contador)
function contador(){
    var frase = campo.val();
    var numCaractDigit = frase.length
    $("#caracteresDigitados").text(numCaractDigit)
    var numPalavDigit = frase.split(" ").length
    $("#palavrasDigitadas").text(numPalavDigit)
}

function Fodac (){
    x = Math.floor(Math.random() * 10);
    $('.frase').text(Lista[x]);
    var string1 = Lista[x];
    numPalavras1 = string1.split(" ").length;
    tamanhoFrase.text(numPalavras1); 
    console.log(numPalavras1)
}


var botaoReset = $("#botao")
botaoReset.on("click", botao)
botaoReset.on('click', Fodac)
function botao(){
    campo.attr("disabled", false);
    botaoReset.attr("disabled", true);
    campo.val("")
    $("#caracteresDigitados").text("0");
    $("#palavrasDigitadas").text("0");
    $("#tempo").text(tempo)
    $("#nome").attr("disabled", true)
    campo.one("focus", function () {
        var cronometro = setInterval(function () {
            var tempoRestante = tempoJogo.text();
            if (tempoRestante <= 0) {
                var campoCheio = $("#campo").val();
                var string1 = frase.toLowerCase();
                var string1 = Lista[x];
                var string2 = campoCheio.toLowerCase();
                var array1 = string1.split("");
                var array2 = string2.split("");
                var pontu = 0
                console.log(string1)
                console.log(string2)
                console.log(tempo)
                campo.attr("disabled", true);
                botaoReset.attr("disabled", false);
                $("#nome").attr("disabled", false)
                nome = $("#nome").val() 
                clearInterval(cronometro);
                for (i = 0; i < array1.length; i++) {
                    if (array2[i] == array1[i]){
                        pontu = pontu + 20
                    } else{
                        pontu = pontu - 10
                    }
                }
                nome = $("#nome").val()
                console.log(nome)
                palavrasDigitadas = $("#palavrasDigitadas").text()
                pontuacao = pontu
                $('#tabela').append('<tr><td>'+nome+'</td><td>'+pontuacao+'</td></tr>');
            } else {
                tempoRestante--;
                tempoJogo.text(tempoRestante);
            }
    
        }, 1000);
    });
}



if (nome != null) {
    campo.attr("disabled", true)
    

}else{
    campo.attr("disabled", false)
    botaoReset.attr("disabled", false)
    
}
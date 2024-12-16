const hora = document.getElementById('hora'); // Seleciona o elemento HTML com o id "hora" e armazena na constante 'hora'
const minuto = document.getElementById('minuto'); // Seleciona o elemento HTML com o id "minuto" e armazena na constante 'minuto'
const segundo = document.getElementById('segundo'); // Seleciona o elemento HTML com o id "segundo" e armazena na constante 'segundo'
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');

const relogio = setInterval(function time(){ // Cria um intervalo que executa a função 'time' a cada segundo
let hoje = new Date(); // Cria um objeto da classe 'Date' que contém a data e hora atuais
let h = hoje.getHours(); // Obtém as horas atuais a partir do objeto 'hoje' e armazena na variável 'h'
let m = hoje.getMinutes(); // Obtém os minutos atuais a partir do objeto 'hoje' e armazena na variável 'm'
let s = hoje.getSeconds(); // Obtém os segundos atuais a partir do objeto 'hoje' e armazena na variável 's'
let d = hoje.getDate();
let me = hoje.getMonth() + 1;

if (h < 10) h = '0' + h; // Se o valor de 'h' for menor que 10, adiciona um '0' à esquerda para manter o formato de dois dígitos
if (m < 10) m = '0' + m; // Se o valor de 'm' for menor que 10, adiciona um '0' à esquerda para manter o formato de dois dígitos
if (s < 10) s = '0' + s; // Se o valor de 's' for menor que 10, adiciona um '0' à esquerda para manter o formato de dois dígitos

hora.textContent = h; // Atualiza o conteúdo de texto do elemento 'hora' com o valor da variável 'h' (horas)
minuto.textContent = m; // Atualiza o conteúdo de texto do elemento 'minuto' com o valor da variável 'm' (minutos)
segundo.textContent = s; // Atualiza o conteúdo de texto do elemento 'segundo' com o valor da variável 's' (segundos)
dia.textContent = d;
mes.textContent = me;
})
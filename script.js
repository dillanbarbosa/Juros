function calcula(){
   
    let a = parseFloat(document.getElementById('capital').value);
    let b = parseFloat(document.getElementById('taxa').value);
    let c = parseFloat(document.getElementById('tempo').value);
    b = b/100
    let resultado = a * b * c;
    document.getElementById("resultado").textContent = 'seu juros é: ' + resultado;
    let m = parseFloat(document.getElementById('montante').value);
    m = a + resultado;
    document.getElementById("montante").textContent = 'seu montante é: ' + m;
}

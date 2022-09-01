const inputTexto=document.querySelector(".input-texto")
const mensaje=document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado=encriptar(inputTexto.value);
    mensaje.value=textoEncriptado;
    mensaje.style.backgroundImage="none"
    inputTexto.value=""
}

function encriptar(frase){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    frase= frase.toLowerCase();

    for( let i=0; i<matrizCodigo.length;i++){
        if(frase.includes(matrizCodigo[i][0])){
             frase=frase.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
           
    }
    return frase;
}
function btnDesencriptar(){
    const textoEncriptado=desencriptar(inputTexto.value);
    mensaje.value=textoEncriptado;
    mensaje.style.backgroundImage="none"
    inputTexto.value=""
}
/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/


function desencriptar(stringDesencripta){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencripta= stringDesencripta.toLowerCase();

    for( let i=0; i<matrizCodigo.length;i++){
        if(stringDesencripta.includes(matrizCodigo[i][1])){
             stringDesencripta=stringDesencripta.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
           
    }
    return stringDesencripta;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""
    alert("Texto copiado")
    mensaje.style.backgroundImage=""
}
/*let newtexto=texto.replace(/[aeiou]/g,m=>cripto[m]);
[aeiou] serve para procura indivudalemnente cada letra
 e subsituir na funçao depois procurando o valor no objeto
----
let newtexto = textodps.replace(/ai|enter|imes|ober|ufat/g,m=>descriptar[m]);
(/ai|enter|imes|ober|ufat/g) -> desse jeito serve pra procurar um conjunto de palavras que sao separado pelo ( | ) !!!

 */

let msg_secreta="pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"
let msg_traduzida="parabens por encarar esse desafio e ter finalizado ele com sucesso"
console.log("mensagem secrete: "+msg_secreta);
console.log("mensagem traduzida: "+msg_traduzida);

function criptografa(){
    let texto = document.getElementById("textoantes").value;    
    for(i=0;i<=texto.length;i++){
        if(texto[i]==texto[i].toUpperCase()){
            alert("NAO USAR LETRAS MAIUSCULAS,CARACTERES ESPECIAIS E ACENTOS!!!");
            break;
        } else if(texto[i].match(/[áéíóúçãà]/)){
            alert("sem acentos");
            break;

        }

        else {
        
    
    const cripto={
     "a":"ai",
     "e":"enter",
     "i":"imes",
     "o":"ober",
     "u":"ufat",
    };
    let newtexto=texto.replace(/[aeiou]/g,m=>cripto[m]);

    document.getElementById("textodepois").value = newtexto;
}

}
};

function descripto(){
    let textodps=document.getElementById("textodepois").value;
    
    const descriptar={
        "ai":"a",
        "enter":"e",
        "imes":"i",
        "ober":"o",
        "ufat":"u",
    };
    let newtexto = textodps.replace(/ai|enter|imes|ober|ufat/g,m=>descriptar[m]);
    document.getElementById("textodepois").value = newtexto;
    
}

function copyTextoAntes(){
    let copiar=document.getElementById("textoantes");
    copiar.select();
    document.execCommand("copy");
}

function copyTextoCripto(){
    let copiar=document.getElementById("textodepois");
    copiar.select();
    document.execCommand("copy");
}

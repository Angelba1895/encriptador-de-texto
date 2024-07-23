const ingreso__texto = document.getElementById('ingreso__texto'); 
const boton__encriptar = document.getElementById('boton__encriptar');
const boton__desencriptar = document.getElementById('boton__desencriptar');
const boton__copiar = document.getElementById('boton__copiar');
const mensaje__final = document.getElementById('mensaje__final');
const munheco = document.getElementById('munheco');
const derecha__info = document.getElementById('derecha__info');
const derecha = document.getElementById('derecha');


let sustituir = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"], 
    ["a", "ai"],
    ["u", "ufat"],
]

const cambiar = (newValue) =>{

    mensaje__final.innerHTML = newValue;
    munheco.classList.add('oculto');
    munheco.style.display = "none";
    ingreso__texto.value = "";
    derecha__info.style.display = "none";
    boton__copiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensaje__final.classList.add("ajustar");
}

const restablecer = () =>{
    mensaje__final.innerHTML = "";
    munheco.classList.remove('oculto');
    derecha__info.style.display = "block";
    boton__copiar.style.display = "none";
    derecha.classList.remove("ajustar");
    mensaje__final.classList.remove("ajustar");
    ingreso__texto.focus();
}

boton__encriptar.addEventListener("click", () => {
    const text = ingreso__texto.value.toLowerCase()
    if(text !=""){
        function encriptar(newText){
            for (let i= 0; i < sustituir.length; i++){
                if(newText.includes(sustituir[i][0])){
                    newText = newText.replaceAll(sustituir[i][0], sustituir[i][1])
                }
            }
            return newText
        }
    }else{
        alert("¡Error!"+" Por favor ingrese un texto para encriptar");
        reset();
    }

    cambiar(encriptar(text));
    
});

boton__desencriptar.addEventListener("click", () => {
    const text = ingreso__texto.value.toLowerCase();
    if(text !=""){function desencriptar(newText){
        for (let i= 0; i < sustituir.length; i++){
            if(newText.includes(sustituir[i][1])){
                newText = newText.replaceAll(sustituir[i][1], sustituir[i][0])
            }
        }
        return newText
    }}else{
        alert("Error!"+" Por favor ingrese un texto para desencriptar");
        reset();
    }   
    cambiar(desencriptar(text))
});

boton__copiar.addEventListener("click",() => {

    let text = mensaje__final;
    text.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    reset();
}); 
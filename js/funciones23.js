export const actualizarTexto = () => {

    const input = document.querySelector("#texto");
    const resultado = document.querySelector("#resultado");

    resultado.textContent = input.value;

    if(input.value.length > 20){
        resultado.style.backgroundColor = "lightblue";
    }else{
        resultado.style.backgroundColor = "white";
    }
};
'use strict'

function mostrarDiferença (){

    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)
    const diferençaForm = document.getElementById('diferença-form')
    const resultado = document.getElementById('result')

    if (diferençaForm.reportValidity()) {
        const diferença1 = (numero1 - numero2)
        const diferença2 = (numero2 - numero1)
        let classificacao = ''
        
        if ( numero1 > numero2) 
        {
           classificacao = diferença1
        }

        else 
        {
            classificacao = diferença2
        }

        resultado.textContent = `A diferença entre ${numero1} e ${numero2} é ${classificacao}`
    }
}
document.getElementById('calcular').addEventListener('click', mostrarDiferença)
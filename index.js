let inputMoeda = document.getElementById('inputMoeda')
let convertBtn = document.getElementById('convertBtn')
let moedasInp = document.getElementById('moedasInp')
let moedasExit = document.getElementById('moedasExit')
let result = document.getElementById('result')

convertBtn.addEventListener('click', () => {
    
    if(moedasInp.value === 'BRL' && moedasExit.value === 'USD'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda / 5

        result.innerHTML = `$${converter}`
   
    } else if(moedasInp.value === 'BRL' && moedasExit.value === 'EUR'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda / 6

        result.innerHTML = `€${converter}`
    
    } else if(moedasInp.value === 'BRL' && moedasExit.value === 'JPY'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 29.53

        result.innerHTML = `¥${converter}`
    
    } else if(moedasInp.value === 'BRL' && moedasExit.value === 'BRL'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda

        result.innerHTML = `R$${converter}`
    
    } else if(moedasInp.value === 'USD' && moedasExit.value === 'BRL'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 5

        result.innerHTML = `R$${converter}`
    
    } else if(moedasInp.value === 'USD' && moedasExit.value === 'EUR'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 0.83

        result.innerHTML = `€${converter}`
    
    } else if(moedasInp.value === 'USD' && moedasExit.value === 'JPY'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 158.59

        result.innerHTML = `¥${converter}`
    
    } else if(moedasInp.value === 'USD' && moedasExit.value === 'USD'){
        let moeda = Number(inputMoeda.value)

        result.innerHTML = `$${moeda}`
    
    } else if(moedasInp.value === 'EUR' && moedasExit.value === 'BRL'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 6
        
        result.innerHTML = `R$${converter}`
    
    } else if(moedasInp.value === 'EUR' && moedasExit.value === 'USD'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 1.16
        
        result.innerHTML = `$${converter}`
    
    } else if(moedasInp.value === 'EUR' && moedasExit.value === 'JPY'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 184
        
        result.innerHTML = `¥${converter}`
    
    } else if(moedasInp.value === 'EUR' && moedasExit.value === 'EUR'){
        let moeda = Number(inputMoeda.value)
        
        
        result.innerHTML = `€${moeda}`

    } else if(moedasInp.value === 'JPY' && moedasExit.value === 'BRL'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 0.034
        
        result.innerHTML = `R$${converter}`
    
    } else if(moedasInp.value === 'JPY' && moedasExit.value === 'USD'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 0.0063
        
        result.innerHTML = `$${converter}`
    
    } else if(moedasInp.value === 'JPY' && moedasExit.value === 'EUR'){
        let moeda = Number(inputMoeda.value)
        let converter = moeda * 0.0054
        
        result.innerHTML = `€${converter}`
    
    } else if(moedasInp.value === 'JPY' && moedasExit.value === 'JPY'){
        let moeda = Number(inputMoeda.value)
        
        result.innerHTML = `¥${moeda}`
    
    }
 
    inputMoeda.value = ''

})
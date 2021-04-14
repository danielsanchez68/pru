const getOperador = operacion => {
    let deco = {
        'suma' : '+',
        'resta' : '-',
        'mult' : '*',
        'div' : '/'
    }
    return deco[operacion]
}

export const getResultado = (num1, num2, operacion) => ({
    num1, num2, operacion, resultado: eval(`${num1}${getOperador(operacion)}${num2}`)
})

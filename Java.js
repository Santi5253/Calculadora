// Clase base para operaciones matemáticas
class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(a, b) {
        this.resultado = a + b;
        return this.resultado;
    }

    restar(a, b) {
        this.resultado = a - b;
        return this.resultado;
    }

    multiplicar(a, b) {
        this.resultado = a * b;
        return this.resultado;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        this.resultado = a / b;
        return this.resultado;
    }

    limpiar() {
        this.resultado = 0;
    }
}

// Clase hija para operaciones científicas
class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
    }

    // Funciones científicas
    seno(x) {
        this.resultado = Math.sin(x);
        return this.resultado;
    }

    coseno(x) {
        this.resultado = Math.cos(x);
        return this.resultado;
    }

    tangente(x) {
        this.resultado = Math.tan(x);
        return this.resultado;
    }

    logaritmo(x) {
        if (x <= 0) {
            throw new Error("El logaritmo solo está definido para valores mayores que cero.");
        }
        this.resultado = Math.log(x);
        return this.resultado;
    }

    raizCuadrada(x) {
        if (x < 0) {
            throw new Error("La raíz cuadrada de un número negativo no es un número real.");
        }
        this.resultado = Math.sqrt(x);
        return this.resultado;
    }

    potencia(base, exponente) {
        this.resultado = Math.pow(base, exponente);
        return this.resultado;
    }
}

// Objeto de la calculadora científica
const calculadora = new CalculadoraCientifica();
let operacionActual = null;
let operando = false;

function actualizarDisplay() {
    const display = document.getElementById('display');
    display.textContent = calculadora.resultado;
}

function agregarNumero(numero) {
    if (operando) {
        calculadora.resultado = numero;
        operando = false;
    } else {
        calculadora.resultado = calculadora.resultado * 10 + numero;
    }
    actualizarDisplay();
}

function operacion(oper) {
    operacionActual = oper;
    operando = true;
}

function calcularResultado() {
    // Se puede mejorar para aceptar números en cadena de operaciones
    if (operacionActual) {
        switch (operacionActual) {
            case 'sumar':
                calculadora.sumar(calculadora.resultado, 5); // Ejemplo de sumar 5
                break;
            case 'restar':
                calculadora.restar(calculadora.resultado, 5); // Ejemplo de restar 5
                break;
            case 'multiplicar':
                calculadora.multiplicar(calculadora.resultado, 5); // Ejemplo de multiplicar por 5
                break;
            case 'dividir':
                calculadora.dividir(calculadora.resultado, 5); // Ejemplo de dividir por 5
                break;
        }
        operando = false;
    }
    actualizarDisplay();
}

function limpiar() {
    calculadora.limpiar();
    operando = false;
    actualizarDisplay();
}

function funcionCientifica(func) {
    const valor = calculadora.resultado;
    switch (func) {
        case 'seno':
            calculadora.seno(valor);
            break;
        case 'coseno':
            calculadora.coseno(valor);
            break;
        case 'raizCuadrada':
            calculadora.raizCuadrada(valor);
            break;
        case 'logaritmo':
            calculadora.logaritmo(valor);
            break;
    }
    actualizarDisplay();
}
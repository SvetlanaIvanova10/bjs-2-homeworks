// Задача №1. Форматтер чисел
function parseCount(value) {
    let parseValue = Number.parseInt(value, 10);
    if (!parseValue) {
        throw new Error("Невалидное значение");
    }
    return parseValue;
    
}

function validateCount(value) {
    
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

// Задача №2. Треугольник
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if ((this.a + this.b) < this.c || (this.c + this.b) < this.a || (this.c + this.a) < this.b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }  
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3))
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return { 
            getArea: () => 'Ошибка! Треугольник не существует', 
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        };
    }  
}
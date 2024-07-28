class Ctverec {
    constructor(a) {
        this.a = a;
    }

    obvod() {
        return 4 * this.a;
    }

    obsah() {
        return this.a * this.a;
    }
}

class Obdelnik {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    obvod() {
        return 2 * (this.a + this.b);
    }

    obsah() {
        return this.a * this.b;
    }
}

const ctverec = new Ctverec(10);
document.getElementById("ctverec").textContent = "Čtverec o délce strany 10 metrů má obvod " + 
ctverec.obvod() + " metrů a obsah " + ctverec.obsah() + " metrů čtverečných.";

const obdelnik = new Obdelnik(10, 20);
document.getElementById("obdelnik").textContent = "Obdélník o délce stran 10 a 20 metrů má obvod " + 
obdelnik.obvod() + " metrů a obsah " + obdelnik.obsah() + " metrů čtverečných.";
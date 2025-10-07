
//zad1

class KontoBankowe {
	#saldo = 0;

	deposit(amount) {
		this.#saldo += amount;
	}

	withdraw(amount) {
		if (amount <= this.#saldo) {
			this.#saldo -= amount;
		}
	}

	get saldo() {
		return this.#saldo;
	}
}



//zad2


class Osoba {
	static przedstaw(imie, nazwisko) {
		if (nazwisko) {
			return "nazywam sie " + imie + " " + nazwisko;
		} else {
			return "mam na imie " + imie;
		}
	}
}



//zad3


const Osoba = new Object({
	imie: "Jan",
	powitanie: function () {
		return "hej jestem " + this.imie;
	}
});

const Uczen = Object.create(Osoba);

Uczen.oceny = [5, 4, 3, 5];
Uczen.srednia = function () {
	let suma = 0;
	for (let i = 0; i < this.oceny.length; i++) {
		suma += this.oceny[i];
	}
	return this.oceny.length ? suma / this.oceny.length : 0;
};

console.log(Osoba.powitanie());
console.log(Uczen.powitanie());
console.log("srednia ocen:", Uczen.srednia());

//zad4


class SrodekTransportu {
	constructor(nazwa) {
		this.nazwa = nazwa;
	}

	jedz() {
		console.log("jadę");
	}
}

class Samolot extends SrodekTransportu {
	jedz() {
		console.log("lecę");
	}
}

class Auto extends SrodekTransportu {
	jedz() {
		console.log("jadę");
	}
}

class Lodz extends SrodekTransportu {
	jedz() {
		console.log("plynę");
	}
}



//zad5


class Psowate {
	dajGlos() {
		console.log("");
	}
}

class Szczeniak extends Psowate {
	dajGlos() {
		console.log("szczekanie");
	}
}

class Pies extends Psowate {
	dajGlos() {
		console.log("bardziej doniosle szczekanie");
	}
}

class Wilk extends Psowate {
	dajGlos() {
		console.log("wycie");
	}
}



 
//zad6
 

class Artysta {
	tworzDzielo() { }
	kontempluj() {
		console.log("myslę...");
	}
}

class Rzezbiarz extends Artysta {
	tworzDzielo() {
		console.log("rzeźbię");
	}
}

class Malarz extends Artysta {
	tworzDzielo() {
		console.log("maluję");
	}
}

class Pisarz extends Artysta {
	tworzDzielo() {
		console.log("piszę");
	}
}



//zad7
 

class Uzytkownik {
	constructor(login, haslo) {
		if (haslo.length < 8) {
			console.log("Hasło za krotkie");
			return;
		}
		this.login = login;
		this.haslo = haslo;
	}
}

let listaUzytkownikow = [];

function dodajUzytkownika(login, haslo) {
	let user = new Uzytkownik(login, haslo);
	if (user.login) listaUzytkownikow.push(user);
}


 
//zad8
 

class KalkulatorProsty {
	static dodaj(a, b) {
		return a + b;
	}

	static odejmij(a, b) {
		return a - b;
	}

	static pomnoz(a, b) {
		return a * b;
	}

	static podziel(a, b) {
		return b ? a / b : "blad!";
	}
}



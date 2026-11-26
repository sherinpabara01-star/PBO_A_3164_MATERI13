class Kendaraan {
  constructor(nama) {
    this.nama = nama;
  }

  info() {
    console.log(`Kendaraan: ${this.nama}`);
  }
}

class KendaraanBensin extends Kendaraan {
  isiBensin(liter) {
    console.log(`${this.nama} mengisi bensin ${liter} liter.`);
  }
  
}

class KendaraanListrik extends Kendaraan {
  isiDaya(kwh) {
    console.log(`${this.nama} mengisi daya ${kwh} kWh.`);
  }
}

class MobilBensin extends KendaraanBensin {}
class MotorBensin extends KendaraanBensin {}
class MobilListrik extends KendaraanListrik {}

function isiSemuaBensin(daftar) {
  daftar.forEach((x) => x.isiBensin(20));
}

function isiSemuaDaya(daftar) {
  daftar.forEach((x) => x.isiDaya(40));
}

const avanza = new MobilBensin("Avanza_3164");
const ioniq = new MobilListrik("Ioniq_3164");
const beat = new MotorBensin("Beat_3164");

avanza.info();
ioniq.info();
beat.info();

isiSemuaBensin([avanza, beat]);
isiSemuaDaya([ioniq]);
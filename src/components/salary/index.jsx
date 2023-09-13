import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SalaryCalculate() {
  const [gajiPokok, setGajiPokok] = useState(0);
  const [tunjangan, setTunjangan] = useState(0);
  const [kewajibanPokok, setKewajibanPokok] = useState(0);
  const [gajiKotor, setGajiKotor] = useState(0);
  const [gajiBersih, setGajiBersih] = useState(0);

  const hitungGaji = () => {
    const gajiKotor = gajiPokok + tunjangan;
    const gajiBersih = gajiKotor - kewajibanPokok;
    
    setGajiKotor(gajiKotor);
    setGajiBersih(gajiBersih);
  };

  const formatNumber = (number) => {
    const formatNumber = new Intl.NumberFormat("id-ID")
    return formatNumber.format(number)
  }

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Kalkulator Gaji</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="gajiPokok" className="form-label">Gaji Pokok</label>
            <input
              type="number"
              className="form-control"
              id="gajiPokok"
              value={gajiPokok}
              onChange={(e) => setGajiPokok(Number(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tunjangan" className="form-label">Tunjangan</label>
            <input
              type="number"
              className="form-control"
              id="tunjangan"
              value={tunjangan}
              onChange={(e) => setTunjangan(Number(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="kewajibanPokok" className="form-label">Kewajiban Pokok</label>
            <input
              type="number"
              className="form-control"
              id="kewajibanPokok"
              value={kewajibanPokok}
              onChange={(e) => setKewajibanPokok(Number(e.target.value))}
            />
          </div>
          <button className="btn btn-primary" onClick={hitungGaji}>Hitung Gaji</button>
        </div>
        <div className="col-md-8">
          <h3>Hasil:</h3>
          <p>Gaji Kotor: {`Rp. ${formatNumber(gajiKotor)}`}</p>
          <p>Gaji Pokok: {`Rp. ${formatNumber(gajiPokok)}`}</p>
          <p>Gaji Bersih: {`Rp. ${formatNumber(gajiBersih)}`}</p>
        </div>
      </div>
    </div>
  );
}


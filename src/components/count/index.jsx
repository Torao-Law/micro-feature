import React, { useState } from 'react';

function CountdownTimer() {
  const [targetDateTime, setTargetDateTime] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(null);

  const startCountdown = () => {
    const targetTime = new Date(targetDateTime).getTime();

    if (isNaN(targetTime)) {
      alert('Masukkan tanggal dan waktu target yang valid.');
      return;
    }

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const remaining = targetTime - now;

      if (remaining <= 0) {
        clearInterval(intervalId);
        setTimeRemaining('Waktu telah habis!');
      } else {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        const formattedTime = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
        setTimeRemaining(formattedTime);
      }
    }, 1000);
  };

  return (
    <div className="countdown">
      <h3 className='text-center'>Countdown Time</h3>
      <div className='py-3 px-5 border rounded-3 mt-3'>
        <p>Enter the Target Date and Time:</p>
        <input
          className='p-2 me-3'
          type="datetime-local"
          value={targetDateTime}
          onChange={(e) => setTargetDateTime(e.target.value)}
        />
        <button onClick={startCountdown} className='btn btn-primary px-5 rounded rounded-4'>Start</button>
        <p>Countdown:</p>
        <div id="countdownDisplay">{timeRemaining}</div>
      </div>
    </div>
  );
}

export default CountdownTimer;

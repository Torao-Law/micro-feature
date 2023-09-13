import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [targetDateTime, setTargetDateTime] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isCounting, setIsCounting] = useState(false);
  const [countdownMessage, setCountdownMessage] = useState('Mulai menghitung');

  useEffect(() => {
    let intervalId;

    if (isCounting) {
      const targetTime = new Date(targetDateTime).getTime();

      if (isNaN(targetTime)) {
        alert('Masukkan tanggal dan waktu target yang valid.');
        setIsCounting(false);
        return;
      }

      intervalId = setInterval(() => {
        const now = new Date().getTime();
        const remaining = targetTime - now;

        if (remaining <= 0) {
          clearInterval(intervalId);
          setIsCounting(false);
          setCountdownMessage('Waktu telah habis!');
          setTimeRemaining(null);
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
    }

    // Membersihkan interval saat komponen unmount atau isCounting berubah
    return () => clearInterval(intervalId);
  }, [isCounting, targetDateTime]);

  const startCountdown = () => {
    setIsCounting(true);
    setCountdownMessage('Sedang menghitung...');
  };

  const resetCountdown = () => {
    setIsCounting(false);
    setCountdownMessage('Mulai menghitung');
    setTargetDateTime('');
    setTimeRemaining(null);
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
          disabled={isCounting}
        />
        <button onClick={isCounting ? null : startCountdown} className='btn btn-primary px-5 rounded rounded-4' disabled={isCounting}>
          {isCounting ? 'Menghitung...' : 'Start'}
        </button>
        {isCounting && (
          <button onClick={resetCountdown} className='btn btn-danger ms-3 rounded rounded-4'>Reset</button>
        )}
        <p>Countdown:</p>
        <div id="countdownDisplay">{isCounting ? timeRemaining : countdownMessage}</div>
      </div>
    </div>
  );
}

export default CountdownTimer;

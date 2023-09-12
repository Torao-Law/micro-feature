import React, { useState, useEffect } from 'react';

export default function Mobile() {
  const [searchTerm, setSearchTerm] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    try {
      const response = await fetch('https://api.dazelpro.com/mobile-legends/hero');
      const data = await response.json();
      const heroesArray = Object.values(data.hero);
      setHeroes(heroesArray);
      setFilteredHeroes(heroesArray);
    } catch (error) {
      console.error('Gagal mengambil data hero:', error);
    }
  };

  const searchHeroes = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = heroes.filter((hero) => {
      return (
        hero.hero_name.toLowerCase().includes(searchTermLower) ||
        hero.hero_role.toLowerCase().includes(searchTermLower)
      );
    });
    setFilteredHeroes(filtered);
  };

  const resetFilter = () => {
    setSearchTerm('');
    setFilteredHeroes(heroes);
  };

  return (
    <div className="app">
      <div className="hero-list">
        <h2>Daftar Hero</h2>
        <div className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari Hero berdasarkan nama atau peran"
        />
        <button onClick={searchHeroes}>Cari</button>
        <button onClick={resetFilter}>Reset</button>
      </div>
        <div id="heroes">
          {filteredHeroes.length === 0 ? (
            <p>Tidak ada hero yang ditemukan.</p>
          ) : (
            filteredHeroes.map((hero, index) => (
              <div className="card p-3 mb-3" key={index}>
                <div className="card-body">
                  <h5 className='m-0'>{hero.hero_name}</h5>
                  <p className='m-0'>Peran: {hero.hero_role}</p>
                  <p className='m-0'>Kemampuan Khusus: {hero.hero_specially}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

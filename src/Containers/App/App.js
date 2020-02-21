import React, { useState } from 'react';
import './App.css';

import Interstitial from '../../Components/Interstitial/Interstitial';
import Gameboard from '../Gameboard/Gameboard';

export default function App() {
  const [page, setPage] = useState('home');

  function changePage(page) {
    setPage(page);
  };

  return (
    <div className="App">
      {page !== 'game' ? <Interstitial page={page} handlePageChange={changePage} /> : <Gameboard />}
    </div>
  );
};
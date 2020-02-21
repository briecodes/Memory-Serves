import React, { useState } from 'react';
import './App.css';

import Interstitial from '../../Components/Interstitial/Interstitial';

export default function App() {
  const [page, setPage] = useState('');

  function changePage(page) {
    setPage(page);
  };

  return (
    <div className="App">
      {page != 'game' ? <Interstitial page={page} handlePageChange={changePage} /> : null}
    </div>
  );
};
import '../style/Home.scss';
import poster from '../asset/poster.jpg';

import React from 'react';

export default function Home() {
  return (
    <div id="home">
      <div id="home-wrapper">
        <img src={poster} alt="poster" />
        <div id="detail">
          <h1>The Writer (2020)</h1>
          <h3>overview</h3>
          <p>
            Seorang mahasiswa yang terpaksa menjadi penulis artikel<br/>menemukan fakta mengejutkan pada kasus yang sedang<br/>diselidiki
            olehnya.
          </p>
          <h3>genre</h3>
          <p>Thriller</p>
          <h3>cast</h3>
          <p>Winson, Wandi, Nelson, Kevin.</p>
        </div>
      </div>
    </div>
  );
}

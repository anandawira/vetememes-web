import '../style/Home.scss';
import poster from '../asset/poster.jpg';
import { ReactComponent as CalendarIcon } from '../asset/date_range-black-18dp.svg';

import React from 'react';

export default function Home() {
  return (
    <div id="home">
      <img id="poster" src={poster} alt="poster" />
      <div id="detail">
        <h1>The Writer (2020)</h1>
        <h3>overview</h3>
        <p>
          Seorang mahasiswa yang terpaksa menjadi penulis artikel
          <br />
          menemukan fakta mengejutkan pada kasus yang sedang
          <br />
          diselidiki olehnya.
        </p>
        <h3>genre</h3>
        <p>Thriller</p>
        <h3>cast</h3>
        <p>Winson, Wandi, Nelson, Kevin.</p>
        <div id="addCalendar">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=Nm04YjVpdTYwaG1lbWg2NGVlNWR2OGM3MjYgYW5hbmRhd2lyYTc1NEBt&amp;tmsrc=anandawira754%40gmail.com`}
          >
            <CalendarIcon id="calendarIcon"></CalendarIcon>
            <p>Add to calendar</p>
          </a>
        </div>
      </div>
    </div>
  );
}

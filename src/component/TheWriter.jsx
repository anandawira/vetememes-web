import '../style/TheWriter.scss';
import poster from '../asset/poster.jpg';
import { Link } from 'react-router-dom';
import { ReactComponent as CalendarIcon } from '../asset/date_range-black-18dp.svg';
import { ReactComponent as SlideshowIcon } from '../asset/slideshow-24px.svg';
import { Helmet } from 'react-helmet';

import React from 'react';

export default function Home() {
  return (
    <div id="the-writer">
      <Helmet>
        <title>The Writer | Vetememes Production</title>
        <meta
          name="description"
          content="The Writer adalah film pertama yang diproduksi oleh Vetememes Production. Film ini bergenre misteri / thriller."
        ></meta>
      </Helmet>
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
        <div id="addCalendar" className="button">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://calendar.google.com/event?action=TEMPLATE&tmeid=Nm04YjVpdTYwaG1lbWg2NGVlNWR2OGM3MjYgYW5hbmRhd2lyYTc1NEBt&tmsrc=anandawira754%40gmail.com`}
          >
            <CalendarIcon id="calendarIcon"></CalendarIcon>
            <p>Add to calendar</p>
          </a>
        </div>
        <div id="watchBtn" className="button">
          <Link to="/watch">
            <SlideshowIcon></SlideshowIcon>
            <p>Watch Movie</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

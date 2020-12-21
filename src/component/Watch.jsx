import '../style/Watch.scss';

import React from 'react';
import { Helmet } from 'react-helmet';

export default function Watch(props) {
  return (
    <div id="watch">
      <Helmet>
        <title>Watch | Vetememes Production</title>
        <meta
          name="description"
          content="Tonton trailer dan full movie dari The Writer pada tanggal 20 Desember 2020 pukul 18.00 WIB."
        ></meta>
      </Helmet>
      <div id="trailer">
        <iframe
          title="trailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lvD-aOiz3Yc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

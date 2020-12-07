import '../style/Watch.scss';

import React from 'react';

export default function Watch(props) {
  return (
    <div id="watch">
      <div id="trailer">
        <iframe
          title="trailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ItZy2fuK55s"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

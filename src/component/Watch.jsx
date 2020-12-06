import '../style/Watch.scss';

import React, { useEffect } from 'react';

export default function Watch(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.history.push('/');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div id="watch">
      This movie is not available yet.
      <br />
      Please comeback later.
    </div>
  );
}

import '../style/About.scss';

import React from 'react';
import ProfileCard from './ProfileCard';

import ananda from '../asset/profile-photo/ananda.JPG';
import kevin from '../asset/profile-photo/kevin.JPG';
import nelson from '../asset/profile-photo/nelson.JPG';
import wandi from '../asset/profile-photo/wandi.JPG';
import winson from '../asset/profile-photo/winson.JPG';

export default function About() {
  return (
    <div id="about">
      <div id="teams">
        <ProfileCard image={ananda} name="Ananda Wiradharma" />
        <ProfileCard image={kevin} name="Kevin" />
        <ProfileCard image={nelson} name="Nelson Tan" />
        <ProfileCard image={wandi} name="Wandi" />
        <ProfileCard image={winson} name="Winson Ng" />
        <ProfileCard image={winson} name="Winson Ng" />
      </div>
    </div>
  );
}

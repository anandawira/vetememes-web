import '../style/About.scss';

import React from 'react';
import ProfileCard from './ProfileCard';

import ananda from '../asset/profile-photo/ananda.JPG';
import kevin from '../asset/profile-photo/kevin.JPG';
import nelson from '../asset/profile-photo/nelson.JPG';
import wandi from '../asset/profile-photo/wandi.JPG';
import winson from '../asset/profile-photo/winson.JPG';
import jennifer from '../asset/profile-photo/jennifer.JPG';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <div id="about">
      <Helmet>
        <title>About | Vetememes Production</title>
        <meta
          name="description"
          content="Vetememes Production adalah sebuah perusahaan yang memiliki fokus utama memproduksi film pendek."
        ></meta>
      </Helmet>
      <div id="teams">
        <ProfileCard image={ananda} name="Ananda Wiradharma" />
        <ProfileCard image={kevin} name="Kevin" />
        <ProfileCard image={nelson} name="Nelson Tan" />
        <ProfileCard image={wandi} name="Wandi" />
        <ProfileCard image={winson} name="Winson Ng" />
        <ProfileCard image={jennifer} name="Jennifer Chandrinova" />
      </div>
      <div id="about-us">
        <h1>About Us</h1>
        <p>
          Vetememes Production adalah sebuah perusahaan produksi short movie
          yang berdiri dari tanggal 1 September 2020 oleh Winson. Vetememes
          Production yang berdiri yang beralamat Windsor Phase 1 Blok II No.12
          Kecamatan Batam Kota, Batam.
          <br />
          <br />
          Perusahaan Vetememes Production saat ini sedang memproduksi sebuah
          short film yang berjudul “The_Writer” dengan genre misterius/horror.
          Vetememes Production beroperasi dalam sebuah team yang terdapat enam
          orang yang terdiri dari Director, Scriptwritter, Editor and graphic,
          Marketing dan Cameraman/Video.
        </p>
      </div>
    </div>
  );
}

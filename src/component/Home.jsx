import React from 'react';
import '../style/Home.scss';
import backdrop from '../asset/backdrop.webp';
import { ReactComponent as MailIcon } from '../asset/mail_icon.svg';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div id="home">
      <Helmet>
        <title>Home | Vetememes Production</title>
        <meta
          name="description"
          content="Vetememes Production adalah sebuah perusahaan yang memiliki fokus utama memproduksi film pendek"
        ></meta>
      </Helmet>
      <img src={backdrop} alt="backdrop" />
      <div id="subscribe-form">
        <MailIcon id="mail-icon" />
        <p>Subscribe to our newsletter</p>
        <MailchimpSubscribe
          id="mailchimp"
          url={`https://site.us7.list-manage.com/subscribe/post?u=7ff2fa52ffbaa651e8c6e7c7d&amp;id=c903a2489b`}
        />
      </div>
    </div>
  );
}

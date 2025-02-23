import React from 'react';
import style from './Hero.module.css';

function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img
          className={style.logo}
          src='/coder.png'
          alt='logo'
        />
      </section>
      <section className={style.content}>
        <h3>Innovate with Every Keystroke</h3>
        <h5>
          See how experienced developers solve problems in real-time. Watching scripted
          tutorials is great, but understanding how developers think is invaluable.
        </h5>
      </section>
    </header>
  );
}

export default Hero;

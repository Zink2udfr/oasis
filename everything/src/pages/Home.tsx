import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Products } from '../components/Products';
import { Reviews } from '../components/Reviews';
import { Discord } from '../components/Discord';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Reviews />
      <Discord />
    </>
  );
};
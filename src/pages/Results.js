import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Jobs from '../components/Jobs';
import Trends from '../components/Trends';
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

function Home() {




  return (
    <>       
     <Header />

        <p> Results </p>
      <Footer />
    </>
  );
}

export default Home;

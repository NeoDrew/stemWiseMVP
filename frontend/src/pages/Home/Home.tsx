import React from 'react';

import AppContainer from 'components/appContainer';
import Header from 'components/header';
import Footer from 'components/footer';
import TutoringProcessSection from 'pages/Home/components/tutoringProcessSelection';
import PsychometricTest from './components/psychometricTest';
import LandingSearch from './components/landingSearch';

const Home = () => {
  return (
    <AppContainer>
      <Header />
      <LandingSearch />
      <TutoringProcessSection />
      <PsychometricTest />
      <Footer />
    </AppContainer>
  );
};

export default Home;

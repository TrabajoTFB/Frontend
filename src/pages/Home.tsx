import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import NewReleasesSection from '../components/sections/NewReleasesSection';
import EbookAccessSection from '../components/sections/EbookAccessSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <NewReleasesSection />
      <EbookAccessSection />
    </div>
  );
};

export default Home;
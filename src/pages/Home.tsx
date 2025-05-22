import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import NewReleasesSection from '../components/sections/NewReleasesSection';
import EbookAccessSection from '../components/sections/EbookAccessSection';
import NewsletterSection from '../components/sections/NewsletterSection';
import FaqSection from '../components/sections/FaqSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <NewReleasesSection />
      <EbookAccessSection />
      <FaqSection />
      <NewsletterSection />
      
    </div>
  );
};

export default Home;
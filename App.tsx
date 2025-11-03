
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import AdmirationSection from './components/AdmirationSection';
import GallerySection from './components/GallerySection';
import ComplimentGenerator from './components/ComplimentGenerator';
import MotivationSection from './components/MotivationSection';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SectionDivider from './components/SectionDivider';
import LetterSection from './components/LetterSection';
import OurSongSection from './components/OurSongSection';
import ReasonsCounterSection from './components/ReasonsCounterSection';
import PromisesSection from './components/PromisesSection';
import TreasureBoxSection from './components/TreasureBoxSection';
import TimeCapsuleSection from './components/TimeCapsuleSection';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.reveal').forEach((elem) => {
      observer.observe(elem);
    });
  }, []);


  return (
    <div className="bg-[#F8F5FF] text-[#3B3054]">
      <CustomCursor />
      <Hero />
      <main>
        <AdmirationSection />
        <SectionDivider />
        <GallerySection />
        <SectionDivider />
        <ReasonsCounterSection />
        <SectionDivider />
        <LetterSection />
        <SectionDivider />
        <OurSongSection />
        <SectionDivider />
        <ComplimentGenerator />
        <SectionDivider />
        <MotivationSection />
        <SectionDivider />
        <TimelineSection />
        <SectionDivider />
        <TreasureBoxSection />
        <SectionDivider />
        <PromisesSection />
        <SectionDivider />
        <TimeCapsuleSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

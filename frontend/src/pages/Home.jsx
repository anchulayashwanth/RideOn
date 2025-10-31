import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Keep the Hero (drive experience + big background image) as-is */}
      <Hero />
      {/* Keep only WhyChooseUs and Testimonials as requested */}
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}

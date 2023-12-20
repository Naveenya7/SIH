import React from 'react';
import Hero from '../Hero/Hero';
import Faq from '../Faq/Faq';
import UserGrowthChart from '../UserGrowthChart/UserGrowthChart';
import RecyclingRateChart from '../RecyclingRateChart/RecyclingRateChart';
import EnvironmentalImpactChart from '../EnvironmentalImpactChart/EnvironmentalImpactChart';
import './Home.css';
import Footer from '../Footer/Footer';
import ScrollingImages from '../ScrollingImages/ScrollingImages';
import Navbar from '../Navbar/Navbar';
function Home() {
  console.log('Home rendered');
  return (
    <div >
      <Navbar/>
      
      
      <Hero />
      <div className="charts-container">
        <UserGrowthChart />
        <RecyclingRateChart />
      </div>
      <EnvironmentalImpactChart />
      <ScrollingImages/>
      <Faq />
      <Footer/>
    </div>
  );
}

export default Home;

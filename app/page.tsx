import Navbar from '@/components/Navbar';
import Layout from '../components/Layout';
import HeroSection from '@/pages/HeroSection';
import AboutUs from '@/pages/About';
import FeaturedPlayers from '@/pages/FeaturedPlayers';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FeaturedPlayers />
    </Layout>
  );
};

export default Home;

import Navbar from '@/components/Navbar';
import Layout from '../components/Layout';
import HeroSection from '@/pages/HeroSection';
import AboutUs from '@/pages/About';
import FeaturedPlayers from '@/pages/FeaturedPlayers';
import Faq from '@/pages/faq';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FeaturedPlayers />
      <Faq />
    </Layout>
  );
};

export default Home;

import Navbar from '@/components/Navbar';
import Layout from '../components/Layout';
import HeroSection from '@/pages/HeroSection';
import AboutUs from '@/pages/About';
import FeaturedPlayers from '@/pages/FeaturedPlayers';
import Faq from '@/pages/faq';
import News from '@/pages/News';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FeaturedPlayers />
      <Faq />
      <News />
    </Layout>
  );
};

export default Home;

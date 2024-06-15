import Navbar from '@/components/Navbar';
import Layout from '../components/Layout';
import HeroSection from '@/pages/HeroSection';
import AboutUs from '@/pages/About';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <AboutUs />
    </Layout>
  );
};

export default Home;

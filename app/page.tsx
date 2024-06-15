import Navbar from '@/components/Navbar';
import Layout from '../components/Layout';
import HeroSection from '@/pages/HeroSection';
import AboutUs from '@/pages/About';
import FeaturedPlayers from '@/pages/FeaturedPlayers';
import Faq from '@/pages/faq';
import News from '@/pages/News';
import ContactUs from '@/pages/Contact';
import CTA from '@/pages/Cta';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FeaturedPlayers />
      <Faq />
      <News />
      <ContactUs />
      <CTA />
    </Layout>
  );
};

export default Home;

import Navbar from '@/components/Common/Navbar';
import Layout from '../components/Layout/Layout';
import HeroSection from '@/pages/HeroSection';
import AboutUs from '@/pages/About';
import FeaturedPlayers from '@/pages/FeaturedPlayers';
import Faq from '@/pages/faq';
import News from '@/pages/News';
import ContactUs from '@/pages/Contact';
import CTA from '@/pages/Cta';
import Footer from '@/components/Common/Footer';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FeaturedPlayers />
      <News />
      <ContactUs />
      <Faq />
      <CTA />
      <Footer />
    </Layout>
  );
};

export default Home;

import type { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>App</h1>
      </main>
    </div>
  );
};

export default Home;

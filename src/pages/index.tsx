import type { NextPage } from 'next';

import Navbar from '../components/navbar';
import VantaBackground from '../components/vanta-bg';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <VantaBackground />
      </div>
    </>
  );
};

export default Home;

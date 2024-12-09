// pages/index.tsx

import File from './components/File';
import Filee from './components/Filee';
import Header from './components/Header';
import Hero from './components/Hero';
import Heroo from './components/Heroo';

import Main from './components/Main';

import Blog from './components/Blog';
import Center from './components/Center';
import End from './components/End';
import Footer from './components/Footer';


const Home = () => {
  return (
    <div>
      
      <Header />
      <Hero/>
      <Main/>
      <Heroo/>
      <Filee/>
      <File/>
      <Blog/>
      <Center/>
      <End/>
      <Footer/>
      
      {/* Other components can go here */}
    </div>
  );
};

export default Home;

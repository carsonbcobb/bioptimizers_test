import React from 'react';

import Header from './components/header';
import LikeSection from './components/likeSection';
import ColorSection from './components/colorSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <LikeSection />
      <ColorSection />
      <Footer/>
    </div>
  );
}

export default App;

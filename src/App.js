import './Normalize.css';
import React from 'react'
import Navbar from './components/Navbar'
import Overlay from './components/Overlay';
import Slider from './components/Slider';
import Content from './components/Content';

function App() {

  const data = [
    {
      "pos": 0,
      "url": "images/image1.jpg"
    },
    {
      "pos": 1,
      "url": "images/image2.jpg"
    },
    {
      "pos": 2,
      "url": "images/image3.jpg"
    }
  ]

  return (
    <div className="App">
      <Navbar />
      {/* <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum quas ea dolores, quo earum atque consequuntur fugit accusamus et neque. Aperiam totam eveniet exercitationem obcaecati est. Est, voluptatibus fugiat.</p> */}
      <Overlay />

      {/* <Slider data={data} interval={3000} /> */}
      <Content />
    </div>
  );
}

export default App;

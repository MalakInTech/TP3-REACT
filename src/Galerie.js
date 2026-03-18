import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

function Galerie() {
  return (
    <div>
      <img src={img1} alt="Image 1" width="100" />
      <img src={img2} alt="Image 2" width="100" />
      <img src={img3} alt="Image 3" width="100" />
    </div>
  );
}

export default Galerie;


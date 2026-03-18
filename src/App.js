import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion';
import './App.css';
import ListeCourses from './ListeCourses';
import Notifications from './Notifications';
import Galerie from './Galerie';
import Contact from './Contact';
 
function App() {
  return (
    <div>
      <h1 className="titre">Mon Application React</h1>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/apropos">À propos</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Connexion />
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element ={<Contact />} />
      </Routes>
      <ListeCourses elements={['Lait', 'Pain', 'Oeufs']} />
      <Notifications />
      <br></br>
      <Galerie />
    </div>
  );
}

export default App;
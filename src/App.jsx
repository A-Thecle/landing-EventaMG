import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import Services from "./components/Services";
import Equipes from "./components/Equipes";
import Contact from "./components/Contact";
import Pied from "./components/Pied";

export default function App() {
  return (
    <div className="cadre">
      <Navigation />
      <main>
        {/* Les cinq sections du menu, dans l'ordre */}
        <Accueil />
        <APropos />
        <Services />
        <Equipes />
        <Contact />
      </main>
      <Pied />
    </div>
  );
}

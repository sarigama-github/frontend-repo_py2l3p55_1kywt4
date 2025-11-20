import Hero from './components/Hero'
import Slide from './components/Slide'
import ImageCard from './components/ImageCard'
import Equation from './components/Equation'

const img = {
  eratosthenes: 'https://images.unsplash.com/photo-1520975922203-b1146a44a8b8?q=80&w=1600&auto=format&fit=crop',
  well: 'https://images.unsplash.com/photo-1569440471730-20f6d6b385cb?q=80&w=1600&auto=format&fit=crop',
  arabic: 'https://images.unsplash.com/photo-1607593119931-475ea3f61399?q=80&w=1600&auto=format&fit=crop',
  theodolite: 'https://images.unsplash.com/photo-1500042282687-7d69f9f1f3c7?q=80&w=1600&auto=format&fit=crop',
  ellipsoid: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Earth_ellipsoid.svg',
  satellite: 'https://images.unsplash.com/photo-1473929734672-0f42f1a87a1e?q=80&w=1600&auto=format&fit=crop',
  newton: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
  cavendish: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Cavendish_Experiment.png',
  gravmap: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Earth_Gravity_Map.jpg',
  earth: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop'
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Slide 1 – Titre / Hero */}
      <Hero />

      {/* Slide 2 – Introduction générale */}
      <Slide
        id="slide-2"
        title="Pourquoi mesurer la Terre ?"
        subtitle="Comprendre notre planète a guidé la navigation, la cartographie, l’astronomie et aujourd’hui les systèmes GPS. Deux défis majeurs : mesurer le rayon et déterminer la masse totale."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <p>Mesurer la taille et la masse de la Terre permet de calibrer les cartes, de prévoir les trajectoires spatiales, et d’étudier la dynamique interne du globe.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rayon: géométrie, triangulation, satellites</li>
              <li>Masse: gravitation, constante G, mesures orbitales</li>
            </ul>
          </div>
          <ImageCard src={img.earth} alt="Terre" caption="Image satellite moderne de la Terre" />
        </div>
      </Slide>

      {/* PARTIE I — MESURER LE RAYON */}
      <Slide
        id="slide-3"
        title="Ératosthène : l’expérience fondatrice (IIIe siècle av. J.-C.)"
        subtitle="Bibliothèque d’Alexandrie, comparaison d’ombres entre Alexandrie et Syène"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <p>À Syène (Assouan), le Soleil est au zénith au solstice d’été: pas d’ombre au fond d’un puits. À Alexandrie, une ombre de 7,2° est mesurée sur un gnomon.</p>
            <Equation>θ / 360 = distance / circonférence</Equation>
            <p>Avec une distance ≈ 5 000 stades et un angle de 7,2°, il déduit la circonférence, puis le rayon de la Terre.</p>
            <p className="text-xs text-blue-300/80">Sources: Britannica, NASA Earth Observatory</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageCard src={img.well} alt="Puits de Syène" caption="Puits de Syène (midi solaire)" />
            <ImageCard src={img.eratosthenes} alt="Gnomon" caption="Gnomon à Alexandrie (ombre 7,2°)" />
          </div>
        </div>
      </Slide>

      <Slide
        id="slide-4"
        title="Savants arabes (IXe siècle, Bagdad)"
        subtitle="Maison de la Sagesse, mesure d’un degré de latitude dans les plaines de Sinjar"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <p>Des équipes mesurent la distance correspondant à 1° de latitude ≈ 111 km, confirmant l’ordre de grandeur d’Ératosthène.</p>
          </div>
          <ImageCard src={img.arabic} alt="Carte du Moyen-Orient" caption="Cartographie historique du Moyen-Orient" />
        </div>
      </Slide>

      <Slide
        id="slide-5"
        title="Géodésie moderne (XVIIe–XXe siècles)"
        subtitle="Triangulation, théodolites et découverte de l’ellipsoïde terrestre"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <p>La Terre n’est pas une sphère parfaite mais un ellipsoïde : 6 378 km à l’équateur, 6 357 km aux pôles.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageCard src={img.theodolite} alt="Théodolite" caption="Triangulation et théodolites" />
            <ImageCard src={img.ellipsoid} alt="Ellipsoïde" caption="Schéma d’ellipsoïde terrestre" />
          </div>
        </div>
      </Slide>

      <Slide
        id="slide-6"
        title="Satellites et géodésie spatiale (XXe–XXIe)"
        subtitle="GPS, satellites géodésiques et valeur moderne du rayon moyen: 6 371 km"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <p>Les mesures orbitales offrent une précision millimétrique et cartographient la forme réelle du géoïde.</p>
            <p className="text-xs text-blue-300/80">Source: NOAA – Earth shape and radius</p>
          </div>
          <ImageCard src={img.satellite} alt="Satellite" caption="Observation terrestre par satellite" />
        </div>
      </Slide>

      {/* PARTIE II — PESER LA TERRE */}
      <Slide
        id="slide-7"
        title="Newton : la clé théorique"
        subtitle="Loi de la gravitation universelle"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <Equation>F = G × (m₁ × m₂) / r²</Equation>
            <p>Historiquement, G était inconnue: impossible de déduire la masse terrestre sans une mesure de laboratoire.</p>
          </div>
          <ImageCard src={img.newton} alt="Isaac Newton" caption="Isaac Newton" />
        </div>
      </Slide>

      <Slide
        id="slide-8"
        title="Cavendish (1798) : l’expérience décisive"
        subtitle="La balance de torsion permet de mesurer G et donc de \"peser\" la Terre"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <p>Déviation d’une barre suspendue entre petites et grosses masses → mesure de G.</p>
            <Equation>M = g × R² / G</Equation>
            <p>Résultat moderne: ≈ 5,972 × 10²⁴ kg.</p>
            <p className="text-xs text-blue-300/80">Sources: Royal Society, Britannica</p>
          </div>
          <ImageCard src={img.cavendish} alt="Expérience de Cavendish" caption="Reconstitution du dispositif" />
        </div>
      </Slide>

      <Slide
        id="slide-9"
        title="Méthodes modernes pour la masse"
        subtitle="Analyse des trajectoires, perturbations gravitationnelles, sondes interplanétaires"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <p>La masse est ajustée par l’étude fine des orbites des satellites et des marées. La précision atteint des niveaux très élevés.</p>
            <p className="text-xs text-blue-300/80">Source: NASA – Earth’s Mass</p>
          </div>
          <ImageCard src={img.gravmap} alt="Carte gravitationnelle" caption="Variations régionales de la gravité" />
        </div>
      </Slide>

      <Slide
        id="slide-10"
        title="Conclusion"
        subtitle="Rayon: géométrie + satellites • Masse: gravitation + Cavendish + mesures orbitales"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-blue-100/90">
            <ul className="list-disc pl-5 space-y-2">
              <li>Navigation, GPS, vols spatiaux</li>
              <li>Sciences de la Terre et compréhension du géoïde</li>
            </ul>
          </div>
          <ImageCard src={img.earth} alt="Terre" caption="Terre vue de l’espace" />
        </div>
      </Slide>
    </div>
  )
}

export default App

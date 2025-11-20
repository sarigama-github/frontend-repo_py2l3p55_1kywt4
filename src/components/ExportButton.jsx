import { useState } from 'react'

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

function buildSpec() {
  const slides = [
    {
      title: 'Mesurer la Terre',
      subtitle: 'Comment nous avons calculé son rayon et sa masse',
      items: []
    },
    {
      title: 'Pourquoi mesurer la Terre ?',
      subtitle: 'Comprendre notre planète a guidé la navigation, la cartographie, l’astronomie et aujourd’hui les systèmes GPS. Deux défis majeurs : mesurer le rayon et déterminer la masse totale.',
      items: [
        { type: 'text', content: 'Mesurer la taille et la masse de la Terre permet de calibrer les cartes, de prévoir les trajectoires spatiales, et d’étudier la dynamique interne du globe.' },
        { type: 'text', content: 'Rayon: géométrie, triangulation, satellites • Masse: gravitation, constante G, mesures orbitales' },
        { type: 'image', image_url: img.earth, caption: 'Image satellite moderne de la Terre' }
      ]
    },
    {
      title: 'Ératosthène : l’expérience fondatrice (IIIe siècle av. J.-C.)',
      subtitle: 'Bibliothèque d’Alexandrie, comparaison d’ombres entre Alexandrie et Syène',
      items: [
        { type: 'text', content: 'À Syène (Assouan), le Soleil est au zénith au solstice d’été: pas d’ombre au fond d’un puits. À Alexandrie, une ombre de 7,2° est mesurée sur un gnomon.' },
        { type: 'equation', content: 'θ / 360 = distance / circonférence' },
        { type: 'text', content: 'Avec une distance ≈ 5 000 stades et un angle de 7,2°, il déduit la circonférence, puis le rayon de la Terre. (Sources: Britannica, NASA Earth Observatory)' },
        { type: 'image', image_url: img.well, caption: 'Puits de Syène (midi solaire)' }
      ]
    },
    {
      title: 'Savants arabes (IXe siècle, Bagdad)',
      subtitle: 'Maison de la Sagesse, mesure d’un degré de latitude dans les plaines de Sinjar',
      items: [
        { type: 'text', content: 'Des équipes mesurent la distance correspondant à 1° de latitude ≈ 111 km, confirmant l’ordre de grandeur d’Ératosthène.' },
        { type: 'image', image_url: img.arabic, caption: 'Cartographie historique du Moyen-Orient' }
      ]
    },
    {
      title: 'Géodésie moderne (XVIIe–XXe siècles)',
      subtitle: 'Triangulation, théodolites et découverte de l’ellipsoïde terrestre',
      items: [
        { type: 'text', content: 'La Terre n’est pas une sphère parfaite mais un ellipsoïde : 6 378 km à l’équateur, 6 357 km aux pôles.' },
        { type: 'image', image_url: img.theodolite, caption: 'Triangulation et théodolites' },
        { type: 'image', image_url: img.ellipsoid, caption: 'Schéma d’ellipsoïde terrestre' }
      ]
    },
    {
      title: 'Satellites et géodésie spatiale (XXe–XXIe)',
      subtitle: 'GPS, satellites géodésiques et valeur moderne du rayon moyen: 6 371 km',
      items: [
        { type: 'text', content: 'Les mesures orbitales offrent une précision millimétrique et cartographient la forme réelle du géoïde. (Source: NOAA – Earth shape and radius)' },
        { type: 'image', image_url: img.satellite, caption: 'Observation terrestre par satellite' }
      ]
    },
    {
      title: 'Newton : la clé théorique',
      subtitle: 'Loi de la gravitation universelle',
      items: [
        { type: 'equation', content: 'F = G × (m₁ × m₂) / r²' },
        { type: 'text', content: 'Historiquement, G était inconnue: impossible de déduire la masse terrestre sans une mesure de laboratoire.' },
        { type: 'image', image_url: img.newton, caption: 'Isaac Newton' }
      ]
    },
    {
      title: 'Cavendish (1798) : l’expérience décisive',
      subtitle: 'La balance de torsion permet de mesurer G et donc de "peser" la Terre',
      items: [
        { type: 'text', content: 'Déviation d’une barre suspendue entre petites et grosses masses → mesure de G.' },
        { type: 'equation', content: 'M = g × R² / G' },
        { type: 'text', content: 'Résultat moderne: ≈ 5,972 × 10²⁴ kg. (Sources: Royal Society, Britannica)' },
        { type: 'image', image_url: img.cavendish, caption: 'Reconstitution du dispositif' }
      ]
    },
    {
      title: 'Méthodes modernes pour la masse',
      subtitle: 'Analyse des trajectoires, perturbations gravitationnelles, sondes interplanétaires',
      items: [
        { type: 'text', content: 'La masse est ajustée par l’étude fine des orbites des satellites et des marées. La précision atteint des niveaux très élevés. (Source: NASA – Earth’s Mass)' },
        { type: 'image', image_url: img.gravmap, caption: 'Variations régionales de la gravité' }
      ]
    },
    {
      title: 'Conclusion',
      subtitle: 'Rayon: géométrie + satellites • Masse: gravitation + Cavendish + mesures orbitales',
      items: [
        { type: 'text', content: 'Navigation, GPS, vols spatiaux • Sciences de la Terre et compréhension du géoïde' },
        { type: 'image', image_url: img.earth, caption: 'Terre vue de l’espace' }
      ]
    }
  ]

  return {
    theme_primary: '0b1220',
    theme_accent: 'd4af37',
    theme_text: 'ffffff',
    filename: 'Mesurer_la_Terre.pptx',
    slides
  }
}

export default function ExportButton() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleExport = async () => {
    try {
      setLoading(true)
      setError('')
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const spec = buildSpec()
      const res = await fetch(`${baseUrl}/api/export/pptx`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec)
      })
      if (!res.ok) throw new Error(`Export échoué (${res.status})`)
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = spec.filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleExport}
        disabled={loading}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 font-semibold shadow-lg hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-60"
        title="Exporter en PowerPoint"
      >
        {loading ? 'Export…' : 'Exporter en PowerPoint'}
      </button>
      {error && (
        <div className="mt-2 text-sm text-red-300 max-w-xs bg-red-900/30 border border-red-400/30 px-3 py-2 rounded">
          {error}
        </div>
      )}
    </div>
  )
}

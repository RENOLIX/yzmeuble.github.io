const kachmirImages = [
  '/yzmeuble.github.io/images/kachmir/06-chambre-complete.jpeg',
  '/yzmeuble.github.io/images/kachmir/04-ensemble-armoire.jpeg',
  '/yzmeuble.github.io/images/kachmir/05-ensemble-coiffeuse.jpeg',
  '/yzmeuble.github.io/images/kachmir/02-lit-face.jpeg',
  '/yzmeuble.github.io/images/kachmir/08-lit-coffre.jpeg',
  '/yzmeuble.github.io/images/kachmir/01-armoire-ouverte.jpeg',
  '/yzmeuble.github.io/images/kachmir/09-armoire-interieur.jpeg',
  '/yzmeuble.github.io/images/kachmir/14-armoire-centrale.jpeg',
  '/yzmeuble.github.io/images/kachmir/03-coiffeuse.jpeg',
  '/yzmeuble.github.io/images/kachmir/13-coiffeuse-ouverte.jpeg',
  '/yzmeuble.github.io/images/kachmir/12-coiffeuse-rangements.jpeg',
  '/yzmeuble.github.io/images/kachmir/11-chevet.jpeg',
  '/yzmeuble.github.io/images/kachmir/10-chevet-ouvert.jpeg',
  '/yzmeuble.github.io/images/kachmir/07-eclairage.jpeg',
]

export const categories = [
  {
    id: 'chambres',
    name: 'Chambres complètes',
    eyebrow: 'Notre spécialité',
    description: 'Des ensembles coordonnés avec lit, rangements, chevets et coiffeuse.',
    image: kachmirImages[0],
  },
]

export const products = [
  {
    id: 'chambre-kachmir',
    name: 'Chambre Kachmir',
    category: 'chambres',
    label: 'Disponible sur devis',
    summary: 'Kachmir est une chambre complète au style contemporain, habillée de beige cachemire et structurée par des détails noirs. Son lit entièrement capitonné intègre un coffre de rangement, tandis que l’armoire vitrée et la colonne décorative sont mises en valeur par un éclairage intérieur.',
    images: kachmirImages,
    finishes: ['Beige cachemire', 'Détails noirs', 'Verre fumé'],
    includes: [
      'Lit double capitonné avec coffre',
      'Deux tables de chevet à tiroir',
      'Grande armoire avec portes vitrées',
      'Coiffeuse avec miroir rond',
      'Colonne vitrée avec éclairage',
      'Pouf assorti',
    ],
    details: [
      'Ensemble complet',
      'Lit avec coffre',
      'Éclairage intégré',
      'Livraison sur demande',
    ],
  },
]

export const kachmirFeatures = [
  {
    title: 'Lit capitonné avec coffre',
    text: 'Le cadre et la tête de lit sont entièrement rembourrés. Le sommier relevable donne accès à un grand espace de rangement sous le couchage.',
  },
  {
    title: 'Armoire vitrée éclairée',
    text: 'Une grande armoire avec penderie, étagères et tiroirs. Les portes centrales vitrées et les lignes lumineuses soulignent son design.',
  },
  {
    title: 'Coiffeuse et rangements',
    text: 'La coiffeuse réunit un miroir rond, plusieurs tiroirs compartimentés, un meuble latéral et une colonne vitrée assortie.',
  },
]

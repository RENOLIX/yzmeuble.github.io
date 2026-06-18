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

const armadaImages = [
  '/yzmeuble.github.io/images/armada/04-chambre-complete.jpeg',
  '/yzmeuble.github.io/images/armada/03-ensemble-armoire.jpeg',
  '/yzmeuble.github.io/images/armada/02-ensemble-coiffeuse.jpeg',
  '/yzmeuble.github.io/images/armada/17-lit-face.jpeg',
  '/yzmeuble.github.io/images/armada/16-lit-angle.jpeg',
  '/yzmeuble.github.io/images/armada/01-armoire-face.jpeg',
  '/yzmeuble.github.io/images/armada/20-armoire-vitrines.jpeg',
  '/yzmeuble.github.io/images/armada/19-armoire-penderie.jpeg',
  '/yzmeuble.github.io/images/armada/18-armoire-etageres.jpeg',
  '/yzmeuble.github.io/images/armada/15-coiffeuse-fermee.jpeg',
  '/yzmeuble.github.io/images/armada/12-coiffeuse-ouverte.jpeg',
  '/yzmeuble.github.io/images/armada/11-coiffeuse-tiroirs.jpeg',
  '/yzmeuble.github.io/images/armada/13-coiffeuse-colonne.jpeg',
  '/yzmeuble.github.io/images/armada/14-colonne-ouverte.jpeg',
  '/yzmeuble.github.io/images/armada/05-chevet-en-place.jpeg',
  '/yzmeuble.github.io/images/armada/09-chevet-face.jpeg',
  '/yzmeuble.github.io/images/armada/06-chevet-tiroir.jpeg',
  '/yzmeuble.github.io/images/armada/07-chevet-ouvert.jpeg',
  '/yzmeuble.github.io/images/armada/08-chevet-double-rangement.jpeg',
  '/yzmeuble.github.io/images/armada/10-chevet-armoire.jpeg',
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
  {
    id: 'chambre-armada',
    name: 'Chambre Armada',
    category: 'chambres',
    label: 'Disponible sur devis',
    summary: 'Armada est une chambre complète aux tons crème et gris, rehaussée par des détails brun foncé et dorés. Son lit capitonné est accompagné d’une large tête de lit avec éclairages intégrés. L’armoire associe quatre portes centrales à deux vitrines latérales éclairées, tandis que la coiffeuse offre plusieurs tiroirs et une colonne vitrée assortie.',
    images: armadaImages,
    finishes: ['Crème brillant', 'Tissu gris', 'Détails brun et doré'],
    includes: [
      'Lit double capitonné',
      'Large tête de lit avec éclairages',
      'Deux tables de chevet à tiroirs',
      'Grande armoire avec vitrines latérales',
      'Coiffeuse avec miroir éclairé',
      'Colonne vitrée et pouf assorti',
    ],
    details: [
      'Ensemble complet',
      'Tête de lit éclairée',
      'Nombreux rangements',
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

import React, { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, BedDouble, Check, ChevronDown, CircleCheck, Clock3,
  Instagram, Layers3, Menu, MessageCircle, MoveRight, PackageCheck, Phone,
  Ruler, Search, ShieldCheck, Sofa, Sparkles, Star, Truck, X,
} from 'lucide-react'
import { categories, products, kachmirFeatures } from './data'

const whatsappNumber = '213557077985'

function waLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [pathname])
  return null
}

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="YZ Meuble, accueil">
      <img src="/images/logo-yz-meuble.png" alt="YZ Meuble — Meubles et mobilier d’intérieur" />
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    ['/', 'Accueil'],
    ['/collections', 'Nos chambres'],
    ['/produit/chambre-kachmir', 'Kachmir'],
    ['/produit/chambre-armada', 'Armada'],
    ['/produit/chambre-evora', 'Evora'],
  ]
  return (
    <>
      <div className="announcement">Spécialiste des chambres à coucher <span>Devis direct sur WhatsApp</span></div>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <Logo />
        <nav className="desktop-nav">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="icon-button" aria-label="Nous contacter"><Phone size={18} /></Link>
          <Link to="/devis" className="button button-small">Demander un devis <ArrowRight size={16} /></Link>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Ouvrir le menu"><Menu /></button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-head"><Logo /><button onClick={() => setOpen(false)} aria-label="Fermer"><X /></button></div>
        <nav>{links.map(([to, label], i) => <NavLink key={to} to={to} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</NavLink>)}</nav>
        <Link to="/devis" className="button" onClick={() => setOpen(false)}>Demander un devis <ArrowRight size={18} /></Link>
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow light">Votre prochaine chambre</p>
          <h2>Choisissez votre modèle,<br /><em>nous préparons votre devis.</em></h2>
        </div>
        <Link to="/devis" className="circle-cta" aria-label="Demander un devis"><ArrowRight /></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand"><Logo /><p>YZ Meuble est spécialisé dans la vente de chambres à coucher complètes en Algérie.</p></div>
        <div><h4>Nos chambres</h4><Link to="/collections">Tous les modèles</Link><Link to="/produit/chambre-kachmir">Chambre Kachmir</Link><Link to="/produit/chambre-armada">Chambre Armada</Link><Link to="/produit/chambre-evora">Chambre Evora</Link></div>
        <div><h4>Informations</h4><Link to="/a-propos">À propos</Link><Link to="/contact">Contact</Link><a href={waLink('Bonjour YZ Meuble, je souhaite connaître vos modèles de chambres à coucher.')}>WhatsApp</a></div>
        <div><h4>Nous joindre</h4><a href={waLink('Bonjour YZ Meuble, je souhaite avoir plus d’informations.')}>0557 07 79 85</a><span>Algérie</span><a href="#" aria-label="Instagram YZ Meuble"><Instagram size={18} /> Instagram</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 YZ Meuble. Tous droits réservés.</span><span>Spécialiste des chambres à coucher.</span></div>
    </footer>
  )
}

function Layout({ children }) {
  return <><ScrollToTop /><Header /><main>{children}</main><Footer /><a className="whatsapp-float" href={waLink('Bonjour YZ Meuble, je souhaite avoir des informations sur vos chambres à coucher.')} target="_blank" rel="noreferrer" aria-label="Contacter YZ Meuble sur WhatsApp"><MessageCircle /><span>Nous écrire</span></a></>
}

function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  return <div className={`section-title ${align}`}><p className="eyebrow">{eyebrow}</p><h2 dangerouslySetInnerHTML={{ __html: title }} />{text && <p className="lead">{text}</p>}</div>
}

function ProductCard({ product, index = 0 }) {
  return (
    <Link to={`/produit/${product.id}`} className="product-card" style={{ '--delay': `${index * 70}ms` }}>
      <div className="product-image"><img src={product.images[0]} alt={product.name} loading="lazy" /><span>{product.label}</span><div className="card-arrow"><ArrowRight size={18} /></div></div>
      <div className="product-meta"><div><p>{categories.find(c => c.id === product.category)?.name}</p><h3>{product.name}</h3></div><span>Voir les photos</span></div>
    </Link>
  )
}

function Home() {
  const kachmir = products[0]
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={kachmir.images[0]} alt="Chambre à coucher Kachmir par YZ Meuble" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Chambres à coucher complètes · Algérie</p>
          <h1>Votre chambre,<br />votre <em>univers.</em></h1>
          <p>YZ Meuble vous propose des chambres complètes avec lit, armoire, chevets, coiffeuse et rangements assortis.</p>
          <div className="hero-actions"><Link to="/produit/chambre-kachmir" className="button button-light">Découvrir Kachmir <ArrowRight size={17} /></Link><Link to="/devis?produit=chambre-kachmir" className="text-link light">Demander un devis <MoveRight /></Link></div>
        </div>
        <div className="hero-glass"><span>Modèle disponible</span><strong>Kachmir.<br />Une chambre complète.</strong><Link to="/produit/chambre-kachmir">Voir les 14 photos <ArrowRight size={16} /></Link></div>
        <div className="scroll-note"><span></span>Défiler pour découvrir</div>
      </section>

      <section className="intro section">
        <div className="intro-number">01</div>
        <div className="intro-copy"><p className="eyebrow">Notre spécialité</p><h2>Des chambres complètes,<br /><em>prêtes à transformer votre espace.</em></h2></div>
        <p className="intro-text">Nous nous concentrons sur la chambre à coucher : des ensembles coordonnés, pratiques et élégants. Vous choisissez le modèle qui vous plaît et nous vous renseignons directement sur sa composition, sa disponibilité et sa livraison.</p>
      </section>

      <section className="categories-section section">
        <SectionTitle eyebrow="Chambre Kachmir" title="Un ensemble complet,<br/><em>pensé dans les moindres détails.</em>" text="Découvrez les principaux éléments de la chambre Kachmir avec de vraies photos du modèle." />
        <div className="category-grid kachmir-grid">
          {[
            [kachmir.images[3], '01', 'Lit avec coffre'],
            [kachmir.images[1], '02', 'Armoire vitrée'],
            [kachmir.images[2], '03', 'Coiffeuse complète'],
            [kachmir.images[6], '04', 'Rangements intérieurs'],
          ].map(([image, number, title], i) => <Link key={title} to="/produit/chambre-kachmir" className={`category-card card-${i + 1}`}><img src={image} alt={`${title} de la chambre Kachmir`} loading="lazy" /><div className="category-overlay"></div><div className="category-content"><span>{number}</span><div><p>Kachmir en détail</p><h3>{title}</h3></div><ArrowRight /></div></Link>)}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-image"><img src={kachmir.images[4]} alt="Lit coffre de la chambre Kachmir" loading="lazy" /></div>
        <div className="feature-copy"><p className="eyebrow">Un rangement supplémentaire</p><h2>Un lit confortable,<br /><em>avec coffre intégré.</em></h2><p>Le lit Kachmir est entièrement capitonné, de la tête de lit jusqu’au pied. Son sommier relevable permet d’utiliser l’espace sous le couchage pour ranger couvertures, couettes ou linge de maison.</p><ul><li><span>01</span>Tête et cadre de lit capitonnés</li><li><span>02</span>Sommier relevable</li><li><span>03</span>Grand coffre sous le lit</li></ul><Link to="/produit/chambre-kachmir" className="text-link">Voir toutes les photos <ArrowRight /></Link></div>
      </section>

      <section className="section selected-products">
        <div className="title-row"><SectionTitle eyebrow="Nos modèles disponibles" title="Trois chambres complètes,<br/><em>trois styles différents.</em>" /><Link to="/collections" className="text-link">Comparer les modèles <ArrowRight /></Link></div>
        <div className="products-grid">{products.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}</div>
      </section>

      <section className="process section">
        <SectionTitle eyebrow="Commander simplement" title="De la découverte du modèle<br/><em>à votre demande de devis.</em>" align="center" />
        <div className="process-grid">
          {[
            [Search, '01', 'Découvrez', 'Consultez les vraies photos et la composition des chambres Kachmir, Armada et Evora.'],
            [MessageCircle, '02', 'Demandez votre devis', 'Envoyez votre nom, votre ville et votre demande directement sur WhatsApp.'],
            [Truck, '03', 'Organisez la livraison', 'Nous vous confirmons les informations du modèle et les possibilités de livraison.'],
          ].map(([Icon, n, t, d]) => <div className="process-card" key={n}><span className="process-n">{n}</span><div className="process-icon"><Icon /></div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="center"><Link to="/devis?produit=chambre-kachmir" className="button">Demander le devis Kachmir <ArrowRight size={17} /></Link></div>
      </section>

      <section className="testimonials section">
        <SectionTitle eyebrow="Kachmir en détail" title="Une chambre conçue<br/><em>pour le confort et le rangement.</em>" />
        <div className="testimonials-grid">{kachmirFeatures.map((item, i) => <article key={item.title}><div className="quote-mark">0{i + 1}</div><p>{item.text}</p><div><strong>{item.title}</strong><span>Chambre Kachmir</span></div></article>)}</div>
      </section>
    </>
  )
}

function Collections() {
  const [params, setParams] = useSearchParams()
  const active = params.get('categorie') || 'tous'
  const visible = active === 'tous' ? products : products.filter(p => p.category === active)
  return (
    <>
      <PageHero eyebrow="Nos chambres à coucher" title="Des ensembles complets<br/><em>pour aménager votre chambre.</em>" text="Retrouvez ici les modèles réellement disponibles chez YZ Meuble. Chaque fiche présente les photos, les éléments inclus et un accès direct au devis WhatsApp." image={products[0].images[1]} />
      <section className="catalog section">
        <div className="filter-bar">
          <div>{[['tous','Tout voir'], ...categories.map(c => [c.id, c.name])].map(([id, label]) => <button key={id} onClick={() => setParams(id === 'tous' ? {} : { categorie: id })} className={active === id ? 'active' : ''}>{label}</button>)}</div>
          <span>{visible.length} modèle{visible.length > 1 ? 's' : ''} disponible{visible.length > 1 ? 's' : ''}</span>
        </div>
        <div className="products-grid">{visible.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}</div>
      </section>
      <QuoteBanner />
    </>
  )
}

function PageHero({ eyebrow, title, text, image }) {
  return <section className="page-hero"><img src={image} alt="" /><div className="page-hero-shade"></div><div><p className="eyebrow light">{eyebrow}</p><h1 dangerouslySetInnerHTML={{ __html: title }} /><p>{text}</p></div></section>
}

function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const [mainImage, setMainImage] = useState(product?.images[0])
  useEffect(() => setMainImage(product?.images[0]), [product?.id])
  if (!product) return <NotFound />
  const cat = categories.find(c => c.id === product.category)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
  return (
    <>
      <section className="product-page section">
        <Link to="/collections" className="back-link"><ArrowLeft size={17} /> Retour à nos chambres</Link>
        <div className="product-detail">
          <div className="product-gallery">
            <div className="main-photo"><img src={mainImage} alt={product.name} /><span>{product.label}</span></div>
            <div className="thumbnails">{product.images.map((img, i) => <button key={img} className={mainImage === img ? 'active' : ''} onClick={() => setMainImage(img)}><img src={img} alt={`${product.name}, vue ${i + 1}`} /></button>)}</div>
          </div>
          <div className="product-info">
            <p className="eyebrow">{cat?.name}</p><h1>{product.name}</h1><p className="product-summary">{product.summary}</p>
            <div className="info-block"><h3>Composition</h3><ul>{product.includes.map(x => <li key={x}><Check size={16} />{x}</li>)}</ul></div>
            <div className="info-block"><h3>Style et finitions visibles</h3><div className="finish-list">{product.finishes.map((x, i) => <span key={x}><i className={`finish-${i}`}></i>{x}</span>)}</div></div>
            <Link to={`/devis?produit=${product.id}`} className="button button-wide">Demander le devis {product.name.replace('Chambre ', '')} <ArrowRight size={17} /></Link>
            <a href={waLink(`Bonjour YZ Meuble, je suis intéressé(e) par le modèle ${product.name}. Pouvez-vous me renseigner ?`)} target="_blank" rel="noreferrer" className="whatsapp-link"><MessageCircle size={19} /> Poser une question sur WhatsApp</a>
            <div className="reassurance"><span><BedDouble />Chambre complète</span><span><Truck />Livraison sur demande</span><span><MessageCircle />Devis sur WhatsApp</span></div>
          </div>
        </div>
      </section>
      <section className="detail-strip">{product.details.map((x, i) => <div key={x}><span>0{i + 1}</span>{x}</div>)}</section>
      {related.length > 0 && <section className="section related"><SectionTitle eyebrow="Dans le même univers" title="Vous aimerez<br/><em>peut-être aussi.</em>" /><div className="products-grid">{related.map((item, i) => <ProductCard key={item.id} product={item} index={i} />)}</div></section>}
    </>
  )
}

function QuoteForm({ compact = false }) {
  const [params] = useSearchParams()
  const preselected = products.find(p => p.id === params.get('produit'))
  const [form, setForm] = useState({ name: '', phone: '', city: '', type: preselected?.name || '', details: '' })
  const submit = e => {
    e.preventDefault()
    const msg = `Bonjour YZ Meuble,\n\nJe souhaite demander un devis.\n\nNom : ${form.name}\nTéléphone : ${form.phone}\nVille : ${form.city}\nProjet / modèle : ${form.type}\nDétails : ${form.details || 'À préciser ensemble'}\n\nMerci de me recontacter.`
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
  }
  return (
    <form className={`quote-form ${compact ? 'compact' : ''}`} onSubmit={submit}>
      <div className="field-row"><label>Votre nom<input required placeholder="Nom et prénom" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></label><label>Téléphone<input required type="tel" placeholder="05 XX XX XX XX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></label></div>
      <div className="field-row"><label>Votre ville<input required placeholder="Ex. Alger" value={form.city} onChange={e => setForm({...form, city: e.target.value})} /></label><label>Modèle souhaité<select required value={form.type} onChange={e => setForm({...form, type: e.target.value})}><option value="">Choisir une chambre</option>{products.map(p => <option key={p.id}>{p.name}</option>)}<option>Je souhaite être conseillé(e)</option></select><ChevronDown className="select-icon" size={17} /></label></div>
      <label>Votre message<textarea rows={compact ? 3 : 5} placeholder="Posez votre question sur la chambre, la disponibilité ou la livraison..." value={form.details} onChange={e => setForm({...form, details: e.target.value})} /></label>
      <button className="button button-wide" type="submit"><MessageCircle size={18} /> Envoyer ma demande sur WhatsApp</button>
      <small>En cliquant, votre demande sera préparée et ouverte dans WhatsApp. Aucun paiement en ligne.</small>
    </form>
  )
}

function QuotePage() {
  return <section className="quote-page"><div className="quote-side" style={{ backgroundImage: `linear-gradient(rgba(29,27,23,.58), rgba(29,27,23,.68)), url('${products[0].images[0]}')` }}><p className="eyebrow light">Devis chambre à coucher</p><h1>Votre chambre<br /><em>commence ici.</em></h1><p>Indiquez le modèle qui vous intéresse et votre ville. Votre demande sera envoyée directement à YZ Meuble sur WhatsApp.</p><div className="quote-points"><span><CircleCheck />Aucun prix caché sur le site</span><span><CircleCheck />Réponse directe sur WhatsApp</span><span><CircleCheck />Informations sur la livraison</span></div></div><div className="quote-form-wrap"><span className="form-count">DEMANDE DIRECTE</span><h2>Demander votre devis</h2><p>Nous utilisons ces informations uniquement pour répondre à votre demande.</p><QuoteForm /></div></section>
}

function About() {
  return (
    <>
      <PageHero eyebrow="À propos de YZ Meuble" title="Notre spécialité :<br/><em>la chambre à coucher.</em>" text="Nous présentons des ensembles complets pour vous permettre de choisir une chambre harmonieuse sans chercher chaque meuble séparément." image={products[0].images[5]} />
      <section className="story section"><div><p className="eyebrow">Ce que nous proposons</p><h2>Une seule adresse pour choisir<br /><em>votre chambre complète.</em></h2></div><div><p>YZ Meuble est une boutique spécialisée dans la vente de chambres à coucher. Nos modèles réunissent les principaux éléments nécessaires : lit, armoire, tables de chevet, coiffeuse et solutions de rangement.</p><p>Sur ce site, les photos présentées sont celles des modèles proposés. Pour connaître les informations commerciales et les possibilités de livraison, il suffit de nous contacter sur WhatsApp.</p></div></section>
      <section className="values section">
        {[['01','Des photos réelles','Chaque fiche utilise les vraies photos du modèle afin que vous puissiez examiner l’ensemble et ses rangements.'],['02','Une composition claire','Nous indiquons les meubles visibles et inclus dans chaque chambre sans afficher de prix sur le site.'],['03','Un contact direct','Votre demande de devis est préparée puis envoyée directement à YZ Meuble sur WhatsApp.']].map(v => <article key={v[0]}><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></article>)}
      </section>
      <section className="atelier-split"><div><img src={products[0].images[8]} alt="Coiffeuse et colonne de la chambre Kachmir" loading="lazy" /></div><div><p className="eyebrow">Le modèle Kachmir</p><h2>Du rangement,<br /><em>dans chaque élément.</em></h2><p>L’armoire, les chevets et la coiffeuse Kachmir offrent plusieurs espaces de rangement. La colonne vitrée et les portes éclairées complètent l’ensemble avec une présence contemporaine.</p><Link to="/produit/chambre-kachmir" className="button">Découvrir Kachmir <ArrowRight size={17} /></Link></div></section>
    </>
  )
}

function Services() {
  return (
    <>
      <PageHero eyebrow="Acheter chez YZ Meuble" title="Une demande simple,<br/><em>une réponse directe.</em>" text="Consultez les modèles disponibles puis contactez-nous pour recevoir les informations correspondant à votre ville et à votre demande." image={products[0].images[6]} />
      <section className="services section">
        <SectionTitle eyebrow="Comment ça marche" title="Choisir votre chambre,<br/><em>sans complication.</em>" />
        <div className="services-grid">
          {[[Search,'Consultez les modèles','Parcourez les photos et vérifiez la composition de chaque chambre.'],[BedDouble,'Choisissez votre chambre','Sélectionnez la chambre Kachmir, Armada ou Evora.'],[MessageCircle,'Envoyez votre demande','Le formulaire prépare un message complet avec votre nom, ville et modèle souhaité.'],[Truck,'Confirmez la livraison','Échangez directement avec YZ Meuble pour les modalités disponibles dans votre région.']].map(([Icon,t,d],i) => <article key={t}><span>0{i+1}</span><Icon /><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>
      <section className="made-to-measure"><div><p className="eyebrow light">Besoin d’une information ?</p><h2>Parlez directement<br />avec <em>YZ Meuble.</em></h2></div><div><p>Posez vos questions sur Kachmir, Armada ou Evora, leur composition et les possibilités de livraison. Nous vous répondons directement sur WhatsApp au 0557 07 79 85.</p><Link to="/devis" className="button button-light">Demander un devis <ArrowRight size={17} /></Link></div></section>
      <QuoteBanner />
    </>
  )
}

function Inspirations() {
  const images = products[0].images.slice(0, 6).map((image, i) => [image, ['Vue complète', 'Lit capitonné', 'Coiffeuse assortie', 'Armoire vitrée', 'Rangements intérieurs', 'Éclairage intégré'][i], 'Chambre Kachmir'])
  return (
    <>
      <div className="simple-hero section"><p className="eyebrow">Galerie Kachmir</p><h1>Découvrez la chambre<br /><em>sous tous ses angles.</em></h1><p>Des vues générales aux rangements intérieurs, chaque photo présente le véritable modèle Kachmir.</p></div>
      <section className="inspiration-grid section">{images.map(([img,title,cat],i) => <article key={title} className={`inspiration-${i+1}`}><img src={img} alt={title} loading="lazy" /><div><span>{cat}</span><h2>{title}</h2></div></article>)}</section>
      <QuoteBanner />
    </>
  )
}

function Contact() {
  return <section className="contact-page section"><div className="contact-copy"><p className="eyebrow">Contacter YZ Meuble</p><h1>Une question sur<br /><em>une de nos chambres ?</em></h1><p>Écrivez-nous sur WhatsApp pour connaître les informations sur Kachmir, Armada ou Evora, leur disponibilité et les possibilités de livraison dans votre ville.</p><div className="contact-cards"><a href={waLink('Bonjour YZ Meuble, je souhaite avoir des informations sur vos chambres Kachmir, Armada et Evora.')} target="_blank" rel="noreferrer"><MessageCircle /><div><span>WhatsApp</span><strong>0557 07 79 85</strong></div><ArrowRight /></a><div><Clock3 /><div><span>Type de contact</span><strong>Réponse directe sur WhatsApp</strong></div></div></div></div><div className="contact-form-card"><h2>Demande de devis</h2><QuoteForm compact /></div></section>
}

function QuoteBanner() {
  return <section className="quote-banner"><div><p className="eyebrow light">Un de nos trois modèles vous plaît ?</p><h2>Demandez les informations<br /><em>pour votre ville.</em></h2></div><p>Indiquez votre nom, votre numéro, votre ville et le modèle choisi. Votre demande sera ouverte directement dans WhatsApp.</p><Link to="/devis" className="button button-light">Demander mon devis <ArrowRight size={17} /></Link></section>
}

function NotFound() {
  return <section className="not-found section"><span>404</span><h1>Cette chambre n’est pas disponible.</h1><p>Revenez à nos modèles pour continuer votre visite.</p><Link to="/collections" className="button">Voir nos chambres <ArrowRight size={17} /></Link></section>
}

export default function App() {
  return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/collections" element={<Collections />} /><Route path="/produit/:id" element={<ProductPage />} /><Route path="/devis" element={<QuotePage />} /><Route path="/a-propos" element={<About />} /><Route path="/sur-mesure" element={<Services />} /><Route path="/inspirations" element={<Inspirations />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></Layout>
}

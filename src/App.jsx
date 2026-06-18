import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, BedDouble, Check, ChevronDown, CircleCheck, Clock3,
  Instagram, Layers3, Menu, MessageCircle, MoveRight, PackageCheck, Phone,
  Ruler, Search, ShieldCheck, Sofa, Sparkles, Star, Truck, X,
} from 'lucide-react'
import { categories, products, testimonials } from './data'

const whatsappNumber = '213557077985'

function waLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [pathname])
  return null
}

function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="YZ Meuble, accueil">
      <span className="logo-mark">YZ</span>
      <span className="logo-text">MEUBLE<small>MAISON D’INTÉRIEUR</small></span>
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
    ['/collections', 'Collections'],
    ['/sur-mesure', 'Sur mesure'],
    ['/inspirations', 'Inspirations'],
    ['/a-propos', 'Notre maison'],
  ]
  return (
    <>
      <div className="announcement">Conception personnalisée · Livraison disponible <span>Parlez-nous de votre projet</span></div>
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
        <Link to="/devis" className="button" onClick={() => setOpen(false)}>Démarrer mon projet <ArrowRight size={18} /></Link>
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow light">Un intérieur qui vous ressemble</p>
          <h2>Votre projet mérite<br /><em>une belle conversation.</em></h2>
        </div>
        <Link to="/devis" className="circle-cta" aria-label="Demander un devis"><ArrowRight /></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand"><Logo light /><p>Mobilier contemporain, chambres à coucher et aménagements pensés pour votre façon de vivre.</p></div>
        <div><h4>Explorer</h4><Link to="/collections">Collections</Link><Link to="/sur-mesure">Sur mesure</Link><Link to="/inspirations">Inspirations</Link></div>
        <div><h4>La maison</h4><Link to="/a-propos">À propos</Link><Link to="/contact">Contact</Link><Link to="/devis">Demander un devis</Link></div>
        <div><h4>Nous joindre</h4><a href={waLink('Bonjour YZ Meuble, je souhaite avoir plus d’informations.')}>0557 07 79 85</a><span>Algérie</span><a href="#" aria-label="Instagram YZ Meuble"><Instagram size={18} /> Instagram</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 YZ Meuble. Tous droits réservés.</span><span>Conçu avec soin pour de beaux intérieurs.</span></div>
    </footer>
  )
}

function Layout({ children }) {
  return <><ScrollToTop /><Header /><main>{children}</main><Footer /><a className="whatsapp-float" href={waLink('Bonjour YZ Meuble, je souhaite discuter de mon projet d’ameublement.')} target="_blank" rel="noreferrer" aria-label="Contacter YZ Meuble sur WhatsApp"><MessageCircle /><span>Nous écrire</span></a></>
}

function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  return <div className={`section-title ${align}`}><p className="eyebrow">{eyebrow}</p><h2 dangerouslySetInnerHTML={{ __html: title }} />{text && <p className="lead">{text}</p>}</div>
}

function ProductCard({ product, index = 0 }) {
  return (
    <Link to={`/produit/${product.id}`} className="product-card" style={{ '--delay': `${index * 70}ms` }}>
      <div className="product-image"><img src={product.images[0]} alt={product.name} loading="lazy" /><span>{product.label}</span><div className="card-arrow"><ArrowRight size={18} /></div></div>
      <div className="product-meta"><div><p>{categories.find(c => c.id === product.category)?.name}</p><h3>{product.name}</h3></div><span>Découvrir</span></div>
    </Link>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=92" alt="Chambre à coucher élégante YZ Meuble" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Mobilier contemporain · Algérie</p>
          <h1>L’élégance<br />prend <em>place.</em></h1>
          <p>Des chambres et des meubles pensés pour durer, dessinés pour vous et fabriqués avec exigence.</p>
          <div className="hero-actions"><Link to="/collections" className="button button-light">Explorer la collection <ArrowRight size={17} /></Link><Link to="/devis" className="text-link light">Parler de mon projet <MoveRight /></Link></div>
        </div>
        <div className="hero-glass"><span>Collection 2026</span><strong>Des matières douces.<br />Des lignes qui respirent.</strong><Link to="/collections">Voir la sélection <ArrowRight size={16} /></Link></div>
        <div className="scroll-note"><span></span>Défiler pour découvrir</div>
      </section>

      <section className="intro section">
        <div className="intro-number">01</div>
        <div className="intro-copy"><p className="eyebrow">La maison YZ</p><h2>Nous créons plus que des meubles.<br /><em>Nous composons des lieux de vie.</em></h2></div>
        <p className="intro-text">Chaque intérieur raconte une histoire différente. Nous vous accompagnons pour choisir les bonnes formes, les bonnes matières et les bonnes proportions — sans compromis entre esthétique et usage.</p>
      </section>

      <section className="categories-section section">
        <SectionTitle eyebrow="Nos univers" title="Une collection pensée<br/><em>pièce par pièce.</em>" text="Découvrez des ensembles harmonieux ou composez librement votre intérieur." />
        <div className="category-grid">
          {categories.map((cat, i) => <Link key={cat.id} to={`/collections?categorie=${cat.id}`} className={`category-card card-${i + 1}`}><img src={cat.image} alt={cat.name} loading="lazy" /><div className="category-overlay"></div><div className="category-content"><span>0{i + 1}</span><div><p>{cat.eyebrow}</p><h3>{cat.name}</h3></div><ArrowRight /></div></Link>)}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-image"><img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=88" alt="Détail d'une chambre YZ Meuble" loading="lazy" /></div>
        <div className="feature-copy"><p className="eyebrow">Notre signature</p><h2>Le beau,<br /><em>jusque dans les détails.</em></h2><p>Une belle pièce ne tient pas seulement à sa silhouette. Elle se révèle dans le toucher d’un tissu, la douceur d’une fermeture, l’alignement d’une façade et la justesse d’une finition.</p><ul><li><span>01</span>Matières sélectionnées</li><li><span>02</span>Finitions personnalisables</li><li><span>03</span>Montage professionnel</li></ul><Link to="/a-propos" className="text-link">Découvrir notre approche <ArrowRight /></Link></div>
      </section>

      <section className="section selected-products">
        <div className="title-row"><SectionTitle eyebrow="Pièces choisies" title="Nos créations<br/><em>les plus désirées.</em>" /><Link to="/collections" className="text-link">Voir toute la collection <ArrowRight /></Link></div>
        <div className="products-grid">{products.slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}</div>
      </section>

      <section className="process section">
        <SectionTitle eyebrow="Votre projet, simplement" title="De l’idée à votre intérieur,<br/><em>nous sommes à vos côtés.</em>" align="center" />
        <div className="process-grid">
          {[
            [MessageCircle, '01', 'Échangeons', 'Vous nous racontez votre espace, vos envies et vos besoins sur WhatsApp ou en showroom.'],
            [Ruler, '02', 'Composons', 'Nous affinons les dimensions, les matières et les finitions pour créer la bonne proposition.'],
            [PackageCheck, '03', 'Installons', 'Votre mobilier est préparé, livré et installé avec le même soin qu’à l’atelier.'],
          ].map(([Icon, n, t, d]) => <div className="process-card" key={n}><span className="process-n">{n}</span><div className="process-icon"><Icon /></div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="center"><Link to="/devis" className="button">Commencer mon projet <ArrowRight size={17} /></Link></div>
      </section>

      <section className="testimonials section">
        <SectionTitle eyebrow="Chez vous" title="Ils vivent déjà<br/><em>l’expérience YZ.</em>" />
        <div className="testimonials-grid">{testimonials.map((item, i) => <article key={item.name}><div className="quote-mark">“</div><div className="stars">{[1,2,3,4,5].map(x => <Star key={x} size={14} fill="currentColor" />)}</div><p>{item.text}</p><div><strong>{item.name}</strong><span>{item.city}</span></div><small>0{i + 1}</small></article>)}</div>
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
      <PageHero eyebrow="La collection YZ" title="Des pièces qui donnent<br/><em>du caractère à votre quotidien.</em>" text="Explorez nos chambres, lits, dressings et salons. Chaque modèle peut être adapté à votre intérieur." image="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2200&q=88" />
      <section className="catalog section">
        <div className="filter-bar">
          <div>{[['tous','Tout voir'], ...categories.map(c => [c.id, c.name])].map(([id, label]) => <button key={id} onClick={() => setParams(id === 'tous' ? {} : { categorie: id })} className={active === id ? 'active' : ''}>{label}</button>)}</div>
          <span>{visible.length} créations</span>
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
  if (!product) return <NotFound />
  const cat = categories.find(c => c.id === product.category)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
  return (
    <>
      <section className="product-page section">
        <Link to="/collections" className="back-link"><ArrowLeft size={17} /> Retour aux collections</Link>
        <div className="product-detail">
          <div className="product-gallery">
            <div className="main-photo"><img src={mainImage} alt={product.name} /><span>{product.label}</span></div>
            <div className="thumbnails">{product.images.map((img, i) => <button key={img} className={mainImage === img ? 'active' : ''} onClick={() => setMainImage(img)}><img src={img} alt={`${product.name}, vue ${i + 1}`} /></button>)}</div>
          </div>
          <div className="product-info">
            <p className="eyebrow">{cat?.name}</p><h1>{product.name}</h1><p className="product-summary">{product.summary}</p>
            <div className="info-block"><h3>Composition</h3><ul>{product.includes.map(x => <li key={x}><Check size={16} />{x}</li>)}</ul></div>
            <div className="info-block"><h3>Finitions proposées</h3><div className="finish-list">{product.finishes.map((x, i) => <span key={x}><i className={`finish-${i}`}></i>{x}</span>)}</div></div>
            <Link to={`/devis?produit=${product.id}`} className="button button-wide">Demander un devis personnalisé <ArrowRight size={17} /></Link>
            <a href={waLink(`Bonjour YZ Meuble, je suis intéressé(e) par le modèle ${product.name}. Pouvez-vous me renseigner ?`)} target="_blank" rel="noreferrer" className="whatsapp-link"><MessageCircle size={19} /> Poser une question sur WhatsApp</a>
            <div className="reassurance"><span><ShieldCheck />Fabrication soignée</span><span><Truck />Livraison disponible</span><span><Sparkles />Personnalisable</span></div>
          </div>
        </div>
      </section>
      <section className="detail-strip">{product.details.map((x, i) => <div key={x}><span>0{i + 1}</span>{x}</div>)}</section>
      {related.length > 0 && <section className="section related"><SectionTitle eyebrow="Dans le même univers" title="Vous aimerez<br/><em>peut-être aussi.</em>" /><div className="products-grid">{related.map(ProductCard)}</div></section>}
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
      <div className="field-row"><label>Votre ville<input required placeholder="Ex. Alger" value={form.city} onChange={e => setForm({...form, city: e.target.value})} /></label><label>Votre projet<select required value={form.type} onChange={e => setForm({...form, type: e.target.value})}><option value="">Choisir un type de projet</option>{products.map(p => <option key={p.id}>{p.name}</option>)}<option>Chambre personnalisée</option><option>Dressing sur mesure</option><option>Autre projet</option></select><ChevronDown className="select-icon" size={17} /></label></div>
      <label>Parlez-nous de votre besoin<textarea rows={compact ? 3 : 5} placeholder="Dimensions, finition souhaitée, nombre d'éléments..." value={form.details} onChange={e => setForm({...form, details: e.target.value})} /></label>
      <button className="button button-wide" type="submit"><MessageCircle size={18} /> Envoyer ma demande sur WhatsApp</button>
      <small>En cliquant, votre demande sera préparée et ouverte dans WhatsApp. Aucun paiement en ligne.</small>
    </form>
  )
}

function QuotePage() {
  return <section className="quote-page"><div className="quote-side"><p className="eyebrow light">Votre projet commence ici</p><h1>Imaginons votre<br /><em>prochain intérieur.</em></h1><p>Quelques informations nous suffisent pour comprendre votre besoin. Nous vous répondrons directement sur WhatsApp.</p><div className="quote-points"><span><CircleCheck />Conseils personnalisés</span><span><CircleCheck />Finitions au choix</span><span><CircleCheck />Réponse directe et rapide</span></div></div><div className="quote-form-wrap"><span className="form-count">01 — 03</span><h2>Parlez-nous de votre projet</h2><p>Les champs marqués sont nécessaires pour préparer votre demande.</p><QuoteForm /></div></section>
}

function About() {
  return (
    <>
      <PageHero eyebrow="Notre maison" title="Le mobilier comme une façon<br/><em>de mieux habiter.</em>" text="YZ Meuble imagine des intérieurs équilibrés, chaleureux et profondément personnels." image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=88" />
      <section className="story section"><div><p className="eyebrow">Notre conviction</p><h2>Une maison réussie ne suit pas une tendance.<br /><em>Elle raconte ceux qui y vivent.</em></h2></div><div><p>Nous croyons aux meubles qui ont de la présence sans prendre toute la place. Aux matières que l’on aime toucher. Aux rangements qui simplifient le quotidien. Aux proportions justes qui font respirer une pièce.</p><p>C’est cette vision qui guide YZ Meuble : proposer des collections contemporaines, personnalisables et pensées pour les vrais intérieurs.</p></div></section>
      <section className="values section">
        {[['01','L’écoute avant le dessin','Nous partons de votre espace et de votre manière de vivre pour vous conseiller avec justesse.'],['02','La qualité dans le détail','De la structure aux charnières, chaque choix participe au confort et à la durée.'],['03','Le beau qui reste utile','Nos lignes sont élégantes, mais jamais au détriment du rangement, du confort ou de l’entretien.']].map(v => <article key={v[0]}><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></article>)}
      </section>
      <section className="atelier-split"><div><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=88" alt="Savoir-faire et matières YZ Meuble" loading="lazy" /></div><div><p className="eyebrow">Du projet à la pose</p><h2>Un seul niveau d’exigence,<br /><em>à chaque étape.</em></h2><p>Conseil, prise de mesure, choix des finitions, préparation, livraison et installation : nous veillons à la cohérence de l’ensemble jusqu’au dernier détail.</p><Link to="/devis" className="button">Nous confier votre projet <ArrowRight size={17} /></Link></div></section>
    </>
  )
}

function Services() {
  return (
    <>
      <PageHero eyebrow="Le sur-mesure YZ" title="Votre espace est unique.<br/><em>Votre mobilier peut l’être aussi.</em>" text="Dimensions, composition, couleur, matière : nous adaptons chaque projet à votre intérieur et à vos habitudes." image="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=2200&q=88" />
      <section className="services section">
        <SectionTitle eyebrow="Notre accompagnement" title="Une approche complète,<br/><em>sans complication.</em>" />
        <div className="services-grid">
          {[[Search,'Conseil & découverte','Nous clarifions vos besoins, votre style et les contraintes de la pièce.'],[Ruler,'Prise de mesure','Les dimensions sont vérifiées pour garantir une intégration juste et harmonieuse.'],[Layers3,'Composition personnalisée','Modules, rangements, matières et couleurs sont assemblés selon votre projet.'],[Truck,'Livraison & installation','Notre équipe met en place votre mobilier et veille aux finitions sur place.']].map(([Icon,t,d],i) => <article key={t}><span>0{i+1}</span><Icon /><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>
      <section className="made-to-measure"><div><p className="eyebrow light">Conçu pour vous</p><h2>Du mur vide<br />à l’espace <em>évident.</em></h2></div><div><p>Un dressing qui exploite toute la hauteur. Une tête de lit ajustée à votre mur. Une chambre composée selon votre rythme. Le sur-mesure permet de transformer les contraintes en caractère.</p><Link to="/devis" className="button button-light">Étudier mon projet <ArrowRight size={17} /></Link></div></section>
      <QuoteBanner />
    </>
  )
}

function Inspirations() {
  const images = [
    ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85','Tons naturels','Chambre'],
    ['https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85','Lignes généreuses','Salon'],
    ['https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85','Calme contemporain','Chambre'],
    ['https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85','Rangement précieux','Dressing'],
    ['https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=85','Douceur minérale','Salon'],
    ['https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85','Lumière du matin','Chambre'],
  ]
  return (
    <>
      <div className="simple-hero section"><p className="eyebrow">Journal d’intérieurs</p><h1>Des idées pour composer<br /><em>un chez-vous singulier.</em></h1><p>Matières, proportions, couleurs : une sélection d’ambiances pour nourrir votre projet.</p></div>
      <section className="inspiration-grid section">{images.map(([img,title,cat],i) => <article key={title} className={`inspiration-${i+1}`}><img src={img} alt={title} loading="lazy" /><div><span>{cat}</span><h2>{title}</h2></div></article>)}</section>
      <QuoteBanner />
    </>
  )
}

function Contact() {
  return <section className="contact-page section"><div className="contact-copy"><p className="eyebrow">Nous contacter</p><h1>Une question,<br /><em>une envie, un projet ?</em></h1><p>Écrivez-nous sur WhatsApp pour une réponse directe, ou laissez-nous les détails de votre projet.</p><div className="contact-cards"><a href={waLink('Bonjour YZ Meuble, je souhaite avoir des informations.')} target="_blank" rel="noreferrer"><MessageCircle /><div><span>WhatsApp</span><strong>0557 07 79 85</strong></div><ArrowRight /></a><div><Clock3 /><div><span>Disponibilité</span><strong>Réponse dans les meilleurs délais</strong></div></div></div></div><div className="contact-form-card"><h2>Demande rapide</h2><QuoteForm compact /></div></section>
}

function QuoteBanner() {
  return <section className="quote-banner"><div><p className="eyebrow light">Une pièce vous plaît ?</p><h2>Adaptons-la à<br /><em>votre intérieur.</em></h2></div><p>Dimensions, composition, tissus et finitions : dites-nous ce que vous imaginez, nous préparons votre devis personnalisé.</p><Link to="/devis" className="button button-light">Demander mon devis <ArrowRight size={17} /></Link></section>
}

function NotFound() {
  return <section className="not-found section"><span>404</span><h1>Cette pièce n’existe pas encore.</h1><p>Revenez à la collection pour continuer votre visite.</p><Link to="/collections" className="button">Voir les collections <ArrowRight size={17} /></Link></section>
}

export default function App() {
  return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/collections" element={<Collections />} /><Route path="/produit/:id" element={<ProductPage />} /><Route path="/devis" element={<QuotePage />} /><Route path="/a-propos" element={<About />} /><Route path="/sur-mesure" element={<Services />} /><Route path="/inspirations" element={<Inspirations />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></Layout>
}

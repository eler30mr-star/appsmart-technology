import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CheckCircle2,
  ChevronUp,
  Code2,
  Cpu,
  ExternalLink,
  Globe2,
  HeartHandshake,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  X
} from 'lucide-react';
import './styles.css';

const APP_STORE_URL = 'https://appsem-store.vercel.app/';
const LOGO_URL = 'https://play-lh.googleusercontent.com/d6N_uif2FjJ_k3ADxJS-7bHLPjp_5CNYd_VBDm87ZINrfS2y2XF-4Zs24SFVjMogLg=s188-rw';

function BrandLogo({ compact = false }) {
  return (
    <img
      className={compact ? 'brand-logo compact' : 'brand-logo'}
      src={LOGO_URL}
      alt="Logo de AppsMart Technology"
    />
  );
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ['inicio', 'Inicio'],
    ['nosotros', 'Nosotros'],
    ['soluciones', 'Soluciones'],
    ['mision', 'Principios'],
    ['contacto', 'Contacto']
  ];

  const go = (target) => {
    setOpen(false);
    setPage('inicio');
    setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => go('inicio')} aria-label="Ir al inicio">
          <BrandLogo compact />
          <span>
            <strong>AppsMart Technology</strong>
            <small>Tecnología sin Límites</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {nav.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} className={page === 'inicio' && id === 'inicio' ? 'active' : ''}>{label}</button>
          ))}
          <a className="store-link" href={APP_STORE_URL} target="_blank" rel="noreferrer">Appsem Store <ExternalLink size={16} /></a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav container">
          {nav.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer">Appsem Store</a>
        </div>
      )}
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <section id="inicio" className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={18} /> Desarrollo de productos digitales</p>
            <h1>Tecnología útil, creada para experiencias reales.</h1>
            <p className="hero-text">AppsMart Technology desarrolla aplicaciones y productos digitales con una visión clara: convertir ideas en soluciones modernas, funcionales y accesibles, cuidando cada detalle de la experiencia del usuario.</p>
            <div className="hero-actions">
              <a className="btn primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">Explorar Appsem Store <ArrowRight size={18} /></a>
              <button className="btn secondary" onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}>Conocer lo que hacemos</button>
            </div>
            <div className="trust-row">
              <span><CheckCircle2 size={18} /> Desarrollo Android</span>
              <span><CheckCircle2 size={18} /> Diseño de producto</span>
              <span><CheckCircle2 size={18} /> Mejora continua</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ecosistema digital de AppsMart Technology">
            <div className="visual-glow visual-glow-one"></div>
            <div className="visual-glow visual-glow-two"></div>
            <div className="ecosystem-card">
              <div className="ecosystem-head">
                <BrandLogo />
                <div>
                  <span>APPSMART TECHNOLOGY</span>
                  <strong>Tecnología sin Límites</strong>
                </div>
              </div>
              <div className="ecosystem-copy">
                <span className="status-dot">Ecosistema digital</span>
                <h3>Productos pensados desde la utilidad hasta la experiencia final.</h3>
              </div>
              <div className="product-stack">
                <div className="product-item"><Smartphone /><div><strong>Aplicaciones Android</strong><span>Experiencias móviles claras y funcionales.</span></div></div>
                <div className="product-item"><Layers3 /><div><strong>Productos digitales</strong><span>Diseño, estructura y evolución de soluciones propias.</span></div></div>
                <div className="product-item accent-item"><Rocket /><div><strong>Appsem Store</strong><span>Tienda oficial de AppsMart Technology.</span></div><ArrowRight size={18} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="section light-section">
        <div className="container split">
          <div>
            <p className="section-kicker">Nosotros</p>
            <h2>Una marca de desarrollo construida alrededor de productos útiles.</h2>
          </div>
          <div className="rich-text">
            <p><strong>AppsMart Technology</strong> es una marca de desarrollo enfocada en crear aplicaciones y experiencias digitales con propósito, identidad y atención al detalle.</p>
            <p>Cada producto se trabaja desde el problema que busca resolver, la forma en que una persona lo usa y la calidad que debe mantener con el tiempo. La tecnología y la inteligencia artificial forman parte de las herramientas de desarrollo, pero el centro siempre es el producto y el usuario.</p>
          </div>
        </div>
      </section>

      <section id="soluciones" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Soluciones</p>
            <h2>Desarrollo con visión de producto</h2>
            <p>AppsMart Technology crea y evoluciona soluciones digitales propias, combinando desarrollo, diseño y una estructura pensada para crecer.</p>
          </div>
          <div className="cards-grid">
            <Feature icon={<Smartphone />} title="Aplicaciones Android" text="Productos móviles enfocados en utilidad, rendimiento, navegación clara y una experiencia consistente en dispositivos actuales." />
            <Feature icon={<Code2 />} title="Experiencias digitales" text="Interfaces modernas y funcionales donde diseño, contenido y tecnología trabajan como una sola experiencia." />
            <Feature icon={<Layers3 />} title="Ecosistemas de producto" text="Conexión entre aplicaciones, sitios web, tiendas y servicios para mantener una identidad digital organizada." />
            <Feature icon={<Cpu />} title="Tecnología aplicada" text="Uso responsable de herramientas modernas e inteligencia artificial para apoyar procesos de diseño, desarrollo y mejora." />
            <Feature icon={<ShieldCheck />} title="Privacidad y confianza" text="Productos acompañados de información clara, páginas legales y una comunicación responsable con los usuarios." />
            <Feature icon={<Rocket />} title="Evolución continua" text="Revisión, optimización y crecimiento de cada producto después de su publicación, con foco en calidad y utilidad real." />
          </div>
        </div>
      </section>

      <section id="mision" className="section dark-band">
        <div className="container mission-grid">
          <InfoCard icon={<Target />} title="Misión" text="Crear productos digitales útiles, modernos y accesibles que conviertan necesidades reales en experiencias tecnológicas claras y bien construidas." />
          <InfoCard icon={<Globe2 />} title="Visión" text="Consolidar AppsMart Technology como una marca reconocida por la calidad, utilidad e identidad de sus aplicaciones y productos digitales." />
          <InfoCard icon={<HeartHandshake />} title="Principios" text="Utilidad, claridad, responsabilidad, mejora continua, respeto por el usuario y compromiso con la calidad de cada producto." />
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Proceso</p>
            <h2>De una necesidad a un producto digital</h2>
            <p>El desarrollo se organiza en etapas claras para mantener coherencia entre la idea, la experiencia y el resultado final.</p>
          </div>
          <div className="timeline">
            <Step number="01" title="Problema y propósito" text="Se identifica la necesidad, el usuario y el valor que debe ofrecer el producto antes de construirlo." />
            <Step number="02" title="Experiencia y estructura" text="Se definen los flujos, pantallas, contenido y jerarquía visual para crear una experiencia clara." />
            <Step number="03" title="Desarrollo y validación" text="Se construye el producto, se revisan sus comportamientos y se corrigen los puntos que afectan su uso." />
            <Step number="04" title="Publicación y evolución" text="El producto se prepara para lanzamiento y continúa mejorando a partir de nuevas necesidades y revisiones." />
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <div className="cta-brand-row">
            <div className="cta-icon"><Rocket /></div>
            <div>
              <p className="section-kicker">Appsem Store</p>
              <h2>Descubre las aplicaciones de AppsMart Technology.</h2>
              <p>Appsem Store es la tienda oficial de AppsMart Technology y el punto central para conocer nuestras aplicaciones, novedades y productos disponibles.</p>
            </div>
          </div>
          <a className="btn primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">Visitar Appsem Store <ArrowRight size={18} /></a>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

function Feature({ icon, title, text }) {
  return <article className="feature-card"><div className="icon-box">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}

function InfoCard({ icon, title, text }) {
  return <article className="info-card"><div className="icon-box">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}

function Step({ number, title, text }) {
  return <article className="step"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>;
}

function ContactSection() {
  return (
    <section id="contacto" className="section light-section">
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">Contacto</p>
          <h2>Contacto oficial de AppsMart Technology</h2>
          <p>Para consultas relacionadas con productos, soporte, colaboraciones o información general, utiliza el canal oficial de contacto.</p>
        </div>
        <div className="contact-card">
          <div className="icon-box"><Mail /></div>
          <span className="contact-label">Correo oficial</span>
          <h3>Contacto profesional</h3>
          <p>Comunicación directa para consultas relacionadas con AppsMart Technology y sus productos digitales.</p>
          <a href="mailto:ceo.developer.appsem@gmail.com">ceo.developer.appsem@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

function LegalPage({ type }) {
  const content = {
    privacidad: {
      title: 'Política de Privacidad',
      icon: <LockKeyhole />,
      paragraphs: [
        'AppsMart Technology respeta la privacidad de sus visitantes. Este sitio funciona como página oficial de la marca y como punto de información sobre sus productos y servicios digitales.',
        'El sitio puede incluir enlaces a plataformas externas, entre ellas Appsem Store y páginas relacionadas con aplicaciones de AppsMart Technology. Cada servicio externo puede aplicar sus propias políticas y condiciones.',
        'Actualmente, esta página no requiere registro de usuario ni dispone de formularios propios para recopilar información personal. Si se incorporan nuevas herramientas de analítica, contacto o recopilación de datos, esta política será actualizada.',
        'El correo oficial de contacto se utiliza para atender consultas profesionales, información sobre productos, soporte y comunicaciones relacionadas con AppsMart Technology.',
        'AppsMart Technology mantiene un compromiso con la transparencia, la claridad y el tratamiento responsable de la información.'
      ]
    },
    terminos: {
      title: 'Términos y Condiciones',
      icon: <ShieldCheck />,
      paragraphs: [
        'El acceso a este sitio implica el uso de la información publicada con fines informativos y profesionales relacionados con AppsMart Technology.',
        'El contenido presenta la identidad, principios, áreas de desarrollo y productos vinculados a AppsMart Technology. La disponibilidad, características y evolución de cada producto pueden cambiar con el tiempo.',
        'Los enlaces a tiendas, aplicaciones y servicios externos pueden ser modificados, actualizados o retirados cuando sea necesario.',
        'El nombre AppsMart Technology, su identidad visual, eslogan, textos y elementos propios del sitio pertenecen a su titular, salvo recursos de terceros sujetos a sus respectivas condiciones.',
        'No se permite utilizar este sitio con fines abusivos, intentar afectar su funcionamiento ni reproducir de forma no autorizada sus elementos protegidos.'
      ]
    },
    cookies: {
      title: 'Política de Cookies',
      icon: <Cpu />,
      paragraphs: [
        'Este sitio puede funcionar sin cookies propias obligatorias para el acceso a su contenido principal.',
        'Los servicios externos utilizados para alojamiento, seguridad, medición o enlaces pueden aplicar tecnologías similares de acuerdo con sus propias políticas.',
        'Si AppsMart Technology incorpora en el futuro herramientas de analítica, formularios, publicidad o medición de tráfico que requieran información adicional, esta política será actualizada para explicarlo con claridad.',
        'El usuario puede administrar las cookies y tecnologías similares desde la configuración de su navegador.'
      ]
    }
  }[type];

  return (
    <main className="legal-page section">
      <div className="container legal-container">
        <div className="legal-title">
          <div className="icon-box">{content.icon}</div>
          <div>
            <p className="section-kicker">Información legal</p>
            <h1>{content.title}</h1>
          </div>
        </div>
        <div className="legal-card">
          {content.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <p><strong>Última actualización:</strong> Junio de 2026.</p>
        </div>
      </div>
    </main>
  );
}

function Footer({ setPage }) {
  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const legal = (page) => { setPage(page); goTop(); };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand"><BrandLogo compact /><div><strong>AppsMart Technology</strong><span>Tecnología sin Límites</span></div></div>
          <p>Desarrollo de aplicaciones y productos digitales enfocados en utilidad, experiencia y evolución continua.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => legal('privacidad')}>Privacidad</button>
          <button onClick={() => legal('terminos')}>Términos</button>
          <button onClick={() => legal('cookies')}>Cookies</button>
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer">Appsem Store</a>
        </div>
        <button className="top-btn" onClick={goTop} aria-label="Volver arriba"><ChevronUp /></button>
      </div>
      <div className="container copyright">© 2026 AppsMart Technology. Todos los derechos reservados.</div>
    </footer>
  );
}

function App() {
  const [page, setPage] = useState('inicio');
  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === 'inicio' && <HomePage />}
      {page === 'privacidad' && <LegalPage type="privacidad" />}
      {page === 'terminos' && <LegalPage type="terminos" />}
      {page === 'cookies' && <LegalPage type="cookies" />}
      <Footer setPage={setPage} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

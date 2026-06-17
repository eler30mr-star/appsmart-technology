import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, ChevronUp, Code2, Cpu, ExternalLink, Globe2, HeartHandshake, Layers3, LockKeyhole, Mail, Menu, Rocket, ShieldCheck, Smartphone, Sparkles, Target, Users, X } from 'lucide-react';
import './styles.css';

const APP_STORE_URL = 'https://appsem-store.vercel.app';

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ['inicio', 'Inicio'],
    ['nosotros', 'Nosotros'],
    ['servicios', 'Servicios'],
    ['mision', 'Misión'],
    ['privacidad', 'Privacidad']
  ];

  const go = (target) => {
    setOpen(false);
    if (target === 'privacidad') {
      setPage('privacidad');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setPage('inicio');
    setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => go('inicio')} aria-label="Ir al inicio">
          <span className="brand-mark">AMT</span>
          <span>
            <strong>AppsMart Technology</strong>
            <small>Tecnología sin Límites</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {nav.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} className={page === id ? 'active' : ''}>{label}</button>
          ))}
          <a className="store-link" href={APP_STORE_URL} target="_blank" rel="noreferrer">Appsem Store <ExternalLink size={16} /></a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menú">
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

function HomePage({ setPage }) {
  return (
    <main>
      <section id="inicio" className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={18} /> Desarrollo Android + Inteligencia Artificial</p>
            <h1>Apps modernas, útiles y creadas con visión tecnológica.</h1>
            <p className="hero-text">AppsMart Technology es una marca de desarrollo enfocada en crear aplicaciones Android limpias, funcionales y escalables, usando inteligencia artificial como apoyo para acelerar ideas, mejorar diseños y construir soluciones digitales de alto valor.</p>
            <div className="hero-actions">
              <a className="btn primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">Appsem Store <ArrowRight size={18} /></a>
              <button className="btn secondary" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>Ver servicios</button>
            </div>
            <div className="trust-row">
              <span><CheckCircle2 size={18} /> Apps Android</span>
              <span><CheckCircle2 size={18} /> Diseño moderno</span>
              <span><CheckCircle2 size={18} /> IA aplicada</span>
            </div>
          </div>
          <div className="hero-card" aria-label="Tarjeta visual AppsMart Technology">
            <div className="phone-mockup">
              <div className="phone-top"></div>
              <div className="app-window">
                <span className="mini-logo">AMT</span>
                <h3>Build smarter apps</h3>
                <p>Diseño, código, estrategia y publicación.</p>
                <div className="window-list">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="section light-section">
        <div className="container split">
          <div>
            <p className="section-kicker">Nosotros</p>
            <h2>Una marca de desarrollo enfocada en crear herramientas digitales útiles.</h2>
          </div>
          <div className="rich-text">
            <p><strong>AppsMart Technology</strong> desarrolla aplicaciones con enfoque práctico, moderno y centrado en el usuario. La inteligencia artificial se usa como una herramienta de apoyo para mejorar la productividad, la creatividad, la estructura del código, las interfaces y la experiencia final.</p>
            <p>El objetivo no es crear tecnología complicada, sino soluciones claras, rápidas y accesibles que ayuden a las personas en su vida diaria.</p>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Servicios</p>
            <h2>Qué desarrolla AppsMart Technology</h2>
            <p>Soluciones digitales construidas con una combinación de desarrollo Android, diseño moderno e inteligencia artificial.</p>
          </div>
          <div className="cards-grid">
            <Feature icon={<Smartphone />} title="Aplicaciones Android" text="Desarrollo de apps móviles enfocadas en utilidad, rendimiento, monetización y experiencia de usuario." />
            <Feature icon={<BrainCircuit />} title="IA aplicada al desarrollo" text="Uso de inteligencia artificial para acelerar prototipos, mejorar interfaces, organizar código y optimizar ideas." />
            <Feature icon={<Code2 />} title="Interfaces modernas" text="Diseño limpio, adaptable, profesional y pensado para usuarios reales en teléfonos actuales." />
            <Feature icon={<Layers3 />} title="Ecosistema digital" text="Creación de páginas, tiendas de apps, perfiles de marca y presencia digital organizada." />
            <Feature icon={<ShieldCheck />} title="Privacidad y confianza" text="Páginas legales, comunicación clara y enfoque responsable en el manejo de información." />
            <Feature icon={<Rocket />} title="Publicación y crecimiento" text="Preparación de proyectos para lanzamiento, mejora continua y expansión de productos digitales." />
          </div>
        </div>
      </section>

      <section id="mision" className="section dark-band">
        <div className="container mission-grid">
          <InfoCard icon={<Target />} title="Misión" text="Crear aplicaciones tecnológicas útiles, modernas y accesibles que ayuden a las personas a resolver necesidades reales mediante soluciones digitales claras y eficientes." />
          <InfoCard icon={<Globe2 />} title="Visión" text="Convertir AppsMart Technology en una marca reconocida por desarrollar apps inteligentes, confiables y de impacto positivo, integrando innovación e inteligencia artificial." />
          <InfoCard icon={<HeartHandshake />} title="Valores" text="Innovación, responsabilidad, claridad, mejora continua, respeto por el usuario y compromiso con la calidad de cada producto digital." />
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Proceso</p>
            <h2>Cómo se construyen las soluciones</h2>
          </div>
          <div className="timeline">
            <Step number="01" title="Idea y propósito" text="Se define el problema, el usuario principal y el valor real que debe entregar la aplicación." />
            <Step number="02" title="Diseño y estructura" text="Se organiza la experiencia, las pantallas, los textos, los colores y el flujo de navegación." />
            <Step number="03" title="Desarrollo con IA" text="La inteligencia artificial apoya el desarrollo, revisión, mejora del código y creación de contenido base." />
            <Step number="04" title="Pruebas y publicación" text="Se revisa funcionamiento, rendimiento, textos, privacidad, monetización y preparación para lanzamiento." />
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <div>
            <p className="section-kicker">Appsem Store</p>
            <h2>Explora las aplicaciones creadas por AppsMart Technology.</h2>
            <p>La tienda de apps estará separada de esta página para mantener una estructura profesional: una página para el perfil del desarrollador y otra para mostrar las aplicaciones.</p>
          </div>
          <a className="btn primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">Ir a Appsem Store <ArrowRight size={18} /></a>
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
          <h2>Conecta con AppsMart Technology</h2>
          <p>Para consultas, propuestas o información sobre aplicaciones, puedes usar este espacio como punto de contacto profesional.</p>
        </div>
        <div className="contact-card">
          <Mail />
          <h3>Contacto profesional</h3>
          <p>Agrega aquí tu correo público de contacto o el formulario que usarás más adelante.</p>
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
        'AppsMart Technology respeta la privacidad de sus visitantes y usuarios. Esta página web funciona como perfil profesional del desarrollador y como punto de información sobre los servicios y aplicaciones creadas por la marca.',
        'Esta web puede mostrar enlaces externos, como Appsem Store u otras páginas relacionadas. Al pulsar un enlace externo, el usuario será dirigido a otro sitio con sus propias políticas y condiciones.',
        'Actualmente, esta página no solicita registro de usuario ni recopila datos personales mediante formularios propios. Si en el futuro se agregan formularios, analíticas, cookies o herramientas de contacto, esta política será actualizada.',
        'El correo de contacto se usa únicamente para comunicación profesional relacionada con consultas, proyectos, soporte o información sobre aplicaciones.',
        'AppsMart Technology se compromete a mantener una comunicación clara, responsable y orientada a proteger la confianza del usuario.'
      ]
    },
    terminos: {
      title: 'Términos y Condiciones',
      icon: <ShieldCheck />,
      paragraphs: [
        'Al utilizar este sitio web, aceptas acceder a la información presentada con fines informativos y profesionales sobre AppsMart Technology.',
        'El contenido de esta página describe servicios, misión, visión, valores y enlaces relacionados con el ecosistema de AppsMart Technology. No debe interpretarse como una garantía absoluta de disponibilidad permanente de productos o servicios.',
        'Los enlaces hacia tiendas, aplicaciones o páginas externas pueden cambiar con el tiempo. AppsMart Technology puede actualizar, modificar o retirar contenido cuando sea necesario.',
        'El nombre AppsMart Technology, su eslogan, textos, diseño y estructura pertenecen a su titular, salvo recursos externos que conserven sus propios derechos.',
        'El uso indebido del sitio, copia no autorizada del contenido o intento de afectar su funcionamiento queda prohibido.'
      ]
    },
    cookies: {
      title: 'Política de Cookies',
      icon: <Cpu />,
      paragraphs: [
        'Esta página puede funcionar sin cookies propias obligatorias. Sin embargo, servicios externos usados para alojamiento, estadísticas, seguridad o enlaces pueden aplicar tecnologías similares según sus propias políticas.',
        'Si en el futuro se integran herramientas como analíticas, formularios, publicidad o medición de tráfico, esta política se actualizará para informar al usuario de forma clara.',
        'El usuario puede configurar o bloquear cookies desde su navegador. Algunas funciones externas podrían verse limitadas si se desactivan completamente.',
        'AppsMart Technology busca mantener una experiencia transparente, rápida y respetuosa con la privacidad del visitante.'
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
          <div className="footer-brand"><span className="brand-mark">AMT</span><strong>AppsMart Technology</strong></div>
          <p>Tecnología sin Límites. Desarrollo de aplicaciones modernas con apoyo de inteligencia artificial.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => legal('privacidad')}>Privacidad</button>
          <button onClick={() => legal('terminos')}>Términos</button>
          <button onClick={() => legal('cookies')}>Cookies</button>
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer">Appsem Store</a>
        </div>
        <button className="top-btn" onClick={goTop} aria-label="Volver arriba"><ChevronUp /></button>
      </div>
    </footer>
  );
}

function App() {
  const [page, setPage] = useState('inicio');
  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === 'inicio' && <HomePage setPage={setPage} />}
      {page === 'privacidad' && <LegalPage type="privacidad" />}
      {page === 'terminos' && <LegalPage type="terminos" />}
      {page === 'cookies' && <LegalPage type="cookies" />}
      <Footer setPage={setPage} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaCode,
  FaDatabase,
  FaMicrochip,
  FaBolt,
  FaGlobe,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaLayerGroup,
  FaChevronRight,
} from "react-icons/fa"
import "./styles/App.css"

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <h1>
              <span className="highlight">Q</span>odara
            </h1>
          </div>
          <nav className="nav-links">
            <a href="#" className="nav-link">
              Início
            </a>
            <a href="#services" className="nav-link">
              Serviços
            </a>
            <a href="#about" className="nav-link">
              Sobre
            </a>
            <a href="#contact" className="nav-link">
              Contato
            </a>
          </nav>
          <button className="btn btn-primary">Solicitar Orçamento</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="badge">Desenvolva conosco</div>
              <h2 className="hero-title">Soluções de Software Personalizadas para Empresas</h2>
              <p className="hero-description">
                Criamos softwares sob medida, ambientes otimizados para o cliente, entregando continuidade de negócios para sua equipe.
              </p>
              <button className="btn btn-primary">Solicitar Orçamento</button>
            </div>
            <div className="hero-image">
              <div className="image-wrapper">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <img src="/pc2.png" className="image-header" alt="Ilustração de Software Personalizado" />
                <div className="circle circle-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Serviços</h2>
            <p className="section-description">
              Criamos soluções de software personalizadas que atendem às necessidades únicas de empresas e organizações, ajudando-as a alcançar seus objetivos com eficiência.
            </p>
          </div>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3 className="service-title">Desenvolvimento Personalizado</h3>
              <p className="service-description">
                Soluções de software sob medida, projetadas especificamente para as necessidades e fluxos de trabalho do seu negócio.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">
                <FaDatabase />
              </div>
              <h3 className="service-title">Sistemas Personalizados</h3>
              <p className="service-description">
                Sistemas completos desenvolvidos do zero para atender aos seus processos de negócios específicos.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon">
                <FaMicrochip />
              </div>
              <h3 className="service-title">Integrações Industriais</h3>
              <p className="service-description">
                Integração perfeita de software com seus sistemas e equipamentos industriais existentes.
              </p>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">
                <FaBolt />
              </div>
              <h3 className="service-title">Soluções Ágeis</h3>
              <p className="service-description">
                Soluções rápidas e flexíveis para responder rapidamente às necessidades em evolução do seu negócio.
              </p>
            </div>

            {/* Service 5 */}
            <div className="service-card">
              <div className="service-icon">
                <FaGlobe />
              </div>
              <h3 className="service-title">Plataformas Web & Mobile</h3>
              <p className="service-description">
                Aplicações web e mobile responsivas e fáceis de usar para o seu negócio.
              </p>
            </div>

            {/* Service 6 */}
            <div className="service-card">
              <div className="service-icon">
                <FaRocket />
              </div>
              <h3 className="service-title">Plataformas de Alta Performance</h3>
              <p className="service-description">
                Plataformas otimizadas e de alta velocidade, projetadas para máxima performance e confiabilidade.
              </p>
            </div>
          </div>

          <div className="section-footer">
            <button className="btn btn-primary">
              Saiba Mais <FaChevronRight className="icon-right" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Por que a Qodara?</h2>
            <p className="section-description">
              Não somos apenas mais uma empresa de software. Somos parceiros que entendem seu negócio e criam soluções que fazem a diferença.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3 className="feature-title">Excelência Técnica</h3>
              <p className="feature-description">
                Nossa equipe traz anos de experiência e expertise para cada projeto, garantindo soluções de alta qualidade.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3 className="feature-title">Foco na Experiência do Cliente</h3>
              <p className="feature-description">
                Priorizamos sua experiência, garantindo comunicação clara e satisfação durante todo o processo.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaLayerGroup />
              </div>
              <h3 className="feature-title">Suporte Personalizado</h3>
              <p className="feature-description">
                Suporte dedicado e adaptado às suas necessidades, garantindo que seu software continue performando de forma ideal.
              </p>
            </div>
          </div>

          <div className="section-footer">
            <button className="btn btn-primary">
              Saiba Mais <FaChevronRight className="icon-right" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>
                <span className="highlight">Q</span>odara
              </h2>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Qodara. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

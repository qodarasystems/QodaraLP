import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaWhatsapp,
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

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <img src="/Qodara_Logo.png" alt="Logo Qodara" className="logo-image" width={'100px'} />
          </div>
          <nav className={`nav-links${menuOpen ? " open" : ""}`}>
            <a href="#" className="nav-link" onClick={handleNavLinkClick}>
              Início
            </a>
            <a href="#services" className="nav-link" onClick={handleNavLinkClick}>
              Serviços
            </a>
            <a href="#about" className="nav-link" onClick={handleNavLinkClick}>
              Sobre
            </a>
            <a href="#contact" className="nav-link" onClick={handleNavLinkClick}>
              Contato
            </a>
            {/* Botão aparece dentro do menu hamburguer em telas pequenas */}
            <button
              className="btn btn-primary btn-menu"
              onClick={() => {
                setMenuOpen(false);
                window.open(
                  "https://api.whatsapp.com/send/?phone=5511943865242&text=Olá+tenho+interesse+em+solicitar+um+orçamento+com+a+Qodara.",
                  "_blank"
                );
              }}
            >
              Solicitar Orçamento
            </button>
          </nav>
          {/* Botão fora do menu hamburguer (desktop) */}
          <button
            className="btn btn-primary btn-desktop"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=5511943865242&text=Olá+tenho+interesse+em+solicitar+um+orçamento+com+a+Qodara.",
                "_blank"
              )
            }
          >
            Solicitar Orçamento
          </button>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
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
              <button
                className="btn btn-primary"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=5511943865242&text=Olá+tenho+interesse+em+solicitar+um+orçamento+com+a+Qodara.",
                    "_blank"
                  )
                }>
                Solicitar Orçamento
              </button>
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
            <button
              className="btn btn-primary"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=5511943865242&text=Olá+tenho+interesse+em+solicitar+um+orçamento+com+a+Qodara.",
                  "_blank"
                )
              }>
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
              Não somos apenas mais uma empresa de software. Somos parceiros que entendem o seu negócio e criam soluções que realmente fazem a diferença. Na Qodara, desenvolvemos softwares personalizados, pensados sob medida para atender às necessidades específicas, garantindo eficiência e resultados que impulsionam o seu crescimento.
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

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contato</h2>
            <p className="section-description">
              Entre em contato conosco para tirar dúvidas, solicitar um orçamento ou conversar sobre seu projeto. Retornaremos rapidamente!
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <p><strong>Email:</strong> qodarasys@gmail.com</p>
              <p><strong>WhatsApp:</strong> <a href="https://api.whatsapp.com/send/?phone=5511943865242&text=Olá+tenho+interesse+em+saber+mais+sobre+os+serviços+da+Qodara." target="_blank" rel="noopener noreferrer">+55 11 94386-5242</a></p>
              <div className="social-links-contact">
                <a href="https://api.whatsapp.com/send/?phone=5511943865242&text=Olá+tenho+interesse+em+saber+mais+sobre+os+serviços+da+Qodara." className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com/qodarasystems/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://github.com/qodarasystems" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
            {/* TODO: Futuramente implementar o formulário de contato */}

            {/* <form className="contact-form" action="mailto:contato@qodara.com.br" method="POST" encType="text/plain">
              <input type="text" name="name" placeholder="Seu nome" required />
              <input type="email" name="email" placeholder="Seu e-mail" required />
              <textarea name="message" placeholder="Sua mensagem" rows={5} required />
              <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>
                <img src="/Qodara_Logo.png" alt="Logo Qodara" className="logo-image" width={'100px'} />
              </h2>
            </div>
            <div className="social-links">
              <a href="https://api.whatsapp.com/send/?phone=5511943865242&text=Olá+tenho+interesse+em+saber+mais+sobre+os+serviços+da+Qodara.&type=phone_number&app_absent=0&fbclid=PAZXh0bgNhZW0CMTEAAacmFoZ5y8iWNMSur6rb36IJMDjb4Jb3A6CGgONRbNpXyMom-ZJIdyj1H7Qvrg_aem_hP9NdbLivPevfTus1c7jKA" className="social-link">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/qodarasystems/" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://github.com/qodarasystems" className="social-link">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>© 2025 Qodara. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import { Play, Star, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    Wistia: any;
    _wq: any[];
  }
}

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Initialize Wistia queue if it doesn't exist
    if (!window._wq) {
      window._wq = [];
    }

    // Configure Wistia player when it loads
    window._wq.push({
      id: "m8e333g9y9",
      onReady: function(video: any) {
        setIsVideoLoaded(true);
        console.log("Wistia video loaded successfully");
      }
    });
  }, []);

  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-montserrat">
      {/* Header */}
      <header className="bg-dark-bg/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-cta-orange" />
              <span className="text-xl font-bold">FotosPro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
                Como Funciona
              </a>
              <a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">
                Benefícios
              </a>
              <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
                Depoimentos
              </a>
            </nav>
            <button 
              onClick={scrollToVideo}
              className="bg-cta-orange hover:bg-cta-orange-hover text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Fotos Profissionais</span>
              <br />
              <span className="text-cta-orange">em Minutos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforme suas selfies em fotos profissionais de alta qualidade usando inteligência artificial avançada
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-cta-orange" />
                <span className="text-lg font-semibold">+50.000 usuários</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="text-lg font-semibold">4.9/5 estrelas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-lg font-semibold">Resultados garantidos</span>
              </div>
            </div>

            <button 
              onClick={scrollToVideo}
              className="bg-cta-orange hover:bg-cta-orange-hover text-white px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Play className="h-6 w-6" />
              <span>Ver Como Funciona</span>
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Veja a Transformação em Ação
            </h2>
            <p className="text-xl text-gray-300">
              Descubra como nossa IA transforma fotos comuns em retratos profissionais
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
            <div className="aspect-video">
              <wistia-player 
                media-id="m8e333g9y9"
                className="w-full h-full"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cta-orange mx-auto mb-4"></div>
                  <p className="text-gray-300">Carregando vídeo...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Escolher Nossa Solução?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Economize tempo e dinheiro com resultados profissionais garantidos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl text-center hover:bg-gray-800/70 transition-colors">
              <div className="bg-cta-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-cta-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4">Resultados Rápidos</h3>
              <p className="text-gray-300">
                Receba suas fotos profissionais em apenas alguns minutos, não dias
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl text-center hover:bg-gray-800/70 transition-colors">
              <div className="bg-cta-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-cta-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4">Qualidade Profissional</h3>
              <p className="text-gray-300">
                IA treinada com milhares de fotos profissionais para resultados perfeitos
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl text-center hover:bg-gray-800/70 transition-colors">
              <div className="bg-cta-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-cta-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4">Aprovado por Milhares</h3>
              <p className="text-gray-300">
                Mais de 50.000 profissionais já transformaram suas fotos conosco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-300">
              Processo simples em 3 passos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cta-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Envie suas Fotos</h3>
              <p className="text-gray-300">
                Faça upload de 10-20 selfies suas em diferentes ângulos e expressões
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cta-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">IA Processa</h3>
              <p className="text-gray-300">
                Nossa inteligência artificial analisa e cria versões profissionais
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cta-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Receba os Resultados</h3>
              <p className="text-gray-300">
                Baixe suas fotos profissionais em alta resolução em minutos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar suas Fotos?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de profissionais que já elevaram sua presença online
          </p>
          <button 
            onClick={scrollToVideo}
            className="bg-cta-orange hover:bg-cta-orange-hover text-white px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Começar Agora</span>
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Award className="h-8 w-8 text-cta-orange" />
              <span className="text-xl font-bold">FotosPro</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 FotosPro. Todos os direitos reservados.</p>
              <p className="mt-2">Transformando fotos com inteligência artificial</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
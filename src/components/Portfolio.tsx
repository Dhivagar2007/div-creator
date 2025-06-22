import React, { useEffect, useRef } from 'react';

// Inform TypeScript about the global Swiper object from CDN
declare var Swiper: any;

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  posterUrl?: string;
}
const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Decoding Human Physiology Through Data',
    description: 'A responsive web platform that visualizes complex human physiological data in real-time using interactive dashboards and modern frontend frameworks.',
    videoUrl: '/videos/static.mp4',
  },
  {
    id: '2',
    title: 'AI Nexus',
    description: 'An intelligent e-commerce interface that adapts to user behavior with AI-driven recommendations, dynamic product displays, and seamless mobile-first design.',
    videoUrl: '/videos/ai.mp4',
  },
  {
    id: '3',
    title: 'Alex Carter CyberShield',
    description: 'An advanced cybersecurity dashboard for real-time threat analysis, penetration test reporting, and live vulnerability detection with an intuitive UI.',
    videoUrl: '/videos/dyna2-vid.mp4',
  },
  {
    id: '4',
    title: 'DevPort',
    description: 'A progressive portfolio builder for developers and freelancers, featuring drag-and-drop customization, animated project showcases, and integrated resume tools.',
    videoUrl: '/videos/dynamic-vid.mp4',
  },
  {
    id: '5',
    title: 'AI Solutions Hub',
    description: 'A modular platform that automates complex workflows using machine learning models, supporting image recognition, data classification, and predictive analytics.',
    videoUrl: '/videos/ai-vido.mp4',
  },
];


const Portfolio: React.FC = () => {
  const swiperInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof Swiper !== 'undefined') {
      swiperInstanceRef.current = new Swiper('.portfolio-swiper-container', {
        loop: true, 
        centeredSlides: true, 
        slidesPerView: 1.1, 
        spaceBetween: 15, 
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          576: { 
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          768: { 
            slidesPerView: 1.8,
            spaceBetween: 25,
          },
          992: { 
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1200: { 
            slidesPerView: 2.5, 
            spaceBetween: 40, // Increased space for larger screens
          }
        },
        watchOverflow: true, 
      });
    } else {
      console.error('Swiper is not loaded. Ensure the Swiper JS and CSS files are included in your HTML.');
    }

    return () => {
      if (swiperInstanceRef.current && typeof swiperInstanceRef.current.destroy === 'function') {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our <span className="text-gradient">Portfolio</span></h2>
          <p>Interactive Video Portfolio — A horizontal, swipe-enabled reel of our best work. Scroll through immersive previews with smooth animations.</p>
        </div>
        
        <div className="swiper-container portfolio-swiper-container">
          <div className="swiper-wrapper">
            {portfolioData.map((item) => (
              <div className="swiper-slide" key={item.id}>
                <div className="portfolio-item-card">
                  <div className="portfolio-video-wrapper">
                    <video 
                      src={item.videoUrl} 
                      controls 
                      poster={item.posterUrl}
                      width="100%"
                      aria-label={`${item.title} video preview`}
                      preload="metadata" 
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="portfolio-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="swiper-pagination"></div>
          
          <div className="swiper-button-prev" role="button" aria-label="Previous slide"></div>
          <div className="swiper-button-next" role="button" aria-label="Next slide"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
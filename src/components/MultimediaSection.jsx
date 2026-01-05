import React from 'react';

const MultimediaSection = () => {
  return (
    <section className="multimedia-section">
      <h2 className="section-title">Experience Ciutadella de Menorca</h2>
      
      {/* Video Principal: Ocupa tota l'amplada */}
      <div className="video-container">
        <h3>The Spirit of Saint John (Festes de Sant Joan)</h3>
        <video controls className="promo-video">
          <source src="/assets/ciutadella-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="secondary-media-grid">
        {/* Imatge Editada: Bloc Gran */}
        <div className="image-block">
          <h3>Historic Old Town</h3>
          <div className="image-wrapper">
            <img src="/assets/edited-ciutadella.jpg" alt="Edited view of Ciutadella" className="edited-photo" />
          </div>
          <p className="media-caption">Enhanced view of "Es Port" with professional color grading.</p>
        </div>

        {/* Àudio: Bloc més petit i compacte */}
        <div className="audio-block">
          <h3>Sounds</h3>
          <div className="audio-card">
            <p>Listen to the Mediterranean waves.</p>
            <audio controls className="custom-audio">
              <source src="/assets/port-ambience.m4a" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimediaSection;
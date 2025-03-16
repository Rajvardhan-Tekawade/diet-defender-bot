
import React, { useEffect } from 'react';

const JotformChatbot = () => {
  useEffect(() => {
    // Load the Jotform embed handler script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.jotformEmbedHandler) {
        // @ts-ignore
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-01959d55e1a775d78042d4158c54970069d6']", "https://www.jotform.com");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="chatbot-container h-[688px] w-full max-w-[400px] mx-auto">
      <iframe 
        id="JotFormIFrame-01959d55e1a775d78042d4158c54970069d6" 
        title="Allie: Allergen Detection Specialist" 
        onLoad={() => window.parent.scrollTo(0,0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://agent.jotform.com/01959d55e1a775d78042d4158c54970069d6?embedMode=iframe&background=1&shadow=1"
        style={{ 
          minWidth: '100%',
          maxWidth: '100%',
          height: '688px',
          width: '100%',
          border: 'none'
        }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default JotformChatbot;

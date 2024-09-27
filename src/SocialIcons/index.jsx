import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './SocialIcons.css';

const SocialIcons = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="social-icons">
      <FontAwesomeIcon 
        icon={faWhatsapp} 
        className="social-icon whatsapp"
        onClick={() => openLink('https://wa.me/+201205152055')}
      />

      <FontAwesomeIcon 
        icon={faInstagram} 
        className="social-icon instagram"
        onClick={() => openLink('https://www.instagram.com/reham_eldidi/')}
      />

      <FontAwesomeIcon 
        icon={faFacebook} 
        className="social-icon facebook"
        onClick={() => openLink('https://www.facebook.com/rehameldidii')}
      />
      <FontAwesomeIcon 
        icon={faYoutube} 
        className="social-icon youtube"
        onClick={() => openLink('https://www.youtube.com/@rehameldidi')}
      />
      <FontAwesomeIcon 
        icon={faPhone} 
        className="social-icon phone"
        onClick={() => openLink('tel:+201205152055')}
      />
    </div>
  );
};

export default SocialIcons;

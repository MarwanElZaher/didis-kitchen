import './App.css';
// import Logo from './assets/logo.svg';
import NewLogo from './assets/Al-matbakh-logo.png';
import apron from './assets/apron.svg';
import SocialIcons from './SocialIcons';
import MenuPdf from './assets/menu.pdf'
function App() {
  const openMenu = () => {
    window.open(MenuPdf, '_blank');
  };

  return (
    <section>
      <div className='main-container'>
        {/* <div className='apron-img'>
          <img src={apron} alt="apron img" />
        </div> */}
        <img src={NewLogo} alt='logo' />

        <div className='buttons-container'>
          <div className='links-container'>
            <h2>Reach Out Through:</h2>
            <SocialIcons />
          </div>

        </div>
        <div className='button-container'>
          <button className='show-menu' onClick={openMenu}>
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;

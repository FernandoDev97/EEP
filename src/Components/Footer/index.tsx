import { FooterContainer } from './styles';

function Footer() {

  function handleRedirect (url: string) {
    window.open(url)
  }

  function handleScrollTop () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <FooterContainer>
      <div className='container'>
        <button type='button' onClick={handleScrollTop}>
            Voltar ao topo
        </button>
      </div>
    </FooterContainer>
  );
};

export default Footer;

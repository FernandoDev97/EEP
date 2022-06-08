import NavLink from './NavLink';
import { Container } from './styles';
import image from '../../assets/Photo.webp'

function Header() {
  return (
    <Container>
      <img src={image} alt="Minha foto" />
      <ul>
        <NavLink title='Home' path='/'/>
        <NavLink title='Tópicos' path='/projetos' includes/>
      </ul>
    </Container>
  );
};

export default Header;

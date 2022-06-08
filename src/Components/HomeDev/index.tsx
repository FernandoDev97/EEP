import { Container, TextContainer} from './styles';
import image from '../../assets/primary.png'
import Card from '../templates/Cards';

function HomeDev() {
  return (
    <Container data-aos='fade-up'>
      <img src={image} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>EEP</h1>
          <h2>Educação Egonômica para Programadores</h2>
        </TextContainer>
        <Card/>
      </div>
    </Container>
  );
};

export default HomeDev;

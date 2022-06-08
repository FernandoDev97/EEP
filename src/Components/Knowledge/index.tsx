import SectionTitle from "../SectionTitle";
import KnowledgeItems from "../templates/KnowledgeItems";
import { Container } from "./styles";
import orientacoes1 from '../../assets/Orientações1.png';
import orientacoes2 from '../../assets/Orientações2.png';
import orientacoes3 from '../../assets/Orientações3.png';
import orientacoes4 from '../../assets/Orientações4.png';
import orientacoes5 from '../../assets/Orientações5.png';
import orientacoes6 from '../../assets/Orientações6.png';


function Knowledge() {
  return (
    <Container>
      <SectionTitle title='Instruções para alongamentos' description='Cartilha de sugestões para alogamentos diários.'/>
      <section>
        <KnowledgeItems image={orientacoes1} />
        <KnowledgeItems image={orientacoes2} />
        <KnowledgeItems image={orientacoes3} />
        <KnowledgeItems image={orientacoes4} />
        <KnowledgeItems image={orientacoes5} />
        <KnowledgeItems image={orientacoes6} />
        
      </section>
    </Container>
  );
};

export default Knowledge;

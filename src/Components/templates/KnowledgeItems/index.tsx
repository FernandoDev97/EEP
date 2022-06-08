import { ReactNode } from 'react';
import { KnowledgeContainer } from './styles';

interface KnowledgeItemsProps {
  image?: string
}

function KnowledgeItems({image}: KnowledgeItemsProps) {
  return (
    <KnowledgeContainer data-aos='fade-up'>
      <img src={image}/>
    </KnowledgeContainer>
  );
};

export default KnowledgeItems;

import { ProjectContainer } from './styles';
import { AiOutlineRightCircle } from 'react-icons/ai'
import Link from 'next/link'

interface ProjectItemsProps {
  title: string
  type: string
  slug: string
  img: string
}

function ProjectItems({title, type, slug, img}: ProjectItemsProps) {
  return (
    <ProjectContainer imgUrl={img} data-aos='fade-up'>
      <section>
        <div className='overlay'/>
        <div className='text'>
          <h1>{title}</h1>
          <h2>-{type}</h2>
        </div>
      </section>
      <button type='button'>
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle/> 
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
};

export default ProjectItems;

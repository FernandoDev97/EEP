import SectionTitle from '../SectionTitle';
import ProjectItems from '../templates/ProjectItems';
import { Container } from './styles';
import Link from 'next/link'

interface IProject {
  slug: string
  title: string
  type: string
  description: string
  link: string
  thumbnail: string
}

interface ProjectsProps {
  projects: IProject[]
}

function Projects({ projects }: ProjectsProps) {
  
  return (
    <Container>
      <SectionTitle title='Tópicos'/>
      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItems
          key={project.slug}
          img={project.thumbnail}
          title={project.title}
          type={project.type}
          slug={project.slug}
        />
        ))}
        
      </section>
      
      <button type='button'>
        <Link href="/projetos">
          <a>
            Ver todos os projetos
          </a>
        </Link>
      </button>
    </Container>
  );
};

export default Projects;

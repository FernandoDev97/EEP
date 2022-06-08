import { GetStaticProps } from "next";
import Header from "../../Components/Header";
import ProjectItem from "../../Components/ProjectItem";
import { getPrismicClient } from "../../services/prismic";
import { ProjetosContainer } from "../../styles/ProjetosContainer";
import Prismic from '@prismicio/client'
import Head from 'next/head'

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

export default function Projetos({ projects }: ProjectsProps) {
  return (

    <ProjetosContainer>

      <Head>
        <title>Tópicos | EEP</title>
        <meta
          name="description"
          content="Aqui eu apresento todos meus tópicos!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui eu apresento todos meus tópicos!"
        />
      </Head>

      <Header />
      <main className='container'>
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projet')],
    { orderings: '[document.first_publication_date desc]' }
  )

  const projects = response.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }))

  return {
    props: { projects }, revalidate: 1000
  }
}

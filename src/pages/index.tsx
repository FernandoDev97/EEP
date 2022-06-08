import { GetStaticProps } from "next";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeDev from "../Components/HomeDev";
import Knowledge from "../Components/Knowledge";
import Projects from "../Components/Projects";
import Head from 'next/head'
import { getPrismicClient } from "../services/prismic";
import { HomeContainer } from "../styles/HomeStyles";
import Prismic from '@prismicio/client'
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

interface IProject {
  slug: string
  title: string
  type: string
  description: string
  link: string
  thumbnail: string
}

interface HomeProps {
  projects: IProject[]
}

export default function Home({ projects }: HomeProps) {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <HomeContainer>

      <Head>
        <title>Home | EEP</title>
        <meta
          name="description"
          content="Olá, meu nome é Júlia Assunção, sou graduanda em Fisioterapia pela Unifanor."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Olá, meu nome é Júlia Assunção, sou graduanda em Fisioterapia pela Unifanor."
        />
      </Head>

      <Header />
      <main className='container'>
        <HomeDev />
        <Projects projects={projects} />
        <Knowledge />
      </main>

      <Footer />
    </HomeContainer>

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

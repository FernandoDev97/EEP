import { GetStaticPaths, GetStaticProps } from 'next';
import Header from '../../../Components/Header';
import BannerProject from '../../../Components/templates/BannerProject';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectContainer } from '../../../styles/ProjectStyle'
import Prismic from '@prismicio/client'
import { useRouter } from 'next/router';
import Loading from '../../../Components/Loading';
import Head from 'next/head'

interface IProject {
    slug: string
    title: string
    type: string
    description: string
    link: string
    thumbnail: string
}

interface ProjectProps {
    project: IProject
}

function Project({ project }: ProjectProps) {

    const router = useRouter()

    if (router.isFallback) {
        return <Loading />
    }

    return (
        <ProjectContainer>

            <Head>
                <title>{project.title} | Meu Portfólio</title>
                <meta
                    name="description"
                    content={project.description}
                />
                <meta property="og:image" content={project.thumbnail} />
                <meta property="og:image:secure_url" content={project.thumbnail} />
                <meta name="twitter:image" content={project.thumbnail} />
                <meta name="twitter:image:src" content={project.thumbnail} />
                <meta
                    property="og:description"
                    content={project.description}
                />
            </Head>

            <Header />
            <BannerProject
                title={project.title}
                type={project.type}
                imgUrl={project.thumbnail}
            />

            <main>
                <p>{project.description}</p>
                <button>
                    <a href={project.link} target='blanck'>Visualizar evidência</a>
                </button>
            </main>
        </ProjectContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient()
    const projects = await prismic.query([
        Prismic.predicates.at('document.type', 'projet')
    ])

    const paths = projects.results.map(project => ({
        params: {
            slug: project.uid
        }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const prismic = getPrismicClient()
    const { slug } = context.params

    const response = await prismic.getByUID('projet', String(slug), {})

    const project = {
        slug: response.uid,
        title: response.data.title,
        type: response.data.type,
        description: response.data.description,
        link: response.data.link.url,
        thumbnail: response.data.thumbnail.url
    }

    return {
        props: { project },
        revalidate: 86400
    }
}

export default Project;
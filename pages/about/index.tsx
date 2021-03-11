import Router from 'next/router'
import {MainLayout} from '../../components/MainLayout';
import {MyPost} from '../../interfaces/post';

interface AboutPageProps {
    titlePage: MyPost
}

export default function About({ titlePage }: AboutPageProps) {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'About Page'}>
            <h1>{titlePage.title}</h1>

            <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go to posts</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}about`)
    const data = await response.json()

    return {
        title: data.title
    }
}
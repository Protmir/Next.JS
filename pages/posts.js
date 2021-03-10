import Head from 'next/head';
import {MainLayout} from '../components/MainLayout';

export default function Posts() {
    return (
        <MainLayout title={'Posts Page'}>
            <Head>
                <title>Posts page | Next Learning</title>
            </Head>
            <h1>Posts page</h1>
        </MainLayout>
    )
}
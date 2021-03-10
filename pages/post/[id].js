import {useRouter} from 'next/router';
import {MainLayout} from '../../components/MainLayout';


export default function Post({ post }) {
    const router = useRouter()
    // console.log(router.query.id)
    // async function getInitialProps() {
    //     const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
    //     const post = await response.json()
    //     console.log(post)
    //
    //     return {
    //         post
    //     }
    // }


    return (
    <MainLayout>
        {post.map(post => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))}
    </MainLayout>
    )
}

Post.getInitialProps = async (pathname) => {
    console.log(pathname)
    const response = await fetch(`http://localhost:4200/posts`)
    const post = await response.json()

    return {
        post
    }
}
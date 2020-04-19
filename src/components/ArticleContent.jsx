import React from 'react'
import Footer from './Footer'
import { useParams } from 'react-router-dom'

const ArticleContent = () => {

    let {id} = useParams();
    const [post, setPost] = React.useState('');

    React.useEffect( () => {

        (() =>
        {
            // const MDXPost = await import(`../posts/post${id}.mdx`)
            import(`../posts/post${id}.mdx`)
            .then(res => setPost(res.default))

        })()

    }, [id])

    return (
        <React.Fragment>
            <article className="articleContent">
                <div className="articleContentDiv">
                    {post}
                </div>
            </article>
            <Footer />
        </React.Fragment>
    )
}

export default ArticleContent;
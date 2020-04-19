import React from 'react'
import Footer from './Footer'
import MDXPost1 from '../posts/post1.mdx'
import MDXPost2 from '../posts/post2.mdx'
import MDXPost3 from '../posts/post3.mdx'
import { useParams } from 'react-router-dom'

const ArticleContent = () => {

    let {id} = useParams();

    const [post, setPost] = React.useState('');

    // fetch('https://github.com/Lisba/Sistema-de-control-de-cachorros/blob/master/README.md')
    // .then(response => response.json())
    // .then(data => console.log(data))

    React.useEffect( () => {
        switch(id)
        {
            case '1':
                setPost(MDXPost1)
                break;
            case '2':
                setPost(MDXPost2)
                break;
            default:
                setPost(MDXPost3)
                break;
        }
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
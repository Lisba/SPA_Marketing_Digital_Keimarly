import React, { Suspense } from 'react'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import articles from '../EntryPointArticles'

const Post = React.lazy( () => import(`./Post`));

const ArticleContent = () => {
    
    let {id} = useParams();
    let parsedId = parseInt(id); // For console warnings
    const [post, setPost] = React.useState('');
    const [img, setImg] = React.useState('');
    let articleData = {};

    articles.map(item => 
    {
        if(item.id === parsedId)
        {
            articleData = item;
        }
        return true;
    })

    import(`../${articleData.cover_image}`)
    .then(res => setImg(res.default))

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
                <div className="articleContentHeader">
                    <div className="articleContentTitleDiv"><h1 className="articleContentTitle">{articleData.title}</h1></div>
                    <div className="articleContentAuthor">{articleData.author.name}</div>
                    <div className="articleContentDate">{articleData.date}</div>
                    <div className="articleContentImgDiv"><img className="articleContentImg" src={img} alt="img"/></div>
                </div>
                <div className="articleContentDiv">
                    <Suspense fallback={<div className="suspense-div"><h1 className="suspense-h1">Loading Post...</h1></div>}>
                        <Post postContent={post}/>
                    </Suspense>
                </div>
            </article>
            <Footer />
        </React.Fragment>
    )
}

export default ArticleContent;
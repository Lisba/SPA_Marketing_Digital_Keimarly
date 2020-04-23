import React from 'react'
import articles from '../EntryPointArticles'

const ArticleCard = (props) => {

    let actualData = {};
    const [img, setImg] = React.useState('')

    articles.map(item => 
    {
        if(item.cover_image === props.imgRoute)
        {
            actualData = item;
            return true
        }
        return false
    })

    import(`../${actualData.cover_image}`)
    .then(res => setImg(res.default))
    .catch(err => console.log(err.message))

    return(
        <div className={props.className}>
            <img src={img} alt={props.alt}/>
            <div className="articleCardText">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ArticleCard;
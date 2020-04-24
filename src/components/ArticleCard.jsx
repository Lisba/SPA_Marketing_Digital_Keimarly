import React from 'react';
import articles from '../EntryPointArticles';

const ArticleCard = (props) => {

    const [img, setImg] = React.useState('');
    
    React.useEffect(() => {
        let actualData = {};

        articles.map(item => 
        {
            if(item.cover_image === props.imgRoute)
            {
                actualData = item;
            }
            return true;
        });
    
        import(`../${actualData.cover_image}`)
        .then(response => setImg(response.default))
        .catch(error => console.log(error.message));
    }, [props.imgRoute]);

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
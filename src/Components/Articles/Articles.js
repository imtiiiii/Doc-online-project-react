//this component will keep all the available articles
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Article from '../Article/Article';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [showAllArticles, setShowAllArticles] = useState(false);
    useEffect(() => {
        fetch("./doconlinedb.json")
            .then(res => res.json())
            .then(data => setArticles(data[2]));
    },
        []
    )
    const handleShowAll = () => {
        setShowAllArticles(true);
    }
    return (
        <>
            <div className="articles-heading text-center">
                <h1>Our Recent articles</h1>
                <h5>Article is a part or segment of something joined to other parts, <br></br>
                    or, in combination,forming a structured set.
                </h5>
            </div>
            <div className="articles-container">
                <Row>
                    {
                        showAllArticles ? articles.map(article => <Article article={article} key={article.id}>
                            {/* <button onClick={handleShowAll}></button> */}
                        </Article>
                        ) :
                            articles.slice(0, 3).map(article => <Article article={article} key={article.id}>

                            </Article>)
                    }
                </Row>
                {
                    showAllArticles ||
                    <button className="text-center" onClick={handleShowAll}> More Articles</button>
                }

            </div>
        </>
    );
};

export default Articles;
//this component will show all the articles one by one
import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './Article.css'
const Article = (props) => {
    const { title, description, Author, date, views, articleImg, img } = (props.article);
    return (
        <>

            <Col lg={4} xs={12} className="">

                <CardGroup className="">
                    <Card className="article-card shadow-sm  my-5">
                        {/* https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-date-medical-kiranshastry-lineal-kiranshastry.png */}
                        <Card.Img variant="top" src={articleImg} className="article-img " />
                        {/* their parent div */}
                        <div className="d-flex justify-content-between align-items-center mt-1">
                            {/* this div for date  */}
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-date-medical-kiranshastry-lineal-kiranshastry.png" alt="data" className="mx-2 w-25"></img>
                                <h4 className="me-1">{date}</h4>
                            </div>
                            {/* this div for views */}
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="https://img.icons8.com/ios-glyphs/64/000000/visible.png" alt="views" className="me-2 w-25" />
                                <h4 className="me-2">{views}</h4>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title className="article-card-title mt-2"><h3>{title}</h3></Card.Title>
                            <Card.Text className="article-card-description">
                                <h6>{description}</h6>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="card-footer d-flex justify-content-center align-items-center">
                            {/* this div is for user icon */}
                            <div className="">
                                <img src={img} alt="user"></img>
                            </div>
                            {/* this div is for user name */}
                            <div className="d-flex ms-3 mt-1  ">
                                <h5> {Author}</h5>
                            </div>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </Col>

        </>
    );
};

export default Article;
import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from 'react-helmet'
import Slider from "react-slick";

const ATB = (props) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
    }

    return (
        <>
            <Layout>
                <Helmet title="Author | Henreitta A Abbey" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt=" Henrietta A Abbey"/>
                            </div>

                            <div className="author-philosophy">
                                Persever to win. Determination, diligence, and hard work result in success. Although the dream may delay tarry for it. Backward never, forward ever. One day at a time. When you loose don't give up, get up again and continue where you left off. Set short and long term goals in life and progress in life. Every down experience is a lesson not to be repeated. Heed to warning signs. Every individual needs a mentor to look up to for effective balanced growth in life. - Dr. Henreitta Abbey
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                                <p>
                                    Dr. Henrietta Abbey graduated from Walden University in 2021. She received a doctorate degree in Philosophy. She has two masters' degrees and bachelor degree.
                                    Also, has an associate degree in Arts Applied Science in Early Childhood Education. She is currently an active veteran employee for the New York City Police Department
                                    for over 20 years. She was inspired to write poems and books at the age of 16. Her mentor was "Cadee", an African writer. in her teens she wrote her daily activities in 
                                    diaries and journals. She read adventure, mystery, discovery, comic, romance, and literally books. Her favorite comic book was "The adventures of Tintin". She has only two 
                                    children, twins, and three siblings. She currently lives in the United States of America.
                                </p>   
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name"> Dr. Henrietta A Abbey</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;
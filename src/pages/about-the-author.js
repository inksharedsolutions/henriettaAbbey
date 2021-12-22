import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="Author |  D.L. Smith" />
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

                            {/* <div className="heading-quote"> */}
                            {/* <span className="ata-span-fx"> */}
                                <h4> 
                                                              
                                </h4>
                                {/* </span> */}
                    
                                

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Education. I had the opportunity to observe and assist children learn and play at the Lehman College Early Childhood Center.  I continue to work full time with the New York Police Department as a Senior Police Administrative Aide.  I have been working there for over twenty years doing clericals, administrative and supervisory duties. The length of my service with the Police Department shows how dedicated I am to the job.  I am also an active learner.  I participate in class, read all my notes, textbooks, and I am very punctual in school and at work.  I am a hard-working student and worker because from childhood I have been exercising determination to do the very best in life.  I started serious learning, reading, and studying at age twelve.  I read novels, fiction, and comics.  I love to look for new words and meanings in the dictionary and on the internet.  With a keen interest in reading, I received a scholarship during secondary and post-secondary education.
                            </p>        
            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name"> Henrietta A Abbey</span>
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
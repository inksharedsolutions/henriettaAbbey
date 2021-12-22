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
                                <img src={AuthorImg} alt=" D.L. Smith"/>
                            </div>

                            {/* <div className="heading-quote"> */}
                            {/* <span className="ata-span-fx"> */}
                                <h4> 
                                                              
                                </h4>
                                {/* </span> */}
                    
                            

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            As my book "Beautiful Sunset" sets forward, I was a farm girl, who worked very hard all the time.  I vowed to become a private secretary and worked tirelessly to that end. 
                            </p>
                            <p> 
                            I married and had children and then had to get a divorce because of my husband's infidelity.
                            </p> 
                            <p>
                            I finally had to move to my new home where I met my second husband, who was 22 years older than I was.  When he was afraid the years would be too much for me, I told him, "But oh, what a beautiful sunset it could be!"  Difference in age can be a plus for two people- no matter who is older!
                             </p>  
                            <p>
                            The highlight of my life has been my children and my being able to help people as a nutrition counselor.  I am happier now than I've ever been in my 90 years!
                            </p>

                                             
            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name"> D.L. Smith</span>
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
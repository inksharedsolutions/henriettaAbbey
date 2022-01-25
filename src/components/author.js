import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const Author = () => {

    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">
                        <p data-aos="fade-up" data-aos-duration="2000">
                        Dr. Henrietta Abbey graduated from Walden University in 2021. She received a doctorate degree in Philosophy. She has two masters' degrees and bachelor degree. Also, has an associate degree in Arts Applied Science in Early Childhood Education. She is currently an active veteran employee for the New York City Police Department for over 20 years.
                        </p>
                        <h1 className="author-name-tag" >
                            <span></span>
                            <span>Dr. Henrietta A Abbey</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>

                        <button className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Author;
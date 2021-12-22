import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book.png'
// import Accordions from '../containers/accordions'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >


                        <div className="content-wraps">

                            <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, and learn in various formats
                            </span>

                            <h1 className="heading--featured" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000">
                            It's a memoir. It's an interesting story of the author's life. She narrates her life history, from childhood through kindergarten to the university. She migrated to the United States and experienced motherhood and marriage which ended so abruptly that she ends up questioning where her life was going. At the end of the story, she realizes that she needs to pick up her broken life and start all afresh with one thing in mind, she has learned her lesson.
                            </p>

                            <button className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000">
                                <Link to="/books">
                                    Read More
                                </Link>
                            </button>

                        </div>
                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" alt="book cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook
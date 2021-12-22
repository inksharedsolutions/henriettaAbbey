import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book3 from '../../static/books/book.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'd-l-smith',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Book |  D.L. Smith" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About the`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Beautiful Sunset`,
                                // spanFirst: `Book 1: THE SHIPS`,
                                imgSrc: Book3,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        Beautiful Sunset is the memory of an 89-year old woman. It shows all the trials and joys of her life. Some bad, some good, but all made her who she is today.
                                        </p>
                                        
                                        
                                        
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/beautiful-sunset-d-l-smith/1140316550?ean=9781648955815',
                                    amazon: 'https://www.amazon.com/Beautiful-Sunset-D-L-Smith-ebook/dp/B09HXYF823/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1637446499&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Beautiful-Sunset-D-L-Smith/dp/1648955800/ref=sr_1_1?keywords=9781648955808&qid=1637446499&qsid=136-1487773-8969818&sr=8-1&sres=1648955800&srpt=ABIS_BOOK',
                                    barnes: 'https://www.barnesandnoble.com/w/beautiful-sunset-d-l-smith/1140316550?ean=9781648955808',
                                    booksamillion: 'https://www.booksamillion.com/p/Beautiful-Sunset/D-L-Smith/9781648955808?id=8374469245196',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;
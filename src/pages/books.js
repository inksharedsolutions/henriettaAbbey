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
        shortname: 'henrietta-abbey',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Book | Henrietta A Abbey" />
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
                                title: `Memoire Memes `,
                                // spanFirst: `Book 1: THE SHIPS`,
                                imgSrc: Book3,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        It's a memoir. It's an interesting story of the author's life. She narrates her life history, from childhood through kindergarten to the university. She migrated to the United States and experienced motherhood and marriage which ended so abruptly that she ends up questioning where her life was going. At the end of the story, she realizes that she needs to pick up her broken life and start all afresh with one thing in mind, she has learned her lesson.
                                        </p>
                                        
                                        
                                        
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                   amazon: 'https://www.amazon.com/Memoire-Memes-Dr-Henrietta-Abbey-ebook/dp/B09LCTMBCY/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1640208528&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Memoire-Memes-Dr-Henrietta-Abbey/dp/164895636X/ref=sr_1_1?crid=WF5LFWQI2IWO&keywords=9781648956362&qid=1640208357&sprefix=9781648956362%2Caps%2C277&sr=8-1',
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
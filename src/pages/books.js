import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import BookInfo2 from '../components/book-info/book-info2'
import { DiscussionEmbed } from "disqus-react"
import Book from '../../static/books/book.png'
import Book2 from '../../static/books/social.png'
import sample from '../../static/books/sample.png'
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
                    contextHeading={`Books`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Memoire Memes `,
                                // spanFirst: `Book 1: THE SHIPS`,
                                imgSrc: Book,
                                id: 'the_gifted_one',
                                content:
                                    `  
                                        <h5>Adventure, life lessons, traveling, marriage, birth, migration, education, life experience, literature, assimilation, fitting in, history, and autobiography</h5>

                                        <p>
                                        It's a memoir. It's an interesting story of the author's life. She narrates her life history, from childhood through kindergarten to the university. She migrated to the United States and experienced motherhood and marriage which ended so abruptly that she ends up questioning where her life was going. At the end of the story, she realizes that she needs to pick up her broken life and start all afresh with one thing in mind, she has learned her lesson.
                                        </p>
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/memoire-memes-dr-henrietta-a-abbey/1140505764?ean=9781648956379',
                                    amazon: 'https://www.amazon.com/Memoire-Memes-Dr-Henrietta-Abbey-ebook/dp/B09LCTMBCY/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1640208528&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Memoire-Memes-Dr-Henrietta-Abbey/dp/164895636X/ref=sr_1_1?crid=WF5LFWQI2IWO&keywords=9781648956362&qid=1640208357&sprefix=9781648956362%2Caps%2C277&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/memoire-memes-dr-henrietta-a-abbey/1140505764?ean=9781648956362',
                                    booksamillion: 'https://www.booksamillion.com/p/Memoire-Memes/Henrietta-A-Abbey/9781648956362?id=8374469245196&__cf_chl_jschl_tk__=lxkNLhI0wNaut4yC8VmlmpN_TUMgvFeRRVcMJNPDQgY-1640785134-0-gaNycGzNCtE',
                                }
                            }}
                        />

                        <BookInfo
                            data={{
                                title: `Social Networking as a Motivator for Social Gathering`,
                                // spanFirst: `Book 1: THE SHIPS`,
                                imgSrc: Book2,
                                id: 'social',
                                content:
                                    `
                                    <h5>Social Networking, Activism, Protesting, and Law Enforcement Collaboration</h5>
                                        
                                        <p>
                                            In the United States, many activists use social media platforms to interact with protesters to organize demonstrations and protests rapidly. Some politically motivated social gatherings organized online are without the knowledge of government or law enforcement personnel. The gatherings can become violent and result in chaos. In 2016, five officers were shot dead, with several others wounded during a Black Lives Matter (BLM) protest in Dallas, Texas. The purpose of this research is to determine the extent to which a variety of social media platforms contribute to New York City protesters and activists' participation in demonstrations that potentially pose a threat to the community. The study adds to the field of Public Policy and Administration by providing significant findings and suggesting that different approaches and attention to activists and protesters in the social media space could reduce influences that trigger and justify disruptive behaviors during public demonstrations while more promptly alerting appropriate city officials and law enforcement officers of potential problems. The study axis is a qualitative methodology explicitly focused on a phenomenological understanding of responses provided by activists and protesters understood and interpreted primarily according to Social Support Theory, developed by Robert E. Park. The findings of this study will help New York leaders develop prevention policies and safety techniques incorporating and responding to online activity that may avoid a repetition of the violence that happened in Dallas, Texas. Additionally, findings, interpretation of the data, and implications discovered will facilitate opportunities for protesters and activists to collaborate more effectively with city officials and law enforcement officers. Research findings from participants and data analysis revealed that protesting is an effective cause for social change, reformation, justice, and humanitarian enhancement in society.
                                        </p>
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/social-networking-as-a-motivator-for-social-gathering-dr-henrietta-a-abbey/1141897939?ean=9781648959080',
                                    amazon: 'https://www.amazon.com/dp/B0B7X39BLW/ref=sr_1_1?crid=307M9VLKNRQXS&keywords=9781648959080&qid=1659044458&sprefix=9781648959080%2Caps%2C891&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Social-Networking-Motivator-Gathering-Collaboration/dp/1648959075/ref=sr_1_1?crid=1KJHIRPI7S8EQ&keywords=9781648959073&qid=1659639909&sprefix=the+first+arc+of+the+great+circle%2Caps%2C1096&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/social-networking-as-a-motivator-for-social-gathering-dr-henrietta-a-abbey/1141897939?ean=9781648959073',
                                    booksamillion: '',
                                }
                            }}
                        />

                        <BookInfo2
                            data={{
                                title: `A Glimpse at Wall Street`,
                                // spanFirst: `Book 1: THE SHIPS`,
                                imgSrc: sample,
                                id: 'the_gifted_one',
                                content:
                                    `
                                    <h5>Finance, stocks and bonds, investment, literature, history, discoveries, research, landmarks, making money</h5>
                                        <p>
                                        Coming Soon
                                        </p>
                                    `,
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
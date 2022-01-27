import React from 'react'
import BookLink from '../book-link/book-link'
import BookLink2 from '../book-link/book-link'

const BookInfo = (props)=>{
    return(
        <>
            <div className="columns book-container-ft">
                
                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>
                
                <div className="column" id={props.data.id}>
                    <section className="contentBook">

                        <h1>{props.data.title}</h1>

                        {/* <h5> {props.data.title} </h5> */}

                        <p className="sub-heading">
                            {props.data.spanFirst}
                        </p>
                        
                        <span>{props.data.spanTitle}</span> 

                        <div className="content-body" 
                             dangerouslySetInnerHTML={{__html: `${props.data.content}`}} />

                    </section>

                    <BookLink
                        data={{
                            ebooks:{
                                stratton: props.data.ebooks.stratton,
                                barnes: props.data.ebooks.barnes,
                                amazon : props.data.ebooks.amazon,
                            },
                            paperback:{
                                amazon: props.data.paperback.amazon,
                                barnes: props.data.paperback.barnes,
                                booksamillion: props.data.paperback.booksamillion,
                            },
                            
                            reviews:{},
                            isNonfront:true,
                        }}
                    />

                    {/* <BookLink2
                        data2={{ 

                         }}
                    /> */}

                </div>	
            </div>
        </>
    )
} 

export default BookInfo;
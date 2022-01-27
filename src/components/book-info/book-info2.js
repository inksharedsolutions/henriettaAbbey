import React from 'react'

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


                </div>	
            </div>
        </>
    )
} 

export default BookInfo;
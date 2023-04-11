import React from 'react'

//rce) 
const NewsItem = (props) =>{
        // how to get props in className based components 
        let { title, description, imageUrl, url ,author,  date} = props;

        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imageUrl?"https://img.etimg.com/thumb/msid-99105968,width-1070,height-580,imgsize-121144,overlay-ettech/photo.jpg":imageUrl } className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} on {date}</small></p>
                            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default NewsItem

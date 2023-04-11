// import React from 'react'
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// import { getDefaultNormalizer } from '@testing-library/react';


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, seTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=554e582df48c4cfe94daaf643c8192a7&page=${page}&pageSize=${props.pageSize}`;
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        console.log(parseData);
        setArticles(parseData.articles);
        seTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    // async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=554e582df48c4cfe94daaf643c8192a7&page=1&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //     articles: parseData.articles,
    //     totalResults: parseData.totalResults,
    //     loading: false
    // })
    // this.updateNews();
    // }

    // const handlePrevClick = async () => {
    //     console.log("Previous");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=554e582df48c4cfe94daaf643c8192a7&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // console.log(parseData);


    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parseData.articles,
    //     //     loading: false
    //     // })

    //     // this.setState({ page: this.state.page - 1 });
    //     setPage(page - 1)
    //     updateNews();
    // }
    // const handleNextClick = async () => {
    //     console.log("Next");
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=554e582df48c4cfe94daaf643c8192a7&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //     //     this.setState({ loading: true });
    //     //     let data = await fetch(url);
    //     //     let parseData = await data.json();
    //     //     // console.log(parseData);
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parseData.articles,
    //     //         loading: false
    //     //     })
    //     // this.setState({ page: this.state.page + 1 });
    //     setPage(page + 1)
    //     updateNews();

    // }

     const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        // this.setState({ page: this.state.page + 1 });
         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=554e582df48c4cfe94daaf643c8192a7&page=${page + 1}&pageSize=${props.pageSize}`;
         setPage(page + 1);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(articles.concat(parseData.articles));
        seTotalResults(parseData.totalResults);
        setLoading(false);
        // this.setState({
        //     articles: this.state.articles.concat(parseData.articles),
        //     totalResults: parseData.totalResults,
        //     loading: false,
        // })
    };

    return (

        <>
            <div className='container my-3'>
                <h1 className="text-center" style={{ margin: '35px 0px' ,paddingTop: '90px'}} > NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
            </div>
        </>

    );

}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News

// constructur runs first then render then componentDidMount 














// const handlePrevClick = async () => {
//     console.log("Previous");
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=554e582df48c4cfe94daaf643c8192a7&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parseData = await data.json();
//     // console.log(parseData);


//     // this.setState({
//     //     page: this.state.page - 1,
//     //     articles: parseData.articles,
//     //     loading: false
//     // })

//     // this.setState({ page: this.state.page - 1 });
//     setPage(page - 1)
//     updateNews();
// }
// const handleNextClick = async () => {
//     console.log("Next");
//     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
//     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=554e582df48c4cfe94daaf643c8192a7&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//     //     this.setState({ loading: true });
//     //     let data = await fetch(url);
//     //     let parseData = await data.json();
//     //     // console.log(parseData);
//     //     this.setState({
//     //         page: this.state.page + 1,
//     //         articles: parseData.articles,
//     //         loading: false
//     //     })
//     // this.setState({ page: this.state.page + 1 });
//     setPage(page + 1)
//     updateNews();

// }

 
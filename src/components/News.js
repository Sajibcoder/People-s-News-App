import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'




const News = (props) => {
  const [results, setResults] = useState([])
  // const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsdata.io/api/1/news?apikey=pub_173649909fb0cb8cd62dcba257af5ced8b1a1&language=en&country=${props.country}&category=${props.category}`;
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json()
    props.setProgress(75);
    setResults(parsedData.results)
    // setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

 
  useEffect(()=> {
    updateNews();
    // eslint-disable-next-line
  }, []);

 

  //  const fetchMoreData= async()=> {
  //   let url = `https://newsdata.io/api/1/news?apikey=pub_173649909fb0cb8cd62dcba257af5ced8b1a1&language=en&country=${props.country}&category=${props.category}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setResults(results.concat(parsedData.results));
  //   setTotalResults(parsedData.totalResults);
  // }


  return (
    <>
      <h1 className='text-info' style={{ margin: '30px', marginTop: '80px', display: 'flex', justifyContent: 'center', fontStyle: 'italic' }}>People's News App - Latest {capitalizeFirstLetter(props.category)} News</h1>
      {/* <InfiniteScroll */}
        {/* dataLength={results.length}
        next={fetchMoreData}
        hasMore={results.length !== totalResults} */}
      {/* > */}
        <div className="container">
          <div className='row'>
            {results.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 70) : ""} image_url={element.image_url} link={element.link} creator={element.creator} pubDate={element.pubDate} source_id={element.source_id} />
              </div>
            })}

          </div>
        </div>
      {/* </InfiniteScroll> */}
    </>
  )
}
News.defaultProps = {
  country: "in",
  caregory: "top",

}
News.propTypes = {
  country: PropTypes.string,
  caregory: PropTypes.string
}


export default News


import React from 'react'

const Newsitem = (props) => {

  let { title, description, link, image_url, creator, pubDate, source_id} = props;
  return (
    <div>
      <div style={{ margin: '25px 0px' }} >
        <div>
          <span className="badge rounded-pill bg-info" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', fontSize: '15px', color: 'black' }} >
            {source_id}
          </span>
        </div>
        <img src={image_url ? image_url : "https://media.istockphoto.com/photos/illustration-word-news-on-white-isolated-background-picture-id509053784?k=6&m=509053784&s=170667a&w=0&h=y67J11UwEnXtCSSVDhsEwpfQWSxA62hSBLPaNazcnmY="} className="card-img-top" height="200px" alt="..." />
        <div className="card-body" >
          <h5 className={`text-${props.mode === 'info' ? 'black' : 'info'}`}>{title}.... </h5>
          <p className={`text-${props.mode === 'info' ? 'black' : 'info'}`}> {description}.... </p>
          <p className="card-text"><small className={`text-${props.mode === 'info' ? 'black' : 'info'}`}>By {!creator? "Unknown" : creator} on {new Date(pubDate).toGMTString()}</small></p>
          <a rel="noreferrer" href={link} target="_blank" className="btn btn-sm btn-info">Read More</a>
        </div>
      </div>

    </div>

  )
}



export default Newsitem
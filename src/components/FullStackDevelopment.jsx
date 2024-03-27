import React from 'react'


function FullStackDevelopment({data}) {
  return <div className='container'>
<div className="row row-cols-1 row-cols-md-3 g-4">
  {
    data.map((e,i)=>{
      return e.name==="FullStackDevelopment"? (<div className="col" key={i} >
    <div className="card h-100">
      <img src={e.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{e.title}</h5>
        <p className="card-text">{e.text}<span className="read-more"><strong>Read more...</strong></span></p> </div>
      <div className="card-footer">
        <small className="text-body-secondary">{e.date}</small>      </div>
    </div>
    </div>
     ):""
  })
  }
  </div>
 </div>
  
}

export default FullStackDevelopment
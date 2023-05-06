import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'

const BlogDetails = ({pvalue}:any) => {
  const {id} = useParams();
  const detailsItem = pvalue.find((p:any)=>p.id.toString() ===id);
  return (
   
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
    <img src={detailsItem.photo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width={700} height={500} />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{detailsItem.title}</h1>
    <p className="lead">{detailsItem.desc}</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
    </div>
  </div>
</div>

  
  )
}

const mapStateToProps =(state:any)=>{
  return {
    pvalue:state
  }
}

export default connect(mapStateToProps)(BlogDetails)
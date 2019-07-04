import React from "react";

const BlogView = (props) => {
  console.log(props.blog)
  let services= props.blog.map((v,i)=>{
    return(<div key={i} class="services-block col-lg-3 col-md-6 col-sm-12">

<div class="inner-box wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms"
 style={{"visibility": "visible", "animation-duration": "1500ms", "animation-delay": "0ms", "animation-name": "fadeInLeft"}}>

  <h3><a href="#">{v.percentage}</a></h3>
  <div class="text">{v.description} </div>
		

</div>

</div>)

  })
  return <div>
    <div className="bg-light container-fluid">
      <div className="container py-5">
        <div className="row">
     {services}
        </div>
      </div>
    </div>
  </div>;
};

export default BlogView;

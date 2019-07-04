import React from "react";

const Offers = (props) => {
  let detail1=props.offers[0].offer_detail1.map((v,i)=>{
    return(
      <div key={i}>
              <h3 class="n1">{v.title}</h3>
              <p>{v.description}</p>
      </div>
    )
  })
  let detail2=props.offers[0].offer_detail2.map((v,i)=>{
    return(
      <div key={i}>
              <h3 class="n1">{v.title}</h3>
              <p>{v.description}</p>
      </div>
    )
  })
  return <div id="About-Us-head">
    <div className="conatiner-fliud bg-light">
      <div className="container py-5">
        <div className="text-center pb-5">
          <h2>{props.offers[0].title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
          <div class="threee-col-left-content">
              {detail1}
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">

          <div class="kc-elm kc-css-550131 kc_shortcode kc_single_image kc-pc-loaded" >

              <img src={props.offers[0].offer_img} class="" alt=""/>    
        </div>
            
          </div>
          <div className="col-lg-4 col-sm-12">
          <div class="threee-col-right-content">
             {detail2}
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Offers;

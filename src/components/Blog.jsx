import React from "react";
import BlogBanner from "../assets/images/blog-banner.png";
import card1 from "../assets/images/card1.png";
import  Share  from "../assets/images/Share.png";
import ButtonArrow from "../assets/images/button-arrow.svg";
import BlogCard from '../assets/images/blog-card.png'
import Arrow from '../assets/images/Arrow.png'


const Blog = () => {
  return (
    <div className="fluid-container">
      <div className="banner-class" style={{ paddingTop: "120px" }}>
        <img
          src={BlogBanner}
          alt="blog-banner"
          className="banner-image"
        />
      </div>
      <div className="product-cards-container pt-50">
        <div className="product-card bg-white row ml-0 mr-0">
            
          <div className="col-md-5 p-0">
            <img src={card1} alt="card-image" className="banner-image p-5" />
          </div>
          <div className="col-md-7 p-30">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{display:"flex", gap:10 }}>
                    <div style={{borderRadius:20, borderWidth:1, backgroundColor: "rgba(66, 152, 202, 0.18)", padding:10  }}><span style={{fontSize: 14, fontWeight: 400, color: "rgba(34, 31, 32, 0.69)"}}>Industry Name</span></div>
                    <div style={{borderRadius:20, borderWidth:1, backgroundColor: "rgba(34, 31, 32, 0.06)", padding:10  }}><span style={{fontSize: 14, fontWeight: 400, color: "rgba(34, 31, 32, 0.69)"}}>5 min Read</span></div>
                </div>
                <div>
                   <img style={{height:31, width:31}} src={Share}/>
                </div>
            </div>
            <div className="product-card-title">
            Piston Valves & Bellow Seal Valves
            </div>
            <div className="product-card-subtitle pt-20">19 Feb, 2023</div>
            <div className="product-card-subtitle pt-20">
            Uni Klinger manufactures a wide range of fluid control products like Piston Valves, Bellow Seal Valves, Steam Traps, etc. They focus on providing unique solutions that address shortcomings in existing products. 
            </div>
          
            <div className="buttons-container pt-30">
              <button className="button-class">
                <span className="pr-10">Read the Story</span>
                <span>
                  <img src={ButtonArrow} alt="arrow" />
                </span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <div style={{paddingTop:30, display:"flex", gap:10 ,flexWrap: "wrap"}}>
        <div style={{backgroundColor:"rgba(255, 255, 255, 1)", width:407,   border: "1px solid rgba(207, 204, 196, 1)", borderRadius:"6px"}}>
            <div style={{padding:"8px", }}>
                <div >
                    <img src={BlogCard}
                    style={{height:172, width:"100%",  textAlign:"center"}}
                    />
                </div>
                <div style={{backgroundColor:"#E7ECF4", padding:15, }}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                     <div style={{display:"flex", gap:10, paddingTop:10 }}>
                       <div style={{borderRadius:20, borderWidth:1, backgroundColor: "rgba(66, 152, 202, 0.18)", padding:10  }}><span style={{fontSize: 14, fontWeight: 400, color: "rgba(34, 31, 32, 0.69)"}}>Industry Name</span></div>
                       <div style={{borderRadius:20, borderWidth:1, backgroundColor: "rgba(34, 31, 32, 0.06)", padding:10  }}><span style={{fontSize: 14, fontWeight: 400, color: "rgba(34, 31, 32, 0.69)"}}>5 min Read</span></div>
                    </div>
                </div>
                <div style={{fontSize:"16px", fontWeight:500, color:"#221F20",paddingTop:10 }}>
                Providing unique solutions that address shortcomings in existing products. 
                </div>
                <div style={{display:"flex", justifyContent:"space-between",paddingTop:10 }}>
                    <div className="product-card-subtitle ">19 Feb, 2023</div>
                    <div style={{fontSize:"16px", fontWeight:600, color:"#221F20", }}>Read the Story
                        <span>
                            <img 
                            style={{width:14,height:13}}
                            src={Arrow} alt="arrow" />
                        </span>
                </div>
                </div>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:"rgba(255, 255, 255, 1)", width:407,   border: "1px solid rgba(207, 204, 196, 1)", borderRadius:"6px"}}>
            <div style={{padding:"8px", }}>
                <div >
                    <img src={BlogCard}
                    style={{height:172, width:"100%",  textAlign:"center"}}
                    />
                </div>
                <div style={{backgroundColor:"#E7ECF4", padding:15, }}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                     <div style={{display:"flex", gap:10, paddingTop:10 }}>
                       <div style={{borderRadius:20, borderWidth:1, backgroundColor: "rgba(66, 152, 202, 0.18)", padding:10  }}><span style={{fontSize: 14, fontWeight: 400, color: "rgba(34, 31, 32, 0.69)"}}>Industry Name</span></div>
                       <div style={{borderRadius:20, borderWidth:1, backgroundColor: "rgba(34, 31, 32, 0.06)", padding:10  }}><span style={{fontSize: 14, fontWeight: 400, color: "rgba(34, 31, 32, 0.69)"}}>5 min Read</span></div>
                    </div>
                </div>
                <div style={{fontSize:"16px", fontWeight:500, color:"#221F20",paddingTop:10 }}>
                Providing unique solutions that address shortcomings in existing products. 
                </div>
                <div style={{display:"flex", justifyContent:"space-between",paddingTop:10 }}>
                    <div className="product-card-subtitle ">19 Feb, 2023</div>
                    <div style={{fontSize:"16px", fontWeight:600, color:"#221F20", }}>Read the Story
                        <span>
                            <img 
                            style={{width:14,height:13}}
                            src={Arrow} alt="arrow" />
                        </span>
                </div>
                </div>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:"rgba(255, 255, 255, 1)", width:407,   border: "1px solid rgba(207, 204, 196, 1)", borderRadius:"6px"}}>
            <div style={{padding:"8px", }}>
                <div >
                    <img src={BlogCard}
                    style={{height:172, width:"100%",  textAlign:"center"}}
                    />
                </div>
                <div style={{backgroundColor:"#E7ECF4", padding:15, }}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                     <div style={{display:"flex", gap:10, paddingTop:10 }}>
                       <div style={{borderRadius:20, borderWidth:1, backgroundColor: "rgba(66, 152, 202, 0.18)", padding:10  }}><span style={{fontSize: 14, fontWeight: 400, color: "rgba(34, 31, 32, 0.69)"}}>Industry Name</span></div>
                       <div style={{borderRadius:20, borderWidth:1, backgroundColor: "rgba(34, 31, 32, 0.06)", padding:10  }}><span style={{fontSize: 14, fontWeight: 400, color: "rgba(34, 31, 32, 0.69)"}}>5 min Read</span></div>
                    </div>
                </div>
                <div style={{fontSize:"16px", fontWeight:500, color:"#221F20",paddingTop:10 }}>
                Providing unique solutions that address shortcomings in existing products. 
                </div>
                <div style={{display:"flex", justifyContent:"space-between",paddingTop:10 }}>
                    <div className="product-card-subtitle ">19 Feb, 2023</div>
                    <div style={{fontSize:"16px", fontWeight:600, color:"#221F20", }}>Read the Story
                        <span>
                            <img 
                            style={{width:14,height:13}}
                            src={Arrow} alt="arrow" />
                        </span>
                </div>
                </div>
                </div>
            </div>
        </div>
      
        
     </div>
    </div>
  );
};

export default Blog;

import React from "react";

export default function Footer(){
    return(
       <div className="footer">
            <div className="top-footer">
               <div className="change-color">
                  <h3 className="text-center py-5 text-white">Custom Cabinets for Your Project</h3>
                 <div className="d-flex justify-content-center py-3">
                    <button className="btn btn-warning rounded-pill">Get a Free Quote</button>
                 </div>
                   </div>
                 <div className="footer-foolter">
                     <div className="row">
                         <div className="col d-flex align-items-center">
                            <img src="./logo192.png" height={150} />
                          </div> 
                         <div className="col pt-5">
                            <p className="text-warning font-size">CATEGORIES</p>
                            <p className="text-white">Service</p>
                            <p className="text-white">Kitchen Cabinet</p>
                            <p className="text-white">Bedroom Wardrobe</p>
                            <p className="text-white">Bathroom Vanity</p>
                            <p className="text-white">Design</p>
                            <p className="text-white">Cases</p>
                            <p className="text-white">Projects</p>
                            <p className="text-white">Customer Feedback</p>
                         </div>
                         <div className="col pt-5">
                         <p className="text-warning font-size">CONTACT</p>
                         <p className="text-white">No.16, Hegui Dadao Lishui Town,Nanhai Dist,Foshan, Guangdong, China</p>
                         <p className="text-white"><i className="fa fa-phone"></i> +86 180 4285 6944</p>
                         <p className="text-white"><i className="fa fa-phone"></i> +86 138 8992 2422</p>
                         <p className="text-white"><i className="fa fa-envelope"></i> info9@pakitchen.com</p>
                         </div>
                         <div className="col pt-5">
                         <p className="text-warning font-size">ABOUT US</p>
                         <p className="text-white">Home</p>
                         <p className="text-white">About</p>
                         <p className="text-white">Manufacturer</p>
                         <p className="text-white">Contact us</p>
                         <p className="text-white">Become Our Dealer</p>
                         <p className="text-white">FAQ</p>
                         <p className="text-white">Blog</p>
                         <p className="text-white">Instagram</p>
                         </div>
                     </div>
                 </div>
                  </div>
                  <div className="footer-bottom d-flex justify-content-between align-items-center px-4">
                       <p className="text-white py-4 font-size">Copyright 2008 – 2022 | All Rights Reserved by PA Kitchen | Privacy Policy</p>
                       <div className="icons px-3">
                          <i className="fa fa-facebook px-1  face"></i>
                          <i className="fa fa-twitter px-1 twit "></i>
                          <i className="fa fa-youtube px-1 you"></i>
                          <i className="fa fa-instagram px-1 "></i>
                          <i className="fa fa-linkedin px-1 linked"></i>
                       </div>
                    </div> 
             </div>                             
    )
}
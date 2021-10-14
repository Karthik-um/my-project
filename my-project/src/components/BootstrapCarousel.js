import { Button } from 'bootstrap';
import React, { Component } from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import "./BootstrapCarousel.css";

export class BootstrapCarousel extends Component {  
    
            render() {  
    
            return (  
    
            <div>  
    
             <div className='container-fluid' >  
    
            <Carousel>  
    
            <Carousel.Item style={{'height':"500px"}} >  
    
            <img style={{'height':"500px"}}  
    
            className="d-block w-100"  
    
            src=" https://assets.limetray.com/assets/user_images/menus/compressed/1606130153_HyderabadiChickenBiryani.JPG"  />  
    
            <Carousel.Caption>  
    
             <h3>Delicious quality chicken Biriyani</h3>  
             <div className="row call-to-action-button">
                    <button> <a href="#">Order Now</a></button>
                    <button> <a href="#" target="blank"> Call Us</a></button>
             </div>
            </Carousel.Caption>  
    
            </Carousel.Item  >  
    
            <Carousel.Item style={{'height':"500px"}}>  
    
            <img style={{'height':"500px"}}  
    
            className="d-block w-100"  
    
            src=" https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2020/06/13/iStock-469866881-1592049455.jpg?itok=8TtLdtK8"   />  
    
            <Carousel.Caption>  
             <div >
            <h3>Protien Rich Biriyani </h3>
            <div className="row call-to-action-button">
                    <button> <a href="#">Order Now</a></button>
                    <button> <a href="#" target="blank"> Call Us</a></button>
             </div>
            

            </div>
    
            </Carousel.Caption>  
    
             </Carousel.Item>  
    
             <Carousel.Item style={{'height':"500px"}}>  
    
            <img style={{'height':"500px"}}  
    
            className="d-block w-100"  
    
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbyZrFUQtr4B37ohbEoB6uwLYD2g4oriX-w&usqp=CAU"   />  
    
            <Carousel.Caption>  
    
            <h3>Biriyani</h3>  
            <div className="row call-to-action-button">
                    <button> <a href="#">Order Now</a></button>
                    <button> <a href="#" target="blank"> Call Us</a></button>
             </div>
            </Carousel.Caption>
            </Carousel.Item>  
    
            </Carousel>  
    
            </div>  
    
            </div>  
    
                    )  
    
            }  
    
    }  
        
export default BootstrapCarousel  

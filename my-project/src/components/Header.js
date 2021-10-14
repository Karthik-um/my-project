import React from 'react';
import "./Header.css";
import {FaCartPlus} from "react-icons/fa";

const Header = () => {
   
    return(
        <>
        <nav className="main-nav"> 
        <div className="logo"> 
        <img src="https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=" height="100px" alt=" "></img> 
        <h4 ><b>Sample Restaurant</b></h4>
         </div>
        
         <div className="menu-link"> 
               <ul> 
                   <li> 
                       <a href="#">About</a> 
                   </li> 
                   <li> 
                       <a href="#">Location</a> 
                   </li> 
                   <li> 
                       <a href="#">Menu</a> 
                   </li> 
                   <li> 
                       <a href="#">Contact</a> 
                   </li> 
                    
 
                   <li> 
                   <a href="www.google.com" target="_blank"> 
                           <FaCartPlus className="Cart" /> 
                       </a> 
                       <a href="#"><b>Cart</b></a> 
                   </li> 
 
               </ul> 




         
         </div>
         </nav>
        </>
    )
}

export default Header
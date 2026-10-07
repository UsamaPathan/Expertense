import React from "react";
import "./Component.css";
import '../pages/Index.css';
import Button2 from "./Button2";
function Card({h4, h2, h5, disc, disc2, disc3}){

    return(
        <>
        <div className="Card border solid ">
            <div className="d-flex flex-column gap-2">
                <div><h4>{h4}</h4></div>
                <div className="line"></div>
                <div className="card d-flex flex-column gap-2 align-items-start">
                    <div><h2>{h2}</h2></div>
                    <div><p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac.</p></div>
                </div>
                <div className="line"></div>
                <Button2 text="Get Started" variant='dark'/>
                <div className="d-flex flex-column gap-3 mt-2">
                  <ul className="service-list">
                    <li className='d-flex gap-3 align-content-center'>
                      <span className="number">1</span>
                      <h5>{disc}</h5>
                    </li>

                    <li className='d-flex gap-3 align-content-center'>
                      <span className="number">2</span>
                      <h5>{disc2}</h5>
                    </li>

                    <li className='d-flex gap-3 align-content-center'>
                      <span className="number">3</span>
                      <h5>{disc3}</h5>
                    </li>

                  </ul>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card
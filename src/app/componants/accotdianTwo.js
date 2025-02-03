'use client'
import React, { useState } from 'react';

import { accordionData } from '../data/data';

export default function AccordianTwo(){
    let [activeIndex,setActiveIndex] = useState(0)
    return(
    <div className="accordion mt-4 pt-2" id="buyingquestion">
        {accordionData.map((item,index)=>{
            return(
            <div className="accordion-item rounded mt-2" key={index}>
                <h2 className="accordion-header" id="headingOne">
                    <button className={`${activeIndex === index ? '' : 'collapsed'} accordion-button border-0 bg-light`} onClick={() => setActiveIndex(index) }>
                        {item.title}
                    </button>
                </h2>
                <div id="collapseOne" className={`${activeIndex === index ? 'show' : ''} accordion-collapse border-0 collapse`}>
                    <div className="accordion-body text-muted">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </div>
                </div>
            </div>
            )
        })}
    </div>
    )
}
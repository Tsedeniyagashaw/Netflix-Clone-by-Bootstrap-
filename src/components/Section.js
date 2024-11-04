import React from 'react'

function Section({image,title,description,reverse, children }) {
  return (
    <div className={"bg-black text-center row border-bottom pb-5 border-bottom-gray d-lg-flex justify-content-center align-items-center"}>

    <div className={`col-lg-6 py-5  text-center px-lg-5 text-white ${reverse ? 'order-lg-2' : ''}`}>
      <h1 className="bolder-lg pt-3 mx-5 mytitle">{title}</h1>
        <p className="mx-5 mb-3 mytxt">{description}</p>

      </div>
      
      <div className={`col-lg-6 ${reverse ? 'order-lg-1' : ''}`}>
        {image &&(
        <img className="img-fluid" src={image} alt={title} />
    ) }   {children} 
      </div>

    
   
   

    </div>
  )
}

export default Section

import React from 'react'

export default function About() {
  
  return (
    <>
    
        <div className="heading">
      <h1 className="text-center shadow p-3 mb-5 bg-body-secondary rounded">
        About us
      </h1>
      
      
            <div >
               
                <div style={{display:"flex" , justifyContent:"center"}}>
                   <img src="https://m.media-amazon.com/images/I/61tV07vXkIL._AC_UF1000,1000_QL80_DpWeblab_.jpg" height="300px" />
                </div>


                <div>
                    <h1  className="text-center mx-5 my-4 shadow p-3 mb-5 bg-body-tertiary rounded">Furniture is important part for comfort</h1>
                    <h5>IKEA is a global leader in life at home.</h5>
                    <p className=" text-dark text-left mx-5 my-4">Whether you just moved into a new home or looking to revamp your current one, we at IKEA are here to inspire you with affordable home furniture solutions, there is a piece of furniture to every corner of your home. Create a home that is perfect for you.</p>
                <p className="text-left mx-5 my-4 text-dark">Shopping at IKEA is a bit different and exciting compared to your shopping at an everyday retail. It is about experiencing solutions first hand and getting to know ideas and inspirations that can fit perfectly into your home. That’s why, we offer more than 7500 products, solutions at our store along with home furnishing ideas and services for you to explore.</p>
                <p className="text-dark">When you visit <a href="https://www.ikea.com/in/en/">IKEA Store</a>,make yourself at home in our many room settings in the store. Squeeze the upholsteries, feel the oriental rugs, try the sofa beds and open the cabinets to feel the quality. On the price tag, you’ll find all you need to know about a product, including where in the store you can pick it up.</p>
                <a href="https://www.ikea.com/in/en/" className="btn btn-success">Learn more</a>

                </div>
            </div>
            </div>
    </>
  )
}

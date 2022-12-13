import React from 'react'
  
function Playercard({playersData}) {
    console.table(playersData)
    return (

        <>
            <section className='container-fluid mt-5'>
                <div className="container">
                    <div className="row">

                        {
                            playersData.map((curElem)=>{
                                return(
                                    <>
                                    <div className='col-md-4 my-4' key={curElem.id}>
                                    <div className='player-info'>
                                        <h5>{curElem.firstname}</h5>
                                        <h1>{curElem.lastname}</h1>
                                        <h6>{curElem.category}</h6>
        
        
                                        <p>{curElem.jno}</p>
                                        <img src={curElem.image} className='img-fluid' alt='' />
                                    </div>
                                </div>
                                </>
                                )
                            })
                        }
                  
                    </div>
                </div>
            </section>
        </>

    )
}

export default Playercard

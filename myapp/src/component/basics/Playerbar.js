import React from 'react'

const Playerbar = ({ filteritem,category }) => {
  console.log(category);
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='row'>
              {
                category.map((gradelist) => {
                  return (
                 
                    <div className='col'>
                      <button className='btn btn-sm' onClick={() => filteritem(gradelist)}>{gradelist}</button>
                    </div>
                  )
                })



              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Playerbar

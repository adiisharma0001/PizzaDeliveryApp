import React from 'react'
import pizzas from '../pizzasdata'
import Pizza from '../Component/Pizza'

export default function Homescreen() {
  return (
    <div>
      <div className='row'>
        {pizzas.map(pizza=>{
            return <div className='col-md-4 '>
                <div>
                    <Pizza pizza={pizza}/>
                </div>
                </div>    
        })}
      </div>
    </div>
  )
}

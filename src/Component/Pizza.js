
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { alignPropType } from 'react-bootstrap/esm/types';
export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1)
  const [varient, setvarient] = useState('small')
  // here we take taken the two variables for the prices and total amount
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ margin: "60px" }} className='shadow p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow} >
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
      </div>

      {/* in using style wew use inline styling/css */}
      <div className='flex-container'>
        <div className='w-100 m-1'>
          {/* w=width between Varients and prices */}
          <p>Varients</p>
          <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
            {pizza.varients.map(varient => {
              return <option value={varient}>{varient}</option>
            })}
          </select>
        </div>

        <div className='w-100 m-1'>
          <p>Quantity </p>
          <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>
              // here we  have made an error were we can add maximum 10 pizza at a time
            })}
          </select>
        </div>
      </div>

      <div className='flex-container'>
        <div className='m-1 w-100' >
          <h1 className='mt-1'>Price: {pizza.prices[0][varient] * quantity}Rs/-</h1>
          {/* from here prices will update automaticaly when we change the quantity and varients */}
        </div>
        <div className='m-1 w-100'>
          <button className='btn'>Add to Cart</button>
        </div >
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className='img-fluid' style={{height:"300px" }}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cardsdata from './CardsData'
import './style.css'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/Action';
import Testimonial from './Testimonal';


const Cards = () => {
  const [data, setdata] = useState(Cardsdata);
  // console.log(data);

  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e)); // e me particular item ki detail h

  }



  return (
    <>
    <div className='container mt-3'>
      <h2 className='text-center'> Add to Cart Project</h2>
      <div className='row d-flex justify-content-center align-item-center'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card  style={{ width: '22rem', border: 'none' }} className="mx-2 mt-4 card_style">
                  <CardMedia component="img" height="194" image={element.imgdata} className='mt-3' />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {element.rname}
                    </Typography>
                    <Typography>
                      price: ₹ {element.price}
                    </Typography>

                    <div className="button_div d-flex justify-content-center">
                      <Button variant="contained" color="primary" onClick={() => send(element)}>Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
               
              

              </>
            )
          })
        }

      </div>
    </div>

    <div style={{marginTop:'10px', marginLeft:"50px"}}>
      <h2> Testimonal</h2>
      <Testimonial/>
    </div>

    </>



    
  )
}

export default Cards


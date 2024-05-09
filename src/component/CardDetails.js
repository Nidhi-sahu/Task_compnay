import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {ADD,DLT, REMOVE} from '../redux/actions/Action'


const CardDetails = () => {
    
    const [data, setData] = useState([]);


    const { id } = useParams();
    // console.log(id);

    const history = useNavigate();
    const dispatch = useDispatch();

    const getdata = useSelector((state) => state.cartreducer.carts);
    //   console.log(getdata);

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        })
        setData(comparedata);
    }
//add data 
const send = (e) => {
    // console.log(e)
    dispatch(ADD(e)); // e me particular item ki detail h

  }
    const dlt = (id) => {
        dispatch(DLT(id));
        history("/");
    }

     //remove one

     const remove = (item) =>{
        dispatch(REMOVE(item))
     }
   


    useEffect(() => {
        compare();
    }, [id])


    return (

        <div className="container mt-2">
            <h2 className='text-center'>Iteams Details Page
            </h2>
            <section className='container mt-3'>
                <div className="iteamsdetails">
                    {
                        data.map((ele) => {
                            return (
                                <>
                                    <div className='item_img '>
                                        <img src={ele.imgdata} alt="" style={{ height: '15rem' }} />
                                    </div>
                                    <div className='details' >
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p> <strong>Restaurant</strong>  :{ele.rname} </p>
                                                    <p> <strong>Price</strong>  :{ele.price} </p>
                                                    <p> <strong>Dishes</strong>  :{ele.address}</p>
                                                    <p> <strong>Total</strong>  :{ele.price * ele.qnty}</p>

                                                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                        <span style={{ fontSize: 24 }}  onClick={ele.qnty <=1 ? () =>dlt(ele.id): ()=>remove(ele)}>-</span>
                                                        <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                        <span style={{ fontSize: 24 }} onClick={()=>send(ele)} >+</span>

                                                    </div>

                                                </td>
                                                <td>
                                                    <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating}★	</span></p>
                                                    <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                                                    <p><strong>Remove :</strong> <span > <DeleteIcon style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(ele.id)}/>	</span></p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </div>
    )
}

export default CardDetails
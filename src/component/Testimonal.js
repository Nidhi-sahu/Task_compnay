import React,{useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Testimonial = () => {
    const [data, SetData] = useState([])
    const getData = async () => {
      const res = await axios.get("http://localhost:4000/gettest")
      SetData(res.data)
      console.log("Response", res.data)
  
    }
  
    useEffect(() => {
      getData()
    }, [])
  return (
    <div style={{display:'flex'}}>
         
         {data.map((item, index) => (
        <Card key={index} style={{ width: '18rem', marginRight: '20px', marginBottom: '20px' }}>
          <Card.Body>
            <Card.Title>{item.testimonial_id}</Card.Title>
            <Card.Text>
              userid: {item.id}
            </Card.Text>
            <Card.Text>
            testimonial_text: {item.testimonial_text}
            </Card.Text>
            <Card.Text>
            rating: {item. rating}
            </Card.Text>
            <Card.Text>
            date: {item.date_created}
            </Card.Text>
            
          </Card.Body>
        </Card>
      ))}
    </div>
    
       
    
  )
}

export default Testimonial
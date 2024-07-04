import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2'

function Product() {
  let [products, SetProduct] = useState([]);
  let [loading, SetLoading] = useState(true);
  let [error, SetError] = useState(null);

  useEffect(() => {
    let fetchdata = async () => {
      try {
        let res = await fetch("http://localhost:4000/products");
        if (res.ok) {
          let data = await res.json();
          SetProduct(data);
        } else {
          throw new Error("Network Issues...");
        }
       
      } catch (err) {
        SetError(err.message)
        console.log(err.message);
      }
      finally{
        SetLoading(false)
      }
    };

    fetchdata();
  }, []);
  if (loading === true) {
    return (
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
  }
  else if(error){
    return (
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      })
    )
  }
  else{
    return (
      <div className="container">
        <div>
          <h1>Total Product : {products.length}</h1>
        </div>
        <section className="row">
          {products.map((val) => (
            <card
              style={{ width: "18rem", height: "auto" }}
              className="m-3 d-grid align-item-between"
              key={products.id}
            >
              <article>
                <Card.Img variant="top" src={val.images[0]} />
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>{val.price}</Card.Text>
                  <Card.Title>{val.description}</Card.Title>
                  <Button variant="primary">Add To Card</Button>
                </Card.Body>
              </article>
            </card>
          ))}
        </section>
      </div>

        )}}
  



export default Product;

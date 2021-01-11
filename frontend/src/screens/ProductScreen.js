import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import Message from "../components/Message.js"
import Loader from "../components/Loader"
import Rating from "../components/Rating"
import { listProductDetails, createProductReview } from "../actions/productActions.js"
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants"

const ProductScreen = ({ history, match }) => {
  // using useState to setup quantity of items on product page
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")

  // const [color, setColor] = useState()
  // const [size, setSize ] = useState()

  const dispatch = useDispatch()

  // getting product data from the state using useSelector
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const { success: successProductReview, error: errorProductReview } = productReviewCreate

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  // this is executed when we add things to our cart using button on product page
  // change addtocarthandler to include size and color
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  
  return (
    <>
      <Link className = "btn btn-light my-3" to="/">
        Go back
      </Link>
      {loading 
      ? <Loader /> 
      : error
      ? <Message variant="danger">{error}</Message>
      : (
        <>
        <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating 
              value={product.rating} 
              text={`${product.numReviews} reviews`}

              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant = "flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

                 {/* render size and color dropdowns- (error messages if colour or size not in stock?)
                  make setColour and setSize methods, set dropdowns to correct sizes/colors for jackets, pants and gloves -disable in dropdown if out of stock?? inventory? */}

                 {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Size</Col>
                    <Col>
                      <Form.Control 
                      as="select" 
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map(
                          (x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        )
                        )}

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Colour</Col>
                    <Col>
                      <Form.Control 
                      as="select" 
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map(
                          (x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        )
                        )}

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}



              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control 
                      as="select" 
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map(
                          (x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        )
                        )}

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button 
                onClick={addToCartHandler}
                className="btn-block" 
                type="button" 
                disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>

           
              
    



            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h2>Reviews</h2>
          {product.reviews.length === 0 && <Message>No reviews yet for this product</Message>}
          <ListGroup variant="flush">
            {product.reviews.map(review => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review.rating} />
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </ListGroup.Item>

            ))}
              <ListGroup.item>
                <h2>Write a Customer Review</h2>
                {userInfo ? (
                  <h1></h1>
                  ) : (
                    <Message> 
                    Please <Link to="/login">login</Link> to write a review. 
                      {' '}
                    </Message>
                    )}
              </ListGroup.item>

          </ListGroup>                

        </Col>
      </Row>
      </>
      )}
     
    </>
  )
}

export default ProductScreen

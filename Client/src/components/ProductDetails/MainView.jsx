import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const MainView = (props) => {
  const [styles, setStyles] = useState({});

  console.log(props.product)

  const getStyles = (id) => {
    axios.get('/products/:product_id/styles', {
      params: {
        'id': id
      }
    })
      .then((response) => {setStyles(response.data)})
      .catch((err) => {console.log(err)})
  }


  useEffect(() => {
    getStyles(props.product)
  }, [])


  return (
    <div>
    <div>Product Details</div>
    {
      Object.keys(styles).length > 0 ? <p>{JSON.stringify(styles)}</p> : null
    }
    </div>
  )
}

export default MainView;
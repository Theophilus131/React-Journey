

import { useGetAllProductsQuery } from '../api/productApi'





const AllProducts = () => {

    const products = useGetAllProductsQuery()
    console.log(products.data)


  return (
    <div className='allProduct_Container'>
        {
           products?.data?.map((products)=>
            <div className='produtcs' >
                <img src = {products.image} alt ="" />
                <h3>{products.title}</h3>
                <h4>{products.price}</h4>
                <p>{products.description}</p>
            </div>
        
        )
        }
    </div>
  )
}


export default AllProducts;


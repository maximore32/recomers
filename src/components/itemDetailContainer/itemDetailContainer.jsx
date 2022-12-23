import { useState,useParams,useEffect } from "react";
import { simulFetch } from "../../Helpers/simulFetch";

import ItemDetail from "../itemDetail/itemDetail";


const ItemDetailContainer = ()=>{
    const [product, setProduct]=useState({})
    const {prodid} = useParams()


    useEffect( ()=>{
        simulFetch(prodid)
        .then(res=>setProduct(res))
        .catch(err=>console.log(err))

    },[prodid])
    

    return(
        <>
        < ItemDetail product={product} />
         
        </>
    )
}
export default ItemDetailContainer;
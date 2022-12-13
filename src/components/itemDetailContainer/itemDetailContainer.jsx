import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
    console.log(prodid);
    console.log(product);

    return(
        <>
        < ItemDetail product={product} />
         
        </>
    )
}
export default ItemDetailContainer;
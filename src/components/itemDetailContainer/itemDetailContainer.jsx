import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
//import { simulFetch } from "../../Helpers/simulFetch";

import ItemDetail from "../itemDetail/itemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";


const ItemDetailContainer = ()=>{
    const [product, setProduct]=useState({})
    const {prodid} = useParams()


    useEffect( ()=>{
        const db= getFirestore();
        const queryDoc= doc(db,"productos",prodid);
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data()}))
        .catch(err=>console.log(err))
    },[prodid])


       

    return(
        <>
           <ItemDetail product={product} />
         
        </>
    )
}
export default ItemDetailContainer;
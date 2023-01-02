import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
//import { simulFetch } from '../../Helpers/simulFetch';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemlistContainer = ({greeting}) =>{
    const [ prodcs, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const {categid}= useParams()
    
    useEffect(()=>{

      if(categid){
         const db = getFirestore()
         const queryCollection = collection(db, 'productos')    
         const queryFiltrada = query(queryCollection,where('categoria','==', categid))
         getDocs(queryFiltrada)
         .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
         .catch(err => console.log(err))
         .finally(()=> setLoading(false))

      }
      else{
        const db = getFirestore()
       const queryCollection = collection(db, 'productos')

       getDocs(queryCollection)
       .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
       .catch(err => console.log(err))
       .finally(()=> setLoading(false))

      }        
        
    }, [categid])

    console.log(prodcs);
    console.log(categid);
    

    

    return(
        <>
      {[
        
        'danger',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          <p className='itempar'>{greeting}</p>
        </Alert>
      ))}
      <ItemList prodcs={prodcs} loading={loading}/>
    </>
        
    )

}

export default ItemlistContainer

//Otra manera de filtrar, se pueden usar varios where
//     // const queryFiltrada = query(
    //     //     queryCollection, 
    //     //     where('price','>=', 1500), 
    //     //     // limit(2),
    //     //     // orderBy('price', 'desc')
    //     // )

    /*// traer todos
    useEffect(()=>{
       const db = getFirestore()
       const queryCollection = collection(db, 'productos')

       getDocs(queryCollection)
       .then(res => setProducts(  res.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
       .catch(err => console.log(err))
       .finally(()=> setLoading(false))
        
     }, [])


     // traer productos filtrado
     useEffect(()=>{
         const db = getFirestore()
         const queryCollection = collection(db, 'productos')    
         const queryFiltrada = query(queryCollection,where('categoria','==', categoriaId),)
         getDocs(queryFiltrada)
         .then(res => setProducts(  res.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
         .catch(err => console.log(err))
         .finally(()=> setLoading(false))
         
     }, [])*/
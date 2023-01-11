import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemlistContainer = ({greeting}) =>{
    const [ prodcs, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const {categid}= useParams()
    
    useEffect(()=>{
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryFiltrada = categid ? query(queryCollection,where('categoria','==', categid)) :queryCollection
      getDocs(queryFiltrada)
         .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
         .catch(err => console.log(err))
         .finally(()=> setLoading(false))     
        
    }, [categid])   

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


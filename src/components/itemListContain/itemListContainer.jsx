import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { simulFetch } from '../../Helpers/simulFetch';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList';

const ItemlistContainer = ({greeting}) =>{
    const [ prodcs, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true)
    const {categid }= useParams()
    
    useEffect(()=>{

      if(categid){
        simulFetch() 
        .then( resp =>  setProducts(resp.filter( prod => prod.categoria === categid)) )
        .catch( err => console.log( err ) )
        .finally(()=> setLoading(false))

      }
      else{
        simulFetch() 
        .then( resp =>  setProducts(resp) )
        .catch( err => console.log( err ) )
        .finally(()=> setLoading(false))

      }        
        
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
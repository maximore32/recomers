import Alert from 'react-bootstrap/Alert';
import ItemList from '../../components/itemList/itemList';
import { simulFetch } from '../Helpers/simulFetch';

const ItemlistContainer = ({greeting}) =>{
    const [ prodcs, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    
    useEffect(()=>{
        simulFetch() // simulación de fetch para consultar una api
        .then( resp =>  setProducts(resp) )   // en esta linea cambia el estado 
        .catch( err => console.log( err ) )
        .finally(()=> setLoading(false))
        
    }, [])
    return(
        <>
      {[
        
        'danger',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          <p className='itempar'>{greeting}</p>
        </Alert>
      ))}
      <ItemList prodcs={prodcs}/>
    </>
        
    )

}

export default ItemlistContainer
import Alert from 'react-bootstrap/Alert';
const ItemlistContainer = ({greeting}) =>{
    return(
        <>
      {[
        
        'danger',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          <p className='itempar'>{greeting}</p>
        </Alert>
      ))}
    </>
        
    )

}

export default ItemlistContainer
import Item from '../Item/Item'

const ItemList =({prodcs,loading})=>{

    return(
        <>
          { loading ? <h2>Cargando productos ...</h2> :
            prodcs.map( product => <Item product={product} />)}

        </>
    )}
export default ItemList
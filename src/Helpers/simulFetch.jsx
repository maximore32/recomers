let productos = [
    {id: '1', name: 'PRODUCTO 1', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '2', name: 'PRODUCTO 2', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '3', name: 'PRODUCTO 3', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '4', name: 'PRODUCTO 4', categoria: 'remeras',stock: '100',price: '1500',  foto:'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-ma-rj-121-d79c09e8f970c42fe315911959190667-1024-1024.jpg'},
    {id: '5', name: 'PRODUCTO 5', categoria: 'remeras',stock: '100',price: '1500',  foto:'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-ma-rj-121-d79c09e8f970c42fe315911959190667-1024-1024.jpg'}
]


export const simulFetch = () => {
    return new Promise( ( res, rej)=> {
        // acciones 
        setTimeout(()=>{
            res(productos)
        }, 2000 )
        
    } )
}

import { Link } from "react-router-dom"
const NoProducts = ()=>{
    return(
        <div style={{width:"50%", margin:"0 auto",padding:"17px",marginTop:"30px",border:"5px double darkred",textAlign:"center",backgroundColor:"lightgoldenrodyellow",height:"400px"}}>
            <h2 style={{marginTop:"80px",fontSize:"40px"}}><strong style={{color:"crimson",fontFamily:"auto"}}>NO HAY PRODUCTOS</strong></h2>
            <Link to="/"><button className="btn btn-outline-success" style={{marginTop:"30px",fontSize:"30px"}}>Ver productos</button></Link>
        </div>
    )
}

export default NoProducts;
let productos =[
    {
        id: "1",
        producto: "teclado",
        descripcion: "Es un teclado personalizable junto con el Motor Inteligente Genius proporciona un control completo de las 12 teclas de función.",
        disponible: true,
        precio: "$1500",
        categoria: "tecnologia",
        imagen: "https://th.bing.com/th/id/OIP.i7yVz4eQKEuGyLD8vQte6wHaEZ?pid=ImgDet&rs=1"
    },

    {
        id: "2",
        producto: "mouse inalámbrico",
        descripcion:"Mouse inalámbrico de alta complejidad con su sensor BlueEye que te permitirá funcionar con exactitud y control en cualquier tipo de superficie.",
        precio: "$750",
        disponible: true,
        categoria: "tecnologia",
        imagen: "https://th.bing.com/th/id/R.002b4a3b31a1de7a3bb18ee1ad3f669c?rik=U2pUu6%2fViqIdyA&pid=ImgRaw&r=0"

    },

    {
       id: "3",
       producto: "monitor",
       descripcion:"Con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores más nítidos y definidos en tus películas o series favoritas. Además, con su pantalla curva tu contenido cobrará vida y tendrás una experiencia de inmersión extraordinaria.",
       disponible: false,
       precio: "$40.000",
       imagen: "https://m.media-amazon.com/images/I/81rd5yFdbRL._AC_SL1500_.jpg",
       categoria: "tecnologia"

    },

    {
        id: "4",
        producto: "botines",
        descripcion: "botines deportivos de excelente calidad aptos para canchas profesionales de futbol.",
        disponible: false,
        precio: "$7000",
        categoria:"deportes",
        imagen:"https://essential.vteximg.com.br/arquivos/ids/343150-454-423/306-7524_1.jpg?v=637341659598600000"
    },
    
    {
        id: "5",
        producto:"zapatilla",
        descripcion:"Las nuevas Nike Air Zoom Pegasus 36 se han diseñado para corredores de todos los niveles, ya seas un experimentado veterano o estés dando tus primeros pasos.",
        precio:"$9000",
        disponible:true,
        categoria:"deportes",
        imagen:"https://mk0runnerslab22n01ig.kinstacdn.com/wp-content/uploads/sites/3/2020/07/Nike_Air_Zoom_Pegasus_37-1024x650.jpg"

    },

    {
       id:"6",
       producto:"remera",
       descripcion:"Remera deportiva masculina manga corta Gol De Oro fit®.",
       precio:"$1500",
       disponible:false,
       categoria:"deportes",
       imagen:"https://apollo-virginia.akamaized.net/v1/files/9bzydjxsh59i-AR/image;s=400x0"

    },

    {
        id: "7",
        producto:"toyota corolla (2020)",
        descripcion:"Exelente vehiculo de alta gama con el mejor confort del mercado y andar en ciudad, subirse a este auto es igual a volar.",
        precio:"$2.500.000",
        disponible:true,
        categoria:"automotores",
        imagen:"https://images.carexpert.com.au/crop/800/500/vehicles/source-g/b/9/b99d4351.jpg" 

    },

    {
        id:"8",
        producto:"citroen c4 (2020)",
        descripcion:"Uno de los mejores autos para andar en ciudad, comodo, tecnologico y elegante, si tiene este auto tiene elegancia",
        precio:"$2.000.000",
        disponible:false,
        categoria: "automotores",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_702572-MLA32892635502_112019-O.webp"
    },

    {
        id:"9",
        producto:"Mustang (2020)",
        descripcion:"Un deportivo que puede ser considerado una nave,lo tiene todo confort,velocidad, elegancia,el nuevo mustang marcará una nueva ruta en tu vida.",
        precio:"U$$80.000",
        disponible:false,
        categoria:"automotores",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_997943-MLA44878481333_022021-O.webp"
    },

    {
        id:"10",
        producto:"teclado musical",
        descripcion:"Teclado Musical Infantil NEWVISION de 25 Teclas moderno de ultima generación, ideal para Aprendisaje. Incluye 3 Tonos, 8 Ritmos, 24 Canciones Demo!!!",
        precio:"$2000",
        disponible:true,
        categoria:"juguetes",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_960007-MLA43253390479_082020-F.webp"
    },

    {
        id:"11",
        producto:"walkie talkie",
        descripcion:"La diversión no tiene limites con las radios walkie talkie de Baofeng. Ideales para jugar tanto en el exterior como en el interior.",
        precio:"$2200",
        disponible:true,
        categoria:"juguetes",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_766675-MLA43581560330_092020-F.webp"
    },
    
    {
        id:"12",
        producto:"helicoptero",
        descripcion:"Playmobil Helicóptero Salvataje 3789 - LINEA NACIONAL -",
        precio:"$4000",
        disponible:false,
        categoria:"juguetes",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_787953-MLA31656906715_082019-F.webp"
        
    },

    {
        id:"13",
        producto:"placard",
        descripcion:"PLACARD PUERTAS CORREDIZAS LINEA SUAVE 182 Frente X 184 Altura X 53.5 Prof.",
        precio:"$20.000",
        disponible:false,
        categoria:"hogar",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_980670-MLA31113112346_062019-F.webp"
        
    },

    {
        id:"14",
        producto:"juego de comedor",
        descripcion:"Juego de comdor de excelente calidad,contiene mesa cuadrada de madera refinada con 4 sillas de cuero chenille.",
        precio:"$35.000",
        disponible:true,
        categoria:"hogar",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_914515-MLA42576504355_072020-F.webp"
    },

    {
        id:"15",
        producto:"sillon",
        descripcion:"Es el sillon el camastro y dos almohadones",
        precio:"$36.000",
        disponible:true,
        categoria:"hogar",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_973699-MLA44152837443_112020-F.webp"
    }
    
]


export const simulFetch = (id) => {
    console.log(id);
    return new Promise( ( res, rej)=> {
         
        setTimeout(()=>{
            res(id ? productos.find(prod => prod.id === id) : productos)
        }, 1000 )
        
    } )
}

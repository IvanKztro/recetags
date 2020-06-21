import Head from 'next/head'


import Layout from '../components/layout/Layout'
import Receta from '../components/layout/InfoReceta'

export default function Home() {

  //PARA PAI Y PAGINADO DE ELEMENTOS
  // const lista =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  // const perPage = 5;
  // const pagActual = 3;
  
  // let eFinal = (perPage * pagActual) - 1;
  // let eInicial = eFinal -  perPage ;

  // console.log(lista);
  // const newLista = lista.filter( (pro, index) => {
  //  console.log(` ${index} >= ${eInicial} || ${ index} <= ${eFinal}`)
  //   //console.log();
  //   return(
  //     index >= eInicial && index <= eFinal
  //   )
  // })

  // console.log(newLista);

  const recetas = [
    {
      idReceta: 1, 
      nombre: "Pollo frito", 
      descripcion: "Pollo frito, cualquier paladar cae rendido antes este platillo",
      creador: 1,
      creado: "hace 2 dias",
      foto: "https://media.cnnchile.com/sites/2/2019/01/maxresdefault.jpg",
      likes: 12,
      hanLiked: [1,2,3,4],
      comentarios:[
        { byUserID: 1, nombre: "Juan", correo: "correojuan@gmail.com", comentario: "Buna receta y sencilla de preparar"}
      ],
      ingredientes:[
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharadita de pimienta",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír",
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharada de fécula de maíz",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír"
      ],
      instrucciones:[
        "Mezcla la harina con la paprika, la sal, la pimienta y la fécula de maíz. Reserva un momento.",
        "Remoja el pollo en la leche y empanízalo con la mezcla anterior.",
        "Calienta el aceite en una olla profunda (manéjala con cuidado para evitar accidentes).",
        "Fríe las piezas hasta que estén doradas; pásalas a papel absorbente hasta terminar. Sirve."
      ]
    },
    {
      idReceta: 2, 
      nombre: "Pozole", 
      descripcion: "Pozole de rancho, no es el pozole tipico de cuidad",
      creador: 2,
      creado: "hace 5 dias",
      foto: "https://www.mylatinatable.com/wp-content/uploads/2016/03/pozole-5-1024x681-1.jpg",
      likes: 45,
      hanLiked: [12,21,13,42],
      comentarios:[
        { byUserID: 3, nombre: "Ruben", correo: "ruben@gmail.com", comentario: "No sabia sobre este platillo pero esta rico"}
      ]
    },
    {
      idReceta: 3, 
      nombre: "Pollo frito", 
      descripcion: "Pollo frito, cualquier paladar cae rendido antes este platillo",
      creador: 1,
      creado: "hace 2 dias",
      foto: "https://media.cnnchile.com/sites/2/2019/01/maxresdefault.jpg",
      likes: 12,
      hanLiked: [1,2,3,4],
      comentarios:[
        { byUserID: 1, nombre: "Juan", correo: "correojuan@gmail.com", comentario: "Buna receta y sencilla de preparar"}
      ],
      ingredientes:[
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharadita de pimienta",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír",
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharada de fécula de maíz",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír"
      ],
      instrucciones:[
        "Mezcla la harina con la paprika, la sal, la pimienta y la fécula de maíz. Reserva un momento.",
        "Remoja el pollo en la leche y empanízalo con la mezcla anterior.",
        "Calienta el aceite en una olla profunda (manéjala con cuidado para evitar accidentes).",
        "Fríe las piezas hasta que estén doradas; pásalas a papel absorbente hasta terminar. Sirve."
      ]
    },
    {
      idReceta: 4, 
      nombre: "Pozole", 
      descripcion: "Pozole de rancho, no es el pozole tipico de cuidad",
      creador: 2,
      creado: "hace 5 dias",
      foto: "https://www.mylatinatable.com/wp-content/uploads/2016/03/pozole-5-1024x681-1.jpg",
      likes: 45,
      hanLiked: [12,21,13,42],
      comentarios:[
        { byUserID: 3, nombre: "Ruben", correo: "ruben@gmail.com", comentario: "No sabia sobre este platillo pero esta rico"}
      ],
      ingredientes:[
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharadita de pimienta",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír",
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharada de fécula de maíz",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír"
      ],
      instrucciones:[
        "Mezcla la harina con la paprika, la sal, la pimienta y la fécula de maíz. Reserva un momento.",
        "Remoja el pollo en la leche y empanízalo con la mezcla anterior.",
        "Calienta el aceite en una olla profunda (manéjala con cuidado para evitar accidentes).",
        "Fríe las piezas hasta que estén doradas; pásalas a papel absorbente hasta terminar. Sirve."
      ]
    },
    {
      idReceta: 5, 
      nombre: "Pollo frito", 
      descripcion: "Pollo frito, cualquier paladar cae rendido antes este platillo",
      creador: 1,
      creado: "hace 2 dias",
      foto: "https://media.cnnchile.com/sites/2/2019/01/maxresdefault.jpg",
      likes: 12,
      hanLiked: [1,2,3,4],
      comentarios:[
        { byUserID: 1, nombre: "Juan", correo: "correojuan@gmail.com", comentario: "Buna receta y sencilla de preparar"}
      ],
      ingredientes:[
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharadita de pimienta",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír",
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharada de fécula de maíz",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír"
      ],
      instrucciones:[
        "Mezcla la harina con la paprika, la sal, la pimienta y la fécula de maíz. Reserva un momento.",
        "Remoja el pollo en la leche y empanízalo con la mezcla anterior.",
        "Calienta el aceite en una olla profunda (manéjala con cuidado para evitar accidentes).",
        "Fríe las piezas hasta que estén doradas; pásalas a papel absorbente hasta terminar. Sirve."
      ]
    },
    {
      idReceta: 6, 
      nombre: "Pozole", 
      descripcion: "Pozole de rancho, no es el pozole tipico de cuidad",
      creador: 2,
      creado: "hace 5 dias",
      foto: "https://www.mylatinatable.com/wp-content/uploads/2016/03/pozole-5-1024x681-1.jpg",
      likes: 45,
      hanLiked: [12,21,13,42],
      comentarios:[
        { byUserID: 3, nombre: "Ruben", correo: "ruben@gmail.com", comentario: "No sabia sobre este platillo pero esta rico"}
      ],
      ingredientes:[
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharadita de pimienta",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír",
        "1 taza de harina",
        "2 cucharadas de paprika",
        "1 cucharada de sal",
        "1 cucharadita de pimienta",
        "1 cucharada de fécula de maíz",
        "18 alitas o piernas de pollo sin piel",
        "1 taza de leche",
        "Aceite para freír"
      ],
      instrucciones:[
        "Mezcla la harina con la paprika, la sal, la pimienta y la fécula de maíz. Reserva un momento.",
        "Remoja el pollo en la leche y empanízalo con la mezcla anterior.",
        "Calienta el aceite en una olla profunda (manéjala con cuidado para evitar accidentes).",
        "Fríe las piezas hasta que estén doradas; pásalas a papel absorbente hasta terminar. Sirve."
      ]
    }
  ];

  
  return (
    
      <Layout>
        <div className="mx-3 my-2 row">
          {
            recetas.length != 0
            ? 
              recetas.map(receta => (
                <Receta
                  key ={receta.idReceta}
                  receta = {receta}
                />
              ))
            : null
          }
        </div>
      </Layout>
  )
}

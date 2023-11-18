const initialState = {
  products: [],
  user: {},
  logueado: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      //extraer la informacion requerída y eliminar productos repetidos colocandolos todos en un array de productos
      const productos = [];
      let repetido = false;
      action.payload.carts
        .map((c) => c.products)
        .map((l) =>
          l.forEach((r) => {
            repetido = false;
            productos.forEach((k) => {
              if (k.id === r.id) {
                repetido = true;
                return;
              }
            });
            if (!repetido) productos.push(r);
          })
        );

      return {
        ...state,
        products: productos,
      };

    case "POST_USER":
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(action.payload.savedUser));
      return {
        ...state,
        user: action.payload.savedUser,
        logueado: true,
      };

    case "LOG_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.clear();
      return {
        ...state,
        user: {},
        logueado: false,
      };

    case "LOG_IN":
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
        logueado: true,
      };

    case "VERIFY_SESION":
      return {
        ...state,
        user: JSON.parse(action.payload),
        logueado: true,
      };
    //   case "ADD_TO_COMPRA":
    //     //console.log(action.payload);
    //     if(state.compras.find(c=>c.id==action.payload.id)){
    //       alert("Este elemento ya se había agregado a compras")
    //       return {...state};
    //     }
    //     alert("Elemento agregado a Compras")
    //     return{

    //         ...state,
    //         compras: state.compras.concat([action.payload]),
    //         total: state.total+action.payload.price

    //     };

    //     case "TOTAL_UPDATE":
    //     //console.log(action.payload);

    //     return{

    //         ...state,
    //         total: state.total + action.payload

    //     };

    //     case "DEL_COMPRA":

    //   const compraux=state.compras.filter((c=>c.id!==action.payload));
    //   const total=compraux.reduce((acum,current)=>acum+current.price,0)

    //   return{
    //       ...state,
    //      compras:compraux,
    //      total: total

    //   };

    default:
      return { ...state };
  }
};
export default rootReducer;

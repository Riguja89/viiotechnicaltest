
const verifyFields=(caso, value, warnings, form)=>{

switch (caso) {
  case "name":
    if (!/^[A-Za-z\s]+$/g.test(value)) {
      warnings={...warnings, name: "*No debe tener Caracteres especiales ni números"}
    } else {
        warnings={ ...warnings, name: "" };
    }
    break;
  case "lastname":
    if (!/^[A-Za-z\s]+$/g.test(value)) {    
    warnings={...warnings, lastname: "*No debe tener Caracteres especiales ni números"}
} else {
    warnings={ ...warnings, lastname: "" };
}

    break;
  case "email":
    if (
      !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(value)
    ) {
    warnings={...warnings, email: "*Debe ser un correo eletrónico valido"}
} else {
    warnings={ ...warnings, email: "" };
}
    
    break;
  case "password":
    if ( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(value)) {
      warnings={...warnings, password: "*Debe tener entre 8 y 15 caracteres, mayúsculas, minúsculas, caracteres especiales (@$!%*?&#.), y sin espacios."}
    } else if (value.length < 8 || value.length > 15) {
      warnings={...warnings, password: "*Debe tener entre 8 y 15 caracteres"}
    } else if (form.confPassword !== value) {
      warnings={...warnings, password: "*Las contraseñas deben ser iguales"}
    } else {
      warnings={...warnings, password: "",confPassword: ""}
    }
    break;
  case "confPassword":
    if (form.password !== value) {
      warnings={...warnings, confPassword: "*Las contraseñas deben ser iguales"}
    } else {
        warnings={...warnings, confPassword: ""}
        if(warnings.password==="*Las contraseñas deben ser iguales"){
            warnings={...warnings, password: ""}
        }
    }
    break;

  default:
    break;
}

return warnings;
}

export default verifyFields;
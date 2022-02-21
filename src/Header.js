//TODO COMPONENTE EMPIEZA CON MAYUSCULA Y DESPUES MINUSCULA

//1.    IMPORTACION






//2.    FUNCION 
function Header (props) {                    //props son los argunmentos que le pasaremos de otro lado, este proceso se le conoce como prop drilling

    console.log(props)
    return(
        <header>
            <p>este es el header</p>
            <p>Hola {props.nombre}</p>
        </header>

    )
}







//3.    EXPORTACION
export default Header

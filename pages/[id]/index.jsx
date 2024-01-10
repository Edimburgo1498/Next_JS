import Link from 'next/link';
import  connectarDB  from '../../lib/mongoose';
import Movies from '../../models/Movies';

const MoviePage = ({success, error, movie}) => {

   console.log(movie)

  if(!success){
    return(
      <div className='container text-center my-5'>
        <h1>{error}</h1>
        <Link legacyBehavior href={"/"}>
          <a className='btn btn-success'>Volver...👨‍🔧</a>
        </Link>
      </div>
    )
  }
  
  return (
    <div>
        <h2>Detalle de Movie</h2>
        <div className='card m-3'>
          <div className='card-body'>
            <div className='card-title'>
                <h5 className='text-uppercase'>{movie.title}</h5>
            </div>
            <p className='fw-light'>{movie.plot}</p>
            <Link legacyBehavior href={"/"}>
          <a className='btn btn-success btn-sm m-1'>Volver...👨‍🔧</a>
        </Link>
        <Link legacyBehavior href={`/${movie._id}/Editar`}>
          <a className='btn btn-warning btn-sm m-1'>Editar 🔧</a>
        </Link>
        <button className=' btn btn-danger btn-sm m-1'>Eliminar</button>
          </div>
        </div>
    </div>
  )
}

export default MoviePage

export async function getServerSideProps({params}) {
    try {
        await connectarDB();
        
        const movie = await Movies.findById(params.id).lean();
        movie._id = `${movie._id}`

        if(!movie){
          return {props: {success: false, error: 'Pelicula no encontrada'}};
        }
        
  
        return {props: { success: true, movie}};
    } catch (error) {
      if(error.kind === 'ObjectId')
      return {props: {success: false, error: 'Id no valido'}};
    }
    return {props: {success: false, error: 'Error en el servidor'}};
  }

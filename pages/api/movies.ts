import  connectarDB  from '../../lib/mongoose';
import Movies from '../../models/Movies';

export default async function handler(req:any, res:any) {
  
  const {method} = req;

  switch (method) {
    case 'POST':
      try{
        await connectarDB();

        const movie = new Movies(req.body);
        movie.save();

        res.status(200).send({success: true, data: movie})
        break;
      }catch(error){
        res.status(400).json({ success: false, error })
      }
    default:
         res.status(500).json({ success: false, error: 'Falla en el Servidor' })
      break;
  }
  
}

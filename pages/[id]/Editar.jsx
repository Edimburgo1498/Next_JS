import React from 'react';
import Form from "../../components/form";
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = url => (
  fetch(url)
     .then(res => res.json())
     .then(json => json.data)
)

function Edit() { 

    const router = useRouter()
    const {id} = router.query;
    

    const { data: movie, error} = useSWR(id ? `/api/movies/${id}` : null, fetcher)
    console.log(movie)
    // if (!movie) {
    //   return(
    //     <div className="container mt-5 text-center">
    //       <h1>Loading...</h1>
    //     </div>
    //   )

    //   if (error) {
    //     return( 
    //       <div className="container color-red">
    //         <h3>Error</h3>
    //       </div>
    //     ) 
    //   }
      
    // }
  return (
    <div>
      <Form typeForm={true}/>
    </div>
  )
}

export default Edit;

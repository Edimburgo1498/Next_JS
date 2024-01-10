import Link from "next/link";
import { useRouter } from "next/router";
import React, { Component, useState } from "react";

const Form = ({typeForm = true}) => {

    const router = useRouter();
    const [movie, setMovie] = useState({ title: "", plot: "" });
  
    const handleChange = (e) => {
      const { value, name } = e.target;
      setMovie({ ...movie, [name]: value });
    };
  
    const postData = async () => {
      try {
        const res = await fetch("/api/movies", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(movie),
        });
         let data = await res.json();
        if(data.data.title != "" || data.data.plot != ""){
          router.push('/')
        }
      } catch (error) {
        console.log(movie);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      postData();
    };

    return (
      <div className="container">
        <h2 className="my-3">{typeForm ? 'Editar Movie' : 'Agregar Movie'}</h2>
        <form>
          <input
            className="form-control my-2"
            type="text"
            name="title"
            placeholder="Movie"
            autoComplete="off"
            value={movie.title}
            onChange={handleChange}
          />
          <input
            className="form-control my-2"
            type="text"
            name="plot"
            placeholder="Plot"
            autoComplete="off"
            value={movie.plot}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleSubmit} className="btn btn-primary w-100 mt-3">
          Add
        </button>
        <Link legacyBehavior href={"/"}>
          <a className="btn btn-warning w-100 mt-3">Back</a>
        </Link>
      </div>
    );
  };
  
  export default Form;
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * 
    Important Notice

    Whenever we use another database or outsideed database we have to set domains into next.config.js
 */

const Movie = ({ title, id, release_date, poster_path }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h2>Releast Date: {release_date} </h2>
      <Link href={`/${id}`}>
        <Image src={imagePath + poster_path} width={800} height={800} alt={title}/>
      </Link>
    </div>
  );
};

export default Movie;

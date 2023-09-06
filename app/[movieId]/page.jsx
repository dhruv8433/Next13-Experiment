import Image from "next/image";
import React, { Suspense } from "react";
import styles from "../page.module.css";
import Loading from "./Loading";

const page = async ({ params }) => {
  const movie = params.movieId;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    // if we want to fetch data everytime or after certain amount of time
    //,{next : {revalidate: 0}}
  );

  const res = await data.json();

  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className={styles.main}>
      <div>
        <h2 className="text-4xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime : {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm">
          {res.status}
        </h2>

        {/* loading Suspense  */}
        <Suspense fallback={<Loading />}>
          <Image
            className="my-12 w-full"
            src={imagePath + res.backdrop_path}
            height={1000}
            width={1000}
            // loader={imagePath}
            // placeholder="blur"
            // blurDataURL={imagePath + res.backdrop_path}
            alt="movie image"
            // to render main image on main page
            priority
          />
        </Suspense>
        <p>{res.overview}</p>
      </div>
    </div>
  );
};

export default page;

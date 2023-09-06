import React from 'react';
import Movie from './Movie';
import styles from './page.module.css';

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  // Check if res.results exists and is an array before mapping over it
  if (!res.results || !Array.isArray(res.results)) {
    return (
      <main className={styles.main}>
        <p>No movie data available.</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}

// import Button from "./Button";
import Movie from "./Movie";
import styles from "./page.module.css";

export default async function Home() {
  let response = [];

  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );

    if (!data.ok) {
      throw new Error("API request failed");
    }

    const res = await data.json();
    response = res.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <main className={styles.main}>
      {/* <h1>Hello Next </h1> */}
      <div className="grid gap-16 grid-cols-fluid">
        {response.map((movie) => (
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

{
  /* just like this we can create small components and call in everywhere when needed for consistansy */
}
{
  /* <Button>Click</Button> */
}

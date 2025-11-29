import React, { useEffect, useState } from "react";
import axios from "../../Utils/Axios";
import requests from "../../Utils/Requests";
import styles from "./Banner.module.css";
const Banner = () => {
  const [movie, setMovie] = useState({});

  // Truncate function to shorten the description
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results;
        const randomMovie = results[Math.floor(Math.random() * results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.banner_contents}>
        <h1 className={styles.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className={styles.banner_buttons}>
          <button className={`${styles.banner_button}  ${styles.play}`}>
            Play
          </button>
          <button className={`${styles.banner_button} ${styles.list}`}>
            My List
          </button>
        </div>

        <h1 className={styles.banner_description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={styles.banner_fadeBottom} />
    </header>
  );
};

export default Banner;

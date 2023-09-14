'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import styles from './singlemovie.module.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleMovie = () => {
   const searchParams = useSearchParams();
   const id = searchParams.get('id')
   console.log(id)
    const [movie, setMovie] = useState(null);
    console.log(movie)
    
    const fetchById = async () => {
       
        try {
            const apiRequest = await fetch(
             `https://api.themoviedb.org/3/movie/${id}`,
              {
                method: "GET",
                headers: {
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmE5MzdlYTVkODc1YjBiZGRkZTI0MDA3ODJlNTQzNCIsInN1YiI6IjY0ZmZmMjI5ZTBjYTdmMDEyZWI4OGY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X8o-EzCfeRuBrPEnOl9oyseIQNJloTeR5zDSNs3NZAg'
                }
              })
      
              const response = await apiRequest.json();
              if(apiRequest.status === 200){
                console.log(response)
                setMovie(response)
              }
              else{
                toast.error("something went wrong, please reload the page", {
                  position: "top-right",
                  theme: "colored",
                });
              }
      
          } catch (error) {
            toast.error("something went wrong, please reload the page", {
              position: "top-right",
              theme: "colored",
            });
          }
    }

    useEffect(() => {
        fetchById()
    },[searchParams])

    return(
        <main className={styles.container}>
            <nav> 
                <div className={styles.brandName}>
                <Image
                src='/tv.png'
                width={50}
                height={50}
                alt='logo'
                />
                <div className={styles.brandText}>Movie Box</div>
                </div>

                <div className={styles.link}>
                <Image
                src='/Home.png'
                width={25}
                height={25}
                alt='house'
                />
                <div className={styles.linkText}>Home</div>
                </div>

                <div className={styles.activeLink}>
                <Image
                src='/projector.png'
                width={25}
                height={25}
                alt='house'
                />
                <div className={styles.activeLinkText}>Movies</div>
                </div>

                <div className={styles.link}>
                <Image
                src='/tvshow.png'
                width={25}
                height={25}
                alt='house'
                />
                <div className={styles.linkText}>TV Series</div>
                </div>

                <div className={styles.link}>
                <Image
                src='/Calendar.png'
                width={25}
                height={25}
                alt='house'
                />
                <div className={styles.linkText}>Upcoming</div>
                </div>


               
                <div className={styles.logoutLink}>
                <Image
                src='/logout.png'
                width={30}
                height={30}
                alt='house'
                />
                <div className={styles.linkText}>logout</div>
                </div>
            </nav>
            {movie ? <div className={styles.overviewContainer}>
                <div className={styles.singlePoster}>
                <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                layout='fill'
                alt='house'
                className={styles.posterImg}
                />

                <div className={styles.playHouse}>
                    <div>
                    <div className={styles.playContainer}>
                    <Image
                    src='/playTrailer.png'
                    width={50}
                    height={50}
                    alt='play'
                    />
                    </div>
                    <div className={styles.watchTrailer}>
                    Watch Trailer
                    </div>
                    </div>
                </div>
                </div>

                <div className={styles.overviewName}>
                <div className={styles.movieName} data-testid='movie-title'>
                {movie.title}
                </div>
                <div> • </div>
                <div className={styles.year} data-testid='movie-release-date'>
                 {movie.release_date}
                </div>
                <div> • </div>
                <div className={styles.pg}>
                PG-13    
                </div>
                <div>•</div>
                <div className={styles.time} data-testid='movie-runtime'>
               {movie.runtime}mins
                </div>

                <button>Action</button>
                <button>Drama</button>
                </div>

                <div className={styles.summaryGrid}>
                <div>
                <div className={styles.summary} data-testid='movie-overview'>
                {movie.overview}
                </div>

                <div className={styles.names}>
                Director: <span>Joseph Kosinki</span>
                </div>
                <div className={styles.names}>
                Writers: <span>Joseph Kosinki</span>
                </div>
                <div className={styles.names}>
                Stars: <span>Joseph Kosinki</span>
                </div>
                </div>
                <div className={styles.grid2}>
                    <button className={styles.btn1}>See Showtimes</button>
                    <button  className={styles.btn2}>More watch options</button>
                </div>
                </div>

            </div> : "loading..."} 
        </main>
    )
}

export default SingleMovie;
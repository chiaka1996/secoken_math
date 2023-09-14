'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  console.log(movieList)

  const fetchAllMovies = async () => {
    try {
      const apiRequest = await fetch(
       'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        {
          method: "GET",
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmE5MzdlYTVkODc1YjBiZGRkZTI0MDA3ODJlNTQzNCIsInN1YiI6IjY0ZmZmMjI5ZTBjYTdmMDEyZWI4OGY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X8o-EzCfeRuBrPEnOl9oyseIQNJloTeR5zDSNs3NZAg'
          }
        })

        const response = await apiRequest.json();
        if(apiRequest.status === 200){
          const topTen = response.results.slice(0,10)
          console.log(topTen)
          setMovieList([...topTen])
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
    fetchAllMovies()
  },[])

  return (
    <main className={styles.main}>
      <ToastContainer />
      <section className={styles.heroSection}> 
      <nav className={styles.navigation}>
      <div className={styles.brandName}>
      <Image
       src='/tv.png'
       width={50}
       height={50}
       alt='logo'
       />
       <div className={styles.brandText}>Movie Box</div>
      </div>

      <div className={styles.searchInput}>
      <Image
       src='/search.png'
      width={15}
      height={15}
       alt='search'
       className={styles.searchImg}
       />
        <input 
        type="text"
        placeholder='what do you want to watch?'
        />
      </div>

      <div className={styles.menuIcon}>
        <div className={styles.signInText}>Sign in</div>
        <div className={styles.menuBackground}>
        <Image
          src='/menu.png'
          width={15}
          height={5}
          alt='logo'
          />
          </div>
      </div>
      </nav>
      <Image
       src='/Poster.png'
       layout='fill'
       alt='poster'
       />
       <div className={styles.heroText}>
        <div className={styles.heroTextHeader}>
        John Wick 3 : 
        Parabellum
        </div>
        <div className={styles.heroRating}>
        <div className={styles.ratingImg}>
        <Image
          src='/imdb.png'
          width={25}
          height={13}
          alt='imdb'
          />
          <span>85/100</span>
        </div>
        <div className={styles.ratingImg}>
        <Image
          src='/tomato.png'
          width={13}
          height={13}
          alt='tomato'
          />
          <span>97%</span>
        </div>
        </div>

        <div className={styles.heroSubText}>
        John Wick is on the run after killing a member of the 
        international assassins' guild, and with a $14 million price 
        tag on his head,he is the target of hit men and women everywhere.
        </div>

        <button className={styles.playButton}>
        <Image
          src='/play.png'
          width={20}
          height={20}
          alt='play'
          />
          <span>WATCH TRAILER</span>
        </button>
       </div>
      </section>

      <div className={styles.featuredDiv}>
        <div className={styles.featuredHeader}>Featured Movie</div>
        <div className={styles.seeMore}>
        <span>See more </span>
        <Image
          src='/arrow.png'
          width={12}
          height={14}
          alt='play'
          />
        </div>
      </div>

      <section className={styles.cardGrid}> 
      {movieList.map((movie, i) => <Link  
      href={{ pathname: '/movie/', query:{id : movie.id}  }}   
       style={{ textDecoration: "none"}} 
       >
        <div 
        data-testid='movie-card'
        className={styles.cardItem} 
        key={i}
        
        >
        <div className={styles.heartContainer}> 
        <Image
          src='/heart.png'
         width={16}
         height={13}
          alt='heart'
          />
        </div>
        <div className={styles.cardImgContainer}>
        <Image
        data-testid= 'movie-poster'
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          layout='fill'
          alt='play'
          />
        </div>
        <div className={styles.cardLittleText} data-testid='movie-release-date'>
        {movie.release_date}
        </div>
        <div className={styles.movieName} data-testid='movie-title'>{movie.title}</div>

        <div className={styles.cardHeroRating}>
        <div className={styles.ratingImg}>
        <Image
          src='/imdb.png'
          width={25}
          height={13}
          alt='imdb'
          />
          <span>85/100</span>
        </div>
        <div className={styles.ratingImg}>
        <Image
          src='/tomato.png'
          width={13}
          height={13}
          alt='tomato'
          />
          <span>97%</span>
        </div>
        </div>
        <div  className={styles.cardLittleText}>Action, Adventure, Horror</div>
      </div>
      </Link>
      )}
      
      </section>

      <section className={styles.footer}>
      <div className={styles.socialMediaIcon}>
      <Image
      src='/facebook.png'
      width={20}
      height={20}
      alt='facebook'
      />

      <Image
      src='/instagram.png'
      width={20}
      height={20}
      alt='instagram'
      />

      <Image
      src='/twitter.png'
      width={20}
      height={20}
      alt='twitter'
      />

      <Image
      src='/youtube.png'
      width={20}
      height={20}
      alt='youtube'
      />
      </div>

      <div className={styles.policies}>
        <span>Conditions of Use</span>
        <span>Privacy & Policy</span>
        <span>Press Room</span>
      </div>

      <div className={styles.testimonial}>
      © 2021 MovieBox by Chiaka. Built under pressure  
      </div>
      </section>

    </main>
  )
}

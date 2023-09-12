import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
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
      <div className={styles.cardItem}>
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
          src='/card.png'
          layout='fill'
          alt='play'
          />
        </div>
        <div className={styles.cardLittleText}>
        USA 2016 - Current
        </div>
        <div className={styles.movieName}>Stranger Things</div>

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

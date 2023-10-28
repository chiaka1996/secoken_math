'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Home() {
  return (
    <main>
     <nav>
      <div className='brandName'>Secoken</div>
      <div className='linksDiv'>
        <div>About us</div>
        <div>Educator Resources</div>
        <div>Student Resources</div>
        <div>Faq</div>
        <div>Donate</div>
      </div>

      <button className='signInButton'>Sign in</button>
     </nav>

     <section className='heroSection'>
      <div className='textSection'>
    <div className='heroHeader'>Simplified Mathematics For Every Student And Classroom.</div>
    <div className='heroSubset'>We’re an organization with the mission to provide affordable, 
      world-class education for anyone, anywhere.</div>
      <button className='learnMoreBtn'>Learn more</button>
      </div>
    <div className='imgDiv'>
    <Image 
    src='/secokenBannerImage.jpg'
    layout='fill'
    alt='banner'
    className='bannerImg'
    />
    </div>
     </section>

     <section className='aboutUs'>
      <div className='aboutImg'>
      <Image 
       src='/secokenAboutImg.jpg'
      layout='fill'
      alt='aboutImg'
      
      />
      </div>

      <div className='aboutWriteUp'>
        <div className='aboutHeader'>Who we are!</div>
        <div>
        An education-technology organization, creating product that help students foster 
        learning. The largest gathering of Mathematics competitions aims to encourage, and celebrate 
        outstanding students, thereby opening them to opportunities for the future.
        </div>

        <div className='aboutMission'>
        Created by experts, Secoken Academy’s library of trusted practice and 
        lessons covers math, science, 
        and more. Always free for learners and teachers.
        </div>

        <div className='aboutMission'>Our mission to provide affordable, 
      world-class education for anyone, anywhere.</div>
      </div>
     </section>

     <section className='educatorResource'>
     <div className='educatorWriteUp'>
        <div className='resourcesHeader'>Educator Resources</div>
        <div className='materialContainerGrid'>
        <div className='materialContainer'>
          <div>
        <Image 
        width="50" 
        height="50" 
        src="https://img.icons8.com/ios/50/book-reading.png" 
        alt="book-reading"/>
          <div className='materialName'>Teachers Material</div>
          </div>
          </div>
        <div className='materialContainer'>
          <div>
        <Image 
        width="50" 
        height="50" 
        src="https://img.icons8.com/ios/50/chemistry-book.png" 
        alt="chemistry-book"
        />
          <div className='materialName'>Teachers Guide</div>
          </div>
          </div>
        <div className='materialContainer'>
          <div>
        <Image 
        width="50"
         height="50" 
        src="https://img.icons8.com/ios/50/comment-discussion.png"
         alt="comment-discussion"/>
          <div className='materialName'>Join Teachers Forum</div>
          </div>
          </div>
        <div className='materialContainer'>
          <div>
        <Image
        width="32" 
        height="32" 
        src="https://img.icons8.com/ios/50/book--v1.png" 
        alt="book-1"/>
          <div className='materialName'>Question Bank</div>
          </div>
          </div>

        <div className='materialContainer'>
          <div>
        <Image 
        width="50" 
        height="50" 
        src="https://img.icons8.com/ios/50/certificate--v1.png" 
        alt="certificate--v1"/>
          <div className='materialName'>Become a Certified Educator</div>
          </div>
          </div>
          </div>
      </div>

      <div className='educatorImgDivContainer'>      
      <Image 
       src='/educator3.png'
      alt='aboutImg'
      width="250"
      height='250'
      className='educatorImg1' 
      />
     
      <Image 
       src='/educator5.jpg'
      alt='aboutImg'
      width="250"
      height='250'
      className='educatorImg2'
      />
      </div>
     </section>

     <section className='educatorResource'>
     <div className='educatorImgDivContainer'>      
      <Image 
       src='/studentimg4.jpg'
      alt='studentImg'
      width="250"
      height='250'
      className='studentimg4' 
      />
     
      <Image s
       src='/studentimg5.jpeg'
      alt='studentImg'
      width="250"
      height='250'
      className='studentimg5'
      />
      </div>
     <div className='educatorWriteUp'>
        <div className='resourcesHeader'>Student Resources</div>
        <div className='materialContainerGrid'>
        <div className='materialContainer'>
          <div>
        <Image 
        width="50" 
        height="50" 
        src="https://img.icons8.com/ios/50/book-reading.png" 
        alt="book-reading"/>
          <div className='materialName'>Get a Tutor</div>
          </div>
          </div>
        <div className='materialContainer'>
          <div>
        <Image 
        width="50" 
        height="50" 
        src="https://img.icons8.com/ios/50/chemistry-book.png" 
        alt="chemistry-book"
        />
          <div className='materialName'>Learn Math</div>
          </div>
          </div>
        <div className='materialContainer'>
          <div>
        <Image 
        width="50"
         height="50" 
        src="https://img.icons8.com/ios/50/comment-discussion.png"
         alt="comment-discussion"/>
          <div className='materialName'>Practice Math</div>
          </div>
          </div>
        <div className='materialContainer'>
          <div>
        <Image
        width="32" 
        height="32" 
        src="https://img.icons8.com/ios/50/book--v1.png" 
        alt="book-1"/>
          <div className='materialName'>Join Club</div>
          </div>
          </div>

        <div className='materialContainer'>
          <div>
        <Image 
        width="50" 
        height="50" 
        src="https://img.icons8.com/ios/50/certificate--v1.png" 
        alt="certificate--v1"/>
          <div className='materialName'>Earn Certificates</div>
          </div>
          </div>
          </div>
      </div>
     </section>

     <section className='donateContainer'>
      <div className='donateSubDiv'>
        <div className='donateHeader'>Bringing the Future of math learning to Your School</div>
        <div className='donateSubHeader'>Transform your school’s math performance with
          targeted, 1-on-1 support for every student</div>

          <button className='teacherBtn'>Teachers, try for free</button> <br/>
          <button className='donateBtn'>Sponsor Us</button>
      </div>
     </section>

     <footer> All rights reserved 2023, built with love</footer>

    </main>
  )
}

// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <header class="header">

        <a href="#" class="logo"><span>Cresc</span>endo</a>

        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#event">event</a>
          <a href="#about">about</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
        </nav>

        <div id="menu-bars" class="fas fa-bars"></div>

      </header>
      {/* <Header /> */}
      <section class="home" id="home">

        <div class="content">
          <h3>Its Time To Celebrate!<span> Its Time For Crescendo! </span></h3>
        </div>

        <div class="swiper-container home-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="images/slide-1.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="images/slide-2.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="images/slide-3.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="images/slide-4.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="images/slide-5.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="images/slide-6.jpg" alt="" /></div>
          </div>
        </div>

      </section>
      <section class="event" id="event">

        <h1 class="heading"> our <span>events</span> </h1>

        <div class="box-container">

          <div class="box">
            <i class="fas fa-clock"></i>
            <h3>time</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
            <a href="#" class="btn">Time Selection</a>
          </div>

          <div class="box">
            <i class="fas fa-map-marker-alt"></i>
            <h3>venue</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
            <a href="#" class="btn">Venue Selection</a>
          </div>

          <div class="box">
            <i class="fas fa-star"></i>
            <h3>Participation Points</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
            <a href="#" class="btn">Participation Points</a>
          </div>

          <div class="box">
            <i class="fas fa-stopwatch"></i>
            <h3>Deadline For Registration</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
            <a href="#" class="btn">Deadline For Registration</a>
          </div>
        </div>

      </section>

      <section class="about" id="about">

        <h1 class="heading"><span>about</span> us </h1>

        <div class="row">

          <div class="image">
            <img src="images/about-img.jpg" alt="" />
          </div>

          <div class="content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ipsum.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore fugiat ut esse perferendis perspiciatis provident dolores fuga in facilis culpa possimus, quia praesentium itaque, sapiente quasi harum rem asperiores.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero expedita incidunt provident quibusdam aut odit, numquam nesciunt similique nisi.</p>
            <a href="#" class="btn">contact us</a>
          </div>

        </div>

      </section>

      <section class="gallery" id="gallery">

        <h1 class="heading">our <span>gallery</span></h1>

        <div class="box-container">

          <div class="box">
            <img src="images/g-1.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/g-2.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/g-3.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/g-4.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/g-5.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/g-6.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/g-7.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/g-8.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/g-9.jpg" alt="" />
            <h3 class="title">photos and events</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

        </div>

      </section>

      <section class="reivew" id="review">

        <h1 class="heading">user <span>review</span></h1>

        <div class="review-slider swiper-container">

          <div class="swiper-wrapper">

            <div class="swiper-slide box">
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src="images/pic-1.jpg" alt="" />
                <div class="user-info">
                  <h3>john doe</h3>
                  <span>happy user</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src="images/pic-2.jpg" alt="" />
                <div class="user-info">
                  <h3>john doe</h3>
                  <span>happy user</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src="images/pic-3.jpg" alt="" />
                <div class="user-info">
                  <h3>john doe</h3>
                  <span>happy user</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
            </div>

            <div class="swiper-slide box">
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src="images/pic-4.jpg" alt="" />
                <div class="user-info">
                  <h3>john doe</h3>
                  <span>happy user</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
            </div>

          </div>

        </div>

      </section>
      <section class="contact" id="contact">

        <h1 class="heading"> <span>contact</span> us </h1>

        <form action="">
          <div class="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <div class="inputBox">
            <input type="number" placeholder="number" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" class="btn" />
        </form>

      </section>

      <section class="footer">

        <div class="box-container">

          <div class="box">
            <h3>branches</h3>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> bandra </a>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> dahisar </a>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> versova </a>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> santacruz </a>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> thane </a>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#"> <i class="fas fa-arrow-right"></i> home </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> events </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> about </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> gallery </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> review </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> contact </a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
            <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
            <a href="#"> <i class="fas fa-envelope"></i> jonathanduarte@gmail.com </a>
            <a href="#"> <i class="fas fa-envelope"></i> srijitapatra@gmail.com </a>
            <a href="#"> <i class="fas fa-envelope"></i> rishabhgupta@gmail.com </a>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> mumbai, india - 400055 </a>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
          </div>

        </div>

        <div class="credit"> created by <span>Synergy - #26</span></div>

      </section>

      {/* <Footer /> */}
      {/* <div class="theme-toggler">

        <div class="toggle-btn">
          <i class="fas fa-cog"></i>
        </div>

        <h3>choose color</h3>

        <div class="buttons">
          <div class="theme-btn" style="background: #3867d6;"></div>
          <div class="theme-btn" style="background: #f7b731;"></div>
          <div class="theme-btn" style="background: #ff0033;"></div>
          <div class="theme-btn" style="background: #013220;"></div>
          <div class="theme-btn" style="background: #fa8231;"></div>
          <div class="theme-btn" style="background: #FC427B;"></div>
        </div>

      </div> */}

    </div>
  )
}

export default Home

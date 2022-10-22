// import Header from '../components/Header';
// import Footer from '../components/Footer';
import styles from './home.module.css';

const Home = () => {

  var slideIndex = 0;
  showSlides();
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  return (
    <div>
      <section class="home" id="home">
        <div class="content">
          <h3>Its Time To Celebrate!<span> Its Time For Crescendo! </span></h3>
        </div>
        <div class="slideshow-container">
          <div class="mySlides fade">
            <div class="numbertext">1 / 7</div>
            <img src="https://synergy.stucocrce.com/assets/imgs/Synergy_hackathon.jpg" style="width:100%" alt="Synergy Hackathon" />
            <div class="text">Synergy Hackathon</div>
          </div>
          <div class="mySlides fade">
            <div class="numbertext">2 / 7</div>
            <img src="https://synergy.stucocrce.com/assets/imgs/IMG-20221012-WA0017.jpg" style="width:100%" alt="Nerf Battle" />
            <div class="text">Nerf Battle</div>
          </div>
          <div class="mySlides fade">
            <div class="numbertext">3 / 7</div>
            <img src="https://synergy.stucocrce.com/assets/imgs/ASME_CRCE_Synergy%2022'_Poster.jpg" style="width:100%" alt="Slytherin Pirates" />
            <div class="text">Slytherin Pirates</div>
          </div>
          <div class="mySlides fade">
            <div class="numbertext">4 / 7</div>
            <img src="https://synergy.stucocrce.com/assets/imgs/Codelabs.png" style="width:100%" alt="Trivia Battle" />
            <div class="text">Trivia Battle</div>
          </div>
          <div class="mySlides fade">
            <div class="numbertext">5 / 7</div>
            <img src="https://synergy.stucocrce.com/assets/imgs/CSI_Synergy_Poster.png" style="width:100%" alt="CSI Fear-Fair" />
            <div class="text">CSI Fear-Fair</div>
          </div>
          <div class="mySlides fade">
            <div class="numbertext">6 / 7</div>
            <img src="https://synergy.stucocrce.com/assets/imgs/WhatsApp%20Image%202022-10-11%20at%208.00.56%20PM.jpeg" style="width:100%" alt="Kickin'it" />
            <div class="text">Kickin'it</div>
          </div>
          <div class="mySlides fade">
            <div class="numbertext">7 / 7</div>
            <img src="https://synergy.stucocrce.com/assets/imgs/Synergy_poster_GDA%20(1).png" style="width:100%" alt="Unlock this Co." />
            <div class="text">Unlock this Co.</div>
          </div>

          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
      </section>
      <section class="event" id="event">

        <h1 class="heading"> our <span>events</span> </h1>

        <div class="box-container">

          <div class="box">
            <i class="fas fa-user-plus"></i>
            <h3>Events</h3>
            <p>Click below to see details like time, venue, participation points, deadline for registration.</p>
            <a href="#" class="btn">Register Here</a>
          </div>
        </div>

      </section>

      <section class="review" id="review">

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

    </div>
  )
}

export default Home

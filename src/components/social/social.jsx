import React from "react";
import "./styles/social.css";

function Social() {
  return (
    <main>
      <div className="container">
        <div className="header">
          <section className="intro">
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </section>
          <section className="rates">
            <div className="rate rate1">
              <div className="stars">
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
              </div>
              <p>Rated 5 Stars in Reviews</p>
            </div>
            <div className="rate rate2">
              <div className="stars">
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
              </div>
              <p>Rated 5 Stars in Report Guru</p>
            </div>
            <div className="rate rate3">
              <div className="stars">
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
                <img src="/images/icon-star.svg" alt="star" />
              </div>
              <p>Rated 5 Stars in BestTech</p>
            </div>
          </section>
        </div>
        <div className="reviews">
          <div className="review review1">
            <div className="person">
              <img src="/images/image-colton.jpg" alt="Colton Smith" />
              <span className="person-info">
                <p className="name">Colton Smith</p>
                <p className="desc">Verified Buyer</p>
              </span>
            </div>
            <p>
              - "We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent!"
            </p>
          </div>
          <div className="review review2">
            <div className="person">
              <img src="/images/image-irene.jpg" alt="Irene Roberts" />
              <span className="person-info">
                <p className="name">Irene Roberts</p>
                <p className="desc">Verified Buyer</p>
              </span>
            </div>
            <p>
              - "Customer service is always excellent and very quick turn
              around. Completely delighted with the simplicity of the purchase
              and the speed of delivery."
            </p>
          </div>
          <div className="review review3">
            <div className="person">
              <img src="/images/image-anne.jpg" alt="Anne Wallace" />
              <span className="person-info">
                <p className="name">Anne Wallace</p>
                <p className="desc">Verified Buyer</p>
              </span>
            </div>
            <p>
              - "Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone!"
            </p>
          </div>
        </div>
      </div>

      <div className="attribution">
        <span>
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
        </span>
        <span>
          Coded by <a href="#">qltran</a>.
        </span>
      </div>
    </main>
  );
}

export default Social;

import React from 'react';
// import illu2 from '../Asstes/illu2.PNG' 
import p02 from '../Asstes/02.jpg'
// import styled from 'styled-components';
const MissionsStyle = styled.div` 
* {
  box-sizing: border-box;
}
body {
background-color: #FFE53B;
background-image: linear-gradient(147deg, #FFE53B 0%, #fd3838 74%);
min-height: 100vh; 
display: flex;
}

.blog-slider {
    width: 100%;
    position: relative;
    max-width: 800px;
    margin: auto;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 25px;
    border-radius: 25px;
    height: 400px;
    transition: all .3s;
  
   
  @media screen and (max-width: 992px) {
    max-width: 680px;
        height: 400px;
  }
  
  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
  
  
  @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 350px;
  }
  
  &__item {
    display: flex;
    align-items: center;
    
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
    
    &.swiper-slide-active {
      .blog-slider__img {
        img {
        //   opacity: 1;
        transition-delay: .3s;
        }
      }
      .blog-slider__content {
        > * {
      
        opacity: 1;
        transform: none;

      @for $i from 0 to 15 {
        &:nth-child(#{$i + 1}) {
          transition-delay: $i * 0.1 + 0.3s;
        }
      }

    }
      }
    }
    
  }
  
  &__img {
     // width: 40%;
    width: 300px;
    flex-shrink: 0;
    height: 300px;
    background-image: linear-gradient(326deg, #07B061 0%, #1C6442  74%); 
    // background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    // box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    box-shadow: 0 0px 9px #25940f;
    border-radius: 20px;
    transform: translateX(-80px);
   
    overflow: hidden;
    
    &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(326deg, #07B061 0%, #1C6442  74%);

    // background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      border-radius: 20px;
    // opacity: 0.8;
    opacity: 0;
}
    
    img {
      width: 100%;
    height: 100%;
    object-fit: cover;
      display: block;
       opacity: 1;
      border-radius: 20px;
    transition: all .3s;
    }
    
    
    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
    transform: translateY(-50%);
      width: 90%;
  }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
     @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 270px;
  }
  }
  
  &__content {
    // width: 60%;
    padding-right: 0px;
    @media screen and (max-width: 992px) {
      // width: 55%;
    }
    @media screen and (max-width: 768px) {
          margin-top: -80px;
    text-align: center;
    padding: 0 30px;
    }
    
    @media screen and (max-width: 576px) {
      padding: 0
    }
    > * {
      opacity: 1;
      transform: translateY(25px);
      transition: all .4s;
      
      
    }
    
  }
  
  &__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }
  
  &__title {
    font-size: 24px;
    font-weight: 700;
    // color: #0d0925;
    margin-bottom: 4px;
  }
  
  &__text {
    // color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }
  
  &__button {
        display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    // color: #fff;
    box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    text-decoration: none;
    font-weight: 500;
        justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
    
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
    
}
  &__pagination {
   position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px!important;
    text-align: center;
    left: auto!important;
    top: 50%;
    bottom: auto!important;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
     transform: translateX(-50%);
          left: 50%!important;
      top: 205px;
    width: 100%!important;
    display: flex;
    justify-content: center;
    align-items: center;
    }
     &.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 8px 0;
       @media screen and (max-width: 768px) {
         margin: 0 5px;
       }
}
    
    .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    display: block;
    border-radius: 10px;
    background: #062744;
    opacity: 0.2;
      transition: all .3s;
      &-active {
    opacity: 1;
    background: #fd3838;
    height: 30px;
    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
        
        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
}
}
    
  }
  
}
`;
export default function NewMission() {
    return (
        <MissionsStyle>
            <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img"> 
                            <img src={p02} alt=""/>
                        </div>
                        <div className="blog-slider__content"> 
                            <div className="blog-slider__title ">Our Misson</div>
                            <div className="blog-slider__text">
                              {/* TaxOnTracks’ mission is to assist our valued clients and people in achieving success and desired
                        results through timely, relevant advice and services based on contemporary knowledge.  We will be fair
                        minded in dealing with clients and staff and strive to build synergies that make us more effective and
                        efficient and enhance the perception that WebsterRogers is “a firm you can count on.” */}
                        At our tax and accounting firm, our mission is to provide professional services to our clients in a timely and efficient manner. We strive to make the complex world of taxes and accounting accessible and understandable for our clients, and to help them achieve their financial goals. Our team of experienced professionals is dedicated to delivering personalized, reliable solutions that meet the unique needs of each and every one of our clients. Whether you are a small business owner, an individual looking to file your taxes, or a large corporation in need of financial guidance, we are here to help you succeed.

                        </div>
                            {/* <a href="/" className="blog-slider__button">READ MORE</a> */}
                        </div>
                    </div>
                     
                </div>
                <div className="blog-slider__pagination"></div>
            </div>
        </MissionsStyle>
    );
}

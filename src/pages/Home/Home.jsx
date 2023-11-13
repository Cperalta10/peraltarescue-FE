import React, { useState } from "react";
import "./Home.css";
import Sadcat from "../../data/img/sadcat.jpg";
import { catList } from "../../data/CatsList";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return catList.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === catList.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div className="home">
      <div className="catList">
        <section
          aria-label="Image Slider"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              overflow: "hidden",
            }}
          >
            {catList.map((cat, index) => (
              <img
                key={cat.catImg}
                src={cat.catImg}
                className="imgSlider"
                aria-hidden={imageIndex !== index}
                alt={cat.catName}
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            ))}
          </div>
          <div className="catInfo">
            <h2>{catList[imageIndex].catName}</h2>
            <p>{catList[imageIndex].age}</p>
            <p>{catList[imageIndex].gender}</p>
            <p>{catList[imageIndex].breed}</p>
          </div>
          <button
            onClick={showPrevImage}
            className="imageSliderBtn"
            style={{ left: 0 }}
            aria-label="View Previous Image"
          >
            <ArrowBigLeft aria-hidden />
          </button>
          <button
            onClick={showNextImage}
            className="imageSliderBtn"
            style={{ right: 0 }}
            aria-label="View Next Image"
          >
            <ArrowBigRight aria-hidden />
          </button>
          <div
            style={{
              position: "absolute",
              bottom: ".5rem",
              left: "50%",
              translate: "-50%",
              display: "flex",
              gap: ".25rem",
            }}
          >
            {catList.map((_, index) => (
              <button
                className="imgSlideDotBtn"
                aria-label={`View Image ${index + 1}`}
                key={index}
                onClick={() => setImageIndex(index)}
              >
                {index === imageIndex ? (
                  <CircleDot aria-hidden />
                ) : (
                  <Circle aria-hidden />
                )}
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="missionSection">
        <img src={Sadcat} height="400px" alt="sad cat in cage" />
        <div>
          <h2>Our Mission</h2>
          <p>
            Our primary objective is to enhance the survival rates of rescued
            felines. It is a matter of concern that shelter cats spend the
            majority of their time confined in cages, with minimal social
            interaction with other felines or humans. According to estimates
            provided by the Humane Society, a staggering 70% of cats in shelters
            are euthanized, a statistic that underscores the potential for
            saving a significant number of these animals with reasonable
            interventions. Consequently, our mission is dedicated to raising the
            survival rates of rescued cats.
          </p>
        </div>
      </div>

      <div className="botHome">
        <h2>Peralta's Cat Rescue</h2>
        <p className="est">Est. October, 2023</p>
        <p>Non-profit organization</p>
        {/* <p>Rescue for cats</p> */}
        <p>Ontario, California</p>
      </div>

      <div className="donate">
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="business" value="2BQN73RCV43XL" />
          <input type="hidden" name="no_recurring" value="0" />
          <input
            type="hidden"
            name="item_name"
            value="Please do not donate. This website was created for my resume."
          />
          <input type="hidden" name="currency_code" value="USD" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { dataSlider } from "../components/dataSlider";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { BtnSlider } from "../components/BtnSlider";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={utilStyles.containerSlider}>
      {dataSlider.map((obj, index) => {
        return (
          <div key={obj.id}>
            <div
              className={
                slideIndex === index + 1
                  ? utilStyles["slide active-anim"]
                  : utilStyles.slide
              }
            >
              <Image
                priority
                layout="fill"
                src={`/img${index + 1}.jpeg`}
                alt={obj.title}
              />
            </div>
          </div>
        );
      })}
      <BtnSlider
        // className={utilStyles.btnContainer}
        moveSlide={prevSlide}
        direction="prev"
      />
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <div className={utilStyles["container-dots"]}>
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={String(index)}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? utilStyles["dot-active"]
                : utilStyles["dot"]
            }
          ></div>
        ))}
      </div>
    </div>
  );
}

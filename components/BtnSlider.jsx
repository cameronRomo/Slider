import React from "react";
import styles from "./BtnSlider.module.css";
import Image from "next/image";

export const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      className={
        direction === "next"
          ? `${styles["btnSlide"]} ${styles.next}`
          : `${styles["btnSlide"]} ${styles.prev}`
      }
      onClick={moveSlide}
    >
      <Image
        src={direction === "next" ? "/chevronright.svg" : "/chevronleft.svg"}
        alt="Left arrow"
        height={30}
        width={30}
      />
    </button>
  );
};

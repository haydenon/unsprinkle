import React from "react";
import styled from "styled-components/macro";

const Hero = () => {
  const imagePath = (format, scale) => {
    const scaleValue = scale > 1 ? `@${scale}x` : "";
    return `/images/hero-img${scaleValue}.${format}`;
  };
  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcSet={`
            ${imagePath("avif", 1)} 1x,
            ${imagePath("avif", 2)} 2x,
            ${imagePath("avif", 3)} 3x,
        `}
        />
        <source
          srcset={`
            ${imagePath("jpg", 1)} 1x,
            ${imagePath("jpg", 2)} 2x,
            ${imagePath("jpg", 3)} 3x
          `}
        />
        <HeroImage src={imagePath("jpg", 1)} />
      </picture>
      <Swoop src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;

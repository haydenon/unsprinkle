import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const imagePath = (format, scale) => {
    const scaleValue = scale > 1 ? `@${scale}x` : "";
    return `${src}${scaleValue}.${format}`;
  };
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
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
          <Image src={imagePath("jpg")} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Tag = styled.li`
  margin-right: 8px;
  padding: 4px 8px;
  line-height: 1.6;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  display: inline;
`;

export default PhotoGridItem;

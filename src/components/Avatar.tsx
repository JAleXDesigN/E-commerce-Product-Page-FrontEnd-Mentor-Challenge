import { FC } from "react";
import { AvatarImage } from "./Avatar.styled";
import { AvatarProps } from "./types";

const Avatar: FC<AvatarProps> = ({ width, height, src, alt }) => {
  return <AvatarImage src={src} alt={alt} width={width} height={height} />;
};

export default Avatar;

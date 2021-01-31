import * as React from "react";
import { css } from "emotion";
import { basicColorSet } from "@/consts/colors";

const avatarStyle = css`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${basicColorSet.backgroundQuaternary};
`;

type AvatarProps = {};

const Avatar = (_props: AvatarProps) => {
  return <div className={avatarStyle}></div>;
};

export { Avatar };

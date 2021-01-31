import * as React from "react";
import { css } from "emotion";
import CopyIcon from "assets/icons/copy.svg";
import { basicColorSet } from "@/consts/colors";

type CopyIconButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CopyIconButton = (props: CopyIconButtonProps) => (
  <button onClick={props.onClick} className={copyIconButtonStyle}>
    <div className={copyIconButtonInnerWrapperStyle}>
      <img src={CopyIcon} className={copyIconButtonImageStyle} />
      <span className={copyIconButtonTextStyle}>copy</span>
    </div>
  </button>
);

const copyIconButtonStyle = css`
  background-color: ${basicColorSet.accentPrimary};
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  outline: none;
`;

const copyIconButtonInnerWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
`;

const copyIconButtonImageStyle = css`
  width: 100%;
  height: 100%;
`;

const copyIconButtonTextStyle = css`
  font-size: 10px;
  font-weight: bold;
  color: ${basicColorSet.textSecondary};
`;

export { CopyIconButton };

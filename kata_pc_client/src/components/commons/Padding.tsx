import * as React from "react";
import { css } from 'emotion';

type PaddingProps = {
  top?: number,
  left?: number,
  right?: number,
  bottom?: number,
  children?: JSX.Element | JSX.Element[]
}

const paddingStyle = (props: PaddingProps) => css`
  padding-top: ${props.top ? props.top : 0}px;
  padding-left: ${props.left ? props.left : 0}px;
  padding-right: ${props.right ? props.right : 0}px;
  padding-bottom: ${props.bottom ? props.bottom : 0}px;
`

const Padding = (props: PaddingProps) => (
  <div className={paddingStyle(props)}>
    {props.children ? props.children : null}
  </div>
)

export { Padding }

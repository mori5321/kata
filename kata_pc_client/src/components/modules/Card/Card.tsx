import * as React from 'react';
import { css } from 'emotion';
import { basicColorSet } from '@/consts/colors';
import { Padding } from '@/components/commons/Padding';


type CardProps = {
  title: string,
  content: string,
  width?: string,
  height?: string,
}

const DEFAULT_WIDTH = "160px";
const DEFAULT_HEIGHT = "160px";

const Card = (props: CardProps): JSX.Element => {
  const width = props.width ?? DEFAULT_WIDTH;
  const height = props.height ?? DEFAULT_HEIGHT;

  return (
    <div className={cardStyle(width, height)}>
      <h4>{props.title}</h4>
      <Padding top={8} />
      <p>{props.content}</p>
    </div>
  )
}

const cardStyle = (width: string, height: string) => css`
  width: ${width};
  height: ${height};
  background-color: ${basicColorSet.backgroundTertiary};
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    opacity: 0.7;
  }

  p {
    font-size: 12px;
  }
`

export { Card }

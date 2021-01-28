import * as React from 'react';
import { css } from 'emotion';
import { basicColorSet } from '@/consts/colors';
import { Padding } from '@/components/commons/Padding';


type CardBaseProps = {
  width?: string,
  height?: string,
  children: JSX.Element
}

const DEFAULT_WIDTH = "160px";
const DEFAULT_HEIGHT = "160px";

const CardBase = (props: CardBaseProps): JSX.Element => {
  const width = props.width ?? DEFAULT_WIDTH;
  const height = props.height ?? DEFAULT_HEIGHT;

  return (
    <div className={cardBaseStyle(width, height)}>
      {props.children}
    </div>
  )
}

const cardBaseStyle = (width: string, height: string) => css`
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

`

type TemplateCardProps = Omit<CardBaseProps, "children"> & TemplateCardBodyProps
const TemplateCard = (props: TemplateCardProps): JSX.Element => {
  return (
    <CardBase width={props.width} height={props.height}>
      <TemplateCardBody title={props.title} content={props.content} />
    </CardBase>
  )
}

type TemplateCardBodyProps = {
  title: string,
  content: string
}
const TemplateCardBody = (props: TemplateCardBodyProps) => (
  <div className={templateCardBodyStyle}>
    <h4>{props.title}</h4>
    <Padding top={8} />
    <p>{props.content}</p>
  </div>
)

const templateCardBodyStyle = css`
  p {
    font-size: 12px;
  }
`

export { TemplateCard }

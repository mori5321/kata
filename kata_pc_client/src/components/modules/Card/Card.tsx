import * as React from 'react';
import { css } from 'emotion';
import { basicColorSet } from '@/consts/colors';
import { Padding } from '@/components/commons/Padding';
import PlusIcon from 'assets/icons/plus.svg'


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
  padding: 12px;
  
  p {
    font-size: 12px;
    line-height: 100%;
  }
`

type AddTemplateCardProps = Omit<CardBaseProps, "children"> & AddTemplateCardBodyProps
const AddTemplateCard = (props: AddTemplateCardProps): JSX.Element => {
  return (
    <CardBase width={props.width} height={props.height}>
      <AddTemplateCardBody onClick={props.onClick} />
    </CardBase>
  )
}

type AddTemplateCardBodyProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void 
}
const AddTemplateCardBody = (props: AddTemplateCardBodyProps): JSX.Element => (
  <div
    onClick={props.onClick}
    className={addTemplateCardBodyStyle}
  >
    <img src={PlusIcon} className={plusIconStyle}/>
  </div>
)

const addTemplateCardBodyStyle = css`
  padding: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${basicColorSet.backgroundSecondary};
`

const plusIconStyle = css`
  width: 48px;
  height: 48px;
`



export { TemplateCard, AddTemplateCard }

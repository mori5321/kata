import * as React from 'react';
import { css,cx } from 'emotion';
import { Template } from '../../../domain/entities/template';
import { Link } from 'rocon/react';
import { toplevelRoutes } from '@/router/route';
import { plainLinkStyle } from '@/router/linkStyle';
import DeleteIcon from 'assets/icons/delete.svg';
import { Padding } from '@/components/commons/Padding';
import { CopyIconButton } from '@/components/commons/Buttons/IconButtons';
import LeftArrowIcon from 'assets/icons/leftArrow.svg';
import { basicColorSet } from '@/consts/colors';

type Props = {
  template: Template
}


const TemplateDetailLayout: React.FC<Props> = ({ template }) => (
  <>
    <div className={wrapperStyle}>
      <div className={subHeaderStyle}>
        <Link route={toplevelRoutes.exactRoute} className={cx(plainLinkStyle, backLinkStyle)}>
          <img src={LeftArrowIcon} width="16px" height="16px" />
          <Padding right={4} />
          Back
        </Link>
        <div className={toolFieldStyles}>
          <img src={DeleteIcon} width="32px" height="32px" />
          <Padding left={8} />
          <CopyIconButton onClick={() => alert("Copy")} />
        </div>
      </div>
      <div className={bodyStyle}>
        <h1>{template.title}</h1>
        <Padding top={16} />
        <p>{template.body}</p>
      </div>
    </div>
  </>
)

const wrapperStyle = css`
  padding: 8px 24px; 
`

const subHeaderStyle = css`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const bodyStyle = css`
  padding: 24px 0;
`

const toolFieldStyles = css`
  display: flex;
  align-items: center;
`

const backLinkStyle = css`
  display: flex;
  align-items: center;
  color: ${basicColorSet.textSecondary}
`

export { TemplateDetailLayout }

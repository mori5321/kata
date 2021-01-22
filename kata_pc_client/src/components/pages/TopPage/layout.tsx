import * as React from 'react';
import { css } from 'emotion';
import { Padding } from '@/components/commons/Padding';
import { Card } from '@/components/modules/Card';
import { SearchBar } from '@/components/modules/Search';
import { Template } from '@/domain/entities/template';

const wrapperStyle = css`
  padding: 16px;
`

const contentWrapper = css`
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
`

type TopPageLayoutProps = {
  templates: Template[]
}
const TopPageLayout: React.FC<TopPageLayoutProps> = (props) => ( 
  <div className={wrapperStyle}>
    <Padding left={8}>
      <SearchBar />
    </Padding>
    <div className={contentWrapper}>
      { props.templates.map(template => (
        <Padding top={8} left={8} right={8} bottom={8}>
          <Card title={template.title} content={template.body} />
        </Padding>
      )) }
    </div>
  </div>
)

export { TopPageLayout }

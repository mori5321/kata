import * as React from 'react';
import { useTemplates } from './hooks';
import { TopPageLayout } from './layout';

const TopPage: React.FC = () => {
  const { templates, addNewTemplate } = useTemplates()

  const onClickAddTemplate = () => {
    addNewTemplate()
  }
  
  return (
    <TopPageLayout
      templates={templates}
      onClickAddTemplate={onClickAddTemplate}
    />
  )
}


export { TopPage }

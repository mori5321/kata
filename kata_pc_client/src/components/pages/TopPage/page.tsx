import * as React from 'react';
import { useTemplates } from './hooks';
import { TopPageLayout } from './layout';

const TopPage: React.FC = () => {
  const { templates } = useTemplates()
  
  return (
    <TopPageLayout templates={templates} />
  )
}


export { TopPage }

import { ID as TemplateID } from '@/domain/entities/template';
import { isNone } from 'fp-ts/lib/Option';
import * as React from 'react';
import { useTemplate } from './hooks';
import { TemplateDetailLayout } from './layout';

type Props = {
  templateId: TemplateID
}
const TemplateDetailPage: React.FC<Props> = ({ templateId }) => {
  const { maybeTemplate } = useTemplate(templateId)
  
  if (isNone(maybeTemplate)) {
    return <></>;
  }

  return (
    <TemplateDetailLayout template={maybeTemplate.value} />
  )
}

export { TemplateDetailPage }

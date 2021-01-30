import * as React from 'react';
import { useCallback } from 'react';

import { ID as TemplateID, Template } from '@/domain/entities/template';
import { isNone } from 'fp-ts/lib/Option';
import { debounce } from 'lodash';
import { useTemplate } from './hooks';
import { TemplateDetailLayout } from './layout';

type Props = {
  templateId: TemplateID
}
const TemplateDetailPage: React.FC<Props> = ({ templateId }) => {
  const { maybeTemplate, setTemplate, updateTemplate } = useTemplate(templateId)


  // TypeSafeなdebounceがほしい...
  const debouncedUpdateTemplate = useCallback(
    debounce((template: Template) => {
      console.log("Debounce Function")
      updateTemplate(template)
    }, 500),
    []
  )
  
  const onChangeBody = (body: string) =>  {
    if (isNone(maybeTemplate)) return;
    const newTemplate = { ...maybeTemplate.value, body: body }
    setTemplate(newTemplate)
    debouncedUpdateTemplate(newTemplate)
  }

  const onChangeTitle = (title: string) => {
    if (isNone(maybeTemplate)) return;
    const newTemplate = { ...maybeTemplate.value, title: title }
    setTemplate(newTemplate)
    debouncedUpdateTemplate(newTemplate)
  }
  
  if (isNone(maybeTemplate)) {
    return <></>;
  }

  return (
    <TemplateDetailLayout
      template={maybeTemplate.value}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
    />
  )
}

export { TemplateDetailPage }

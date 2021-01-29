import { useState, useEffect } from 'react';
import { templateRepositoryOnMemory } from '@/adapters/repositories/templateRepository';
import { Template, ID as TemplateID } from '@/domain/entities/template';
import { Option, none } from 'fp-ts/lib/Option';

type UseTemplate = (id: TemplateID) => {
  maybeTemplate: Option<Template>
}

const useTemplate: UseTemplate = (id: TemplateID) => {
  const [maybeTemplate, setMaybeTemplate] = useState<Option<Template>>(none);

  useEffect(() => {
    const templatesFromRepository = templateRepositoryOnMemory.findById(id)
    setMaybeTemplate(templatesFromRepository)
  }, [])


  return { maybeTemplate }
}

export { useTemplate }

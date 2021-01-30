import { useState, useEffect } from 'react';
import { templateRepositoryOnPouchDB } from '@/adapters/repositories/templateRepository';
import { Template, ID as TemplateID } from '@/domain/entities/template';
import { Option, none, some } from 'fp-ts/lib/Option';
import { isRight } from 'fp-ts/lib/Either';

type UseTemplate = (id: TemplateID) => {
  maybeTemplate: Option<Template>
  setTemplate: (template: Template) => void
  updateTemplate: (template: Template) => void
}

const useTemplate: UseTemplate = (id: TemplateID) => {
  const [maybeTemplate, setMaybeTemplate] = useState<Option<Template>>(none);

  useEffect(() => {
    (async () => {
      const templatesFromRepository
        = await templateRepositoryOnPouchDB.findById(id)
      setMaybeTemplate(templatesFromRepository)
    })();
  }, [])

  const updateTemplate = async (newTemplate: Template) => {
    setMaybeTemplate(some(newTemplate)) 
    // 1文字入力ごとにDBに更新してしまうと入力ができないのでどうにかする。
    const saved = await templateRepositoryOnPouchDB.update(newTemplate)

    if (isRight(saved)) {
      return
    } else {
      alert(saved.left)
    }
  }

  const setTemplate = (template: Template) => {
    setMaybeTemplate(some(template))
  }

  return { maybeTemplate, setTemplate, updateTemplate }
}


export { useTemplate }

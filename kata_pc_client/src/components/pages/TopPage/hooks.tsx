import { useState, useEffect } from 'react';
import { templateRepositoryOnPouchDB } from '@/adapters/repositories/templateRepository';
import { Template } from '@/domain/entities/template';
import { ITemplateFactory } from '@/domain/factories/templateFactory';
import { TemplateFactory } from '@/adapters/factories/templateFactory';

type UseTemplates = () => {
  templates: Template[],
  addNewTemplate: () => Template,
}

const useTemplates: UseTemplates = () => {
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    // テスタブルにするためにDIにしたいなぁ
    //
    // 1. MockDataで開発
    // 2. APIに切り替え
    // みたいなのを開発環境でもスマートにやりたい
    //
    (async() => {
      const templatesFromRepository
        = await templateRepositoryOnPouchDB.list();
      setTemplates(templatesFromRepository);
    })();

  }, [])

  const addNewTemplate = () => {
    const factory: ITemplateFactory = TemplateFactory;
    const newTemplate = factory.newTemplate("", "")
    setTemplates([newTemplate, ...templates])
    templateRepositoryOnMemory.add(newTemplate)
    return newTemplate
  }

  return { templates, addNewTemplate }
}

export { useTemplates }

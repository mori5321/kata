import { useState, useEffect } from 'react';
import { templateRepositoryOnPouchDB } from '@/adapters/repositories/templateRepository';
import { Template } from '@/domain/entities/template';

type UseTemplates = () => {
  templates: Template[],
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

  return { templates }
}

export { useTemplates }

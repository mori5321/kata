import { templatesRoutes } from "@/router/route";
import * as React from "react";
import { useNavigate } from "rocon/react";
import { useTemplates } from "./hooks";
import { TopPageLayout } from "./layout";

const TopPage: React.FC = () => {
  const { templates, addNewTemplate } = useTemplates();
  const navigate = useNavigate();

  const onClickAddTemplate = () => {
    const newTemplate = addNewTemplate();
    navigate(templatesRoutes.exactRoute, { id: newTemplate.id });
  };

  return (
    <TopPageLayout
      templates={templates}
      onClickAddTemplate={onClickAddTemplate}
    />
  );
};

export { TopPage };

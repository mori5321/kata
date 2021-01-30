import * as React from "react";
import { css } from "emotion";
import { Padding } from "@/components/commons/Padding";
import { AddTemplateCard, TemplateCard } from "@/components/modules/Card";
import { SearchBar } from "@/components/modules/Search";
import { Template } from "@/domain/entities/template";
import { Link } from "rocon/react";
import { templatesRoutes } from "@/router/route";
import { plainLinkStyle } from "@/router/linkStyle";

const wrapperStyle = css`
  padding: 24px;
`;

const contentWrapper = css`
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
`;

type TopPageLayoutProps = {
  templates: Template[];
  onClickAddTemplate: () => void;
};
const TopPageLayout: React.FC<TopPageLayoutProps> = (props) => (
  <div className={wrapperStyle}>
    <Padding left={8}>
      <SearchBar />
    </Padding>
    <div className={contentWrapper}>
      <Padding top={8} left={8} right={8} bottom={8}>
        <AddTemplateCard onClick={props.onClickAddTemplate} />
      </Padding>
      {props.templates.map((template) => (
        <Link
          route={templatesRoutes.exactRoute}
          match={{ id: template.id }}
          key={template.id}
          className={plainLinkStyle}
        >
          <Padding top={8} left={8} right={8} bottom={8}>
            <TemplateCard title={template.title} content={template.body} />
          </Padding>
        </Link>
      ))}
    </div>
  </div>
);

export { TopPageLayout };

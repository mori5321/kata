import * as React from 'react';
import { Rocon, useRoutes } from 'rocon/react';
import { TemplateDetailPage, TopPage } from '@/components/pages';

const toplevelRoutes = Rocon.Path()
  .exact({ action: () => <TopPage /> })
  .route("templates")
  // .route("templates.new", route => route.action(() => {
  //   return (
  //     <div>Sample</div>
  //   );
  // }));

const templatesRoutes =
  Rocon.Path()
    .any("id")
    .anyRoute
    .attach(Rocon.Path())
    .exact({ action: ({id}) => <TemplateDetailPage templateId={id} /> })
    .route("detail", (route) => route.action(({id}) => 
      <p>Hello {id}</p>
    ));

toplevelRoutes._.templates.attach(templatesRoutes)

// TODO for Rocon:
// multi attachができたらいいな
// toplevelRoutes._.templates.attach(templatesRoutes)

const Routes: React.FC = () => {
  return useRoutes(toplevelRoutes)
}

export { toplevelRoutes, templatesRoutes, Routes }

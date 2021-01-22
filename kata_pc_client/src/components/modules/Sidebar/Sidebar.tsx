import * as React from 'react';
import { css } from "emotion";
import { basicColorSet } from '@/consts/colors';
import { toplevelRoutes, templatesRoutes } from '@/route';
import { Link, useNavigate } from 'rocon/react';
import { Avatar } from '@/components/modules/Avatar';

const sidebarWrapperStyle = css`
  background-color: ${basicColorSet.backgroundSecondary};
  padding: 16px 8px;
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a {
    color: ${basicColorSet.textPrimary};
    text-decoration: none;
    display: block;
  }
`

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={sidebarWrapperStyle}>
      <Avatar />
      <Link route={toplevelRoutes.exactRoute}>/</Link>
      <Link route={toplevelRoutes._.top}>top</Link>
      <a onClick={() => { 
        navigate(templatesRoutes.exactRoute, { id: "2" })
      }}>
        templates
      </a>
      <Link route={templatesRoutes.exactRoute} match={{ id: "1" }}>Hello</Link>
    </div>
  )
}

export { Sidebar }

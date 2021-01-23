import * as React from 'react';
import { css } from "emotion";
import { basicColorSet } from '@/consts/colors';
import { toplevelRoutes } from '@/router/route';
import { Link } from 'rocon/react';
import { Avatar } from '@/components/modules/Avatar';
import { plainLinkStyle } from '@/router/linkStyle';

const sidebarWrapperStyle = css`
  background-color: ${basicColorSet.backgroundSecondary};
  padding: 16px 8px;
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a {
    display: block;
  }
`

const Sidebar: React.FC = () => {
  return (
    <div className={sidebarWrapperStyle}>
      <Link route={toplevelRoutes.exactRoute} className={plainLinkStyle}>
        <Avatar />
      </Link>
      {/*
        <Link route={toplevelRoutes._.templates} className={plainLinkStyle}>Templates</Link>
        */}
      </div>
  )
}

export { Sidebar }

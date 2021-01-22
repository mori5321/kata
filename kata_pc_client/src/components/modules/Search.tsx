import * as React from 'react';
import { css } from 'emotion';
import { basicColorSet } from '@/consts/colors';

const searchBarStyle = css`
  background-color: ${basicColorSet.backgroundSecondary};
  color: ${basicColorSet.textPrimary};
  width: 100%;
  max-width: 560px;
  display: block;
  border-radius: 32px;
  padding: 8px 16px;
  border: none;
  outline: none;
`

const SearchBar = () => (
  <input className={searchBarStyle} />
)

export { SearchBar }

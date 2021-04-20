import React, { memo } from 'react'
import styled from 'styled-components'
import theme from '../../themes/currentTheme'

const StyledHeader = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
  padding: 8px;
  background: ${theme.palette.accentColor};
  font-size: ${theme.typography.h1.size};
  font-family: ${theme.typography.h1.family};
  font-style: ${theme.typography.h1.style};
`

interface Props {
  title?: string
}

export default memo(function Header({ title }: Props) {
  return <StyledHeader>{title ?? 'Test'}</StyledHeader>
})

import React from 'react'
import SideBar from '../components/SideBar'

const Layout = ({children,page}) => {
  return <SideBar page={page}>
  {children}
</SideBar>
}

export default Layout
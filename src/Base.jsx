import React from 'react'
import Sider from './Sidebar'

function Base({children}) {
  return (
    <div style={{ display: 'flex' }}>
        {/* sidebar */}
        <Sider/>
        {children}
    </div>
  )
}

export default Base
import React from 'react'

export default function ScreenHelperContainer({classToAdd, children}) {
  return (
    <div
      className = {`${classToAdd}` }
    >
      {children}
    </div>
  )
}

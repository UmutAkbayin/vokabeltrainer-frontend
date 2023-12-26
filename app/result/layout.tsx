import React from 'react';

function Layout({ children, modal }: {
  children: React.ReactNode,
  modal: React.ReactNode,
}) {
  return (
    <>
      {modal}
    </>
  )
}

export default Layout;
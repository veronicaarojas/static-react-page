import React from 'react'

export default function Footer({darkMode}) {
  return (
    <footer className={darkMode ? "dark" : ""} >
      <small>© 2023 Rojas development. All rights reserved.</small>
    </footer>
  )
}

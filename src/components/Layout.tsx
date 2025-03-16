import type React from "react"
import Topbar from "./Topbar"
import Bottombar from "./Bottombar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <main className="flex-grow bg-slate-50 dark:bg-slate-900">{children}</main>
      <Bottombar />
    </div>
  )
}

export default Layout


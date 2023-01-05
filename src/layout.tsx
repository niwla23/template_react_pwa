import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="p-8 bg-slate-200 h-screen flex flex-col">
      <nav className="flex gap-2">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <Outlet />
    </div>
  )
}

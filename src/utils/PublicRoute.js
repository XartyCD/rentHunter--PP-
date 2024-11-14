import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation.js"
import { useApp } from "../contexts/context.js"
import { useEffect } from "react"

const PublicRoute = () => {
  let { num } = useApp()
  console.log("Public")

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default PublicRoute

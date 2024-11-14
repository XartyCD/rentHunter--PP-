import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AppProvider } from "./contexts/context.js"

import LoginPage from "./components/LoginPage.js"
import MainPage from "./components/MainPage.js"
import RegisterPage from "./components/RegisterPage.js"
import WelcomePage from "./components/WelcomePage.js"

import AccountPage from "./components/privateComponents/AccountPage.js"
import YourPosts from "./components/privateComponents/YourPosts.js"
import PopupChat from "./components/privateComponents/PopupChat.js"

import PublicRoute from "./utils/PublicRoute.js"

import "./styles/App.css"

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<WelcomePage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/main" element={<MainPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/welcome" element={<WelcomePage />} />
            </Route>

            <Route path="/yourposts" element={<YourPosts />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  )
}

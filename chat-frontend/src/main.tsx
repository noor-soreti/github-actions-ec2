import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter, Routes, Route } from 'react-router'
import SignIn from './sign-in/SignIn.tsx'
import SignUp from './sign-up/SignUp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home' element={<App/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
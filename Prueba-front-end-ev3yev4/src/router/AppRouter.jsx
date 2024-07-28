
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/components/pages/LoginPage';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';





export const AppRouter = () => {
  return ( 
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>}></Route>
        <Route path="/*" element={<HeroesRoutes/>}></Route>
      </Routes>
    </>
  )
}

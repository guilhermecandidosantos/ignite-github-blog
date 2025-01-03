import { Routes, Route } from 'react-router'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { Article } from './pages/Article'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
      </Route>
    </Routes>
  )
}

import { Outlet } from 'react-router'
import logoImg from '../../assets/logo.svg'
import { LayoutContainer } from './styles'
export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={logoImg} alt="" />
      <Outlet />
    </LayoutContainer>
  )
}

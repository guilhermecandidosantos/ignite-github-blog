import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
`
export const HeaderContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -5rem;
  box-shadow: 0 2px 28px rgb(0, 0, 0, 0.2);
  width: 54rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  > p {
    color: ${props => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${props => props.theme['base-title']};
  }

  > div > div {
    width: 0%;
    height: 1px;
    background: ${props => props.theme.blue};
  }

  > div:hover {
    > div {
      width: 100%;
      transition: width 0.2s;
    }
  }

  > div > a {
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${props => props.theme.blue};
    text-transform: uppercase;
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
    align-items: center;
    justify-content: center;
  }
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.theme.blue};

  &:hover {
    width: 50%;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;


  > span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 1.6;
    color: ${props => props.theme['base-subtitle']};

    > svg {
      color: ${props => props.theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`

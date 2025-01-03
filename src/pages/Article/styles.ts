import styled, { keyframes } from 'styled-components'

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
`
export const ArticleTitle = styled.div`
  width: 54rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgb(0, 0, 0, 0.2);
  margin-top: -5rem;
`

export const ButtonArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

const lineAnimated = keyframes`
  from {
    width: 0;
  } to {
    width: 100%;
  }
`

export const Button = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    align-items: end;
  }

  &:last-child {
    align-items: start;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${props => props.theme.blue};
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.6;
  }

  > div {
    height: 1px;
    background: ${props => props.theme.blue};
    overflow: hidden;
  }

  &:first-child:hover {
    > div {
      animation: ${lineAnimated} 0.3s both;
    }
  }

  &:last-child:hover {
    > div {
      animation: ${lineAnimated} 0.3s both;
    }
  }
`
export const Title = styled.div`
  color: ${props => props.theme['base-title']};
  font-size: 1.5rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`

export const InfoArticle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme['base-span']};
    font-size: 1rem;
    line-height: 1.6;
  }
`
export const ContentArticle = styled.div`
  margin-top: 0.5rem;
  padding: 2rem;
  width: 54rem;
`

import { styled } from 'styled-components'

export const CardContainer = styled.div`
  width: 26rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  gap: 1.25rem;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 2px ${props => props.theme['base-label']};
    transition: box-shadow 0.3s;
  }
`

export const CardTitle = styled.header`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  > h1 {
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${props => props.theme['base-title']};
    max-width: 17rem;
  }

  > span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${props => props.theme['base-span']};
  }
`
export const PreviewContent = styled.p`
  width: 100%; 
  height: 8rem; 
  overflow: hidden; 
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6; 
  text-overflow: ellipsis; 
`

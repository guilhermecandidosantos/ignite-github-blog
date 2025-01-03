import styled from 'styled-components'

export const SearchPostContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;
`

export const TitleSearchPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > h1 {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.125rem;
    line-height: 1.6;
  }

  > span {
    color: ${props => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`

export const Input = styled.input`
  padding: 1rem;
  color: ${props => props.theme['base-text']};
  background: ${props => props.theme['base-input']};;
  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`

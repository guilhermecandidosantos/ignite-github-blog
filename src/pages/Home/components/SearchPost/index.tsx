import { Input, SearchPostContainer, TitleSearchPost } from './styles'

export function SearchPost() {
  return (
    <SearchPostContainer>
      <TitleSearchPost>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </TitleSearchPost>

      <Input type="text" placeholder="Buscar conteúdo" />
    </SearchPostContainer>
  )
}

import { z } from 'zod'
import { Input, SearchPostContainer, TitleSearchPost } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { IssuesContext } from '../../../../context/IssuesContext'

interface SearchPostProps {
  quantityIssues: number
}

const schema = z.object({
  text: z.string(),
})

type SchemaType = z.infer<typeof schema>

export function SearchPost({ quantityIssues }: SearchPostProps) {
  const { getIssues } = useContext(IssuesContext)
  const { register, handleSubmit } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  })

  async function handleSearchPost(data: SchemaType) {
    await getIssues(data.text)
  }

  return (
    <SearchPostContainer onSubmit={handleSubmit(handleSearchPost)}>
      <TitleSearchPost>
        <h1>Publicações</h1>
        <span>{quantityIssues} publicações</span>
      </TitleSearchPost>

      <Input type="text" placeholder="Buscar conteúdo" {...register('text')} />
    </SearchPostContainer>
  )
}

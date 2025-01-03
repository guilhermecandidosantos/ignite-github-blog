import { CardContainer, CardTitle, PreviewContent } from './styles'
import { Issues } from '../../context/IssuesContext'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useNavigate } from 'react-router'
import { formateDate } from '../../utils/format'

interface CardProps {
  issue: Issues
}

export function Card({ issue }: CardProps) {
  const navigate = useNavigate()

  function handleNavigateToIssue() {
    navigate(`/article/${issue.id}`)
  }

  return (
    <CardContainer onClick={() => handleNavigateToIssue()}>
      <CardTitle>
        <h1>{issue.title}</h1>
        <span>{formateDate(issue.created_at)}</span>
      </CardTitle>

      <PreviewContent>
        <Markdown rehypePlugins={[rehypeRaw]}>
          {issue.body}
        </Markdown>
      </PreviewContent>
    </CardContainer>
  )
}

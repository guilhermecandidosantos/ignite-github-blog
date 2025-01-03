import { useContext } from 'react'
import {
  ArticleContainer,
  ArticleTitle,
  Button,
  ButtonArticle,
  ContentArticle,
  InfoArticle,
  Title,

} from './styles'
import { NavLink, useParams } from 'react-router'
import { IssuesContext } from '../../context/IssuesContext'
import { formateDate } from '../../utils/format'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export function Article() {
  const { id } = useParams()
  const { issues } = useContext(IssuesContext)

  const issue = issues.find((issue) => issue.id === Number(id))

  return (
    <ArticleContainer>
      <ArticleTitle>
        <ButtonArticle>
          <Button>
            <NavLink to="/">
              <i className="fa-solid fa-chevron-left" />
              Voltar
            </NavLink>
            <div />
          </Button>

          <Button>
            <a href={issue?.url} target="_blank" rel="noreferrer">
              ver no github
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
            <div />
          </Button>
        </ButtonArticle>

        <Title>{issue?.title}</Title>

        <InfoArticle>
          <span>
            <i className="fa-brands fa-github" />
            {issue?.login}
          </span>
          <span>
            <i className="fa-solid fa-calendar-day" />
            {formateDate(issue!.created_at)}
          </span>
          <span>
            <i className="fa-solid fa-comment" />
            {issue?.comments} comentarios
          </span>
        </InfoArticle>
      </ArticleTitle>

      <ContentArticle>
        <p>
          <Markdown rehypePlugins={[rehypeRaw]}>
            {issue?.body}
          </Markdown>
        </p>
      </ContentArticle>
    </ArticleContainer>
  )
}

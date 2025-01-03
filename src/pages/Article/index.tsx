import {
  ArticleContainer,
  ArticleTitle,
  Button,
  ButtonArticle,
  ContentArticle,
  InfoArticle,
  Title,

} from './styles'
import { NavLink } from 'react-router'

export function Article() {
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
            <a href="/">
              ver no github
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
            <div />
          </Button>
        </ButtonArticle>

        <Title>JavaScript data types and data structures</Title>

        <InfoArticle>
          <span>
            <i className="fa-brands fa-github" />
            cameronwll
          </span>
          <span>
            <i className="fa-solid fa-calendar-day" />
            Há 1 dia
          </span>
          <span>
            <i className="fa-solid fa-comment" />
            5 comentarios
          </span>
        </InfoArticle>
      </ArticleTitle>

      <ContentArticle>
        <p>Programming languages all have built-in data
          structures, but these often differ from one language to another.
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with
          other languages are drawn.
        </p>
      </ContentArticle>
    </ArticleContainer>
  )
}

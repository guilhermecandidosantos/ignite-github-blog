import { useContext } from 'react'
import { Card } from '../../components/Card'
import { Profile } from '../../components/Profile'
import { SearchPost } from './components/SearchPost'
import { CardContainer, HomeContainer } from './styles'
import { IssuesContext } from '../../context/IssuesContext'

export function Home() {
  const { user, issues } = useContext(IssuesContext)
  const quantityIssues = issues.length

  return (
    <HomeContainer>
      <Profile user={user} />
      <SearchPost quantityIssues={quantityIssues} />

      <CardContainer>
        {issues.map((issue) => {
          return <Card key={issue.id} issue={issue} />
        })}
      </CardContainer>
    </HomeContainer>
  )
}

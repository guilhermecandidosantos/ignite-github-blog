import { Card } from '../../components/Card'
import { Profile } from '../../components/Profile'
import { SearchPost } from './components/SearchPost'
import { CardContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchPost />

      <CardContainer>
        {Array.from({ length: 6 }, (_, index) => (
          <Card key={index} />
        ))}
      </CardContainer>
    </HomeContainer>
  )
}

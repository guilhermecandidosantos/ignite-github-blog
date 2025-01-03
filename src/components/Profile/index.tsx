import {
  HeaderContainer,
  HeaderContent,
  HeaderInfo,
  SocialContainer,
  TitleContainer,
} from './styles'
import { UserInfo } from '../../context/IssuesContext'

interface ProfileProps {
  user: UserInfo
}

export function Profile({ user }: ProfileProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={user.avatar_url} alt="" />
        <HeaderInfo>
          <TitleContainer>
            <h1>{user.name}</h1>
            <div>
              <a href={user.url} target="_blank" rel="noreferrer">
                github
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
              <div />
            </div>
          </TitleContainer>

          <p>{user.bio}</p>

          <SocialContainer>
            <span><i className="fa-brands fa-github" />{user.login}</span>
            {user.company && <span><i className="fa-solid fa-building" />{user.company}</span>}
            {user.followers > 0 &&
              <span>
                <i className="fa-solid fa-user-group" />{user.followers} Seguidores
              </span>}
          </SocialContainer>
        </HeaderInfo>
      </HeaderContent>
    </HeaderContainer>
  )
}

import {
  HeaderContainer,
  HeaderContent,
  HeaderInfo,
  SocialContainer,
  TitleContainer,

} from './styles'

export function Profile() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="https://github.com/guilhermecandidosantos.png" alt="" />
        <HeaderInfo>
          <TitleContainer>
            <h1>Guilherme Santos</h1>
            <div>
              <a href="">
                github
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
              <div />
            </div>
          </TitleContainer>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas.
            Eu viverra massa quam dignissim aenean malesuada suscipit.
            Nunc, volutpat pulvinar vel mass.
          </p>

          <SocialContainer>
            <span><i className="fa-brands fa-github" />github</span>
            <span><i className="fa-solid fa-building" />Rocketseat</span>
            <span><i className="fa-solid fa-user-group" />32 Seguidores</span>
          </SocialContainer>
        </HeaderInfo>
      </HeaderContent>
    </HeaderContainer>
  )
}

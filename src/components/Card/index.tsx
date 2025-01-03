import { CardContainer, CardTitle, PreviewContent } from './styles'

export function Card() {
  const text = "data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. Thesecan be used to build other data structures.Wherever possible, comparisons with other languages are drawn.Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directlyassociated with any particular value type, and any variablecan be assigned (and re-assigned) values of all types:let foo = 42foo = 'bar'"
  return (
    <CardContainer>
      <CardTitle>
        <h1>JavaScript data types and data structures</h1>
        <span>Há 1 dia</span>
      </CardTitle>

      <PreviewContent>
        {text}
      </PreviewContent>
    </CardContainer>
  )
}

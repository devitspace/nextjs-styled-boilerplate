import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Title = styled.h1`
  color: darkslategray;
`
const Link = styled.a`
  color: mediumvioletred;
`

const Paragraph = styled.p`
  color: grey;
`

const Code = styled.code`
  color: white;
  background-color: darkslateblue;
  margin: 5px;
  padding: 5px 8px;
  border-radius: 5px;
`

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>
      <Title>
        Welcome to {` `}
        <Link href="https://nextjs.org">Next.js!</Link>
      </Title>

      <Paragraph>
        Get started by editing {` `}
        <Code>pages/index.tsx</Code>
      </Paragraph>
    </Container>
  </>
)

export default Home

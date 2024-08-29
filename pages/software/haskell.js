import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, SoftwareImage, Meta } from '../../components/software'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Software = () => (
    <Layout title="Haskell">
      <Container>
        <Title>
        Haskell <Badge>2023</Badge>
        </Title>
        <P>
          While learning about how to use haskell I solved a series of functions to solve specific programming problems. The goal was to enhance skills in functional programming, recursion, and higher-order functions. The tasks included writing functions for list operations, tree manipulation, and custom data types, along with full unit tests to ensure correctness. Accomplishments included successfully implementing recursive and tail-recursive solutions, using higher-order functions effectively, and ensuring code complied with Haskell&apos;s type and style requirements.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/haskell" isExternal>
            mitchellkolb/haskell <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux, Ubuntu</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Haskell</span>
          </ListItem>
        </List>
  
  
        <SoftwareImage src="/images/software/haskell/haskell-prompt-HW2.PNG" alt="haskell-prompt-HW2" />
        <SoftwareImage src="/images/software/haskell/haskell-ghci-HW2.PNG" alt="haskell-ghci-HW2" />
        <SoftwareImage src="/images/software/haskell/haskell-tests.PNG" alt="haskell-tests" />

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/sisDdJ-KjIc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Software
  export { getServerSideProps } from '../../components/chakra'
  
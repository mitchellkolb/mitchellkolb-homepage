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
    <Layout title="Inkdro33p">
      <Container>
        <Title>
        Yahtzee in C <Badge>2023-2024</Badge>
        </Title>
        <P>
          This project involved developing a Yahtzee game using C. The code was setup into different files: main.c for the main game loop and user interaction, Equations.c for handling the game's calculations, and Equations.h for function declarations. Key accomplishments included designing an efficient scoring algorithm and ensuring smooth gameplay through user-friendly prompts and error handling.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
        <SoftwareImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
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
  
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
    <Layout title="Space Invaders">
      <Container>
        <Title>
        Space Invaders C++ <Badge>2020</Badge>
        </Title>
        <P>
          In a group of four, we developed a Space Invaders clone using C++ and SFML to demonstrate our knowledge of classes, inheritance, and polymorphism. The project involved designing, implementing, and testing the game, which included player movement, collision detection, and background music integration. We utilized various graphics/text libraries to create a complete game that highlights our ability to handle advanced programming concepts and develop user-friendly graphical interfaces that update with user input over time.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/space-invaders" isExternal>
            mitchellkolb/space-invaders <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C++, SFML</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/space-invaders/space-invaders-start.png" alt="Space Invaders" />
        <SoftwareImage src="/images/software/space-invaders/space-invaders-end.png" alt="Space Invaders" />
        <SoftwareImage src="/images/software/space-invaders/space-invaders-score.png" alt="Space Invaders" />

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/0veC2d0xlrk"
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
  
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
    <Layout title="Wumpus">
      <Container>
        <Title>
        Wumpus C++ Game <Badge>2020</Badge>
        </Title>
        <P>
          This project involved creating a text-based Hunt the Wumpus game using C++. It&apos;s played on a 5x5 grid, required players to navigate a maze to find gold while avoiding pits and the Wumpus which is a creature that moves around the grid. Key features included implementing the GameWorld class with methods for movement, displaying the game state, and checking win/loss conditions. The project demonstrated object-oriented programming, file I/O, and game logic implementation, reinforcing concepts like constructors, destructors, and operator overloading.
        </P>


        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/wumpus" isExternal>
            mitchellkolb/wumpus <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C++</span>
          </ListItem>
        </List>

  
        <SoftwareImage src="/images/software/wumpus/wumpus-start.png" alt="wumpus-start" />
        <SoftwareImage src="/images/software/wumpus/wumpus-map.png" alt="wumpus-map" />
        <SoftwareImage src="/images/software/wumpus/wumpus-end.png" alt="wumpus-end" />


        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/kajZ7d_00y0"
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
  
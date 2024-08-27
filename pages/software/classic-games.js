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
    <Layout title="Classic Games">
      <Container>
        <Title>
        Classic Games in C <Badge>2019</Badge>
        </Title>
        <P>
          This project is a collection of three classic text-based games—Blackjack, Craps, and Yahtzee—developed in C. Each game is designed to run in the terminal, showcasing core game mechanics and a user-friendly interface. The project demonstrates modular programming practices, with each game organized into multiple C files to handle game logic, user interactions, and calculations.
        </P>


        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/classic-games" isExternal>
            mitchellkolb/classic-games <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C</span>
          </ListItem>
        </List>

  
        <SoftwareImage src="/images/software/classic-games/classic-games-info.png" alt="classic-games-info" />
        <SoftwareImage src="/images/software/classic-games/classic-games-bet.png" alt="classic-games-bet" />


        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/U7dJRZu7paA"
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
  
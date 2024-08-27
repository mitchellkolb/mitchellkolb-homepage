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
    <Layout title="Yu-Gi-Oh">
      <Container>
        <Title>
        Yu-Gi-Oh! C++ Game <Badge>2020</Badge>
        </Title>
        <P>
          This project involved implementing a Yu-Gi-Oh! card game using C++. That included designing and testing classes, implementing class templates, and utilizing data structures like stacks and queues for card decks and player hands. Players could create decks, add cards, and engage in battles. The game logic included handling life points, attack and defense mechanics, and determining the winner. Key skills demonstrated included object-oriented programming, file I/O, and data management in C++.
        </P>


        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/yu-gi-oh-cpp" isExternal>
            mitchellkolb/yu-gi-oh-cpp <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C, Clion</span>
          </ListItem>
        </List>

  
        <SoftwareImage src="/images/software/yugioh/yugioh-p1.png" alt="yugioh-p1" />
        <SoftwareImage src="/images/software/yugioh/yugioh-end.png" alt="yugioh-end" />



        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/_xjbwXPnGbE"
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
  
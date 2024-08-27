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
    <Layout title="Java Ball Game">
      <Container>
        <Title>
        Java Ball Game <Badge>2023</Badge>
        </Title>
        <P>
          This project involved creating a Java-based ball game where players score points by clicking on moving balls before they exit the screen. The game supports various ball types with unique behaviors, such as shrinking, bouncing, and splitting. Key features include random speed adjustments upon hits, multiple ball management using ArrayList, and a scoring system based on ball interactions. The project demonstrates my coding skills using object-oriented programming principles in Java.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/java-ball-game" isExternal>
            mitchellkolb/java-ball-game <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux, Ubuntu</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/software/java-ball/4balls.JPG" alt="java 4balls" />
        <SoftwareImage src="/images/software/java-ball/endscreen.JPG" alt="java endscreen" />

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/DPazirTKoa0"
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
  
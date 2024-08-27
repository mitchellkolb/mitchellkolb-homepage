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
    <Layout title="Threading in C">
      <Container>
        <Title>
        Multi-threading in C <Badge>2023</Badge>
        </Title>
        <P>
          In a project exploring the pthread.h library in C, I tackled two mathematical problems using threads. First, I computed the sum of an N x N matrix by creating N threads, each summing a unique row. Using mutexes to ensure thread-safe access to the global sum variable. Second, I solved a system of linear equations (AX = B) via concurrent threads, using Gauss elimination with row reduction, back substitution, and partial pivoting, using mutexes and barriers to coordinate thread operations.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/multi-threading-in-C" isExternal>
            mitchellkolb/multi-threading-in-C <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux, Ubuntu</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/software/multi-threading/mutex-big.JPG" alt="mutex" />
        <SoftwareImage src="/images/software/multi-threading/barrier-small-2.JPG" alt="barrier" />

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/7tln4s4ttao"
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
  
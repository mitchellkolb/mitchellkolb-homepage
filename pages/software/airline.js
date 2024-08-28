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
    <Layout title="Airline">
      <Container>
        <Title>
        Airline Search Engine <Badge>2023</Badge>
        </Title>
        <P>
          This is a GUI for the OpenFlights.org Airline dataset where my team and I applied the topics we learned in our Big Data course, such as Distributed Systems, MapReduce, NoSQL, and Spark. We created a search engine that provides users with functionalities such as searching for airports, airlines, and routes, finding trips with the fewest stops, and recommending cities reachable within a certain number of hops.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/airline-search-engine" isExternal>
              mitchellkolb/airline-search-engine <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, CustomTkinter, Neo4j</span>
          </ListItem>
        </List>

        <SoftwareImage src="/images/software/airline/neo4j.png" alt="Graph" />
        <SoftwareImage src="/images/software/airline/login.png" alt="Graph" />
        <SoftwareImage src="/images/software/airline/graph.png" alt="Graph" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/pwpE3nvtbv4"
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
  
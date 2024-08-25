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
    <Layout title="Library Assistant">
      <Container>
        <Title>
        Library Assistant - Team JPENJ <Badge>2021</Badge>
        </Title>
        <P>
          The group I was in included 6 people and we developed a library assistance web application to manage user registrations, book searches, holds, checkouts, and returns, with all information stored in a database. Using Angular for the front-end, Node.js for the server and APIs, and PostgreSQL for the database, we created a functional interface for users. We employed effective software documentation and Agile methodology to organize and distribute the workload, ensuring a collaborative and efficient development process.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/librarian-assistant" isExternal>
            mitchellkolb/librarian-assistant <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website, Windows 10</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Typescript, JavaScript, Angular, Node.js, PostgreSQL</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/jpenj-322/jpenj-main.png" alt="jpenj-main" />
        <SoftwareImage src="/images/software/jpenj-322/jpenj-add.png" alt="jpenj-add" />
        {/* <SoftwareImage src="/images/software/jpenj-322/jpenj-flow.png" alt="jpenj-flow" /> */}

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/q_6WR5n7nQA"
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
  
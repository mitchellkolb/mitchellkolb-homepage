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
    <Layout title="Yelp Database">
      <Container>
        <Title>
        Yelp Database App <Badge>2023</Badge>
        </Title>
        <P>
          For my Yelp Database project, I developed a Python application to query and analyze Yelp business review data, focusing on database modeling such as ER diagrams, populating large datasets, optimizing query performance through indexing, and creating a user interface for efficient business searches and data retrieval. The application utilizes PostgreSQL for database management and incorporates JSON parsing to handle Yelp&apos;s dataset, enabling users to gather detailed information about businesses in specific locations and categories, and classify them based on custom metrics for popularity and success. The GUI is written in PyQt with real-time adjustments to the charts when values are changed.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/yelp-database" isExternal>
            mitchellkolb/yelp-database <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, PyQt, PostgreSQL, PgAdmin 4</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/software/yelp-db/main.png" alt="Main Menu" />
        <SoftwareImage src="/images/software/yelp-db/full.png" alt="Full Menu" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/Qd66rchTcco"
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
  
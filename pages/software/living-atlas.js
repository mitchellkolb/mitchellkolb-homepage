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
    <Layout title="Living Atlas">
      <Container>
        <Title>
        Living Atlas <Badge>2023</Badge>
        </Title>
        <P>
          A website developed by two teams involving 7 developers for WSU's Center for Environmental Research, Education, and Outreach (CEREO) department. We produced / deployed a full stack web application that collects and displays information relating to the Columbia River Basin. This website uses React and Mapbox for the frontend and Python with FastAPI for the backend endpoints. The backend connects to a PostgreSQL database to send and receive data from the user.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/living-atlas" isExternal>
            mitchellkolb/living-atlas <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Python, PostgreSQL, SwaggerUI</span>
          </ListItem>
          <ListItem>
            <Meta>Frontend</Meta>
            <span>Netlify.com</span>
          </ListItem>
          <ListItem>
            <Meta>Backend</Meta>
            <span>Render.com</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>ElephantSQL</span>
          </ListItem>
          <ListItem>
            <Meta>File Storage</Meta>
            <span>Google Cloud Storage</span>
          </ListItem>
          <ListItem>
            <Meta>Map API</Meta>
            <span>Mapbox</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/software/living-atlas/main-macos.png" alt="Atlas Homepage" />
        <SoftwareImage src="/images/software/living-atlas/water-map.png" alt="Atlas Map" />
        <SoftwareImage src="/images/software/living-atlas/swaggerUI.png" alt="SwaggerUI" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/iLsb16Jzgeo"
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
  
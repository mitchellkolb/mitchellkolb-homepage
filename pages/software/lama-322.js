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
    <Layout title="Research App">
      <Container>
        <Title>
        Research Position Search App - Team LAMA <Badge>2021</Badge>
        </Title>
        <P>
          Myself and 3 others developed a web application that connects college professors and undergraduate students for research projects. The application is designed using the Model-View-Controller (MVC) architectural pattern. It includes features for students to create profiles, apply for research positions, and track application statuses. Faculty members can post research positions, view and manage applications, and contact students for interviews. The system&apos;s functionality encompasses user authentication, profile management, research position posting, and application processing. The application was made to streamline the process of finding and applying for research opportunities within our university setting.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/research-position-search-app" isExternal>
            mitchellkolb/research-position-search-app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website, Windows 10</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Flask, SQLite, Selenium</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/lama-322/lama-faculty-view.png" alt="lama-faculty-view" />
        <SoftwareImage src="/images/software/lama-322/lama-student-apply.png" alt="lama-student-apply" />
        <SoftwareImage src="/images/software/lama-322/lama-new-position.png" alt="lama-new-position" />

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/XV8JiobX_7g"
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
  
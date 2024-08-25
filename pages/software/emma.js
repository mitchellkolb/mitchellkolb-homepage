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
    <Layout title="Emma Dashboard">
      <Container>
        <Title>
        Emma Dashboard <Badge>2023-2024</Badge>
        </Title>
        <P>
          I took over support for the EMMA dashboard, a web portal used by researchers in the EMMA project at WSU's Psychology Department to view specific patient data. My responsibilities included porting the system to the lab's new computers, importing new datasets into the graph portion of the dashboard, and updating the legacy codebase to meet the current needs of the department.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/gerontechnology" isExternal>
              mitchellkolb/emma-dashboard <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 10</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Flask, MySQL</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/software/emma/emma-dash-4.JPG" alt="Emma Patient Dashboard" />
        <SoftwareImage src="/images/software/emma/emma-dash-2.JPG" alt="Emma Graph 1" />
        <SoftwareImage src="/images/software/emma/emma-dash-3.JPG" alt="Emma Graph 2" />

      </Container>
    </Layout>
  )
  
  export default Software
  export { getServerSideProps } from '../../components/chakra'
  
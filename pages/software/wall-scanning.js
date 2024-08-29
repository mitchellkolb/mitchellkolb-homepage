import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
    Box
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, SoftwareImage, Meta } from '../../components/software'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Software = () => (
    <Layout title="Wall Scanning WRS">
      <Container>
        <Title>
        Wall Scanning WRS <Badge>2022</Badge>
        </Title>
        <P>
          Our team of 4 had a focus on the planning and documentation process of how we would go about realistically developing a Wall Scanning app using a Word Requirement Specification (WRS) document. The project idea we wrote about was to develop an indoor navigation app for the visually impaired. Utilizing agile methodology, our team established requirements, designed, tested, and deployed a prototype using Figma and Flutterflow. The app would feature voice-over and assistive technology, enabling intuitive navigation through user interface prototyping. We also analyzed the function points and creep rate of this projects requirements.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/navigation-app-WRS-report" isExternal>
            mitchellkolb/navigation-app-WRS-report <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Format</Meta>
            <span>Word Requirement Specification (WRS) Report</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Google Docs, Microsoft Word, Figma, Flutterflow</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/wall-scanning/APP-Manual.png" alt="wall-scanning" />

        <Box textAlign="center">
          <AspectRatio maxW="640px" ratio={1.7} my={4}>
            <iframe
              src="/images/software/wall-scanning/WRS_Document_Indoor_Navigation_App.pdf"
              title="PDF viewer"
              frameBorder="0"
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </AspectRatio>
          <Link href="/images/software/wall-scanning/WRS_Document_Indoor_Navigation_App.pdf" isExternal>
            Open this PDF in a New Tab
          </Link>
        </Box>  


      </Container>
    </Layout>
  )
  
  export default Software
  export { getServerSideProps } from '../../components/chakra'
  
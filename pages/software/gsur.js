import {
    Container,
    Badge,
    Box,
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
    <Layout title="GSUR">
      <Container>
        <Title>
        GSUR Automation Tool <Badge>2023-2024</Badge>
        </Title>
        <P>
          The GSUR Data Automation Tool created for WSU's Psychology Department has two features: an automated downloader tool that runs using the requests Python library or Selenium to open your browser, log in to the EMMA patient portal website, and download all necessary files. The second feature is an analysis tool that reads through all the data files and outputs the results into a single .csv file. I presented the work I completed at the April 26th 2024, WSU Psychology Symposium. You can view the poster that I used when I presented down below.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/GSUR" isExternal>
            mitchellkolb/GSUR <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>macOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, CustomTkinter, Selenium, BeautifulSoup, Requests</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/gsur/login.png" alt="Login" />
        <SoftwareImage src="/images/software/gsur/download.png" alt="Download" />
        <Box w="100%" mx="auto" p={4}>
          <SoftwareImage src="/images/software/gsur/analyze.png" alt="Analyze" />
        </Box>
        <Link href="https://github.com/mitchellkolb/GSUR/blob/main/PosterPresentation/GSUR-poster-mk-2024.pdf">
          <SoftwareImage src="/images/software/gsur/poster.png" alt="Poster" />
        </Link>
      </Container>
    </Layout>
  )
  
  export default Software
  export { getServerSideProps } from '../../components/chakra'
  
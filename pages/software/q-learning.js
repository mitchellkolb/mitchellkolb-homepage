import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Box
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, SoftwareImage, Meta } from '../../components/software'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Software = () => (
    <Layout title="Q-Learning">
      <Container>
        <Title>
        Q-Learning Racing Game Project <Badge>2023</Badge>
        </Title>
        <P>
          This project involved a group of two using the Q-Learning algorithm to develop an AI capable of navigating a 2D racing game. Implementing Python and Pygame, our team created a system where the AI learned to avoid track borders and complete laps through iterative training. Key accomplishments included integrating Deep Q-Learning techniques, designing a reward system for optimal AI performance, and achieving significant improvements in the AI’s navigation capabilities over time.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/Q-Learning-ML" isExternal>
            mitchellkolb/Q-Learning-ML <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 10</span>
          </ListItem>
          <ListItem>
            <Meta>Format</Meta>
            <span>MLA Report</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, PyGame, PyTorch, Numpy, Google Docs</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/q-learning/q-learning-map.png" alt="q-learning-map" />
        <SoftwareImage src="/images/software/q-learning/q-learning-graph.png" alt="q-learning-graph" />

        <SoftwareImage src="/images/software/q-learning/q-learning-report-page-1.png" alt="q-learning-pdf-page-1" />
        <Box textAlign="center" mb={12}>
          <Link href="/images/software/q-learning/q-learning-report.pdf" isExternal>
              Open this Report as a PDF in a New Tab
          </Link>
        </Box>


      </Container>
    </Layout>
  )
  
  export default Software
  export { getServerSideProps } from '../../components/chakra'
  
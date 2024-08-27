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
    <Layout title="Fitbit Data">
      <Container>
        <Title>
        Fitbit Data Analysis <Badge>2020, 2024</Badge>
        </Title>
        <P>
          This project was initially completed during my CPTS 122 course, I redid this assignment four years later to evaluate the progress I've made programming during college. The project tasks included reading, cleaning, parsing, and exporting data stored in a CSV file. Key features involved handling missing or duplicate entries, performing calculations like total steps and average heart rate, and displaying results in a formatted output. 
        </P>


        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/fitbit-data-analysis" isExternal>
            mitchellkolb/fitbit-data-analysis <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 10</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C, Clion</span>
          </ListItem>
        </List>

  
        <SoftwareImage src="/images/software/fitbit/fitbit-code.png" alt="fitbit-code" />
        <SoftwareImage src="/images/software/fitbit/fitbit-future.png" alt="fitbit-future" />



        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/5XbRhzXmZzE"
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
  
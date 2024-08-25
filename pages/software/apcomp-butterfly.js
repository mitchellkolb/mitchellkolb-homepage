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
    <Layout title="Inkdro33p">
      <Container>
        <Title>
        APComp Butterfly <Badge>2023-2024</Badge>
        </Title>
        <P>
          This is the first coding project I created using Python back in 2016, based on my own idea. At that time, I only knew the basics of Python, such as how to create variables, pass values into functions, and use simple if/else statements and while loops. This project's topic relates to the butterfly effect, where every decision a person makes causes ripple effects that influence one's future. I tried to simulate this phenomenon by asking the user yes or no questions and stacking many if/else statements to create multiple paths.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
        <SoftwareImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
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
  
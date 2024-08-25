import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, HardwareImage, Meta } from '../../components/hardware'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Hardware = () => (
    <Layout title="Inkdro33p">
      <Container>
        <Title>
          Xbox 360 RGH 3.0 <Badge>2023</Badge>
        </Title>
        <P>
          I modded three trinity Xbox 360's with the Reset Glich Hack 3.0 (RGH3) and installed the Aroura Dashboard as well with downloading the data off of our physical game discs to preserve them.
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
  
        <HardwareImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
        <HardwareImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
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
  
  export default Hardware
  export { getServerSideProps } from '../../components/chakra'
  
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
    <Layout title="Music Player">
      <Container>
        <Title>
        Raspberry Pi Music Player <Badge>Ongoing</Badge>
        </Title>
        <P>
          I'm building a music player that boots off of a Raspberry Pi 3B+ that opens a browser using playwright and plays music from pianostream.com with a custom GUI audio controls built with the Kivy UI Python UI library. All of this is going to be placed within a 3D printed case that has openings for all ports and the 5 inch touchscreen. This project will be made public when it is completed and this page will be updated with more images when its in a working condition.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Music</Meta>
            <Link href="http://pianostream.com/" isExternal>
              pianostream.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>UI Library</Meta>
            <Link href="https://kivy.org/" isExternal>
              Kivy.org <ExternalLinkIcon mx="2px" />
            </Link>          
          </ListItem>
          <ListItem>
            <Meta>Web Automation</Meta>
            <Link href="https://playwright.dev/" isExternal>
              playwright.dev <ExternalLinkIcon mx="2px" />
            </Link>          
          </ListItem>
        </List>
  
        <HardwareImage src="/images/hardware/pi-music/pi-music-1.jpeg" alt="pi-music-1.jpeg" />
        <HardwareImage src="/images/hardware/pi-music/pi-music-2.jpg" alt="pi-music-2.jpg" />


      </Container>
    </Layout>
  )
  
  export default Hardware
  export { getServerSideProps } from '../../components/chakra'
  
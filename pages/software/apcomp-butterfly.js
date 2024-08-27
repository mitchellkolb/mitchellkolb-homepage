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
    <Layout title="AP Comp Butterfly">
      <Container>
        <Title>
        AP Comp Butterfly <Badge>2018</Badge>
        </Title>
        <P>
          This is my first school coding project I created using Python back in 2018, based on my own idea. At that time, I only knew the basics of Python, such as how to create variables, pass values into functions, and use simple if/else statements and while loops. This project's topic relates to the butterfly effect, where every decision a person makes causes ripple effects that influence one's future. I tried to simulate this phenomenon by asking the user yes or no questions and stacking many if/else statements to create multiple paths.
        </P>


        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 10</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>
        </List>

  
        <SoftwareImage src="/images/software/apcomp-butterfly/apcomp-1.png" alt="apcomp-1" />


        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/FIkVwaIeskQ"
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
  
import {
    Container,
    Badge,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { Title, SoftwareImage, Meta } from '../../components/software'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Software = () => (
    <Layout title="Models in Maya">
      <Container>
        <Title>
        Making Models in Maya <Badge>2023</Badge>
        </Title>
        <P>
          During my time learning how to use Maya in 2023 I rendered five scenes using models that I created and two animations that involve all the models I made in the previous projects. Below you can view quick snippets of 3 of the scences and 2 of the animations that I&apos;ve uploaded for you to view.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 10, Maya, AutoDesk</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/software/maya-models/myPersp.PNG" alt="myPersp" />
        <SoftwareImage src="/images/software/maya-models/allPots.jpg" alt="allPots" />
        <SoftwareImage src="/images/software/maya-models/aboveLamp.jpeg" alt="aboveLamp" />


        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/zFcjTvg_LOA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/DgakfV5ZiGI"
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
  
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
  import { Title, HardwareImage, Meta } from '../../components/hardware'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Hardware = () => (
    <Layout title="Inkdro33p">
      <Container>
        <Title>
          Building PC's <Badge>2015</Badge>
        </Title>
        <P>
          I have built three custom computers with a wide variety of configurations and price points for people in my life. This included preparing the part list to fit the particular needs of the person whos computer it is and the purchasing and assembling of the computer. All of the computers I have built have lasted 9+ years with no major issues with the people who received them.
        </P>
  
        <Box mb={12}>
          <P>First Computer I Built</P>
          <HardwareImage src="/images/hardware/build-pc/build-pc-1.jpeg" alt="build-pc-1" />
          <HardwareImage src="/images/hardware/build-pc/build-pc-2.jpeg" alt="build-pc-2" />
        </Box>
  
        <Box mb={12}>
          <P>Second Computer I Built. This was at a friends house and I have few images of that day.</P>
          <HardwareImage src="/images/hardware/build-pc/build-pc-3.png" alt="build-pc-3" />
        </Box>
  
        <Box mb={12}>
          <P>Third Computer I Built</P>
          <HardwareImage src="/images/hardware/build-pc/build-pc-4.jpeg" alt="build-pc-4" />
          <HardwareImage src="/images/hardware/build-pc/build-pc-5.jpeg" alt="build-pc-5" />
        </Box>
      </Container>
    </Layout>
  )
  
  export default Hardware
  export { getServerSideProps } from '../../components/chakra'
  
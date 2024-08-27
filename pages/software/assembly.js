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
    <Layout title="MIPS">
      <Container>
        <Title>
        MIPS Assembly Programming <Badge>2020</Badge>
        </Title>
        <P>
          While learning about computer architecure, I used QtSPIM to code assembly programs in the MIPS architecture. I wrote code for creating a simple calculator and manipulating an array. The calculator program requested two integers and performed addition, subtraction, or multiplication based on user input. The array manipulation program defined a 10-element array, implemented functions to find the maximum value and calculate the summation, and printed the results. Key tasks included managing registers, utilizing system calls, and adhering to MIPS assembly syntax in QtSPIM.
        </P>


        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/mips-assembly-programming" isExternal>
            mitchellkolb/mips-assembly-programming <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>QtSPIM, MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Assembly, MIPS</span>
          </ListItem>
        </List>

  
        <SoftwareImage src="/images/software/assembly/mips-mult.JPG" alt="mips-mult" />
        <SoftwareImage src="/images/software/assembly/mips-array.JPG" alt="mips-array" />


        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/by-Q1PF2GSQ"
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
  
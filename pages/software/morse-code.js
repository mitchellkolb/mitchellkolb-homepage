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
    <Layout title="Morse Code Reader">
      <Container>
        <Title>
        Morse Code Reader <Badge>2020</Badge>
        </Title>
        <P>
          I coded a Morse Code lookup system using a Binary Search Tree (BST) in C++. This included designing a BSTNode structure to store characters and Morse code strings, reading a Morse code table from a file to build the BST, and creating functions for inserting, printing, and searching the tree. Additionally, the program converted English text from a file into Morse code, demonstrating skills in data structures, file handling, and algorithm implementation.
        </P>


        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/morse-code-reader" isExternal>
            mitchellkolb/morse-code-reader <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C++</span>
          </ListItem>
        </List>

  
        <SoftwareImage src="/images/software/morse-code/morse-code-1.png" alt="morse-code-" />
        <SoftwareImage src="/images/software/morse-code/morse-code-3.png" alt="morse-code-3" />

        
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/qD-gSNceS1s"
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
  
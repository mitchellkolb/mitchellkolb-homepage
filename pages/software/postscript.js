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
    <Layout title="Postscript Interpreter">
      <Container>
        <Title>
        Postscript Interpreter <Badge>2023</Badge>
        </Title>
        <P>
          I coded an interpreter for the PostScript language in Python. PostScript is a stack-based, interpreted language developed by Adobe Systems for producing high-quality text and graphics in the printing industry. My interpreter includes the operators: add, sub, mul, div, mod, eq, lt, gt, length, get, getinterval, put, if, ifelse, for, dup, copy, clear, exch, roll, and dict.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/postscript-interpreter" isExternal>
            mitchellkolb/postscript-interpreter <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux, Ubuntu</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, PostScript</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/postscript/spss-terminal.PNG" alt="SPSS Terminal Output" />
        <SoftwareImage src="/images/software/postscript/spss-tests.PNG" alt="SPSS Tests Check" />


        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/SSEPi0xk1iE"
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
  
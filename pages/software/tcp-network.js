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
    <Layout title="TCP Networking">
      <Container>
        <Title>
        TCP Networking in C <Badge>2023</Badge>
        </Title>
        <P>
          This project involved designing and implementing a TCP server and client for performing file operations across the Internet. The server handles commands like creating directories, deleting files, and transferring files, while the client sends these commands and receives results. My implementation uses file parameters, networking, threads, mutexes, and barriers to manage concurrent operations, and developing user-level protocols to ensure correct data transfer.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/TCP-file-server" isExternal>
            mitchellkolb/TCP-file-server <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux, Ubuntu</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C</span>
          </ListItem>
        </List>
  
        <SoftwareImage src="/images/software/tcp-network/tcp-2.JPG" alt="tcp-2" />
        <SoftwareImage src="/images/software/tcp-network/tcp-5.JPG" alt="tcp-5" />

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/rXgaHA0ePgw"
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
  
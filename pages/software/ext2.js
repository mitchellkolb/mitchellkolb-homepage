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
    <Layout title="Ext2">
      <Container>
        <Title>
        Ext2 File System <Badge>2023</Badge>
        </Title>
        <P>
          This project is a Linux-compatible ext2 file system that can perform common Linux commands like ls, cd, pwd, mkdir, rmdir, read, write, open, link, symlink, etc. The project deliverables were comprised of two primary sections. The first level was expanding the base file system to implement the file system tree. The second level focused on implementing read and write operations of file contents.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/ext2-file-system" isExternal>
              mitchellkolb/ext2-file-system <ExternalLinkIcon mx="2px" />
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
        
        <SoftwareImage src="/images/software/ext2/startup.png" alt="Startup Ext2 Image" />
        <SoftwareImage src="/images/software/ext2/newDir.png" alt="New Dir Ext2 Image" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/L8SBFNDYORU"
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
  
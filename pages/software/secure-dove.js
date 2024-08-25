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
    <Layout title="Secure Dove">
      <Container>
        <Title>
        Secure Dove <Badge>2023</Badge>
        </Title>
        <P>
          The main objective of this project for our group of 5 people was to develop a basic web instant messenger, intentionally exposing it to various vulnerabilities to identify and rectify them using techniques learned in class. The focus was on securing credentials transmitted over the network using tools like Wireshark, preventing account passwords from being stored in plaintext in our PostgreSQL database, and protecting accounts from brute force attacks on the login page. Additionally, we addressed the visibility of our database API key and safeguarded our system from SQL injection attacks.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/SecureDove" isExternal>
            mitchellkolb/SecureDove <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 10</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, JavaScript, FastAPI, React, PostgreSQL</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/secure-dove/dove-login.png" alt="Secure Dove Login" />
        <SoftwareImage src="/images/software/secure-dove/dove-invite.png" alt="Secure Dove Invite" />
        <SoftwareImage src="/images/software/secure-dove/dove-message.png" alt="Secure Dove Message" />

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-27FixPlENk"
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
  
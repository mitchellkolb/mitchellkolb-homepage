import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
    Box
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, SoftwareImage, Meta } from '../../components/software'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Software = () => (
    <Layout title="Inkdro33p">
      <Container>
        <Title>
          Ethics of RFID Tag in Humans <Badge>2022</Badge>
        </Title>
        <P>
          While learning about Professional Skills in Computing and Engineering I had a project / report with a team of 6 people. Our team was tasked with performing a group case study to increase our awareness of the issues and dilemmas surrounding professional topics. Our topic of choice was RFID tag implants in humans and the ethical concerns corresponding to that. We wrote out case study report in the IEEE format and used Asana for assigning the workload to our teamates effectively.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/RFID-Tag-Implants-Report" isExternal>
            mitchellkolb/RFID-Tag-Implants-Report <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Format</Meta>
            <span>IEEE Report</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Microsoft Word, Asana</span>
          </ListItem>
        </List>
  

        {/* <SoftwareImage src="/images/software/rfid-learning/rfid-image.jpg" alt="rfid-image-1" /> */}
        <SoftwareImage src="/images/software/rfid-learning/rfid-asana.png" alt="rfid-image-2" />

        <Box textAlign="center">
          <AspectRatio maxW="640px" ratio={1.7} my={4}>
            <iframe
              src="/images/software/rfid-learning/rfid-report.pdf"
              title="PDF viewer"
              frameBorder="0"
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </AspectRatio>
          <Link href="/images/software/rfid-learning/rfid-report.pdf" isExternal>
            Open this PDF in a New Tab
          </Link>
        </Box>  


      </Container>
    </Layout>
  )
  
  export default Software
  export { getServerSideProps } from '../../components/chakra'
  
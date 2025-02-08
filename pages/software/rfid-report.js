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
    <Layout title="RFID Tag">
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
  


        <SoftwareImage src="/images/software/rfid-learning/rfid-asana.png" alt="rfid-image-2" />

        <SoftwareImage src="/images/software/rfid-learning/rfid-report-page-1.png" alt="rfid-report-page-1" />
        <Box textAlign="center" mb={12}>
          <Link href="/images/software/rfid-learning/rfid-report.pdf" isExternal>
            Open this Report as a PDF in a New Tab
          </Link>
        </Box>  


      </Container>
    </Layout>
  )
  
  export default Software
  export { getServerSideProps } from '../../components/chakra'
  
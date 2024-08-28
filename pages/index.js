import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Divider,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon, StarIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoMail, IoLogoLinkedin, IoGlobe, IoGlobeOutline } from 'react-icons/io5'
// This is the file links to the two thumbnails linked to at the bottom of the index page.
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Software Developer based in Washington!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mitchell Kolb
          </Heading>
          <p>Digital Craftsman ( Developer/Tinkerer/Documenter )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/mk-full-headshot.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Mitchell is a software developer with a deep passion for creating technology that makes a significant impact. His approach to software development is comprehensive, combining meticulous planning with steady, reliable progress. Whether he's optimizing complex airline routes or designing intuitive user interfaces, Mitchell consistently delivers solutions that are both effective and inspiring. Among his notable projects are the {' '}
          <Link 
            as={NextLink} 
            href="https://github.com/mitchellkolb/GSUR" 
            passHref 
            target="_blank"
          >
            GSUR Data Automation Tool
          </Link>
          , which enhances data analysis for neuropsychological research, and the {' '}
          <Link
            as={NextLink}
            href="https://github.com/mitchellkolb/living-atlas"
            passHref
            target="_blank"
          >
            Living Atlas 
          </Link>
          , an advanced platform for WSU that displays environmental data.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/software"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Washington.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Earned the rank of Eagle Scout after completing the Boy Scouts program
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated from Washington State University with a Bachelors of Science in Computer Science
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Hired by WSU's Neuropsychology and Aging Laboratory to work on the GSUR Automation Tool and EMMA Dashboard projects
        </BioSection>
        {/* <BioSection>
          <BioYear>Present</BioYear>
          Working as a freelancer
        </BioSection> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Kayaking, Cooking, Digital Art, 3D Printing, Electronics Tinkering

          {/* <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link> */}
          
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mitchellkolb" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @mitchellkolb
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:mitchellkolb.work@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                mitchellkolb.work@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/mitchellkolb/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                in/mitchellkolb
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.mitchellkolb.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoGlobeOutline />}
              >
                www.mitchellkolb.com
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* Make sure to uncomment this below and the file links at the top of the index file. */}
        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* Use this bit to see how to add new sections in the future */}
        {/* <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p> */}

        <Divider my={6} />

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/credits"
            scroll={false}
            rightIcon={<ChevronRightIcon />} colorScheme="teal"
          >
            Credits & Acknowledgments 
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

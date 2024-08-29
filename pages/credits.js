
import NextLink from 'next/link'
import { Container, Heading, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'


const Credits = () => (
  <Layout title="Credits">
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
            Credits & Acknowledgments
        </Heading>
        <Paragraph mb={5}>
            This page is dedicated to giving credit to the individuals and resources that have contributed to the design and development of this website. Their work is very impressive, and I am grateful they allowed me to use it. I want to acknowledge their contributions here.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
            Codebase
        </Heading>
        <Paragraph mb={3}>
            This website&apos;s codebase is built upon a project generously made available by Takuya Matsuyama. One of his requests was that his site is linked. You can find his site here {' '}
            <Link 
                as={NextLink} 
                href="https://www.craftz.dog/" 
                passHref 
                target="_blank"
            >
            https://www.craftz.dog/
            </Link>
        </Paragraph>
      </Section>
      
      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
            3D Model
        </Heading>
        <Paragraph>
            The 3D model used on this site is credited to Alex Safayan [CC-BY] via Poly Pizza. The model is {' '} 
            <Link 
                as={NextLink} 
                href="https://poly.pizza/m/27hcX_w47Jb" 
                passHref 
                target="_blank"
            >
            Laptop / MacBook Pro 
            </Link>
        </Paragraph>
      </Section>
      


      {/* <Divider my={6} /> */}


    </Container>
  </Layout>
)

export default Credits
export { getServerSideProps } from '../components/chakra'

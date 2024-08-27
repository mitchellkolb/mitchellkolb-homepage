import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, HardwareImage, Meta } from '../../components/hardware'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'



  
  const Hardware = () => (
    <Layout title="Razer Blade">
      <Container>
        <Title>
          Razer Blade Screen & Battery Repair <Badge>2022-</Badge>
        </Title>
        <P>
          I replaced the 15.6-inch IPS screen, the adhesive around the screen bezel, and the battery for a Razer Blade Laptop with a damaged screen. This process involved researching and comparing various third-party screens available online to ensure they would fit and work with this particular laptop. I accomplished this by performing a general search for the laptop model name and then matching the screens' power cable pins to the ones required, as some screens may fit but use a different power cable configuration.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Screen</Meta>
            <Link href="https://www.amazon.com/dp/B08PVFN7MB?ref=ppx_yo2ov_dt_b_fed_asin_title" target="_blank" rel="noopener noreferrer">
              IPS 15.6in IPS Screen <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tape</Meta>
            <Link href="https://www.amazon.com/dp/B0817HZN4L?ref=ppx_yo2ov_dt_b_fed_asin_title" target="_blank" rel="noopener noreferrer">
              2mm Double Sided Tape <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tape</Meta>
            <Link href="https://www.amazon.com/dp/B077QMLM7C?ref=ppx_yo2ov_dt_b_fed_asin_title" target="_blank" rel="noopener noreferrer">
              5mm Double Sided Tape <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Battery</Meta>
            <Link href="https://www.amazon.com/dp/B07YPSHGL2?ref=ppx_yo2ov_dt_b_fed_asin_title" target="_blank" rel="noopener noreferrer">
              65Wh 4221mAh 4-Cell <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

  
        <HardwareImage src="/images/hardware/blade-screen/blade-screen-1.jpeg" alt="blade-screen-1" />
        <HardwareImage src="/images/hardware/blade-screen/blade-screen-2.jpeg" alt="blade-screen-2" />
        <HardwareImage src="/images/hardware/blade-screen/blade-screen-3.jpeg" alt="blade-screen-3" />
        <HardwareImage src="/images/hardware/blade-screen/blade-screen-4.jpeg" alt="blade-screen-4" />
        <HardwareImage src="/images/hardware/blade-screen/blade-screen-5.jpeg" alt="blade-screen-5" />

      </Container>
    </Layout>
  )
  
  export default Hardware
  export { getServerSideProps } from '../../components/chakra'
  
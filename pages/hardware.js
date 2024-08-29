// /pages/hardware.js

import { Container, Heading, SimpleGrid, Divider, Box, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { HardwareGridItem } from '../components/grid-item'
import NextLink from 'next/link'


import buildPC from '../public/images/hardware/build-pc/build-pc-thumb.jpeg'
import razerBlade from '../public/images/hardware/blade-screen/blade-screen-thumb.jpeg'
import guitarHero from '../public/images/hardware/guitar-hero/guitar-hero-thumb.jpeg'
import xboxRGH from '../public/images/hardware/xbox-rgh/xbox-rgh-thumb.jpeg'
import piMusic from '../public/images/hardware/pi-music/pi-music-thumb.jpeg'



const Hardware = () => {
  return (
    <Layout title="Hardware">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Hardware
        </Heading>
        <Box my={4}>
          Welcome to my personal hardware projects portfolio, featuring a variety of projects driven by skills I wanted to learn, problems I wanted to solve, or custom products I&apos;ve created. These projects encompass general electronic tinkering, 3D printing, and manufacturing. For more of my work that extends beyond electronics, be sure to explore my&nbsp;
          <Link as={NextLink} href="/software" passHref>
            software
          </Link>
          {' '}projects as well.
        </Box>

        <Section>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Published
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <HardwareGridItem id="pi-music" title="(Ongoing) Raspberry Pi Music Player" thumbnail={piMusic}>
            Building a music player using a 5in touchscreen and custom 3D printed case.
            </HardwareGridItem>
          </Section>
          <Section>
            <HardwareGridItem id="xbox-rgh" title="Xbox 360 RGH 3.0" thumbnail={xboxRGH}>
            Modding three Xbox 360&apos;s with the Reset Glich Hack 3.0 (RGH3) and installing the Aroura Dashboard.
            </HardwareGridItem>
          </Section>
          <Section>
            <HardwareGridItem id="guitar-hero" title="Guitar Hero Capacitor" thumbnail={guitarHero}>
            Replacing two capacitors on a Guitar Hero PS3 controller because it doesn&apos;t power on.
            </HardwareGridItem>
          </Section>
          <Section>
            <HardwareGridItem id="blade-screen" title="Razer Blade Screen & Battery Repair" thumbnail={razerBlade}>
            Replacing the broken screen/battery on a razer blade laptop.
            </HardwareGridItem>
          </Section>
          <Section>
            <HardwareGridItem id="building-pc" title="Building PC's" thumbnail={buildPC}>
            Starting in 2015 I built multiple PC&apos;s for my friends and family.
            </HardwareGridItem>
          </Section>
          {/* <Section>
            <HardwareGridItem id="wrist-rest" title="Keyboard Wrist Rest Repair" thumbnail={sample}>
            Restoring my Razer Blackwidow Chroma V2 Keyboard Wrist Rest
            </HardwareGridItem>
          </Section> */}
        </SimpleGrid>
        <Box height="25px" />
      </Container>
    </Layout>
  );
}

export default Hardware
export { getServerSideProps } from '../components/chakra'

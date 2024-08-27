import {
    Container,
    Badge,
    Link,
    Box,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, HardwareImage, Meta } from '../../components/hardware'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'


  
  const Hardware = () => (
    <Layout title="Guitar Hero">
      <Container>
        <Title>
          Guitar Hero Capacitor <Badge>2022</Badge>
        </Title>
        <P>
          I replaced two capacitors on the PCB of a black Gibson Les Paul Guitar Hero PS3 controller for a friend because it wouldn't power on or connect to the PS3. The only information I had at the start was that the guitar controller didn&apos;t light up even with fresh batteries. To diagnose the issue, I checked the battery compartment and noticed slight rusting. Initially, I thought it would be a straightforward fix: open the controller, remove the rusted contact springs, soak and clean them. However, upon opening the guitar, I discovered that two capacitors on the main board appeared to have exploded. 
        </P>

  
        <HardwareImage src="/images/hardware/guitar-hero/guitar-hero-1.jpeg" alt="guitar-hero-1" />
        <HardwareImage src="/images/hardware/guitar-hero/guitar-hero-2.jpeg" alt="guitar-hero-2" />

        <P>
          Realizing that these capacitors were likely the reason the controller wasn&apos;t powering on, I decided to replace them. This was my first time working with electronics and soldering, so I had to do some preliminary research. I learned how to use a soldering iron and the proper technique for desoldering through-hole capacitors through YouTube tutorials and with help from my local electronics lab. I also needed to order replacement capacitors with matching voltage ratings. The Les Paul controller uses one 10V 220µF capacitor and one 16V 47µF capacitor, which I purchased from an eBay listing:{' '} 
          <Link href="https://www.ebay.com/itm/393935220447?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=rkbi5ip0suq&sssrc=4429486&ssuid=ftmuszpgr0a&var=&widget_ver=artemis&media=COPY" target="_blank" rel="noopener noreferrer">
              Capacitor Link <ExternalLinkIcon mx="2px" />
          </Link>
        </P>

        <HardwareImage src="/images/hardware/guitar-hero/guitar-hero-3.jpeg" alt="guitar-hero-3" />
        <HardwareImage src="/images/hardware/guitar-hero/guitar-hero-4.jpeg" alt="guitar-hero-4" />

        <P>
          After desoldering and replacing the capacitors, I reassembled the guitar and cleaned the battery terminals as initially planned. I then inserted new batteries, and to my satisfaction, the controller powered on and connected to the PS3. What started as a simple cleaning job evolved into an educational experience in electronics and soldering. I found the process of solving this problem highly rewarding, and I plan to take on more electronics projects in the future. Seeing the controller come back to life was extremely satisfying.   
        </P>
        
        <HardwareImage src="/images/hardware/guitar-hero/guitar-hero-5.jpeg" alt="guitar-hero-5" />
        <HardwareImage src="/images/hardware/guitar-hero/guitar-hero-6.jpeg" alt="guitar-hero-6" />
        <HardwareImage src="/images/hardware/guitar-hero/guitar-hero-7.jpeg" alt="guitar-hero-7" />

      </Container>
    </Layout>
  )
  
  export default Hardware
  export { getServerSideProps } from '../../components/chakra'
  
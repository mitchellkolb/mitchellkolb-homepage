import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, HardwareImage, Meta } from '../../components/hardware'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'


  
  const Hardware = () => (
    <Layout title="Xbox 360 RGH">
      <Container>
        <Title>
          Xbox 360 RGH 3.0 <Badge>2024</Badge>
        </Title>
        <P>
          I modded three trinity Xbox 360&apos;s with the Reset Glich Hack 3.0 (RGH3) and installed the Aroura Dashboard as well with downloading the data off of our physical game discs to preserve them. I choose to do this project because I wanted to do something revolving electronic tinkering to have more reasons to solder things, and most importantly I won these Xbox 360&apos;s from an auction and needed to do something with them. So I&apos;ll walk you through the process of how I managed to pull this off. To start I followed these guides on performing the RGH 3.0, for more detail feel free to look through these websites.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Link href="https://www.youtube.com/watch?v=D3DDglRBqfY&list=PLPAdulwwMxsxOSxSfFQbl4fgkuO9Evztl&index=2&t=97s&pp=gAQBiAQB" isExternal>
              Parimary RGH3 Tutorial - MrMario2011 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/watch?v=Wbi4B3gtqiw&list=PLPAdulwwMxsxOSxSfFQbl4fgkuO9Evztl&index=15&pp=gAQBiAQB" isExternal>
              Secondary RGH3 Tutorial - TheWeekendModder <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/watch?v=FNYVGkFJV2s&list=PLPAdulwwMxsxOSxSfFQbl4fgkuO9Evztl&index=4&pp=gAQBiAQB" isExternal>
              Aroura Dashboard Setup - MrMario2011 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        
        <span>
          Here&apos;s a quick rundown of what was done.
        </span>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>1.</Meta>
            <span>Take apart the Xbox and strip it down to just the motherboard.</span>
          </ListItem>
          <ListItem>
            <Meta>2.</Meta>
            <span>Prepare two wires, one with a 10k Ohm resistor and one without.</span>
          </ListItem>
          <ListItem>
            <Meta>3.</Meta>
            <span>Prepare four spots on the backside of the motherboard. One of the spots requires you to scratch away the silkscreen to expose the metal traces and is extremely tiny.</span>
          </ListItem>
          <ListItem>
            <Meta>4.</Meta>
            <span>Flash a Raspberry Pi Pico with software that reprograms the Xbox&apos;s NAND.</span>
          </ListItem>
          <ListItem>
            <Meta>5.</Meta>
            <span>Solder seven wires to the top side of the motherboard, connect them to the Raspberry Pi Pico, and then run the program that reprograms the NAND.</span>
          </ListItem>
          <ListItem>
            <Meta>6.</Meta>
            <span>Plug the power supply into the Xbox to start it up. If done correctly, you should see the &quot;XELL RELOADED&quot; blue screen, which gives you special codes to input into the Raspberry Pi Pico program to finish setting up the Aurora Dashboard.</span>
          </ListItem>
          <ListItem>
            <Meta>7.</Meta>
            <span>Once setup is complete, unplug and desolder all the wires, reassemble the console, and enjoy an RGH&apos;d Xbox 360.</span>
          </ListItem>
        </List>


        <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
        
        <span>
          These first two images show me opening the consoles, and I have to say this was probably the most difficult part, purely because the two side pieces of plastic on the case seem to be designed never to be removed. It feels like you have to break the plastic tabs to get them off. Luckily, I took my time and didn&apos;t snap any of the plastic clips but at times it felt like I broke it all.
        </span>
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-1.png" alt="xbox-rgh-1" />
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-2.png" alt="xbox-rgh-2" />

        <span>
          When preparing the two wires I needed and soldering them onto the motherboard, I had to work under a kitchen fan because of the fumes released when you melt solder and flux.
        </span>
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-3.png" alt="xbox-rgh-3" />

        <span>
          The backside of the motherboard is where I had to solder the two wires. To give you a sense of scale for how small some of this work is, the black circle in the top right is about the size of a dime.
        </span>
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-4.jpeg" alt="xbox-rgh-4" />

        <span>Where the red arrow is pointing, you can see one of the spots where I had to scratch away the green silkscreen from the board to expose the metal trace.</span>
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-5-1.jpeg" alt="xbox-rgh-5" />

        <span>
          This is how tiny the spot I needed to scratch away is. The worst part is that if I accidentally scratched away the silkscreen for the line trace going up and down between the &quot;3&quot; and &quot;5,&quot; it would brick the entire console.
        </span>
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-5-2.jpeg" alt="xbox-rgh-5" />

        <span>
          Here is what it looked like after I successfully soldered the two wires to the motherboard.
        </span>
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-6.jpeg" alt="xbox-rgh-6" />

        <span>
          This is when I soldered seven wires to the motherboard to reprogram the NAND. After plugging the Xbox into the TV and seeing the XELL RELOADED screen, I was extremely happy that I didn&apos;t break any part of it.
        </span>
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-7.jpeg" alt="xbox-rgh-7" />
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-8.png" alt="xbox-rgh-8" />

        <span>
          After repeating this whole process three times, all the Xbox 360s worked and booted into Aurora perfectly.
        </span>
        <HardwareImage src="/images/hardware/xbox-rgh/xbox-rgh-9.jpeg" alt="xbox-rgh-9" />





      </Container>
    </Layout>
  )
  
  export default Hardware
  export { getServerSideProps } from '../../components/chakra'
  
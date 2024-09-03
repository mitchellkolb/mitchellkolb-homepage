import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mitchells's homepage" />
        <meta name="author" content="Mitchell Kolb" />
        <meta name="author" content="mitchellkolb" />
        <link rel="apple-touch-icon" href="/apple-touch.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Mitchell Kolb" />
        <meta name="og:title" content="Mitchell Kolb" />
        <meta property="og:type" content="website" />
        <title>Mitchell Kolb - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
        <Analytics />
        <SpeedInsights />
      </Container>
    </Box>
  )
}

export default Main

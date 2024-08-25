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
    <Layout title="Divorce Dataset">
      <Container>
        <Title>
        Data Mining Divorce Dataset <Badge>2022</Badge>
        </Title>
        <P>
          My project involves analyzing UC Irvine Machine Learning Repository's Divorce Predictors Data Set using data mining techniques to identify patterns and similarities with existing research. The technical approach includes processing a .csv file with responses to 54 questions, utilizing clustering algorithms like agglomerative clustering to group and visualize data, and employing Python libraries such as pandas and scikit-learn for data manipulation and analysis. My goal is to classify relationship issues, validate clustering effectiveness, and identify key indicators of relationship troubles, while overcoming challenges in data organization and interpretation.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mitchellkolb/divorce-dataset" isExternal>
            mitchellkolb/divorce-dataset <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 10</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Pandas, Numpy, Sklearn, MatPlotLib</span>
          </ListItem>
        </List>
  

        <SoftwareImage src="/images/software/divorce-dataset/315-excel.png" alt="Excel Data Graph" />
        <SoftwareImage src="/images/software/divorce-dataset/315-graph-1.png" alt="graph-1" />
        <SoftwareImage src="/images/software/divorce-dataset/315-graph-2.png" alt="graph-2" />


        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/zz9x_9CdKhU"
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
  
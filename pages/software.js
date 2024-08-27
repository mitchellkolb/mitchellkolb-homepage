import React, { useState } from 'react';
import { Container, Heading, SimpleGrid, Divider, Box, Link, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SoftwareGridItem } from '../components/grid-item'
import NextLink from 'next/link'



import sample from '../public/images/software/s1.png'
import airline_search_engine_thumbnail from '../public/images/software/airline/airline-search-engine-thumbnail.png'
import classic_games_thumbnail from '../public/images/software/classic-games/classic-games-thumbnail.png'
import color_sandwich_thumbnail from '../public/images/software/maya-models/color-sandwich-thumbnail.png'
import divorce_dataset_thumbnail from '../public/images/software/divorce-dataset/divorce-dataset-thumbnail.png'
import ext2_thumbnail from '../public/images/software/ext2/ext2-thumbnail.png'
import fitbit_thumbnail from '../public/images/software/fitbit/fitbit-thumbnail.png'
import haskell_thumbnail from '../public/images/software/haskell/haskell-thumbnail.png'
import java_ball_game_thumbnail from '../public/images/software/java-ball/java-ball-game-thumbnail.png'
import jpenj_322_thumbnail from '../public/images/software/jpenj-322/322-jpenj-thumbnail.png'
import lama_322_thumbnail from '../public/images/software/lama-322/322-lama-thumbnail.png'
import living_atlas_thumbnail from '../public/images/software/living-atlas/living-atlas-thumbnail.png'
import mips_assembly_thumbnail from '../public/images/software/assembly/mips-assembly-thumbnail.png'
import morse_code_thumbnail from '../public/images/software/morse-code/morse-code-thumbnail.png'
import multi_threading_in_c_thumbnail from '../public/images/software/multi-threading/multi-threading-in-c-thumbnail.png'
import postscript_interpreter_thumbnail from '../public/images/software/postscript/postscript-interpreter-thumbnail.png'
import secure_dove_thumbnail from '../public/images/software/secure-dove/secure-dove-thumbnail.png'
import space_invaders_thumbnail from '../public/images/software/space-invaders/space-invaders-thumbnail.png'
import tcp_server_client_thumbnail from '../public/images/software/tcp-network/tcp-server-client-thumbnail.png'
import wumpus_thumbnail from '../public/images/software/wumpus/wumpus-thumbnail.png'
import yelp_database_thumbnail from '../public/images/software/yelp-db/yelp-database-thumbnail.png'
import yu_gi_oh_thumbnail from '../public/images/software/yugioh/yu-gi-oh-thumbnail.png'
import gsur_thumbnail from '../public/images/software/gsur/gsur-thumbnail.png'
import emma_thumbnail from '../public/images/software/emma/emma-thumbnail.png'
import wrs_thumbnail from '../public/images/software/wall-scanning/wrs-report-thumbnail.png'
import rfid_thumbnail from '../public/images/software/rfid-learning/rfid-tag-thumbnail.png'
import q_learning_thumbnail from '../public/images/software/q-learning/q-learning-thumbnail.png'
import apcomp_thumbnail from '../public/images/software/apcomp-butterfly/apcomp-thumbnail.png'




const Software = () => {
  const [showMorePublished, setShowMorePublished] = useState(false);
  const [showMoreCollaborations, setShowMoreCollaborations] = useState(false);
  const [showMoreMisc, setShowMoreMisc] = useState(false);

  return (
    <Layout title="Software">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Software
        </Heading>
        <Box my={4}>
          Welcome to my software projects portfolio, featuring a variety of projects from my academic studies, personal endeavors, and professional work. For more of my work that extends beyond writing code, be sure to explore my&nbsp;
          <Link as={NextLink} href="/hardware" passHref>
            hardware
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
            <SoftwareGridItem id="gsur" title="GSUR Automation Tool" thumbnail={gsur_thumbnail}>
              Automation tool for the GSUR program that downloads/analyzes data stored by the EMMA software for WSU's Neuropsychology and Aging Laboratory.
            </SoftwareGridItem>
          </Section>
          <Section>
            <SoftwareGridItem id="emma" title="Emma Dashboard" thumbnail={emma_thumbnail}>
              Software developed for the GSUR program to provide research tools for WSU's Neuropsychology and Aging Laboratory.
            </SoftwareGridItem>
          </Section>
          <Section>
            <SoftwareGridItem id="living-atlas" title="Living Atlas" thumbnail={living_atlas_thumbnail}>
              An environmental website that displays data for the Columbia River Basin made for CEREO at WSU.
            </SoftwareGridItem>
          </Section>
          <Section>
            <SoftwareGridItem id="ext2" title="Ext2 File System" thumbnail={ext2_thumbnail}>
              A file system that can perform common Linux commands like ls, cd, pwd, mkdir, read, write, open, link, symlink, etc.
            </SoftwareGridItem>
          </Section>
          {showMorePublished && (
            <>
              <Section delay={0.1}>
                <SoftwareGridItem id="postscript" title="Postscript Interpreter" thumbnail={postscript_interpreter_thumbnail}>
                  A terminal-based interpreter written in Python for a simplified PostScript-like language.
                </SoftwareGridItem>
              </Section>
              <Section delay={0.1}>
                <SoftwareGridItem id="yelp-db" title="Yelp Database App" thumbnail={yelp_database_thumbnail}>
                  A data search application for Yelp.com’s business review dataset, with an emphasis on the database infrastructure of the application.
                </SoftwareGridItem>
              </Section>

              <Section delay={0.2}>
                <SoftwareGridItem id="airline" title="Airline Search Engine" thumbnail={airline_search_engine_thumbnail}>
                  Program using the OpenFlights.org Airline dataset, utilizing effective MapReduce, PySpark, and graph algorithms.
                </SoftwareGridItem>
              </Section>
              <Section delay={0.2}>
                <SoftwareGridItem id="divorce-dataset" title="Mining Divorce Dataset" thumbnail={divorce_dataset_thumbnail}>
                  Analyzing UC Irvine’s Machine Learning Repository Divorce Predictors Data Set using data mining techniques to draw conclusions.
                </SoftwareGridItem>
              </Section>

              {/* Add more projects at this line */}
            </>
          )}
        </SimpleGrid>
        <Box textAlign="center" mt={4}>
            <Button onClick={() => setShowMorePublished(!showMorePublished)}>
                {showMorePublished ? 'Show Less' : 'Show More'}
            </Button>
        </Box>




        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <SoftwareGridItem id="secure-dove" thumbnail={secure_dove_thumbnail} title="Secure Dove">
              Instant messenger website that provides secure messaging with explicit confidentiality and integrity defenses
            </SoftwareGridItem>
          </Section>
          <Section delay={0.3}>
            <SoftwareGridItem id="space-invaders" thumbnail={space_invaders_thumbnail} title="Space Invaders C++">
              A Space Invaders clone written in C++ and SFML to demonstrate knowledge of classes, inheritance, and polymorphism.
            </SoftwareGridItem>
          </Section>
          {showMoreCollaborations && (
            <>
            <Section delay={0.1}>
              <SoftwareGridItem id="lama-322" thumbnail={lama_322_thumbnail} title="Research Position Search App - LAMA">
                My team built a website for undergraduate students in WSU to find and apply for research opportunities.
              </SoftwareGridItem>
            </Section>
            <Section delay={0.1}>
              <SoftwareGridItem id="jpenj-322" thumbnail={jpenj_322_thumbnail} title="Library Project - JPENJ">
                A library assistance webapp that manages user registrations, book searches, holds, checkouts, book returns, etc.
              </SoftwareGridItem>
            </Section>

            <Section delay={0.2}>
              <SoftwareGridItem id="wall-scanning" thumbnail={wrs_thumbnail} title="Wall Scanning WRS">
                A report for an indoor navigation app for the visually impaired, using voice-over and assistive technology.
              </SoftwareGridItem>
            </Section>
            <Section delay={0.2}>
              <SoftwareGridItem id="q-learning" thumbnail={q_learning_thumbnail} title="Q-Learning">
                A report for how our team developed a Q-Learning AI for navigating a 2D racing game using Python and Pygame.
              </SoftwareGridItem>
            </Section>

            <Section delay={0.3}>
              <SoftwareGridItem id="rfid-report" thumbnail={rfid_thumbnail} title="RFID Report">
                An IEEE case study on the Ethical Concerns of RFID Tag Implants in Humans
              </SoftwareGridItem>
            </Section>
            </>
          )}
        </SimpleGrid>
        <Box textAlign="center" mt={4}>
            <Button onClick={() => setShowMoreCollaborations(!showMoreCollaborations)}>
                {showMoreCollaborations ? 'Show Less' : 'Show More'}
            </Button>
        </Box>





        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
          Miscellaneous
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <SoftwareGridItem id="java-ball" thumbnail={java_ball_game_thumbnail} title="Java Ball Game">
              Developed a ball clicking game in Java with multiple ball types and dynamic scoring system.
            </SoftwareGridItem>
          </Section>
          <Section delay={0.5}>
            <SoftwareGridItem id="threading-c" thumbnail={multi_threading_in_c_thumbnail} title="Multi-threading in C">
              Solving complex math equations in C using multiple threads, mutex's, and barriers to avoid race conditions.
            </SoftwareGridItem>
          </Section>
          {showMoreMisc && (
            <>
            <Section delay={0.1}>
              <SoftwareGridItem id="tcp-network" thumbnail={tcp_server_client_thumbnail} title="TCP Networking in C">
                A TCP server-client program for file operations locally and over a network.
              </SoftwareGridItem>
            </Section>
            <Section delay={0.1}>
              <SoftwareGridItem id="haskell" thumbnail={haskell_thumbnail} title="Haskell Programming">
                Solved problems using Haskell to learn how this purely functional language works
              </SoftwareGridItem>
            </Section>
            
            <Section delay={0.2}>
              <SoftwareGridItem id="assembly" thumbnail={mips_assembly_thumbnail} title="Assembly Programming">
                Used QtSPIM to develop MIPS assembly programs for a calculator and array manipulation.
              </SoftwareGridItem>
            </Section>
            <Section delay={0.2}>
              <SoftwareGridItem id="fitbit-data" thumbnail={fitbit_thumbnail} title="Fitbit Data Analysis">
                Analyzed Fitbit data using C, showcasing my programming progress over four years.
              </SoftwareGridItem>
            </Section>
            
            <Section delay={0.3}>
              <SoftwareGridItem id="yugioh" thumbnail={yu_gi_oh_thumbnail} title="Yu-Gi-Oh! C++ Game">
                A Yu-Gi-Oh! card game in C++ with OOP and data structures.
              </SoftwareGridItem>
            </Section>
            <Section delay={0.3}>
              <SoftwareGridItem id="wumpus" thumbnail={wumpus_thumbnail} title="Wumpus C++ Game">
                A Hunt the Wumpus game in C++ with OOP and file I/O.
              </SoftwareGridItem>
            </Section>
            
            <Section delay={0.4}>
              <SoftwareGridItem id="maya-models" thumbnail={color_sandwich_thumbnail} title="3D Models in Maya">
                I made a multitude of 3D models and animations using Maya modeling software in 2023.
              </SoftwareGridItem>
            </Section>
            <Section delay={0.4}>
              <SoftwareGridItem id="morse-code" thumbnail={morse_code_thumbnail} title="Morse Code Reader">
                Developed Morse Code BST lookup in C++ with file handling and data structures.
              </SoftwareGridItem>
            </Section>
                     
            <Section delay={0.5}>
              <SoftwareGridItem id="classic-games" thumbnail={classic_games_thumbnail} title="Classic Games">
                A collection of classic board games I recreated in C that play in the terminal. 
              </SoftwareGridItem>
            </Section>
            <Section delay={0.5}>
              <SoftwareGridItem id="apcomp-butterfly" thumbnail={apcomp_thumbnail} title="APComp Butterfly Effect">
                This was my first unqiue coding project that I made using python back in 2016.
              </SoftwareGridItem>
            </Section>
            
            </>
          )}
        </SimpleGrid>
        <Box textAlign="center" mt={4}>
            <Button onClick={() => setShowMoreMisc(!showMoreMisc)}>
                {showMoreMisc ? 'Show Less' : 'Show More'}
            </Button>
        </Box>
        <Box height="25px" />
      </Container>
    </Layout>
  );
}

export default Software
export { getServerSideProps } from '../components/chakra'

'use client'

import { Box, Text, Grid, GridItem, Card, Heading, CardFooter, Button, CardBody } from "@chakra-ui/react"
import Image from "next/image";

export default function HomePage() {
    return (    
    <Grid rowGap={'1.5'} maxWidth={'90vw'} mr={'5vw'} ml={'5vw'} mt={'20px'}>
        <GridItem gridRow={'1/2'} gridColumn={'1/2'} justifySelf={['auto', 'center','center']}>
            <Box display={'flex'} justifyContent={'center'}>
                <Image alt="Panaverse Logo" src='/images/logo1.png' width={80} height={80}></Image>
                <Text as='h1' fontSize={'48px'} fontWeight={'extrabold'} ml={['10px','auto','auto']}>Panaverse</Text>
            </Box>
        </GridItem>

        {/**--------------------------- Get Paid to Earn ------------------------- */}

        <GridItem gridRow={'2/3'} gridColumn={'1/2'} display={'flex'} alignItems={'center'} justifyContent={'center'} mt={['30px','30px', '50px']}>
            <Text as='h2' fontSize={'28px'} fontWeight={'bold'}>
                Get Paid to Learn
            </Text>
        </GridItem>
        <GridItem gridRow={'3/4'} gridColumn={'1/2'} justifySelf={'center'}>
            <Text textAlign={'center'} maxWidth={['full','full', '1080px']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </GridItem>

        {/**--------------------------- 15 Month Program ------------------------- */}

        <GridItem gridRow={'4/5'} gridColumn={'1/2'} mt={['20px','20px', '35px']}>
            <Text as='h2' fontSize={'28px'} fontWeight={'bold'} textAlign={'center'}>
                15-Month Program Consisting of 5 Quaters
            </Text>
        </GridItem>
        <GridItem gridRow={'5/6'} gridColumn={'1/2'} justifySelf={'center'}>
            <Text textAlign={'center'} maxWidth={['full','full', '1080px']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
        </GridItem>

        {/**--------------------------- Specialized Tracks ------------------------- */}

        <GridItem gridRow={'6/7'} gridColumn={'1/2'} mt={['20px','20px', '35px']}>
            <Text as='h2' fontSize={'28px'} fontWeight={'bold'} textAlign={'center'}>
                6 Specialized tracks to Choose From
            </Text>
        </GridItem>
        <GridItem gridRow={'7/8'} gridColumn={'1/2'} justifySelf={'center'}>
            <Text textAlign={'center'} maxWidth={['full','full', '1080px']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
        </GridItem>

        {/**--------------------------- Metaverse & Web 3.0 Specialized Track ------------------------- */}

        <GridItem gridRow={'9/10'} gridColumn={'1/2'} mt={'10px'} maxWidth={['100vw', '100vw', '700px']} justifySelf={'center'}>
            <Card size={'sm'}>
                <CardBody>
                    <Image src='/images/metaverse-png.png' alt="Web3 & Metaverse image" width={'700'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Metaverse & Web 3.0
                    </Heading>
                    <Text textAlign={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <CardFooter justifyContent={'center'}>
                        <Button variant='solid' colorScheme='blue'>
                            Read More
                        </Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </GridItem>

        {/**--------------------------- Cloud Native Specialized Track ------------------------- */}

        <GridItem gridRow={'10/11'} gridColumn={'1/2'} mt={'10px'} maxWidth={['100vw', '100vw', '700px']} justifySelf={'center'}>
            <Card size={'sm'}>
                <CardBody>
                    <Image src='/images/cloud-native-computing.jpg' alt="Cloud Native Computing image" width={'700'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Cloud Native Computing
                    </Heading>
                    <Text textAlign={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <CardFooter justifyContent={'center'}>
                        <Button variant='solid' colorScheme='blue'>
                            Read More
                        </Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </GridItem>

        {/**--------------------------- AI Specialized Track ------------------------- */}

        <GridItem gridRow={'11/12'} gridColumn={'1/2'} mt={'10px'} maxWidth={['100vw', '100vw', '700px']} justifySelf={'center'}>
            <Card size={'sm'}>
                <CardBody>
                    <Image src='/images/ai-png1.png' alt="Artificial Intelligence image" width={'700'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Artificial Intelligence
                    </Heading>
                    <Text textAlign={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <CardFooter justifyContent={'center'}>
                        <Button variant='solid' colorScheme='blue'>
                            Read More
                        </Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </GridItem>

        {/**--------------------------- IOT Specialized Track ------------------------- */}

        <GridItem gridRow={'12/13'} gridColumn={'1/2'} mt={'10px'} maxWidth={['100vw', '100vw', '700px']} justifySelf={'center'}>
            <Card size={'sm'}>
                <CardBody>
                    <Image src='/images/iot.jpeg' alt="Internet of Things image" width={'700'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Internet Of Things
                    </Heading>
                    <Text textAlign={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <CardFooter justifyContent={'center'}>
                        <Button variant='solid' colorScheme='blue'>
                            Read More
                        </Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </GridItem>

        {/**--------------------------- Genomics Specialized Track ------------------------- */}

        <GridItem gridRow={'13/14'} gridColumn={'1/2'} mt={'10px'} maxWidth={['100vw', '100vw', '700px']} justifySelf={'center'}>
            <Card size={'sm'}>
                <CardBody>
                    <Image src='/images/genomics1.jpg' alt="Genomics image" width={'700'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Genomics & Bioinformatics
                    </Heading>
                    <Text textAlign={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <CardFooter justifyContent={'center'}>
                        <Button variant='solid' colorScheme='blue'>
                            Read More
                        </Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </GridItem>

        {/**--------------------------- Network Programability Specialized Track ------------------------- */}

        <GridItem gridRow={'14/15'} gridColumn={'1/2'} mt={'10px'} maxWidth={['100vw', '100vw', '700px']} justifySelf={'center'}>
            <Card size={'sm'}>
                <CardBody>
                    <Image src='/images/network01.jpg' alt="Network Programmability image" width={'700'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Network Programmability & Automation
                    </Heading>
                    <Text textAlign={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <CardFooter justifyContent={'center'}>
                        <Button variant='solid' colorScheme='blue'>
                            Read More
                        </Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </GridItem>
    </Grid>
    );
}
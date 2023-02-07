'use client'

import { Box, Button, Card, CardBody, CardFooter, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"

export default function CoreQuaters() {
    return(
        <Grid rowGap={'1.5'} columnGap={'2.5'} maxWidth={'90vw'} mr={'5vw'} ml={'5vw'} mt={'20px'}>
            
            {/**--------------- 3 Core Quaters ------------------ */}
            
            <GridItem gridRow={'1/2'} gridColumn={['1/2','1/2','1/3','1/4']}>
                <Text as='h2' fontSize={'28px'} fontWeight={'bold'} textAlign={'center'}>
                    3 Core Quaters
                </Text>
            </GridItem>
            <GridItem gridRow={'2/3'} gridColumn={'1/4'} justifySelf={'center'} mb={'20px'}>
                <Text textAlign={'center'} maxWidth={['full','full', '1080px']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </GridItem>

            {/**--------------- Quater 1 Core ------------------ */}

            <GridItem gridRow={'3/4'} gridColumn={'1/2'}>
            <Card size={'sm'} maxHeight={'800px'}>
                <CardBody>
                    <Image src='/images/jsts1.jpg' alt="Javascript and Typescript image" width={'700'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Quater 1 Core (CS-101)
                    </Heading>
                    <Heading as='h4' fontSize={'16px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'} mb={'10px'}>
                        Object-Oriented Programming using TypeScript
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

            {/**--------------- Quater 2 Core ------------------ */}

            <GridItem gridRow={['4/5', '4/5', '3/4']} gridColumn={['1/2','1/2','2/3']}>
            <Card size={'sm'} maxHeight={'800px'}>
                <CardBody>
                    <Image src='/images/next.png' alt="Next 13 and Vercel image" width={'700'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Quater 2 Core (W2-201)
                    </Heading>
                    <Heading as='h4' fontSize={'16px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'} mb={'10px'}>
                        Serverless Cloud Apps | APIs | NextJs 13 | CDK 
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

            {/**--------------- Quater 3 Core ------------------ */}

            <GridItem gridRow={['5/6', '5/6', '4/5', '3/4']} gridColumn={['1/2','1/2','1/4','3/4']}>
            <Card size={'sm'} maxHeight={'800px'} alignItems={'stretch'}>
                <CardBody>
                    <Image src='/images/dollar.jpg' alt="Dollar Coin image" width={'850'} height={'200'}></Image>
                    <Heading as='h3' fontSize={'20px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'}>
                        Quater 3 Core ($-101)
                    </Heading>
                    <Heading as='h4' fontSize={'16px'} fontWeight={'bold'} textAlign={'center'} mt={'10px'} mb={'10px'}>
                        Dollar Making Bootcamp
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
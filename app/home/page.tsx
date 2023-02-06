'use client'

import { Box, Text, Grid, GridItem } from "@chakra-ui/react"
import Image from "next/image";

export default function HomePage() {
    return (    
    <Grid bg={'green.200'} rowGap={'1.5'}>
        <GridItem gridRow={'1/2'} gridColumn={'1/2'} justifySelf={['auto', 'center','center']}>
            <Box display={'flex'}>
                <Image alt="Panaverse Logo" src='/images/logo1.png' width={80} height={80}></Image>
                <Text as='h1' fontSize={'48px'} fontWeight={'extrabold'} ml={['10px','auto','auto']}>Panaverse</Text>
            </Box>
        </GridItem>
        <GridItem gridRow={'2/3'} gridColumn={'1/2'} display={'flex'} alignItems={'center'} justifyContent={'center'} mt={'20px'}>
            <Text as='h2' fontSize={'28px'} fontWeight={'bold'}>
                Get Paid to Learn
            </Text>
        </GridItem>
        <GridItem gridRow={'3/4'} gridColumn={'1/2'} justifySelf={'center'}>
            <Text textAlign={'center'} maxWidth={['full','full', '1200px']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </GridItem>
    </Grid>
    );
}
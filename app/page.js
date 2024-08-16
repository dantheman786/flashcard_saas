import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Typography, Button, Toolbar, Box, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flash AI: Intelligent Flashcard Generator</title>
        <meta name="description" content="FlashAI: Your Intelligent Flashcard Generator"/>
      </Head>

      <AppBar position="static" sx={{ backgroundColor: '#0f172a' }}>
  <Toolbar sx={{ justifyContent: 'center', position: 'relative' }}>
    <Typography variant="h6" sx={{ 
      fontWeight: 'bold',
      color: '#cbd5e1', 
      textAlign: 'center',
      fontFamily: "'Roboto Slab', serif",
      fontSize: '1.5rem',
    }}>
      Flash AI: Intelligent Flashcard Generator
    </Typography>
    <SignedOut>
      <div style={{ position: 'absolute', right: '20px', display: 'flex', gap: '10px', color: '#e2e8f0' }}>
        <Button 
          color="inherit" 
          sx={{ 
            border: '1px solid #64748b', 
            borderRadius: '5px', 
            fontFamily: "'Roboto Slab', serif",
            fontSize: '0.9rem',
            '&:hover': { 
              backgroundColor: '#334155', 
              color: '#f8fafc' 
            } 
          }}
        >
          Login
        </Button>
        <Button 
          color="inherit" 
          sx={{ 
            border: '1px solid #64748b', 
            borderRadius: '5px', 
            fontFamily: "'Roboto Slab', serif",
            fontSize: '0.9rem',
            '&:hover': { 
              backgroundColor: '#334155', 
              color: '#f8fafc' 
            } 
          }}
        >
          Sign Up
        </Button>
      </div>
    </SignedOut>
    <SignedIn>
      <div style={{ position: 'absolute', right: '20px' }}>
        <UserButton />
      </div>
    </SignedIn>
  </Toolbar>
</AppBar>

    <Box sx={{ textAlign: 'center', my: 4}}>
      <Typography variant="h2">Welcome to Flash AI</Typography>
      <Typography variant="h5">Generate intelligent flashcards from your own text with AI assistance.</Typography>
      <Button variant='contained' color='primary' sx={{ mt: 2 }}>Get Started Now!</Button>
    </Box>
    <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2">
          Features
        </Typography> 
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Upload your text</Typography>
            <Typography>
              {' '}
              Upload your text and let Flash AI generate flashcards for you. 
              Our advanced AI system will analyze your content and create tailored study cards to enhance your learning experience.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">AI-Powered Flashcard Generation</Typography>
            <Typography>
              {' '}
              Our AI-powered system generates intelligent flashcards from your text, creating concise questions and answers to reinforce key concepts and aid in effective learning.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">An Accessible and Customizable Study Experience</Typography>
            <Typography>
              {' '}
              Enjoy a fully accessible and customizable study experience. Our platform offers a fully customizable and accessible interface, ensuring that all users can tailor their learning environment to their individual needs and preferences.
            </Typography>
          </Grid>
        </Grid>
    </Box>

      
    </Container>
  )
}

/////    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

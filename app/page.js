import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Typography, Button, Toolbar } from "@mui/material";
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





      
    </Container>
  )
}

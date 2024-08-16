import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Typography, Button, Toolbar } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="FlashAI: Your Intelligent Flashcard Generator"/>
      </Head>

      <AppBar position="static" sx={{ 
        backgroundColor: '#0f172a',
        border: '1px solid #0f172a',
        borderRadius: '10px',
      }}>
        <Toolbar>
          <Typography variant="h6" sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold', 
            color: '#e2e8f0', 
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)', 
            fontFamily: "'Roboto Slab', serif", 
            fontSize: '1.45rem', 
            letterSpacing: '0.03em',
            textAlign: 'center',
            width: '100%'
          }}>
            FlashAI: Intelligent Flashcards
          </Typography>
          <SignedOut>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  color: '#f8fafc', 
                  border: '1px solid #94a3b8', 
                  borderRadius: '20px', 
                  marginBottom: '10px', 
                  backgroundColor: '#1e293b', 
                  fontFamily: "'Roboto Slab', serif", 
                  fontSize: '0.50rem', 
                  letterSpacing: '0.05em', 
                  '&:hover': { 
                    backgroundColor: '#082f49' 
                  } 
                }}
              >
                Login
              </Button>
              <Button 
                variant="contained" 
                sx={{ 
                  color:'#f8fafc', 
                  border: '1px solid #94a3b8', 
                  borderRadius: '20px', 
                  backgroundColor: '#1e293b', 
                  fontFamily: "'Roboto Slab', serif", 
                  fontSize: '0.50rem', 
                  letterSpacing: '0.05em', 
                  '&:hover': { 
                    backgroundColor: '#082f49' 
                  } 
                }}
              >
                Sign Up
              </Button>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      
    </Container>
  )
}

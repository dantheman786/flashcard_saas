import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Typography, Button, Toolbar, Box, Grid, Card, CardContent, CardHeader, List, ListItem } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const PricingCard = ({ title, price, features, color }) => (
  <Card sx={{ maxWidth: 345, margin: 'auto', backgroundColor: color }}>
    <CardHeader
      title={title}
      subheader={price}
      sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}
    />
    <CardContent>
      <List sx={{ padding: 0 }}>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ padding: '8px 0' }}>
            <Typography variant="body2" color="text.secondary">
              {feature}
            </Typography>
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flash AI: Intelligent Flashcard Generator</title>
        <meta name="description" content="FlashAI: Your Intelligent Flashcard Generator" />
      </Head>

      <AppBar position="static" sx={{ backgroundColor: '#0f172a' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#cbd5e1',
              textAlign: 'center',
              fontFamily: "'Roboto Slab', serif",
              fontSize: '1.5rem',
              flexGrow: 1,
              textAlign: { xs: 'center', sm: 'left' },
              mb: { xs: 1, sm: 0 }
            }}
          >
            Flash AI: Intelligent Flashcard Generator
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: '10px',
              color: '#e2e8f0',
              alignItems: 'center' // Center items vertically within the Box
            }}
          >
            <SignedOut>
              <Button
                color="inherit"
                href="/sign-in"
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
                href="/sign-up"
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
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Box>
        </Toolbar>
      </AppBar>
                
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2">
          Welcome to{' '}
          <Box component="span" sx={{ color: '#0f172a', fontWeight: 'bold', fontFamily: "'Roboto Slab', serif" }}>
            Flash AI
          </Box>
        </Typography>

        <Typography variant="h5">AI-powered flashcard generator</Typography>

        <Link href="/generate" passHref>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              border: '1px solid #64748b',
              backgroundColor: '#1e293b',
              borderRadius: '5px',
              fontFamily: "'Roboto Slab', serif",
              fontSize: '0.9rem',
              '&:hover': {
                backgroundColor: '#334155',
                color: '#f8fafc',
              },
            }}
          >
            Get Started Now!
          </Button>
        </Link>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardHeader
                title="Upload your text"
                sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}
              />
              <CardContent>
                <Typography>
                  Upload your text and let Flash AI generate flashcards for you. Our advanced AI system will analyze your
                  content and create tailored study cards to enhance your learning experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardHeader
                title="AI-Powered Flashcard Generation"
                sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}
              />
              <CardContent>
                <Typography>
                  Our AI-powered system generates intelligent flashcards from your text, creating concise questions and
                  answers to reinforce key concepts and aid in effective learning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardHeader
                title="An Accessible and Customizable Study Experience"
                sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}
              />
              <CardContent>
                <Typography>
                  Enjoy a fully accessible and customizable study experience. Our platform offers a fully customizable and
                  accessible interface, ensuring that all users can tailor their learning environment to their individual needs
                  and preferences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2">
          Pricing
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <PricingCard
              title="Free"
              price="$0/month"
              features={[
                "Basic Flashcard Generation: Create and study a limited number of flashcards.",
                "Study Modes: Access to basic study modes (e.g., flashcard review).",
                "Community Forum: Join the community for tips and support."
              ]}
              color="#f0f0f0" // Light color for Free plan
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PricingCard
              title="Basic"
              price="$1/month"
              features={[
                "Unlimited Flashcards: Create as many flashcards as needed.",
                "Basic Study Tools: Features like spaced repetition and quizzes.",
                "Progress Tracking: Track your study progress and performance.",
                "Ad-Free Experience: Enjoy a distraction-free study environment.",
                "Email Support: Get help via email."
              ]}
              color="#e0e0e0" // Medium color for Basic plan
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PricingCard
              title="Premium"
              price="$5/month"
              features={[
                "All Basic Features: Includes everything from the Basic plan.",
                "Advanced Study Tools: Features like customizable quizzes, flashcard games, and adaptive learning.",
                "Collaboration Tools: Share flashcard decks with classmates or study groups.",
                "Flashcard Analytics: Detailed insights into your study habits and performance.",
                "Custom Study Schedules: Set and manage personalized study plans and reminders.",
                "Priority Support: Get faster response times and premium support options."
              ]}
              color="#d0d0d0" // Darker color for Advanced/Pro plan
            />
          </Grid>
        </Grid>
      </Box>

    </Container>
  );
}
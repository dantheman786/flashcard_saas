import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const formatAmountForStripe = (amount) => {
    return Math.round(amount * 100)
}

export async function POST(req) {

    // Partial of ./pages/api/checkout_sessions/index.ts
// ...
// Create Checkout Sessions from body params.
const params = {
    submit_type: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
            currency: 'usd',
            product_data: {
                name: 'Flashcards Pro',
            },
            unit_amount: formatAmountForStripe(10),
            recurring: {
                interval: 'month', 
                interval_count: 1, 
            }

        },
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  };
  const checkoutSession = await stripe.checkout.sessions.create(params);
  // ...
  return NextResponse.json(checkoutSession, { 
    status: 200, 
  })

}

//Implement the GET route for retrieving session details
export async function GET(req){
  const searchParams = req.nextUrl.searchParams
  const session_id = searchParams.get('session_id')

  try {
    if(!session_id){
      throw new Error('Session ID is required')
    }

    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id)
    
    return NextResponse.json(checkoutSession)
  } catch (error) {
    console.error('Error retrieving checkout session:', error)
    return NextResponse.json({ error: { message: error.message } }, { status: 500 })
  }
}


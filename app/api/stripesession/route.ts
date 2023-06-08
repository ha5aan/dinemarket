import { NextResponse , NextRequest  } from 'next/server';

//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { default: stripe } = require('stripe');
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
export async function POST(request: NextRequest, response: NextResponse) {
    try {
      const formatted_response = await request.json();
        const req = formatted_response.item

      console.log(req);
      console.log("stripe key ", process.env.STRIPE_SECRET_KEY);
      const redirectURL = 'http://localhost:3000';
      if (!Array.isArray(req.res)) {
        throw new Error('Invalid request format. Expected an array.');
      }
      var imagesForMEta=[]
      const lineItems = req.res.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product,
            images: [item.image],
          },
          unit_amount: Number(item.price),
        },
        quantity: Number(item.quantity),
      }));

      if (!stripeInstance) {
        throw new Error('Failed to initialize Stripe.');
      }
     
console.log(lineItems)

      const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems, 
        mode: 'payment',
        success_url: redirectURL + '?status=success',
        cancel_url: redirectURL + '?status=cancel',
        metadata: {
          images: "bogus string",
        },
      });
  
      return NextResponse.json({ id: session.id });
    } catch (error) {
      console.error('Error processing Stripe request:', error);
      return NextResponse.error();
    }
  }
 
  
  
  
  
  
  
  

import { db } from '@vercel/postgres';
import { pgTable, serial, text, timestamp, varchar, boolean,integer} from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq } from 'drizzle-orm';
import { NextResponse , NextRequest  } from 'next/server';
const Drizzledb = drizzle(db)
//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { default: stripe } = require('stripe');
const Items = pgTable('cart', {
  id: serial('id').primaryKey(),
  quantity: integer('quantity'),
  product: text('product'),
  imagelink : text('imagelink'),
  productId : text('productid'),
  price : text('price'),
});
type Task = InferModel<typeof Items>;
type NewTask = InferModel<typeof Items, 'insert'>;

const stripeInstance = stripe("sk_test_51KW1U6HEtYcZ4XvWczFKfDHQJsJIWoqg9e9yy7AOf7IaVHCdGo4heUcHv80sc2T3fz3wYM7I6EOH9iE23V1qrhUt004sez0WEk");
export async function POST(request: NextRequest, response: NextResponse) {
    try {
      const formatted_response = await request.json();
      console.log(formatted_response)
        const req = formatted_response.item
        
      console.log(req);
      //console.log("stripe key ", process.env.STRIPE_SECRET_KEY);
      const redirectURL = 'http://localhost:3000/';
      if (!Array.isArray(req)) {
        throw new Error('Invalid request format. Expected an array.');
      }

      const lineItems = req.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product,
            images: [item.image],
          },
          unit_amount: Number(item.price) * 100,
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
        success_url: redirectURL + 'PaymentSucessfull',
        cancel_url: redirectURL + '?status=cancel',
        metadata: {
          images: "bogus string",
        },
      });
      let res= await  Drizzledb.delete(Items);
      console.log(res)
      return NextResponse.json({ id: session.id });
    } catch (error) {
      console.error('Error processing Stripe request:', error);
      return NextResponse.error();
    }
  }
 
  
  
  
  
  
  
  

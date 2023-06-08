import { db } from '@vercel/postgres';
import { pgTable, serial, text, timestamp, varchar, boolean,integer} from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq } from 'drizzle-orm';
import { NextResponse , NextRequest  } from 'next/server';
const Drizzledb = drizzle(db)


const Items = pgTable('cart', {
  id: serial('id').primaryKey(),
  quantity: integer('quantity'),
  product: text('product')
});
type Task = InferModel<typeof Items>;
type NewTask = InferModel<typeof Items, 'insert'>;

export  async function GET() {
 
    try{
     let res= await  Drizzledb.select().from(Items);
      
     return NextResponse.json({ count: res.length });
    }
    catch(e){
     console.log(e)
    }
   }
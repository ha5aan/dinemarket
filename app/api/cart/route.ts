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

export   async function GET() {
 
 try{
  let res= await  Drizzledb.select().from(Items);
    console.log(res)
  return NextResponse.json({ res });
 }
 catch(e){
  console.log(e)
 }
}

export   async function POST(
  request: NextRequest,
  response: NextResponse,
) {

  const req = await request.json();
    const newTask: NewTask = {
    product:req.product,
    quantity:req.quantity       
      };

    console.log(db);
    const insertedUsers = await Drizzledb.insert(Items).values(newTask).returning();

    return NextResponse.json(insertedUsers);
  
}


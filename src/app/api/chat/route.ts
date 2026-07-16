import { UIMessage } from 'ai';
import { inngest } from '@/inngest/client';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();


  await inngest.send({
    name: 'demo/generate',
    data: { messages },
  });

  return Response.json({ status : 'started job'});
}
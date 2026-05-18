'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MarketPriceSchema = z.object({
  crop: z.string(),
  price: z.number(),
  location: z.string(),
  date: z.string(),
});

const InputSchema = z.object({
  crop: z.string(),
});

type Input = z.infer<typeof InputSchema>;
type Output = z.infer<typeof MarketPriceSchema>[];

/**
 * TOOL: Firestore fetch
 */
const getMarketPriceData = ai.defineTool(
  {
    name: 'getMarketPriceData',
    description: 'Fetch mandi prices from Firebase Firestore',
    inputSchema: InputSchema,
    outputSchema: z.array(MarketPriceSchema),
  },
  async (input) => {
    try {
      const { db } = await import('../../lib/firebase-admin');

      const snapshot = await db
        .collection('mandi_prices')
        .where('commodity', '==', input.crop)
        .get();

      if (snapshot.empty) return [];

      const result: Output = [];

      snapshot.forEach((doc: any) => {
        const d = doc.data();

        const today = new Date().toISOString().split('T')[0];

        // map your 3-day schema
        if (d.priceToday) {
          result.push({
            crop: d.commodity,
            price: Number(d.priceToday),
            location: 'Mandi Data - Today',
            date: today,
          });
        }

        if (d.priceYesterday) {
          result.push({
            crop: d.commodity,
            price: Number(d.priceYesterday),
            location: 'Mandi Data - Yesterday',
            date: today,
          });
        }

        if (d.priceBeforeYesterday) {
          result.push({
            crop: d.commodity,
            price: Number(d.priceBeforeYesterday),
            location: 'Mandi Data - 2 Days Ago',
            date: today,
          });
        }
      });

      return result.filter(r => r.price > 0);
    } catch (err) {
      console.error('Firestore error:', err);
      return [];
    }
  }
);

/**
 * PROMPT
 */
const prompt = ai.definePrompt({
  name: 'marketPricePrompt',
  input: { schema: InputSchema },
  output: { schema: z.array(MarketPriceSchema) },
  tools: [getMarketPriceData],
  prompt: `
You are an agriculture price assistant.

Get mandi price data for crop: {{{crop}}}
Use tool getMarketPriceData.
`,
});

/**
 * FLOW
 */
const flow = ai.defineFlow(
  {
    name: 'getMarketPriceFlow',
    inputSchema: InputSchema,
    outputSchema: z.array(MarketPriceSchema),
  },
  async (input) => {
    const { output } = await prompt(input);
    return output || [];
  }
);

/**
 * EXPORT FUNCTION
 */
export async function getMarketPrices(input: Input): Promise<Output> {
  return flow(input);
}
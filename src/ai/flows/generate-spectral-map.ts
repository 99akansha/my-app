'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

/**
 * INPUT
 */
const GenerateSpectralMapInputSchema = z.object({
  farmImageUri: z.string(),
});

export type GenerateSpectralMapInput = z.infer<
  typeof GenerateSpectralMapInputSchema
>;

/**
 * OUTPUT
 */
const GenerateSpectralMapOutputSchema = z.object({
  spectralMapUri: z.string(),
  analysis: z.string(),
});

export type GenerateSpectralMapOutput = z.infer<
  typeof GenerateSpectralMapOutputSchema
>;

/**
 * FLOW FUNCTION EXPORT
 */
export async function generateSpectralMap(
  input: GenerateSpectralMapInput
): Promise<GenerateSpectralMapOutput> {
  return generateSpectralMapFlow(input);
}

/**
 * MAIN FLOW
 */
const generateSpectralMapFlow = ai.defineFlow(
  {
    name: 'generateSpectralMapFlow',
    inputSchema: GenerateSpectralMapInputSchema,
    outputSchema: GenerateSpectralMapOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: googleAI.model('gemini-1.5-flash'),

      prompt: [
        {
          text: `
You are an expert in agricultural remote sensing.

Task:
Generate a spectral health map (NDVI-style) from the given farm image.

Rules:
- Red = unhealthy/stressed crops
- Yellow = moderate health
- Green = healthy vegetation

Return:
1. A spectral heatmap image (data URI)
2. A short 1-paragraph analysis describing crop health and stress zones
          `,
        },
        {
          media: { url: input.farmImageUri },
        },
      ],

      output: {
        schema: GenerateSpectralMapOutputSchema,
      },

      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    /**
     * IMPORTANT FIX:
     * output + media are PROPERTIES (NOT FUNCTIONS)
     */
    const output = response.output;
    const media = response.media;

    /**
     * CASE 1: Proper structured output
     */
    if (output?.spectralMapUri && output?.analysis) {
      return output;
    }

    /**
     * CASE 2: Model returned image separately
     */
    if (media?.url) {
      return {
        spectralMapUri: media.url,
        analysis:
          output?.analysis ||
          'The field shows mixed vegetation health with potential stress zones that may require irrigation or pest inspection.',
      };
    }

    /**
     * CASE 3: fallback error
     */
    throw new Error('Failed to generate spectral map from AI model.');
  }
);
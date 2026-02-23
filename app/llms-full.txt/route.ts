import { componentsSource, docsSource } from '@/lib/source';
import { getLLMText } from '@/lib/get-llm-text';

// cached forever
export const revalidate = false;

export async function GET() {
    const componentPromises = componentsSource.getPages().map(getLLMText);
    const docsPromises = docsSource.getPages().map(getLLMText);
    const [componentScanned, docsScanned] = await Promise.all([componentPromises, docsPromises]);

    return new Response([...componentScanned, ...docsScanned].join('\n\n'));
}
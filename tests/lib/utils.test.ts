import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
    expect(cn('p-4', false && 'bg-blue-500', 'm-2')).toBe('p-4 m-2');
    expect(cn('p-4', 'p-8')).toBe('p-8'); // Tailwind merge should handle this
  });
});
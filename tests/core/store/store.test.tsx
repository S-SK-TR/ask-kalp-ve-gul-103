import { renderHook, act } from '@testing-library/react';
import { useStore } from '@/core/store/store';

describe('App Store', () => {
  it('initializes with dark theme', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.theme).toBe('dark');
  });

  it('can update theme', () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setTheme('light');
    });
    expect(result.current.theme).toBe('light');
  });
});
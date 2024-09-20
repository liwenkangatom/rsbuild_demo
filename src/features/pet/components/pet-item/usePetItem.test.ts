import { usePetItem } from './usePetItem';
import { renderHook, act } from '@testing-library/react';

describe('usePetItem', () => {
  test('click add', () => {
    const { result } = renderHook(() => usePetItem({ name: 'Hello' }));
    act(() => {
      result.current.addPet();
    });
    expect(result.current.petTitle).toBe('Hello_1');
  });
  test('click reduce', () => {
    const { result } = renderHook(() => usePetItem({ name: 'Reduce' }));
    act(() => {
      result.current.reducePet();
    });
    expect(result.current.petTitle).toBe("Reduce_0")
  });
});

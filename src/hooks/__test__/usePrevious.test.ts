import { renderHook } from "@testing-library/react-hooks";
import { usePrevious } from "../usePrevious";

describe("Testing usePrevious hook", () => {
  test("Should return undefined for the first run", () => {
    const { result } = renderHook(
      ({ initialValue }) => usePrevious(initialValue),
      {
        initialProps: {
          initialValue: 0
        }
      }
    );
    expect(result.current).toBe(undefined);
  });
  test("Should return previous state every render", () => {
    const { result, rerender } = renderHook(
      ({ initialValue }) => usePrevious<number>(initialValue),
      {
        initialProps: {
          initialValue: 0
        }
      }
    );
    expect(result.current).toBe(undefined);
    rerender({ initialValue: 2 });
    expect(result.current).toBe(0);
    rerender({ initialValue: 3 });
    expect(result.current).toBe(2);
  });
});

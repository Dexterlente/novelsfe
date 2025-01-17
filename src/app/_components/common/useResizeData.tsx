import { useState, useEffect, useCallback, useMemo } from "react";

interface Breakpoint {
  width: number;
  count: number;
}

interface Size {
  W: number;
  H: number;
  width: number;
}

const useResizeData = (
  data: any[],
  breakpoints: Breakpoint[],
  size: Size[]
): [any[], Size] => {
  // Sort sizes only when size array changes
  const sortedSizes = useMemo(
    () => [...size].sort((a, b) => a.width - b.width),
    [size]
  );

  const getInitialSize = useCallback((): Size => {
    const screenWidth = window.innerWidth;
    const defaultSize: Size = { W: 400, H: 700, width: 1280 };
    if (screenWidth >= 1280) {
      return defaultSize;
    }

    return (
      sortedSizes
        .slice()
        .reverse()
        .find((s) => screenWidth <= s.width) || sortedSizes[0]
    );
  }, [sortedSizes]);

  const [resizedData, setResizedData] = useState<any>([]);
  const [imageSize, setImageSize] = useState<Size>(getInitialSize);

  const resizeData = useCallback(() => {
    const screenWidth = window.innerWidth;
    const breakpoint = breakpoints.find((bp) => screenWidth < bp.width) || {
      count: data?.length,
    };

    const newResizedData = data?.slice(0, breakpoint.count);
    if (JSON.stringify(newResizedData) !== JSON.stringify(resizedData)) {
      setResizedData(newResizedData); // Only update state if resizedData is different
    }

    const newSize =
      sortedSizes
        .slice()
        .reverse()
        .find((s) => screenWidth <= s.width) || sortedSizes[0];
    if (JSON.stringify(newSize) !== JSON.stringify(imageSize)) {
      setImageSize(newSize); // Only update state if imageSize is different
    }
  }, [data, breakpoints, resizedData, sortedSizes, imageSize]);

  useEffect(() => {
    // Set initial state after render
    resizeData();

    const handleResize = () => {
      resizeData(); // Only invoke resizeData on resize events
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resizeData, breakpoints]); // Ensure breakpoints is a dependency

  return [resizedData, imageSize];
};

export default useResizeData;

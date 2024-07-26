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
      count: data.length,
    };
    setResizedData(data?.slice(0, breakpoint.count));

    const newSize =
      sortedSizes
        .slice()
        .reverse()
        .find((s) => screenWidth <= s.width) || sortedSizes[0];
    setImageSize(newSize);
  }, [data, breakpoints, sortedSizes]);

  useEffect(() => {
    resizeData();
    window.addEventListener("resize", resizeData);
    return () => window.removeEventListener("resize", resizeData);
  }, [resizeData]);

  return [resizedData, imageSize];
};

export default useResizeData;

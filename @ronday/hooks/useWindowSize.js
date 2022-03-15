import { useEffect, useState } from "react";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    const debounceUpdateSize = debounce(updateSize, 100);

    window.addEventListener("resize", debounceUpdateSize);

    debounceUpdateSize();

    return () => window.removeEventListener("resize", debounceUpdateSize);
  }, []);

  return size;
}

export default useWindowSize;

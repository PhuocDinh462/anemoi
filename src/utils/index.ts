import debounce from "lodash.debounce";

export function animateNumber(
  startNumber: number,
  finalNumber: number,
  duration: number,
  callback: { (currentNumber: number): void; (arg0: number): void }
) {
  let startTime: number;
  const range = finalNumber - startNumber;

  const updateNumber = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    let progress = elapsed / duration;
    progress = Math.min(progress, 1); // Đảm bảo progress không vượt quá 1

    let currentNumber;
    if (startNumber <= finalNumber) {
      // Tăng dần
      currentNumber = startNumber + range * progress;
    } else {
      // Giảm dần
      currentNumber = startNumber + range * progress;
    }

    callback(currentNumber);

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  };

  requestAnimationFrame(updateNumber);
}

export function debounceWithValue(
  callback: { (newPosY: number): void; (arg0: number): void },
  waitTime = 10
) {
  let value: number;

  const debouncedFunction = debounce(() => {
    callback(value);
  }, waitTime);

  return (val: number) => {
    value = val;
    debouncedFunction();
  };
}

import { onCLS, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (!onPerfEntry) return;

  onCLS(onPerfEntry);
  onFCP(onPerfEntry);
  onLCP(onPerfEntry);
  onTTFB(onPerfEntry);
};

export default reportWebVitals;

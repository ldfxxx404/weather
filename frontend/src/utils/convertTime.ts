export const toLocalTime = (time: string) => {
  return new Date(time).toLocaleTimeString('us-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

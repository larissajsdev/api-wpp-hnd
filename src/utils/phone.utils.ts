//convert (98) 984464704 to 5598984464704

export function sanitizeNumber(number: string) {
  if (number) {
    return `55${number.replace(/\D/g, '')}`;
  } else {
    return;
  }
}

export const getPercent = (value, total) => {
  return Math.round((value / total) * 100);
}

export function makeSupportAccount(email, number) {
  return `${email} ${number}`
}
export type tHours = {
  text: string;
  hour: number;
};

export default function HoursADay() {
  const hours: Array<tHours> = [];
  for (let i = 0; i < 12; i++) {
    const hour = i;
    const item = { text: `오전${i === 0 ? 12 : i}`, hour };
    hours.push(item);
  }
  for (let i = 0; i < 12; i++) {
    const hour = i;
    const item = { text: `오후${i === 0 ? 12 : i}`, hour };
    hours.push(item);
  }
  return hours;
}

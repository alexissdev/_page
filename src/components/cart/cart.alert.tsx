export default function BubbleAlert({ value }: { value: number }) {
  return (
    <span className="bg-red-400 rounded-2xl text-white px-[10px] py-[2px] w-5">
      {value}
    </span>
  );
}

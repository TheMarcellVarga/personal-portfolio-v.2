import Image from "next/image";

export function EndlessActivityPreview() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-[6%] overflow-hidden bg-[#071726] py-[8%]">
      {["detail", "discover", "saved"].map((screen, index) => (
        <div key={screen} className={`h-full shrink-0 rounded-[0.7rem] bg-[#12171d] p-1 shadow-lg ${index === 0 ? "-rotate-6 translate-y-2" : index === 2 ? "rotate-6 translate-y-2" : "relative z-10 scale-110"}`}>
          <Image src={`/images/endless-activity/${screen}-november-2026.png`} alt="" width={1170} height={2532} sizes="120px" className="h-full w-auto rounded-[0.5rem]" />
        </div>
      ))}
    </div>
  );
}

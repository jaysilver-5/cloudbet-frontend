
export default function LiveIcon({
  className
}: {
  className?: any
}) {

  return (
    <div className={`relative rounded-full ${className}`}>
      <span className="w-full h-full absolute bg-inherit rounded-full opacity-80 scale-[0.25] animate-livePulse animation-delay-0 bg-secondary"></span>
      <span className="w-full h-full absolute bg-inherit rounded-full opacity-80 scale-[0.25] animate-livePulse animation-delay-[1s] bg-secondary"></span>
      <span className="w-full h-full absolute bg-inherit rounded-full opacity-80 scale-[0.25] animate-livePulse animation-delay-[2s] bg-secondary"></span>
      <span className="w-full h-full absolute bg-inherit rounded-full opacity-80 scale-[0.25] animate-livePulse animation-delay-[3s] bg-secondary"></span>
    </div>
  );
}

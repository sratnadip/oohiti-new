export function Atmosphere() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-md-primary/10 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Secondary Glow */}
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-md-tertiary/10 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      
      {/* Tertiary Glow */}
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-md-secondary/5 blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />
      
      {/* Floating Organic Shapes */}
      <div className="absolute top-[20%] left-[60%] w-64 h-64 rounded-[100px] rotate-45 bg-md-primary/5 blur-3xl animate-bounce-slow" />
      <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-md-secondary/5 blur-2xl animate-pulse" />
    </div>
  );
}

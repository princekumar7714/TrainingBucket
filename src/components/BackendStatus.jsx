import { useState, useEffect } from "react";

export default function BackendStatus() {
  const [status, setStatus] = useState("checking"); // 'checking' | 'connected' | 'disconnected'

  useEffect(() => {
    let cancelled = false;
    fetch("/api/health")
      .then((res) => (cancelled ? null : res.ok ? setStatus("connected") : setStatus("disconnected")))
      .catch(() => !cancelled && setStatus("disconnected"));
    const t = setInterval(() => {
      fetch("/api/health")
        .then((res) => (cancelled ? null : res.ok ? setStatus("connected") : setStatus("disconnected")))
        .catch(() => !cancelled && setStatus("disconnected"));
    }, 15000);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium shadow-lg"
      style={{
        backgroundColor:
          status === "connected" ? "#22c55e" : status === "disconnected" ? "#ef4444" : "#6b7280",
        color: "white",
      }}
      title={
        status === "connected"
          ? "Backend connected"
          : status === "disconnected"
            ? "Start backend: run 'npm run dev' from project root (d:\\TrainingBucket)"
            : "Checking..."
      }
    >
      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      {status === "checking" ? "Checking API..." : status === "connected" ? "API connected" : "API disconnected"}
    </div>
  );
}

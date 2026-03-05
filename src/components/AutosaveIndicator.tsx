"use client";

import { useEffect, useRef, useState } from "react";

interface AutosaveIndicatorProps {
  saving?: boolean;
}

export default function AutosaveIndicator({
  saving = false,
}: AutosaveIndicatorProps) {
  const [showSaved, setShowSaved] = useState(false);
  const wasSavingRef = useRef(false);

  useEffect(() => {
    if (!saving && wasSavingRef.current) {
      // Use requestAnimationFrame to defer the state update
      const rafId = requestAnimationFrame(() => {
        setShowSaved(true);
      });
      const timer = setTimeout(() => setShowSaved(false), 2000);
      wasSavingRef.current = false;
      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timer);
      };
    }
    wasSavingRef.current = saving;
  }, [saving]);

  if (saving) {
    return (
      <div className="flex items-center gap-1.5 text-xs text-white/40">
        <span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
        Saving...
      </div>
    );
  }

  if (showSaved) {
    return (
      <div className="flex items-center gap-1.5 text-xs text-white/40">
        <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
        Saved
      </div>
    );
  }

  return null;
}

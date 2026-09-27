"use client";

import { useState } from "react";
import { Building2, Star } from "lucide-react";
import StarbluePreview from "@/components/StarbluePreview";
import StJosephPreview from "@/components/StJosephPreview";

export default function PromotionalPreview() {
  const [tenant, setTenant] = useState<"starblue" | "st-joseph">("starblue");

  return (
    <div className="my-6">
      <div role="tablist" aria-label="Promotional platform tenants" className="mb-3 flex flex-wrap gap-1 border-b border-line">
        <button
          type="button"
          role="tab"
          aria-selected={tenant === "starblue"}
          onClick={() => setTenant("starblue")}
          className={`inline-flex items-center gap-2 border-b-2 px-3 py-2 text-xs font-medium transition-colors ${tenant === "starblue" ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`}
        >
          <Star className="h-3.5 w-3.5" aria-hidden="true" /> Starblue
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tenant === "st-joseph"}
          onClick={() => setTenant("st-joseph")}
          className={`inline-flex items-center gap-2 border-b-2 px-3 py-2 text-xs font-medium transition-colors ${tenant === "st-joseph" ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`}
        >
          <Building2 className="h-3.5 w-3.5" aria-hidden="true" /> St. Joseph Amity
        </button>
      </div>
      {tenant === "starblue" ? <StarbluePreview /> : <StJosephPreview />}
    </div>
  );
}
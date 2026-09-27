"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  Building2,
  CalendarDays,
  ChevronRight,
  Eye,
  House,
  Inbox,
  LogOut,
  Mail,
  MapPin,
  Save,
  ShieldCheck,
  Upload,
} from "lucide-react";

const listings = [
  { price: "₱2,000,000", status: "For sale", lot: "Lot details hidden", size: "105 sqft", image: "house-feature.webp" },
  { price: "₱2,500,000", status: "Sold", lot: "Lot details hidden", size: "106 sqft", image: "house-listing.png" },
];

type SitePage = "home" | "listings" | "about" | "contact";

function MaskedValue({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <span
      aria-label={`${label} hidden for privacy`}
      className={`inline-block h-2 rounded bg-[#70809e]/75 blur-[2px] ${wide ? "w-32" : "w-24"}`}
    />
  );
}

function AdminField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0 text-[8px] sm:text-[9px]">
      <p className="mb-1 font-medium text-[#59616c]">{label}</p>
      <div className="flex min-h-8 items-center rounded border border-[#e3e5e8] px-2 py-1.5 text-[#363d48]">
        {children}
      </div>
    </div>
  );
}

function BlurredHouse({
  src,
  alt = "House photo blurred for privacy",
  className = "",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#182139] ${className}`}>
      <Image
        src={`/st-joseph/${src}`}
        alt={alt}
        fill
        sizes="(max-width: 640px) 90vw, 45vw"
        className="scale-110 object-cover blur-[5px]"
      />
    </div>
  );
}

export default function StJosephPreview() {
  const [panel, setPanel] = useState<"website" | "admin">("website");
  const [sitePage, setSitePage] = useState<SitePage>("home");

  return (
    <section aria-label="St. Joseph Amity website preview">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">St. Joseph Amity preview</p>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" /> House photos blurred · contact details hidden
        </span>
      </div>

      <div role="tablist" aria-label="St. Joseph preview panel" className="mb-2 flex gap-1 border-b border-line">
        <button
          type="button"
          role="tab"
          aria-selected={panel === "website"}
          onClick={() => setPanel("website")}
          className={`inline-flex items-center gap-2 border-b-2 px-3 py-2 text-xs font-medium ${panel === "website" ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`}
        >
          <House className="h-3.5 w-3.5" aria-hidden="true" /> Website
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={panel === "admin"}
          onClick={() => setPanel("admin")}
          className={`inline-flex items-center gap-2 border-b-2 px-3 py-2 text-xs font-medium ${panel === "admin" ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`}
        >
          <Building2 className="h-3.5 w-3.5" aria-hidden="true" /> Admin panel
        </button>
      </div>

      <div className="h-[420px] overflow-hidden rounded-lg border border-[#dfe3e8] bg-white text-[#141820] shadow-lg shadow-black/20 sm:h-[490px]">
        <div className="flex h-8 items-center gap-1.5 border-b border-[#e4e7eb] bg-[#f8f9fb] px-3">
          <span className="h-2 w-2 rounded-full bg-[#f26c64]" />
          <span className="h-2 w-2 rounded-full bg-[#e8b44f]" />
          <span className="h-2 w-2 rounded-full bg-[#61b86a]" />
          <div className="ml-3 flex h-5 min-w-0 flex-1 items-center rounded border border-[#e8eaee] bg-white px-2 text-[9px] text-[#697386]">
            {panel === "website" ? "stjosephapdc.vercel.app / tenants / st-joseph" : "stjosephapdc.vercel.app / admin / st-joseph"}
          </div>
        </div>
        <main className="h-[calc(100%-2rem)] overflow-auto">
          {panel === "admin" ? (
            <StJosephAdmin />
          ) : (
            <StJosephSite page={sitePage} setPage={setSitePage} />
          )}
        </main>
      </div>
      <p className="mt-2 text-right text-[10px] text-muted">House images are intentionally blurred in this preview</p>
    </section>
  );
}

function StJosephSite({ page, setPage }: { page: SitePage; setPage: (page: SitePage) => void }) {
  const navigation: { label: string; page: SitePage }[] = [
    { label: "Listings", page: "listings" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <div className="min-h-full bg-[#0b1123] text-white">
      <header className="flex h-11 items-center justify-between gap-2 border-b border-white/10 px-3 sm:px-6">
        <button type="button" onClick={() => setPage("home")} className="flex min-w-0 items-center gap-2 text-left">
          <Image src="/st-joseph/logo.png" alt="" width={46} height={30} className="h-7 w-11 rounded bg-white object-contain" />
          <span className="truncate text-[10px] font-semibold sm:text-xs">St. Joseph Amity</span>
        </button>
        <nav aria-label="St. Joseph website pages" className="flex shrink-0 items-center gap-2 sm:gap-5">
          {navigation.map((item) => (
            <button key={item.page} type="button" onClick={() => setPage(item.page)} className={`text-[8px] sm:text-[9px] ${page === item.page ? "text-white" : "text-[#a8b1c5] hover:text-white"}`}>
              {item.label}
            </button>
          ))}
          <button type="button" onClick={() => setPage("contact")} className="rounded bg-[#8051ed] px-2.5 py-1.5 text-[8px] font-semibold text-[#0b1123] sm:px-4 sm:text-[9px]">Get started</button>
        </nav>
      </header>

      {page === "home" && <StJosephHome setPage={setPage} />}
      {page === "listings" && <StJosephListings setPage={setPage} />}
      {page === "about" && <StJosephAbout />}
      {page === "contact" && <StJosephContact />}
    </div>
  );
}

function StJosephHome({ setPage }: { setPage: (page: SitePage) => void }) {
  return (
    <div className="grid min-h-[390px] items-center gap-4 px-4 py-5 sm:min-h-[450px] sm:grid-cols-2 sm:gap-8 sm:px-8 sm:py-8">
      <div>
        <h2 className="max-w-[10ch] text-2xl font-extrabold leading-[1.05] sm:text-4xl">
          St. <span className="text-[#8a5af1]">Joseph</span><br /><span className="text-[#8a5af1]">Amity</span>
        </h2>
        <p className="mt-3 max-w-[40ch] text-[9px] leading-relaxed text-[#9ca9c1] sm:mt-5 sm:text-xs">
          The Gold Standard of Modern Living. Luxury Condominiums Designed for the Discerning.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
          <button type="button" onClick={() => setPage("contact")} className="inline-flex items-center gap-1 rounded bg-[#8051ed] px-3 py-2 text-[8px] font-semibold text-[#0b1123] sm:px-4 sm:text-[9px]">
            Schedule a viewing <ChevronRight className="h-3 w-3" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setPage("contact")} className="inline-flex items-center gap-1 rounded border border-[#36415d] px-3 py-2 text-[8px] font-semibold sm:px-4 sm:text-[9px]">
            <CalendarDays className="h-3 w-3" aria-hidden="true" /> Schedule consultation
          </button>
        </div>
      </div>
      <div className="relative min-h-44 sm:min-h-72">
        <BlurredHouse src="house-feature.webp" className="absolute inset-0 rounded-xl" />
        <div className="absolute -bottom-2 left-2 rounded-lg border border-white/10 bg-[#141d34]/95 p-2.5 shadow-lg sm:-left-3 sm:bottom-2 sm:p-3">
          <p className="text-[7px] font-semibold uppercase tracking-wide text-[#9b70ff]">Featured property</p>
          <p className="mt-1 text-[9px] font-semibold sm:text-[11px]">Jadeville Phase1</p>
          <p className="mt-1 text-xs font-bold text-[#8a5af1] sm:text-sm">₱2,000,000</p>
        </div>
      </div>
    </div>
  );
}

function StJosephListings({ setPage }: { setPage: (page: SitePage) => void }) {
  return (
    <div className="mx-auto max-w-3xl px-3 py-5 sm:px-7 sm:py-7">
      <h2 className="text-center text-lg font-extrabold sm:text-2xl">Featured Listings</h2>
      <p className="mt-1 text-center text-[8px] text-[#9ca9c1] sm:text-[10px]">Handpicked premium properties available now</p>
      <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2">
        {listings.map((listing) => (
          <article key={listing.price} className="overflow-hidden rounded-md border border-white/10 bg-[#10182d]">
            <div className="relative h-28 sm:h-36">
              <BlurredHouse src={listing.image} className="absolute inset-0" />
              <span className="absolute left-2 top-2 rounded bg-[#8051ed] px-2 py-1 text-[7px] font-bold text-[#0b1123]">{listing.price}</span>
              <span className={`absolute right-2 top-2 rounded px-2 py-1 text-[7px] font-semibold ${listing.status === "Sold" ? "bg-red-500/90 text-white" : "bg-emerald-400 text-[#08261a]"}`}>{listing.status}</span>
            </div>
            <div className="p-3">
              <h3 className="text-[10px] font-semibold sm:text-xs">Jadeville Phase1</h3>
              <p className="mt-1 flex items-center gap-1 text-[8px] text-[#9ca9c1]"><MapPin className="h-3 w-3" aria-hidden="true" /> {listing.lot}</p>
              <div className="mt-2 flex justify-between border-y border-white/10 py-2 text-[7px] text-[#d4d9e3] sm:text-[8px]">
                <span>2 beds</span><span>1 bath</span><span>{listing.size}</span>
              </div>
              <button type="button" onClick={() => setPage("contact")} className="mt-2 w-full rounded bg-[#8051ed] py-1.5 text-[8px] font-semibold text-[#0b1123]">View details</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function StJosephAbout() {
  return (
    <div className="mx-auto flex min-h-[360px] max-w-2xl flex-col justify-center px-5 py-8 sm:min-h-[440px] sm:px-9">
      <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#9b70ff]">About us</p>
      <h2 className="mt-2 text-xl font-bold sm:text-3xl">A trusted partner in finding your next home.</h2>
      <p className="mt-3 max-w-[60ch] text-[9px] leading-relaxed text-[#aab4c8] sm:text-xs">
        St. Joseph Amity connects buyers with thoughtfully selected properties and personalized real estate guidance.
      </p>
    </div>
  );
}

function StJosephContact() {
  return (
    <div className="mx-auto grid min-h-[390px] max-w-3xl items-center gap-3 px-3 py-5 sm:min-h-[450px] sm:grid-cols-2 sm:gap-5 sm:px-7">
      <div>
        <h2 className="text-xl font-extrabold sm:text-3xl">Request a<br />Private Viewing</h2>
        <p className="mt-2 max-w-[40ch] text-[8px] text-[#9ca9c1] sm:text-[10px]">Join the waitlist for our exclusive grand opening event.</p>
        <div className="mt-4 space-y-2 text-[8px] sm:text-[9px]">
          <p className="flex items-center gap-2"><span className="text-[#9b70ff]">Phone</span><MaskedValue label="Phone number" /></p>
          <p className="flex items-center gap-2"><span className="text-[#9b70ff]">Email</span><MaskedValue label="Email address" wide /></p>
          <p className="flex items-center gap-2"><span className="text-[#9b70ff]">Address</span><span className="text-[#9ca9c1]">Hidden in preview</span></p>
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-[#10182d] p-3 sm:p-4">
        <h3 className="text-[10px] font-semibold sm:text-xs">Schedule a viewing</h3>
        <div className="mt-3 space-y-2 text-[7px] text-[#aab4c8] sm:text-[8px]">
          <div className="grid grid-cols-2 gap-2"><div>FULL NAME<div className="mt-1 rounded border border-[#2b3650] p-2 text-[#75819a]">Your name</div></div><div>EMAIL<div className="mt-1 flex h-7 items-center rounded border border-[#2b3650] px-2"><MaskedValue label="Email address" /></div></div></div>
          <div>PROPERTY INTEREST<div className="mt-1 rounded border border-[#2b3650] p-2 text-[#d4d9e3]">Schedule a viewing</div></div>
          <div className="grid grid-cols-2 gap-2"><div>PREFERRED DATE<div className="mt-1 rounded border border-[#2b3650] p-2">Select date</div></div><div>PREFERRED TIME<div className="mt-1 rounded border border-[#2b3650] p-2">Select time</div></div></div>
          <div>MESSAGE<div className="mt-1 h-9 rounded border border-[#2b3650] p-2 text-[#75819a]">Tell us about your needs</div></div>
        </div>
        <button type="button" className="mt-3 w-full rounded bg-[#8051ed] py-2 text-[8px] font-semibold text-[#0b1123]">Schedule a viewing</button>
      </div>
    </div>
  );
}

function StJosephAdmin() {
  const [adminView, setAdminView] = useState<"content" | "inquiries" | "login">("content");

  return (
    <div className="min-h-full bg-[#f8f9fa] px-3 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between gap-2 border-b border-[#e5e7ea] pb-3">
          <div><h3 className="text-xs font-semibold sm:text-sm">Editing: St. Joseph Amity</h3><p className="mt-1 text-[8px] text-[#78818e] sm:text-[9px]">Admin CMS · Site editor</p></div>
          <span className="text-[8px] text-[#24459d] sm:text-[9px]">Back to directory</span>
        </header>
        {adminView !== "login" && (
          <nav aria-label="St. Joseph admin sections" className="sticky top-0 z-10 mx-auto my-3 flex w-fit max-w-full items-center gap-1 rounded-md border border-[#e5e7ea] bg-white p-1 shadow-sm">
            <button type="button" aria-pressed={adminView === "content"} onClick={() => setAdminView("content")} className={`rounded px-2.5 py-1.5 text-[8px] font-medium sm:px-3 sm:text-[9px] ${adminView === "content" ? "bg-[#24459d] text-white" : "text-[#626b78] hover:bg-[#f3f4f6]"}`}>Page Content</button>
            <button type="button" aria-pressed={adminView === "inquiries"} onClick={() => setAdminView("inquiries")} className={`inline-flex items-center gap-1 rounded px-2.5 py-1.5 text-[8px] font-medium sm:px-3 sm:text-[9px] ${adminView === "inquiries" ? "bg-[#24459d] text-white" : "text-[#626b78] hover:bg-[#f3f4f6]"}`}><Inbox className="h-3 w-3" aria-hidden="true" /> Inquiries &amp; Views</button>
            <button type="button" onClick={() => setAdminView("login")} className="inline-flex items-center gap-1 rounded px-2 py-1.5 text-[8px] font-medium text-red-600 hover:bg-red-50 sm:px-3 sm:text-[9px]"><LogOut className="h-3 w-3" aria-hidden="true" /> Logout</button>
          </nav>
        )}
        {adminView === "content" && <StJosephAdminContent />}
        {adminView === "inquiries" && <StJosephInquiries />}
        {adminView === "login" && <StJosephLogin onSignIn={() => setAdminView("content")} />}
        {adminView !== "login" && <div className="sticky bottom-0 mt-4 flex justify-end border-t border-[#e5e7ea] bg-white/95 px-2 py-2.5 backdrop-blur"><span className="inline-flex items-center gap-1.5 rounded bg-[#24459d] px-3 py-2 text-[8px] font-semibold text-white sm:text-[9px]"><Save className="h-3 w-3" aria-hidden="true" /> Save all changes</span></div>}
      </div>
    </div>
  );
}

function StJosephAdminContent() {
  return (
    <div className="space-y-3 pb-2">
      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <h4 className="mb-3 text-[10px] font-semibold sm:text-xs">System setup &amp; branding</h4>
        <div className="grid gap-2 sm:grid-cols-2">
          <AdminField label="Official company name">St. Joseph Amity</AdminField>
          <AdminField label="Company logo"><span className="flex w-full items-center justify-between"><span className="text-[#78818e]">Logo uploaded</span><Image src="/st-joseph/logo.png" alt="" width={36} height={24} className="h-6 w-9 object-contain" /></span></AdminField>
          <AdminField label="Contact phone"><MaskedValue label="Phone number" /></AdminField>
          <AdminField label="Contact email"><MaskedValue label="Email address" wide /></AdminField>
          <AdminField label="Facebook / Instagram / X"><MaskedValue label="Social links" wide /></AdminField>
          <AdminField label="Viber number"><MaskedValue label="Viber number" /></AdminField>
        </div>
      </section>

      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <h4 className="mb-3 text-[10px] font-semibold sm:text-xs">The &quot;Hook&quot; · Promotional content</h4>
        <div className="space-y-2">
          <AdminField label="Hero headline">St. Joseph Amity</AdminField>
          <AdminField label="Slogan">The Gold Standard of Modern Living</AdminField>
          <AdminField label="Hero background image URL"><span className="flex w-full items-center gap-2"><span className="h-2 w-36 rounded bg-[#70809e]/70 blur-[2px]" aria-label="Image URL hidden for privacy" /><Upload className="ml-auto h-3 w-3" aria-hidden="true" /></span></AdminField>
          <BlurredHouse src="house-feature.webp" className="h-16 rounded" />
        </div>
      </section>

      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <h4 className="mb-3 text-[10px] font-semibold sm:text-xs">Lead generation form settings</h4>
        <div className="grid gap-2 sm:grid-cols-2">
          <AdminField label="Form title">Request a Private Viewing</AdminField>
          <AdminField label="Form description">Join the waitlist for our opening event</AdminField>
          <AdminField label="Physical address"><MaskedValue label="Office address" wide /></AdminField>
        </div>
      </section>

      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <div className="mb-3 flex items-center justify-between"><h4 className="text-[10px] font-semibold sm:text-xs">Real estate features · St. Joseph</h4><span className="inline-flex items-center gap-1 text-[8px] text-[#24459d]"><span className="text-sm">+</span> Add property</span></div>
        <div className="space-y-2">
          {listings.map((listing, index) => (
            <div key={listing.price} className="grid gap-2 rounded border border-[#eceef0] bg-[#fafafa] p-2 sm:grid-cols-[1fr_76px]">
              <div className="grid min-w-0 grid-cols-2 gap-1.5 text-[8px] sm:text-[9px]">
                <AdminField label="Property name">Jadeville Phase1</AdminField>
                <AdminField label="Price">{listing.price}</AdminField>
                <AdminField label="Status">{listing.status}</AdminField>
                <AdminField label="Lot / location">Lot details hidden</AdminField>
                <div className="col-span-full flex items-center justify-between rounded border border-[#e3e5e8] bg-white px-2 py-1.5">
                  <span className="h-2 w-28 rounded bg-[#70809e]/70 blur-[2px]" aria-label="Property image URL hidden for privacy" />
                  <Upload className="h-3 w-3 text-[#697386]" aria-hidden="true" />
                </div>
              </div>
              <BlurredHouse src={listing.image} alt={`Property ${index + 1} photo blurred for privacy`} className="h-16 rounded sm:h-full" />
            </div>
          ))}
        </div>
      </section>
      <p className="text-center text-[8px] text-[#7b828d]">House photos, contact details, addresses, and asset URLs are obscured.</p>
    </div>
  );
}

function StJosephInquiries() {
  return (
    <div className="space-y-3 pb-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm"><p className="text-[8px] text-[#78818e]">Site views</p><p className="mt-1 text-base font-semibold text-[#24459d]">842</p></div>
        <div className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm"><p className="text-[8px] text-[#78818e]">Viewing requests</p><p className="mt-1 text-base font-semibold text-[#24459d]">6</p></div>
      </div>
      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <h4 className="mb-2 text-[10px] font-semibold sm:text-xs">Recent viewing requests</h4>
        {["Property viewing", "General inquiry", "Jadeville Phase1"].map((subject, index) => (
          <div key={subject} className="flex items-center justify-between gap-2 border-t border-[#edf0f2] py-2.5 text-[8px] sm:text-[9px]">
            <div className="flex min-w-0 items-center gap-2"><span className="h-2 w-16 shrink-0 rounded bg-[#70809e]/70 blur-[2px]" aria-label="Requester hidden for privacy" /><span className="truncate">{subject}</span></div>
            <span className="shrink-0 text-[#78818e]">{index === 0 ? "Today" : "This week"}</span>
          </div>
        ))}
      </section>
      <p className="text-center text-[8px] text-[#7b828d]">Requester names and contact details are obscured.</p>
    </div>
  );
}

function StJosephLogin({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="mx-auto my-8 max-w-sm rounded-lg border border-[#e1e5ec] bg-[#151d31] p-5 text-white shadow-lg sm:my-12 sm:p-7">
      <div className="mx-auto grid h-10 w-10 place-items-center rounded-lg bg-[#24459d]"><Building2 className="h-5 w-5" aria-hidden="true" /></div>
      <h4 className="mt-3 text-center text-sm font-semibold">Admin panel</h4>
      <p className="mt-1 text-center text-[9px] text-[#aab6ce]">Secure portal login</p>
      <div className="mt-5 space-y-3 text-[8px] text-[#9eacc5]">
        <div>Email address<div className="mt-1 flex h-8 items-center rounded border border-[#2b3650] bg-[#101729] px-2"><MaskedValue label="Admin email address" wide /></div></div>
        <div>Password<div className="mt-1 flex h-8 items-center rounded border border-[#2b3650] bg-[#101729] px-2"><span className="h-2 w-16 rounded bg-[#70809e]/70 blur-[2px]" aria-label="Password hidden" /></div></div>
      </div>
      <button type="button" onClick={onSignIn} className="mt-4 w-full rounded bg-[#8051ed] py-2 text-[9px] font-semibold text-[#0b1123]">Sign in</button>
      <p className="mt-3 text-center text-[8px] text-[#8d9ab4]">Demo only · credentials hidden</p>
    </div>
  );
}
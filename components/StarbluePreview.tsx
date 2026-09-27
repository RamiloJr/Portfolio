"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  House,
  Inbox,
  LogOut,
  Mail,
  Newspaper,
  Package,
  Plus,
  Save,
  ShieldCheck,
  Upload,
} from "lucide-react";

const pages = [
  { id: "home", label: "Home", icon: House },
  { id: "products", label: "Our products", icon: Package },
  { id: "news", label: "News", icon: Newspaper },
  { id: "contact", label: "Contact us", icon: Mail },
] as const;

type PreviewPage = (typeof pages)[number]["id"];

const products = [
  {
    name: "Banday banda",
    price: "₱400 / ton",
    detail: "Premium aggregate mix",
    image: "banday-banda.jpg",
  },
  {
    name: "Banlik / Mineral Filler",
    price: "₱250 / ton",
    detail: "Fine mineral filler",
    image: "mineral-filler.jpg",
  },
  {
    name: "Topsoil / Backfill",
    price: "₱300 / cubic meter",
    detail: "High-quality soil for filling",
    image: "topsoil-backfill.jpg",
  },
  {
    name: "Weathered Rock",
    price: "₱550 / ton",
    detail: "Durable weathered stone",
    image: "weathered-rock.jpg",
  },
  {
    name: "Blue Sand Vibro",
    price: "₱600 / ton",
    detail: "Specialized blue vibro sand",
    image: "blue-sand-vibro.jpg",
  },
  {
    name: "Basalt Powder",
    price: "₱700 / ton",
    detail: "Finely crushed basalt rock",
    image: "basalt-powder.jpg",
  },
];

const storageUrl = (filename: string) =>
  `/starblue/${filename}`;

const heroSlides = [
  "/starblue/hero-1.png",
  "/starblue/hero-2.png",
  "/starblue/hero-3.png",
  "/starblue/hero-4.png",
];

function MaskedValue({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <span
      aria-label={`${label} hidden for privacy`}
      className={`inline-block h-2 rounded bg-[#52617e]/75 blur-[2px] ${wide ? "w-32" : "w-24"}`}
    />
  );
}

function SettingField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0 text-[8px] sm:text-[9px]">
      <p className="mb-1 font-medium text-[#59616c]">{label}</p>
      <div className="flex min-h-8 items-center rounded border border-[#e3e5e8] px-2 py-1.5 text-[#363d48]">
        {children}
      </div>
    </div>
  );
}

export default function StarbluePreview() {
  const [activePanel, setActivePanel] = useState<"website" | "admin">("website");
  const [activePage, setActivePage] = useState<PreviewPage>("home");
  const activeLabel = pages.find((page) => page.id === activePage)?.label ?? "Home";

  return (
    <section aria-label="Interactive Starblue website preview" className="my-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Starblue website preview
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          Email details obscured
        </span>
      </div>

      <div role="tablist" aria-label="Preview panel" className="mb-2 flex gap-1 border-b border-line">
        <button
          type="button"
          role="tab"
          aria-selected={activePanel === "website"}
          onClick={() => setActivePanel("website")}
          className={`inline-flex items-center gap-2 border-b-2 px-3 py-2 text-xs font-medium transition-colors ${activePanel === "website" ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`}
        >
          <House className="h-3.5 w-3.5" aria-hidden="true" /> Website
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activePanel === "admin"}
          onClick={() => setActivePanel("admin")}
          className={`inline-flex items-center gap-2 border-b-2 px-3 py-2 text-xs font-medium transition-colors ${activePanel === "admin" ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`}
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
            {activePanel === "website" ? "starblue.vercel.app / tenants / starblue" : "starblue.vercel.app / admin / starblue"}
          </div>
        </div>

        <div className="flex h-[calc(100%-2rem)] min-h-0">
          {activePanel === "website" && <aside className="flex w-[72px] shrink-0 flex-col border-r border-[#e7e9ed] bg-white sm:w-[128px]">
            <div className="flex h-[76px] shrink-0 items-center justify-center border-b border-[#e7e9ed] px-2 sm:h-[88px]">
              <Image
                src={storageUrl("logo.png")}
                alt="Starblue Aggregates logo"
                width={110}
                height={60}
                className="h-auto max-h-[60px] w-full object-contain"
              />
            </div>
            <nav aria-label="Starblue website pages" className="space-y-1 pt-3">
              {pages.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  aria-label={label}
                  aria-pressed={activePage === id}
                  onClick={() => setActivePage(id)}
                  className={`flex h-8 w-full items-center justify-center gap-2 border-l-2 px-1 text-[8px] font-semibold uppercase tracking-[0.08em] transition-colors sm:justify-start sm:px-3 sm:text-[9px] ${
                    activePage === id
                      ? "border-[#2142a0] bg-[#f7f8fb] text-[#18244c]"
                      : "border-transparent text-[#747985] hover:bg-[#f7f8fb] hover:text-[#18244c]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 sm:hidden" aria-hidden="true" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </nav>
            <div className="mt-auto border-t border-[#e7e9ed] px-2 py-3 text-center text-[7px] text-[#9aa0aa] sm:text-left">
              © 2026 SBAI
              <span className="hidden sm:block">All rights reserved.</span>
            </div>
          </aside>}

          <main className="min-w-0 flex-1 overflow-auto bg-[#fafafa]">
            <div className="sr-only">{activePanel === "admin" ? "Admin panel" : activeLabel}</div>
            {activePanel === "admin" ? (
              <AdminPreview />
            ) : (
              <>
                {activePage === "home" && <HomePreview />}
                {activePage === "products" && <ProductsPreview />}
                {activePage === "news" && <NewsPreview />}
                {activePage === "contact" && <ContactPreview />}
              </>
            )}
          </main>
        </div>
      </div>
      <p className="mt-2 text-right text-[10px] text-muted">Switch panels above; use the sidebar to browse the website</p>
    </section>
  );
}

function HomePreview() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative flex h-full min-h-[380px] items-center justify-center overflow-hidden bg-[#737b8b]">
      <Image
        src={heroSlides[activeSlide]}
        alt=""
        fill
        sizes="(max-width: 640px) 80vw, 75vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#788091]/60" />
      <div className="relative z-10 mx-3 flex max-w-[560px] flex-col items-center text-center">
        <div className="rounded-lg bg-white/85 p-2 shadow-md">
          <Image
            src={storageUrl("logo.png")}
            alt="Starblue Aggregates"
            width={150}
            height={76}
            className="h-12 w-28 object-contain sm:h-16 sm:w-36"
          />
        </div>
        <h3 className="mt-8 text-2xl font-bold uppercase leading-[1.1] text-[#050608] sm:text-5xl">
          Starblue Aggregates Inc.
        </h3>
        <span className="mt-3 rounded-full bg-[#323843]/80 px-3 py-1 text-[8px] font-semibold uppercase text-white sm:text-[9px]">
          Featured
        </span>
      </div>
      <button type="button" aria-label="Previous featured slide" onClick={() => setActiveSlide((activeSlide + heroSlides.length - 1) % heroSlides.length)} className="absolute left-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/15 text-white sm:left-5 sm:h-10 sm:w-10">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>
      <button type="button" aria-label="Next featured slide" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/15 text-white sm:right-5 sm:h-10 sm:w-10">
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            aria-label={`Show featured image ${index + 1}`}
            aria-pressed={activeSlide === index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 w-2 rounded-full ${activeSlide === index ? "w-7 bg-[#2142a0]" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProductsPreview() {
  return (
    <div className="mx-auto max-w-3xl px-3 py-5 sm:px-8 sm:py-7">
      <h3 className="mb-4 text-center text-base font-extrabold uppercase text-[#24459d] sm:mb-6 sm:text-xl">
        Other products
      </h3>
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
        {products.map((product) => (
          <article key={product.name} className="min-w-0 text-center">
            <div className="relative aspect-[1.55] overflow-hidden rounded-md border border-[#e3e4e6] bg-[#e7e7e6] shadow-sm">
              <Image
                src={storageUrl(product.image)}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 80vw, 32vw"
                className="object-cover"
              />
            </div>
            <h4 className="mt-2 text-[10px] font-semibold sm:text-xs">{product.name}</h4>
            <p className="mt-0.5 text-[10px] font-medium text-[#24459d] sm:text-xs">{product.price}</p>
            <p className="mt-1 text-[8px] text-[#858b94] sm:text-[9px]">{product.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function NewsPreview() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-8 sm:py-12">
      <h3 className="mb-7 text-center text-lg font-extrabold uppercase text-[#24459d] sm:text-xl">
        Company announcements
      </h3>
      <article className="rounded-lg border border-[#e6e7e9] bg-white p-4 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-xs font-semibold sm:text-sm">Announcement</h4>
          <span className="shrink-0 rounded-full bg-[#f1f2f4] px-2.5 py-1 text-[8px] text-[#697386]">28 May 2026</span>
        </div>
        <p className="mt-3 text-[10px] text-[#4d5561] sm:text-xs">Please post an announcement here.</p>
      </article>
    </div>
  );
}

function ContactPreview() {
  return (
    <div className="flex min-h-full items-center justify-center p-3 sm:p-7">
      <div className="grid w-full max-w-2xl overflow-hidden rounded-lg border border-[#e5e7ea] bg-white shadow-lg sm:grid-cols-2">
        <div className="bg-[#24459d] p-4 text-white sm:p-6">
          <h3 className="text-sm font-bold sm:text-lg">Get in touch</h3>
          <p className="mt-1 text-[9px] text-white/75 sm:text-[10px]">We&apos;d love to hear from you.</p>
          <div className="mt-5 space-y-4 text-[9px] sm:text-[10px]">
            <div>
              <p className="font-semibold">Email</p>
              <MaskedValue label="Email address" wide />
            </div>
            <div><p className="font-semibold">Phone</p><p className="text-white/80">Contact details hidden</p></div>
            <div><p className="font-semibold">Office</p><p className="text-white/80">Metro Manila, Philippines</p></div>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-sm font-bold sm:text-base">Send a message</h3>
          <div className="mt-4 space-y-3 text-[8px] sm:text-[9px]">
            <label className="block text-[#737985]">NAME<div className="mt-1 border-b border-[#dfe2e6] py-1.5 text-[#a0a5ad]">Your name</div></label>
            <label className="block text-[#737985]">EMAIL<div className="mt-1 flex h-6 items-center border-b border-[#dfe2e6]"><MaskedValue label="Email address" /></div></label>
            <label className="block text-[#737985]">MESSAGE<div className="mt-1 h-10 border-b border-[#dfe2e6] py-1.5 text-[#a0a5ad]">How can we help?</div></label>
          </div>
          <div className="mt-4 rounded bg-[#24459d] py-2 text-center text-[9px] font-semibold text-white">Send message</div>
        </div>
      </div>
    </div>
  );
}

function AdminPreview() {
  const [adminView, setAdminView] = useState<"content" | "inquiries" | "login">("content");

  return (
    <div className="min-h-full bg-[#f8f9fa] px-3 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto max-w-3xl">
        <header className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e5e7ea] pb-3">
          <div>
            <h3 className="text-xs font-semibold sm:text-sm">Editing: Starblue Aggregates</h3>
            <p className="mt-1 text-[8px] text-[#78818e] sm:text-[9px]">Admin CMS · Site editor</p>
          </div>
          <span className="text-[8px] text-[#24459d] sm:text-[9px]">Back to directory</span>
        </header>

        {adminView !== "login" && (
          <nav aria-label="Admin sections" className="sticky top-0 z-10 mx-auto my-3 flex w-fit max-w-full items-center gap-1 rounded-md border border-[#e5e7ea] bg-white p-1 shadow-sm">
            <button
              type="button"
              aria-pressed={adminView === "content"}
              onClick={() => setAdminView("content")}
              className={`rounded px-2.5 py-1.5 text-[8px] font-medium sm:px-3 sm:text-[9px] ${adminView === "content" ? "bg-[#24459d] text-white" : "text-[#626b78] hover:bg-[#f3f4f6]"}`}
            >
              Page Content
            </button>
            <button
              type="button"
              aria-pressed={adminView === "inquiries"}
              onClick={() => setAdminView("inquiries")}
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[8px] font-medium sm:px-3 sm:text-[9px] ${adminView === "inquiries" ? "bg-[#24459d] text-white" : "text-[#626b78] hover:bg-[#f3f4f6]"}`}
            >
              <Inbox className="h-3 w-3" aria-hidden="true" /> Inquiries &amp; Views
            </button>
            <button
              type="button"
              onClick={() => setAdminView("login")}
              className="inline-flex items-center gap-1 rounded px-2 py-1.5 text-[8px] font-medium text-red-600 hover:bg-red-50 sm:px-3 sm:text-[9px]"
            >
              <LogOut className="h-3 w-3" aria-hidden="true" /> Logout
            </button>
          </nav>
        )}

        {adminView === "content" && <AdminContent />}
        {adminView === "inquiries" && <AdminInquiries />}
        {adminView === "login" && <AdminLogin onSignIn={() => setAdminView("content")} />}

        {adminView !== "login" && (
          <div className="sticky bottom-0 mt-4 flex justify-end border-t border-[#e5e7ea] bg-white/95 px-2 py-2.5 backdrop-blur">
            <span className="inline-flex items-center gap-1.5 rounded bg-[#24459d] px-3 py-2 text-[8px] font-semibold text-white sm:text-[9px]">
              <Save className="h-3 w-3" aria-hidden="true" /> Save all changes
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function AdminContent() {
  return (
    <div className="space-y-4 pb-2">
      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <h4 className="mb-3 text-[10px] font-semibold sm:text-xs">System setup &amp; branding</h4>
        <div className="grid gap-2.5 sm:grid-cols-2">
          <SettingField label="Official company name">Starblue Aggregates</SettingField>
          <SettingField label="Company logo">
            <div className="flex w-full items-center justify-between gap-2">
              <span className="text-[#78818e]">Logo uploaded</span>
              <Image src={storageUrl("logo.png")} alt="" width={38} height={26} className="h-6 w-9 object-contain" />
            </div>
          </SettingField>
          <SettingField label="Contact phone"><MaskedValue label="Contact phone" /></SettingField>
          <SettingField label="Contact email"><MaskedValue label="Email address" wide /></SettingField>
          <SettingField label="Viber number"><MaskedValue label="Viber number" /></SettingField>
        </div>
      </section>

      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div>
            <h4 className="text-[10px] font-semibold sm:text-xs">Construction features (Starblue)</h4>
            <p className="mt-1 text-[8px] text-[#78818e]">Home page slideshow</p>
          </div>
          <span className="inline-flex items-center gap-1 text-[8px] text-[#24459d] sm:text-[9px]">
            <Plus className="h-3 w-3" aria-hidden="true" /> Add slide
          </span>
        </div>
        <div className="space-y-2">
          {heroSlides.map((slide, index) => (
            <div key={slide} className="grid grid-cols-[1fr_auto] items-center gap-2 rounded border border-[#eceef0] bg-[#fafafa] p-2 sm:grid-cols-[1fr_74px]">
              <div className="grid min-w-0 gap-1.5 sm:grid-cols-2">
                <div className="truncate rounded border border-[#e3e5e8] bg-white px-2 py-1.5 text-[8px] text-[#697386]">Slide {index + 1} title</div>
                <div className="truncate rounded border border-[#e3e5e8] bg-white px-2 py-1.5 text-[8px] text-[#9aa0aa]">Subtitle (optional)</div>
                <div className="col-span-full flex min-w-0 items-center gap-2 rounded border border-[#e3e5e8] bg-white px-2 py-1.5">
                  <span className="h-2 w-28 rounded bg-[#52617e]/65 blur-[2px]" aria-label="Image URL hidden for privacy" />
                  <Upload className="ml-auto h-3 w-3 shrink-0 text-[#697386]" aria-hidden="true" />
                </div>
              </div>
              <div className="relative h-10 w-14 overflow-hidden rounded border border-[#e3e5e8] bg-[#eef0f3]">
                <Image src={slide} alt={`Slideshow image ${index + 1}`} fill sizes="56px" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-[10px] font-semibold sm:text-xs">Product catalog</h4>
          <span className="inline-flex items-center gap-1 text-[8px] text-[#24459d] sm:text-[9px]"><Plus className="h-3 w-3" aria-hidden="true" /> Add product</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {products.map((product) => (
            <div key={product.name} className="flex min-w-0 items-center gap-2 rounded border border-[#eceef0] bg-[#fafafa] p-2">
              <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded bg-[#e7e7e6]">
                <Image src={storageUrl(product.image)} alt="" fill sizes="56px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1 text-[8px] sm:text-[9px]">
                <p className="truncate font-medium">{product.name}</p>
                <p className="truncate text-[#78818e]">{product.detail} · {product.price}</p>
                <span className="mt-1 inline-block h-1.5 w-20 rounded bg-[#52617e]/60 blur-[2px]" aria-label="Product image URL hidden for privacy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdminAnnouncements />
      <p className="text-center text-[8px] text-[#7b828d]">Private contact details and storage URLs are obscured.</p>
    </div>
  );
}

function AdminAnnouncements() {
  return (
    <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-[10px] font-semibold sm:text-xs">Company announcements / news</h4>
        <span className="inline-flex items-center gap-1 text-[8px] text-[#24459d] sm:text-[9px]"><Plus className="h-3 w-3" aria-hidden="true" /> Add announcement</span>
      </div>
      <div className="rounded border border-[#eceef0] bg-[#fafafa] p-2.5 text-[8px] sm:text-[9px]">
        <div className="flex items-center justify-between gap-2"><span className="font-medium">Announcement</span><span className="text-[#78818e]">28 May 2026</span></div>
        <p className="mt-2 text-[#5d6570]">Please post an announcement here.</p>
      </div>
    </section>
  );
}

function AdminInquiries() {
  return (
    <div className="space-y-3 pb-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm">
          <p className="text-[8px] text-[#78818e]">Site views</p><p className="mt-1 text-base font-semibold text-[#24459d]">1,248</p>
        </div>
        <div className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm">
          <p className="text-[8px] text-[#78818e]">Inquiries</p><p className="mt-1 text-base font-semibold text-[#24459d]">12</p>
        </div>
      </div>
      <section className="rounded-md border border-[#e5e7ea] bg-white p-3 shadow-sm sm:p-4">
        <h4 className="mb-3 text-[10px] font-semibold sm:text-xs">Recent inquiries</h4>
        {[
          { subject: "Product availability", date: "Today" },
          { subject: "Aggregate delivery inquiry", date: "Yesterday" },
          { subject: "Pricing request", date: "This week" },
        ].map((inquiry) => (
          <div key={inquiry.subject} className="flex items-center justify-between gap-3 border-t border-[#edf0f2] py-2.5 text-[8px] sm:text-[9px]">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-2 w-20 shrink-0 rounded bg-[#52617e]/60 blur-[2px]" aria-label="Sender hidden for privacy" />
              <span className="truncate">{inquiry.subject}</span>
            </div>
            <span className="shrink-0 text-[#78818e]">{inquiry.date}</span>
          </div>
        ))}
      </section>
      <p className="text-center text-[8px] text-[#7b828d]">Inquiry names and contact details are obscured.</p>
    </div>
  );
}

function AdminLogin({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="mx-auto my-8 max-w-sm rounded-lg border border-[#e1e5ec] bg-[#151d31] p-5 text-white shadow-lg sm:my-12 sm:p-7">
      <div className="mx-auto grid h-10 w-10 place-items-center rounded-lg bg-[#24459d]"><Building2 className="h-5 w-5" aria-hidden="true" /></div>
      <h4 className="mt-3 text-center text-sm font-semibold">Admin panel</h4>
      <p className="mt-1 text-center text-[9px] text-[#aab6ce]">Secure portal login</p>
      <div className="mt-5 space-y-3 text-[8px] text-[#9eacc5]">
        <div>Email address<div className="mt-1 flex h-8 items-center rounded border border-[#2b3650] bg-[#101729] px-2"><MaskedValue label="Admin email address" wide /></div></div>
        <div>Password<div className="mt-1 flex h-8 items-center rounded border border-[#2b3650] bg-[#101729] px-2"><span className="h-2 w-16 rounded bg-[#52617e]/70 blur-[2px]" aria-label="Password hidden" /></div></div>
      </div>
      <button type="button" onClick={onSignIn} className="mt-4 w-full rounded bg-[#2c66d5] py-2 text-[9px] font-semibold text-white">Sign in</button>
      <p className="mt-3 text-center text-[8px] text-[#8d9ab4]">Demo only · credentials hidden</p>
    </div>
  );
}
"use client";

import { useState } from "react";
import {
  Bell,
  Boxes,
  ChartNoAxesCombined,
  CircleAlert,
  LayoutDashboard,
  Package,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const views = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "inventory", label: "Inventory", icon: Boxes },
  { id: "reports", label: "Reports", icon: ChartNoAxesCombined },
  { id: "admin", label: "Admin", icon: UsersRound },
] as const;

type PreviewView = (typeof views)[number]["id"];

const activities = [
  { action: "Stock added", product: "Office paper", time: "Today, 10:42" },
  { action: "Stock removed", product: "Ink cartridge", time: "Yesterday" },
  { action: "Item updated", product: "Packing tape", time: "Yesterday" },
];

const inventoryItems = [
  { name: "Office paper", category: "Supplies", stock: 24, status: "In stock" },
  { name: "Ink cartridge", category: "Electronics", stock: 4, status: "Low stock" },
  { name: "Packing tape", category: "Supplies", stock: 0, status: "Out of stock" },
];

function Metric({ label, value, detail, icon: Icon }: {
  label: string;
  value: string;
  detail: string;
  icon: typeof Package;
}) {
  return (
    <div className="rounded-md border border-[#e5e7e9] bg-white p-2.5 shadow-sm sm:p-3">
      <div className="flex items-center justify-between text-[9px] text-[#65717b] sm:text-[10px]">
        {label}
        <Icon className="h-3 w-3" aria-hidden="true" />
      </div>
      <p className="mt-1 text-base font-semibold text-[#20262c] sm:text-lg">{value}</p>
      <p className="text-[8px] text-[#65717b] sm:text-[9px]">{detail}</p>
    </div>
  );
}

export default function InventoryPreview() {
  const [activeView, setActiveView] = useState<PreviewView>("dashboard");
  const currentView = views.find((view) => view.id === activeView);
  const pageTitle = currentView?.label ?? "Dashboard";

  return (
    <section aria-label="Interactive inventory system preview" className="my-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Interactive app preview
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          Account details hidden
        </span>
      </div>

      <div className="h-[430px] overflow-hidden rounded-lg border border-[#dfe3e5] bg-[#f8f9fa] text-[#20262c] shadow-lg shadow-black/20 sm:h-[470px]">
        <div className="flex h-8 items-center gap-1.5 border-b border-[#e3e6e8] bg-white px-3">
          <span className="h-2 w-2 rounded-full bg-[#f26c64]" />
          <span className="h-2 w-2 rounded-full bg-[#e8b44f]" />
          <span className="h-2 w-2 rounded-full bg-[#61b86a]" />
          <div className="ml-3 flex h-5 min-w-0 flex-1 items-center rounded border border-[#edf0f1] bg-[#f7f8f9] px-2 text-[9px] text-[#75808a]">
            inventory.local / dashboard
          </div>
        </div>

        <div className="flex h-[calc(100%-2rem)] min-h-0">
          <aside className="flex w-12 shrink-0 flex-col bg-[#1c1c1c] px-1.5 py-3 text-white sm:w-36 sm:px-2.5">
            <div className="mb-5 flex items-center justify-center gap-2 sm:justify-start">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-[#0bb4c4] text-[10px] font-bold text-white">
                SJ
              </span>
              <span className="hidden min-w-0 text-[9px] leading-tight sm:block">
                <span className="block truncate font-semibold">St. Joseph Amity</span>
                <span className="text-[#aeb5ba]">Inventory</span>
              </span>
            </div>
            <p className="mb-2 hidden px-2 text-[8px] uppercase text-[#8a8f93] sm:block">Main menu</p>
            <nav aria-label="Preview screens" className="space-y-1">
              {views.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={activeView === id}
                  aria-label={label}
                  onClick={() => setActiveView(id)}
                  className={`flex w-full items-center justify-center gap-2 rounded px-2 py-2 text-left text-[9px] transition-colors sm:justify-start ${
                    activeView === id
                      ? "bg-[#153638] text-[#08bfd0]"
                      : "text-[#c4c7ca] hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </nav>
            <div className="mt-auto space-y-1">
              <div className="flex justify-center rounded px-2 py-2 text-[#c4c7ca] sm:justify-start">
                <Settings className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="ml-2 hidden text-[9px] sm:inline">Settings</span>
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            <header className="flex h-9 shrink-0 items-center justify-between border-b border-[#e7e9ea] bg-white px-3 sm:px-5">
              <span className="text-[10px] font-medium sm:text-[11px]">{pageTitle}</span>
              <div className="flex items-center gap-2 text-[9px] text-[#56616b] sm:gap-3">
                <span className="hidden sm:inline">St. Joseph Amity Prime</span>
                <Bell className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#0bb4c4] text-[8px] font-semibold text-[#07353a]">SJ</span>
                <span className="hidden sm:inline">Staff</span>
              </div>
            </header>

            <main className="min-h-0 flex-1 overflow-auto p-3 sm:p-5">
              {activeView === "dashboard" && <DashboardView />}
              {activeView === "inventory" && <InventoryView />}
              {activeView === "reports" && <ReportsView />}
              {activeView === "admin" && <AdminView />}
            </main>
          </div>
        </div>
      </div>
      <p className="mt-2 text-right text-[10px] text-muted">Select a screen in the sidebar to explore</p>
    </section>
  );
}

function DashboardView() {
  return (
    <>
      <p className="mb-0.5 text-sm font-semibold sm:text-base">Dashboard</p>
      <p className="mb-3 text-[9px] text-[#78828a] sm:mb-4 sm:text-[10px]">Welcome back. Here&apos;s an overview of your inventory.</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric label="Total Products" value="128" detail="Across 3 categories" icon={Package} />
        <Metric label="In Stock" value="106" detail="Healthy stock levels" icon={ChartNoAxesCombined} />
        <Metric label="Low Stock Alerts" value="18" detail="Restock soon" icon={CircleAlert} />
        <Metric label="Out of Stock" value="4" detail="Needs attention" icon={Boxes} />
      </div>
      <div className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-md border border-[#e5e7e9] bg-white p-3 shadow-sm sm:p-4">
          <h3 className="text-[10px] font-semibold sm:text-[11px]">Recent activity</h3>
          <p className="mb-2 text-[8px] text-[#78828a] sm:text-[9px]">Latest inventory updates</p>
          <div className="divide-y divide-[#edf0f1]">
            {activities.map((activity) => (
              <div key={activity.action + activity.product} className="flex items-center justify-between gap-2 py-2 text-[8px] sm:text-[9px]">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0bb4c4]" />
                  <span className="truncate"><span className="font-medium">{activity.action}</span><span className="block text-[#78828a]">{activity.product}</span></span>
                </div>
                <span className="shrink-0 text-[#78828a]">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-[#e5e7e9] bg-white p-3 shadow-sm sm:p-4">
          <h3 className="text-[10px] font-semibold sm:text-[11px]">Low stock items</h3>
          <p className="mb-2 text-[8px] text-[#78828a] sm:text-[9px]">Items to replenish</p>
          <div className="rounded border border-[#edf0f1] bg-[#fafafa] p-2 text-[8px] sm:text-[9px]">
            <div className="flex justify-between font-medium"><span>Ink cartridge</span><span className="text-[#d97706]">4 left</span></div>
            <span className="text-[#78828a]">Electronics · Min. stock 10</span>
          </div>
        </div>
      </div>
    </>
  );
}

function InventoryView() {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold sm:text-base">Inventory</p>
          <p className="mt-0.5 text-[9px] text-[#78828a] sm:text-[10px]">Manage stock and track items across locations.</p>
        </div>
        <button type="button" className="inline-flex items-center gap-1 rounded bg-[#0bb4c4] px-2 py-1.5 text-[9px] font-medium text-[#062e32]">
          <Plus className="h-3 w-3" aria-hidden="true" /> Add item
        </button>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded border border-[#e5e7e9] bg-white px-2 py-1.5 text-[8px] text-[#78828a] sm:max-w-64 sm:text-[9px]">
          <Search className="h-3 w-3 shrink-0" aria-hidden="true" /> Search inventory
        </div>
        <span className="rounded border border-[#e5e7e9] bg-white px-2 py-1.5 text-[8px] text-[#56616b]">All status</span>
      </div>
      <div className="mt-2 flex gap-1.5 text-[8px] sm:text-[9px]">
        <span className="rounded-full bg-[#e5f7ee] px-2 py-1 text-[#18834b]">In stock: 106</span>
        <span className="rounded-full bg-[#fff4d8] px-2 py-1 text-[#a76a00]">Low stock: 18</span>
        <span className="rounded-full bg-[#fde8e7] px-2 py-1 text-[#bc3831]">Out: 4</span>
      </div>
      <div className="mt-3 overflow-x-auto rounded-md border border-[#e5e7e9] bg-white shadow-sm">
        <table className="w-full min-w-[480px] border-collapse text-left text-[8px] sm:text-[9px]">
          <thead className="bg-[#fafafa] text-[#66717a]">
            <tr>{["Product name", "Category", "Stock", "Status", "Location"].map((label) => <th key={label} className="border-b border-[#e5e7e9] px-2 py-2 font-medium sm:px-3">{label}</th>)}</tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.name} className="border-b border-[#edf0f1] last:border-0">
                <td className="px-2 py-2.5 font-medium sm:px-3">{item.name}</td>
                <td className="px-2 py-2.5 text-[#66717a] sm:px-3">{item.category}</td>
                <td className="px-2 py-2.5 sm:px-3">{item.stock}</td>
                <td className="px-2 py-2.5 sm:px-3"><span className="rounded-full bg-[#f1f3f4] px-1.5 py-1 text-[#52606a]">{item.status}</span></td>
                <td className="px-2 py-2.5 text-[#66717a] sm:px-3">Main warehouse</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ReportsView() {
  return (
    <>
      <p className="text-sm font-semibold sm:text-base">Reports</p>
      <p className="mt-0.5 text-[9px] text-[#78828a] sm:text-[10px]">Track inventory activity and product changes.</p>
      <div className="mt-4 flex gap-4 border-b border-[#e3e6e8] text-[9px]">
        <span className="border-b-2 border-[#c66a42] px-1 pb-2 font-medium">Stock added</span>
        <span className="px-1 pb-2 text-[#78828a]">Stock removed</span>
        <span className="px-1 pb-2 text-[#78828a]">Product edits</span>
      </div>
      <div className="mt-3 overflow-hidden rounded-md border border-[#e5e7e9] bg-white shadow-sm">
        <div className="grid grid-cols-3 border-b border-[#e5e7e9] bg-[#fafafa] px-3 py-2 text-[8px] font-medium text-[#66717a] sm:grid-cols-4 sm:text-[9px]">
          <span>Date / time</span><span>User</span><span>Action</span><span className="hidden sm:block">Product</span>
        </div>
        <div className="grid grid-cols-3 items-center px-3 py-3 text-[8px] sm:grid-cols-4 sm:text-[9px]">
          <span>Today, 10:42</span><span>Staff member</span><span className="text-[#18834b]">Stock added</span><span className="hidden sm:block">Office paper</span>
        </div>
        <div className="grid grid-cols-3 items-center border-t border-[#edf0f1] px-3 py-3 text-[8px] sm:grid-cols-4 sm:text-[9px]">
          <span>Yesterday</span><span>Staff member</span><span className="text-[#52606a]">Stock removed</span><span className="hidden sm:block">Ink cartridge</span>
        </div>
      </div>
    </>
  );
}

function AdminView() {
  return (
    <>
      <p className="text-sm font-semibold text-[#c66a42] sm:text-base">Admin control</p>
      <p className="mt-0.5 text-[9px] text-[#78828a] sm:text-[10px]">Manage team roles and item permissions.</p>
      <div className="mt-4 overflow-hidden rounded-md border border-[#e5e7e9] bg-white shadow-sm">
        <div className="grid grid-cols-[1.3fr_0.7fr] border-b border-[#e5e7e9] bg-[#fafafa] px-3 py-2 text-[8px] font-medium uppercase text-[#66717a] sm:grid-cols-[1.4fr_0.6fr_0.5fr_0.5fr] sm:text-[9px]">
          <span>Team account</span><span>Role</span><span className="hidden text-center sm:block">Can edit</span><span className="hidden text-center sm:block">Can manage</span>
        </div>
        {["Admin", "Staff", "Staff member", "Staff member"].map((role, index) => (
          <div key={`${role}-${index}`} className="grid grid-cols-[1.3fr_0.7fr] items-center border-b border-[#edf0f1] px-3 py-3 last:border-0 sm:grid-cols-[1.4fr_0.6fr_0.5fr_0.5fr]">
            <div className="flex min-w-0 items-center gap-2" aria-label="Account identity hidden">
              <span className="h-2 w-16 rounded bg-[#59636d]/70 blur-[2px] sm:w-28" aria-hidden="true" />
              <span className="h-2 w-7 rounded bg-[#59636d]/50 blur-[2px] sm:w-10" aria-hidden="true" />
            </div>
            <span className="mr-2 rounded border border-[#e5e7e9] px-2 py-1 text-[8px] text-[#46515a]">{role}</span>
            <span className="hidden justify-self-center sm:block"><input type="checkbox" checked={index === 0} readOnly aria-label="Can edit items" className="accent-[#0bb4c4]" /></span>
            <span className="hidden justify-self-center sm:block"><input type="checkbox" checked={index === 0} readOnly aria-label="Can manage users" className="accent-[#0bb4c4]" /></span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[8px] text-[#78828a]">Personal account details are obscured in this preview.</p>
    </>
  );
}
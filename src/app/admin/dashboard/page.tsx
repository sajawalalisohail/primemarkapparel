"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type RFQStatus = "new" | "in_progress" | "quoted" | "closed";

interface RFQ {
  id: string;
  name: string;
  company: string;
  email: string;
  product_type: string;
  quantity: number;
  customization: string;
  details: string;
  status: RFQStatus;
  created_at: string;
}

export default function AdminDashboard() {
  const [rfqs, setRfqs] = useState<RFQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/admin/login");
      return;
    }

    const allowedEmails = [
      "ali@primemarkapparel.com",
      "suleman@primemarkapparel.com",
    ];

    if (!allowedEmails.includes(user.email || "")) {
      await supabase.auth.signOut();
      router.push("/admin/login");
      return;
    }

    setUser(user);
    loadRFQs();
  };

  const loadRFQs = async () => {
    try {
      const { data, error } = await supabase
        .from("rfq_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setRfqs(data || []);
    } catch (error) {
      console.error("Error loading RFQs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (rfqId: string, newStatus: RFQStatus) => {
    setUpdatingStatus(rfqId);
    try {
      const { error } = await supabase
        .from("rfq_submissions")
        .update({ status: newStatus })
        .eq("id", rfqId);

      if (error) throw error;

      setRfqs((prev) =>
        prev.map((rfq) =>
          rfq.id === rfqId ? { ...rfq, status: newStatus } : rfq
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    } finally {
      setUpdatingStatus(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: RFQStatus) => {
    const styles = {
      new: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      in_progress: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      quoted: "bg-green-500/10 text-green-400 border-green-500/20",
      closed: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    };

    const labels = {
      new: "New",
      in_progress: "In Progress",
      quoted: "Quoted",
      closed: "Closed",
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${styles[status]}`}
      >
        {labels[status]}
      </span>
    );
  };

  const extractPhoneFromDetails = (details: string) => {
    const match = details.match(/Phone:\s*(.+?)(?:\n|$)/);
    return match ? match[1].trim() : null;
  };

  const extractNotesFromDetails = (details: string) => {
    const match = details.match(/Notes:\s*(.+)/s);
    return match ? match[1].trim() : null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex items-center gap-3 text-zinc-400">
          <svg
            className="animate-spin h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="border-b border-zinc-800 sticky top-0 bg-zinc-950/95 backdrop-blur z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/final pma full white yellow black 1600.svg"
                alt="PrimeMark Apparel"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-400 hidden sm:inline">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-zinc-800 text-white text-sm rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            RFQ Submissions
          </h1>
          <p className="text-zinc-400">
            {rfqs.length === 0
              ? "No submissions yet"
              : `${rfqs.length} total ${rfqs.length === 1 ? "submission" : "submissions"}`}
          </p>
        </div>

        {rfqs.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center">
            <div className="max-w-sm mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <p className="text-lg text-zinc-400 mb-2">No RFQ submissions yet</p>
              <p className="text-sm text-zinc-500">
                Submissions from the website will appear here
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {rfqs.map((rfq) => {
              const phone = extractPhoneFromDetails(rfq.details);
              const notes = extractNotesFromDetails(rfq.details);

              return (
                <div
                  key={rfq.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {rfq.name}
                          </h3>
                          <p className="text-zinc-400">{rfq.company}</p>
                        </div>
                        {getStatusBadge(rfq.status)}
                      </div>
                      <p className="text-sm text-zinc-500">
                        {formatDate(rfq.created_at)}
                      </p>
                    </div>

                    {/* Status Dropdown */}
                    <div className="sm:ml-4">
                      <label className="block text-xs text-zinc-500 mb-1">
                        Update Status
                      </label>
                      <select
                        value={rfq.status}
                        onChange={(e) =>
                          handleStatusChange(
                            rfq.id,
                            e.target.value as RFQStatus
                          )
                        }
                        disabled={updatingStatus === rfq.id}
                        className="px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all disabled:opacity-50"
                      >
                        <option value="new">New</option>
                        <option value="in_progress">In Progress</option>
                        <option value="quoted">Quoted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <div>
                      <p className="text-xs font-medium text-zinc-500 mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${rfq.email}`}
                        className="text-white hover:text-amber-400 transition-colors inline-flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="break-all">{rfq.email}</span>
                      </a>
                    </div>
                    {phone && phone !== "Not provided" && (
                      <div>
                        <p className="text-xs font-medium text-zinc-500 mb-1">
                          Phone / WhatsApp
                        </p>
                        <a
                          href={`tel:${phone}`}
                          className="text-white hover:text-amber-400 transition-colors inline-flex items-center gap-2"
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {phone}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* RFQ Details */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-xs font-medium text-zinc-500 mb-1">
                        Product Type
                      </p>
                      <p className="text-white font-medium">
                        {rfq.product_type}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500 mb-1">
                        Quantity
                      </p>
                      <p className="text-white font-medium">
                        {rfq.quantity.toLocaleString()} units
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500 mb-1">
                        Customization
                      </p>
                      <p className="text-white font-medium">
                        {rfq.customization}
                      </p>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  {notes && notes !== "None" && (
                    <div className="pt-4 border-t border-zinc-800">
                      <p className="text-xs font-medium text-zinc-500 mb-2">
                        Additional Notes
                      </p>
                      <p className="text-white whitespace-pre-wrap leading-relaxed">
                        {notes}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

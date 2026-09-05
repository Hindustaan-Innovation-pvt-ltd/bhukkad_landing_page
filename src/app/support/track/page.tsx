"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Calendar,
  Tag,
  ShieldCheck,
  MessageSquare,
  RefreshCw,
  Copy,
  Check,
} from "lucide-react";

interface TimelineStage {
  stage: string;
  label: string;
  description: string;
  completed: boolean;
  current?: boolean;
  timestamp: string | null;
}

interface TicketData {
  ticketReference: string;
  id: string;
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | string;
  category: string;
  subject: string;
  createdAt: string;
  resolvedAt: string | null;
  lastUpdated: string;
  timeline: TimelineStage[];
  replies: { text: string; createdAt: string }[];
}

function TrackTicketContent() {
  const searchParams = useSearchParams();
  const initialRef = searchParams.get("ref") || "";
  const initialContact = searchParams.get("contact") || "";

  const [ticketReference, setTicketReference] = useState(initialRef);
  const [contact, setContact] = useState(initialContact);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const [copied, setCopied] = useState(false);

  const fetchTicketStatus = async (refVal: string, contactVal: string) => {
    if (!refVal || !contactVal) return;
    setLoading(true);
    setErrorMessage(null);

    try {
      const apiBase =
        process.env.NEXT_PUBLIC_API_URL || "https://apibhukkad.allindiahub.com";

      const response = await fetch(`${apiBase}/api/support/tickets/track`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticketReference: refVal.trim().toUpperCase(),
          contact: contactVal.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(
          data.message || "Failed to retrieve ticket status. Please check your reference and contact details."
        );
      }

      setTicket(data.data);
    } catch (err: any) {
      console.error("Track ticket query failed:", err);
      setErrorMessage(err.message || "Could not find matching ticket.");
      setTicket(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialRef && initialContact) {
      fetchTicketStatus(initialRef, initialContact);
    }
  }, [initialRef, initialContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchTicketStatus(ticketReference, contact);
  };

  const handleCopy = () => {
    if (!ticket?.ticketReference) return;
    navigator.clipboard.writeText(ticket.ticketReference);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status.toUpperCase()) {
      case "RESOLVED":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
            <CheckCircle2 size={13} />
            Resolved
          </span>
        );
      case "IN_PROGRESS":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            In Progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            <Clock size={13} />
            Open & Queued
          </span>
        );
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#FCFBFF] dark:bg-transparent pt-28 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Header */}
        <div className="mb-8">
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Support Center
          </Link>
          <h1 className="font-poppins font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Track Support Ticket
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-base mt-2">
            Enter your reference ID and email or mobile number to view real-time resolution progress.
          </p>
        </div>

        {/* Lookup Card */}
        <div className="bg-white dark:bg-slate-800/90 rounded-[28px] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/60 shadow-xl shadow-black/5 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Ticket Reference
                </label>
                <Input
                  required
                  value={ticketReference}
                  onChange={(e) => setTicketReference(e.target.value.toUpperCase())}
                  placeholder="e.g. BHK-95D8CBE5"
                  className="h-12 rounded-[14px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 font-mono uppercase tracking-wider text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Email or Phone Number
                </label>
                <Input
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. rahul@example.com or +91 99999..."
                  className="h-12 rounded-[14px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto h-12 px-8 rounded-[14px] font-bold text-sm bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Checking Status...</span>
                </>
              ) : (
                <>
                  <Search size={16} />
                  <span>Track Ticket</span>
                </>
              )}
            </Button>
          </form>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-[16px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-start gap-3 text-red-600 dark:text-red-400 text-sm"
            >
              <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </div>

        {/* Status Result */}
        <AnimatePresence>
          {ticket && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Ticket Overview Card */}
              <div className="bg-white dark:bg-slate-800/90 rounded-[28px] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/60 shadow-xl shadow-black/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Support Ticket
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-black text-slate-900 dark:text-white tracking-wider">
                        {ticket.ticketReference}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="text-slate-400 hover:text-primary transition-colors p-1"
                        title="Copy Reference"
                      >
                        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {getStatusBadge(ticket.status)}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => fetchTicketStatus(ticketReference, contact)}
                      disabled={loading}
                      className="rounded-full h-8 px-2 text-xs font-bold text-slate-500"
                    >
                      <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
                    </Button>
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 text-sm">
                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">Category</div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 mt-1 flex items-center gap-1.5">
                      <Tag size={14} className="text-primary" />
                      {ticket.category}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">Submitted On</div>
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mt-1 flex items-center gap-1.5">
                      <Calendar size={14} className="text-slate-400" />
                      {new Date(ticket.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">Verification</div>
                    <div className="font-semibold text-green-600 dark:text-green-400 mt-1 flex items-center gap-1.5">
                      <ShieldCheck size={15} />
                      Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Timeline Card */}
              <div className="bg-white dark:bg-slate-800/90 rounded-[28px] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/60 shadow-xl shadow-black/5">
                <h3 className="font-poppins font-bold text-lg text-slate-900 dark:text-white mb-6">
                  Resolution Progress
                </h3>

                <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                  {ticket.timeline.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-4">
                      {/* Step Marker */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${
                          step.completed
                            ? "bg-green-500 text-white shadow-md shadow-green-500/30"
                            : step.current
                            ? "bg-primary text-white ring-4 ring-primary/20 animate-pulse"
                            : "bg-slate-200 dark:bg-slate-700 text-slate-400"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 size={18} strokeWidth={2.5} />
                        ) : (
                          <span className="text-xs font-bold">{idx + 1}</span>
                        )}
                      </div>

                      {/* Step Details */}
                      <div className="flex-1 pt-0.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4
                            className={`text-sm font-bold ${
                              step.completed || step.current
                                ? "text-slate-900 dark:text-white"
                                : "text-slate-400 dark:text-slate-500"
                            }`}
                          >
                            {step.label}
                          </h4>
                          {step.timestamp && (
                            <span className="text-xs font-medium text-slate-400">
                              {new Date(step.timestamp).toLocaleTimeString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit",
                                day: "numeric",
                                month: "short",
                              })}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Replies Card (If Any) */}
              {ticket.replies && ticket.replies.length > 0 && (
                <div className="bg-white dark:bg-slate-800/90 rounded-[28px] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/60 shadow-xl shadow-black/5">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare size={18} className="text-primary" />
                    <h3 className="font-poppins font-bold text-lg text-slate-900 dark:text-white">
                      Support Team Messages
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {ticket.replies.map((reply, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-[18px] bg-primary/5 dark:bg-slate-900 border border-primary/15 text-sm text-slate-800 dark:text-slate-200"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5 text-xs text-primary font-bold">
                          <span>Bhukkadh Support Specialist</span>
                          <span className="text-slate-400 font-medium">
                            {new Date(reply.createdAt).toLocaleTimeString("en-IN", {
                              hour: "2-digit",
                              minute: "2-digit",
                              day: "numeric",
                              month: "short",
                            })}
                          </span>
                        </div>
                        <p className="leading-relaxed font-medium">{reply.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}

export default function TrackSupportPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 size={32} className="animate-spin text-primary" />
        </div>
      }
    >
      <TrackTicketContent />
    </Suspense>
  );
}

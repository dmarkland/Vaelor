"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Check, Clock, Video } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/dannymarkland/1-1-w-danny";
// Paste your Formspree endpoint here once you have it:
// 1. Go to formspree.io → sign up → New Form → name it "Vaelor Intake"
// 2. Copy the endpoint (looks like https://formspree.io/f/abcd1234)
// 3. Replace the string below
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykolopd";

// ─── Option sets ──────────────────────────────────────────────────────────────

const CHALLENGE_OPTIONS = [
  "Outdated website / design",
  "Recruiting challenges",
  "Credibility / perception",
  "Mobile usability issues",
  "Better capability presentation",
  "Rebranding / modernization",
  "Other",
];

const GOAL_OPTIONS = [
  "Recruiting",
  "Credibility",
  "Modernization",
  "Lead generation",
  "Enterprise positioning",
  "Capability presentation",
  "Brand perception",
];

const ORG_OPTIONS = [
  "Defense contractor",
  "Federal IT",
  "Cybersecurity",
  "Engineering",
  "Aerospace",
  "Consulting",
  "Other",
];

const SCOPE_OPTIONS = [
  "Homepage",
  "Full website redesign",
  "Careers / recruiting pages",
  "Capability presentation",
  "Brand modernization",
  "UX / UI modernization",
  "Mobile experience",
  "Interactive systems",
  "Other",
];

const SIZE_OPTIONS = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  companyName: string;
  website: string;
  contactName: string;
  role: string;
  companySize: string;
  challenges: string[];
  failsCommunicate: string;
  goals: string[];
  orgType: string;
  scopeAreas: string[];
  desiredPerception: string;
  admiredSites: string;
  additionalNotes: string;
}

const BLANK: FormData = {
  companyName: "", website: "", contactName: "", role: "", companySize: "",
  challenges: [], failsCommunicate: "",
  goals: [], orgType: "",
  scopeAreas: [],
  desiredPerception: "", admiredSites: "", additionalNotes: "",
};

// ─── Field components ─────────────────────────────────────────────────────────

function Label({ text, optional }: { text: string; optional?: boolean }) {
  return (
    <p className="text-[9px] font-mono text-[#444] tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
      {text}
      {optional && <span className="text-[#2a2a2a] normal-case tracking-normal font-sans">— optional</span>}
    </p>
  );
}

function TextInput({ label, value, onChange, placeholder, optional }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; optional?: boolean;
}) {
  return (
    <div>
      <Label text={label} optional={optional} />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#1c1c1c] text-sm font-light text-[#e8e8e8] py-2 focus:outline-none focus:border-[#1e5280] placeholder:text-[#282828] transition-colors duration-300"
      />
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder, optional }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; optional?: boolean;
}) {
  return (
    <div>
      <Label text={label} optional={optional} />
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full bg-transparent border border-[#1a1a1a] text-sm font-light text-[#e8e8e8] p-3 focus:outline-none focus:border-[#1e5280] placeholder:text-[#282828] transition-colors duration-300 resize-none"
      />
    </div>
  );
}

function Pill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-[10px] font-mono tracking-[0.08em] border transition-all duration-200 cursor-pointer
        ${active
          ? "border-[#1e5280] bg-[#060f18] text-white"
          : "border-[#181818] text-[#555] hover:border-[#2a2a2a] hover:text-[#888]"
        }`}
    >
      {active && <span className="text-[#2a72b5] mr-1 text-[8px]">✓ </span>}
      {label}
    </button>
  );
}

function MultiSelect({ options, selected, onToggle }: {
  options: string[]; selected: string[]; onToggle: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <Pill key={opt} label={opt} active={selected.includes(opt)} onClick={() => onToggle(opt)} />
      ))}
    </div>
  );
}

function SingleSelect({ options, selected, onSelect }: {
  options: string[]; selected: string; onSelect: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <Pill key={opt} label={opt} active={selected === opt} onClick={() => onSelect(opt)} />
      ))}
    </div>
  );
}

// ─── Steps config ─────────────────────────────────────────────────────────────

const STEPS = [
  { id: "01", label: "Company" },
  { id: "02", label: "Challenges" },
  { id: "03", label: "Priorities" },
  { id: "04", label: "Scope" },
  { id: "05", label: "Direction" },
];

// ─── Main component ───────────────────────────────────────────────────────────

export function IntakeModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [form, setForm] = useState<FormData>(BLANK);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData) => (value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const toggle = (field: "challenges" | "goals" | "scopeAreas") => (value: string) =>
    setForm(prev => {
      const arr = prev[field] as string[];
      return { ...prev, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] };
    });

  const next = () => { setDir(1); setStep(s => s + 1); };
  const back = () => { setDir(-1); setStep(s => s - 1); };

  const reset = () => {
    setTimeout(() => { setStep(0); setForm(BLANK); setSubmitted(false); setDir(1); }, 400);
  };

  const canProceed = [
    !!(form.companyName.trim() && form.contactName.trim() && form.role.trim()),
    form.challenges.length > 0,
    !!(form.goals.length > 0 && form.orgType),
    form.scopeAreas.length > 0,
    !!form.desiredPerception.trim(),
  ][step];

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Modernization Strategy Call — ${form.companyName}`,
          company_name: form.companyName,
          website: form.website || "Not provided",
          contact_name: form.contactName,
          role: form.role,
          company_size: form.companySize || "Not specified",
          challenges: form.challenges.join(", "),
          fails_to_communicate: form.failsCommunicate || "Not specified",
          goals: form.goals.join(", "),
          org_type: form.orgType,
          scope_areas: form.scopeAreas.join(", "),
          desired_perception: form.desiredPerception,
          admired_sites: form.admiredSites || "Not specified",
          additional_notes: form.additionalNotes || "None",
        }),
      });
    } catch {
      // fail silently — Calendly still opens regardless
    }
    setSubmitted(true);
    setSubmitting(false);
    window.open(CALENDLY_URL, "_blank");
  };

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -32 : 32 }),
  };

  return (
    <Dialog.Root open={open} onOpenChange={v => { if (!v) { setOpen(false); reset(); } else setOpen(true); }}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-[100] bg-black/88 backdrop-blur-sm"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 outline-none">
              <motion.div
                className="w-full max-w-lg"
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 14, scale: 0.97 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="relative bg-[#020304] border border-[#111] flex flex-col"
                  style={{
                    maxHeight: "92vh",
                    boxShadow: "0 0 0 1px rgba(30,82,128,0.10), 0 48px 120px rgba(0,0,0,0.95)",
                  }}
                >
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#1e5280]/25 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#1e5280]/25 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#1e5280]/25 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#1e5280]/25 pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-[#0c0c0c] shrink-0">
                    <div>
                      <span className="text-[9px] font-mono tracking-[0.24em] text-[#1e5280] uppercase">
                        Modernization Strategy Call
                      </span>
                      <div className="flex items-center gap-5 mt-2">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3 text-[#2a2a2a]" />
                          <span className="text-[10px] font-mono text-[#3a3a3a]">30 minutes</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Video className="h-3 w-3 text-[#2a2a2a]" />
                          <span className="text-[10px] font-mono text-[#3a3a3a]">Zoom</span>
                        </div>
                      </div>
                    </div>
                    <Dialog.Close className="text-[#2a2a2a] hover:text-white transition-colors duration-200 cursor-pointer">
                      <X className="h-4 w-4" />
                    </Dialog.Close>
                  </div>

                  {/* Step progress bar */}
                  {!submitted && (
                    <div className="px-8 py-4 border-b border-[#090909] shrink-0">
                      <div className="flex items-center">
                        {STEPS.map((s, i) => (
                          <React.Fragment key={s.id}>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className={`text-[9px] font-mono tracking-[0.16em] transition-colors duration-300
                                ${i === step ? "text-white" : i < step ? "text-[#1e5280]" : "text-[#1e1e1e]"}`}>
                                {s.id}
                              </span>
                              <span className={`text-[9px] font-mono tracking-[0.08em] transition-colors duration-300
                                ${i === step ? "text-[#777]" : i < step ? "text-[#333]" : "text-[#1a1a1a]"}`}>
                                {s.label}
                              </span>
                            </div>
                            {i < STEPS.length - 1 && (
                              <div className={`flex-1 h-px mx-3 transition-colors duration-500
                                ${i < step ? "bg-[#1e5280]/35" : "bg-[#101010]"}`} />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Body */}
                  <div className="overflow-y-auto flex-1 px-8 py-7" style={{ minHeight: 260 }}>
                    <AnimatePresence mode="wait" custom={dir}>
                      {submitted ? (
                        <motion.div
                          key="done"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-col items-center text-center py-10"
                        >
                          <div className="w-10 h-10 border border-[#1e5280]/40 flex items-center justify-center mb-6">
                            <Check className="h-5 w-5 text-[#1e5280]" />
                          </div>
                          <p className="text-[10px] font-mono tracking-[0.22em] text-[#1e5280] uppercase mb-4">
                            Intake Received
                          </p>
                          <p className="text-lg font-extralight text-[#e8e8e8] tracking-[-0.01em] mb-3">
                            Your intake is on its way.
                          </p>
                          <p className="text-sm font-light text-[#555] leading-relaxed max-w-xs">
                            Your Calendly booking page has opened in a new tab. Select a time that works for you.
                          </p>
                          <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 flex items-center gap-2 text-[10px] font-mono tracking-[0.16em] uppercase text-[#444] hover:text-white transition-colors duration-200"
                          >
                            Open Calendly <ArrowRight className="h-3 w-3" />
                          </a>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={step}
                          custom={dir}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-col gap-6"
                        >
                          {/* ── Step 0: Company Info ── */}
                          {step === 0 && (
                            <>
                              <div>
                                <p className="text-base font-light text-[#e8e8e8] tracking-[-0.01em] mb-1">Company Information</p>
                                <p className="text-xs font-light text-[#444] leading-relaxed">Let us know who we&apos;re speaking with before the call.</p>
                              </div>
                              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                                <div className="col-span-2">
                                  <TextInput label="Company Name" value={form.companyName} onChange={set("companyName")} placeholder="Acme Defense Solutions" />
                                </div>
                                <div className="col-span-2">
                                  <TextInput label="Website URL" value={form.website} onChange={set("website")} placeholder="https://acmedefense.com" optional />
                                </div>
                                <TextInput label="Contact Name" value={form.contactName} onChange={set("contactName")} placeholder="James Mitchell" />
                                <TextInput label="Role / Title" value={form.role} onChange={set("role")} placeholder="President & CEO" />
                              </div>
                              <div>
                                <Label text="Company Size" optional />
                                <SingleSelect options={SIZE_OPTIONS} selected={form.companySize} onSelect={set("companySize")} />
                              </div>
                            </>
                          )}

                          {/* ── Step 1: Challenges ── */}
                          {step === 1 && (
                            <>
                              <div>
                                <p className="text-base font-light text-[#e8e8e8] tracking-[-0.01em] mb-1">Current Challenges</p>
                                <p className="text-xs font-light text-[#444] leading-relaxed">Understanding where the gaps are helps us prepare a more focused conversation.</p>
                              </div>
                              <div>
                                <Label text="What prompted you to explore modernization?" />
                                <MultiSelect options={CHALLENGE_OPTIONS} selected={form.challenges} onToggle={toggle("challenges")} />
                              </div>
                              <TextArea
                                label="What does your current website fail to communicate?"
                                value={form.failsCommunicate}
                                onChange={set("failsCommunicate")}
                                placeholder="Our depth of cleared experience, contract history, technical capabilities..."
                                optional
                              />
                            </>
                          )}

                          {/* ── Step 2: Priorities ── */}
                          {step === 2 && (
                            <>
                              <div>
                                <p className="text-base font-light text-[#e8e8e8] tracking-[-0.01em] mb-1">Business Priorities</p>
                                <p className="text-xs font-light text-[#444] leading-relaxed">This shapes how we frame the engagement around what matters most to your firm.</p>
                              </div>
                              <div>
                                <Label text="Primary goals of this project" />
                                <MultiSelect options={GOAL_OPTIONS} selected={form.goals} onToggle={toggle("goals")} />
                              </div>
                              <div>
                                <Label text="Which best describes your organization?" />
                                <SingleSelect options={ORG_OPTIONS} selected={form.orgType} onSelect={set("orgType")} />
                              </div>
                            </>
                          )}

                          {/* ── Step 3: Scope ── */}
                          {step === 3 && (
                            <>
                              <div>
                                <p className="text-base font-light text-[#e8e8e8] tracking-[-0.01em] mb-1">Engagement Scope</p>
                                <p className="text-xs font-light text-[#444] leading-relaxed">Select all areas you&apos;re looking to modernize. We&apos;ll discuss specifics on the call.</p>
                              </div>
                              <div>
                                <Label text="Areas of focus" />
                                <MultiSelect options={SCOPE_OPTIONS} selected={form.scopeAreas} onToggle={toggle("scopeAreas")} />
                              </div>
                            </>
                          )}

                          {/* ── Step 4: Strategic Direction ── */}
                          {step === 4 && (
                            <>
                              <div>
                                <p className="text-base font-light text-[#e8e8e8] tracking-[-0.01em] mb-1">Strategic Direction</p>
                                <p className="text-xs font-light text-[#444] leading-relaxed">These answers directly shape our approach before we get on the call.</p>
                              </div>
                              <TextArea
                                label="How do you want your organization to be perceived online?"
                                value={form.desiredPerception}
                                onChange={set("desiredPerception")}
                                placeholder="Authoritative, technically credible, operationally mature, enterprise-grade..."
                              />
                              <TextInput
                                label="Are there any companies or websites you admire?"
                                value={form.admiredSites}
                                onChange={set("admiredSites")}
                                placeholder="Palantir, Anduril, SAIC, Booz Allen..."
                                optional
                              />
                              <TextArea
                                label="Anything else we should know before the call?"
                                value={form.additionalNotes}
                                onChange={set("additionalNotes")}
                                placeholder="Active pursuits, recompete timeline, specific constraints..."
                                optional
                              />
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  {!submitted && (
                    <div className="px-8 py-5 border-t border-[#090909] flex items-center justify-between shrink-0">
                      {/* Back */}
                      <button
                        type="button"
                        onClick={back}
                        disabled={step === 0}
                        className={`flex items-center gap-2 text-[10px] font-mono tracking-[0.14em] uppercase transition-colors duration-200
                          ${step === 0 ? "text-[#1c1c1c] pointer-events-none" : "text-[#444] hover:text-white cursor-pointer"}`}
                      >
                        <ArrowLeft className="h-3 w-3" />
                        Back
                      </button>

                      {/* Progress dots */}
                      <div className="flex items-center gap-1.5">
                        {STEPS.map((_, i) => (
                          <div
                            key={i}
                            className={`h-px transition-all duration-300
                              ${i === step ? "w-6 bg-[#1e5280]" : i < step ? "w-4 bg-[#1e5280]/35" : "w-4 bg-[#181818]"}`}
                          />
                        ))}
                      </div>

                      {/* Next / Submit */}
                      {step < STEPS.length - 1 ? (
                        <button
                          type="button"
                          onClick={next}
                          disabled={!canProceed}
                          className={`flex items-center gap-2 text-[10px] font-mono tracking-[0.14em] uppercase transition-colors duration-200
                            ${canProceed ? "text-white hover:text-[#2a72b5] cursor-pointer" : "text-[#252525] pointer-events-none"}`}
                        >
                          Continue
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={!canProceed || submitting}
                          className={`flex items-center gap-2 text-[10px] font-mono tracking-[0.14em] uppercase px-5 py-2.5 transition-all duration-300
                            ${canProceed && !submitting
                              ? "bg-[#1e5280] text-white cursor-pointer hover:bg-[#2a72b5]"
                              : "bg-[#0a0a0a] text-[#252525] pointer-events-none"}`}
                        >
                          {submitting ? "Submitting..." : "Book My Call"}
                          {!submitting && <ArrowRight className="h-3 w-3" />}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

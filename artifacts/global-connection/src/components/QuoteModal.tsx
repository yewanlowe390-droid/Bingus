import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Mail, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useQuote } from "@/context/QuoteContext";
import { useToast } from "@/hooks/use-toast";
import { tours } from "@/data/toursData";

// ── Update these two values with your real contact details ──────────────────
const WHATSAPP_NUMBER = "9477737920"; // International format, no + or spaces
const CONTACT_EMAIL   = "info@globalconnection.lk";
// ────────────────────────────────────────────────────────────────────────────

const schema = z.object({
  name:       z.string().min(2, "Please enter your full name"),
  email:      z.string().email("Please enter a valid email address"),
  phone:      z.string().min(7, "Please enter a valid phone number"),
  tour:       z.string().min(1, "Please select or enter a tour"),
  travelers:  z.string().min(1, "Please enter number of travelers"),
  departure:  z.string().optional(),
  message:    z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function QuoteModal() {
  const { isOpen, defaults, closeQuote } = useQuote();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name:      "",
      email:     "",
      phone:     "",
      tour:      defaults.tour ?? "",
      travelers: "2",
      departure: defaults.departure ?? "",
      message:   "",
    },
  });

  // Re-populate defaults whenever the modal is opened with new context
  useEffect(() => {
    if (isOpen) {
      form.reset({
        name:      "",
        email:     "",
        phone:     "",
        tour:      defaults.tour ?? "",
        travelers: "2",
        departure: defaults.departure ?? "",
        message:   "",
      });
    }
  }, [isOpen, defaults]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeQuote(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeQuote]);

  function buildMessage(v: FormValues) {
    return [
      `*Travel Enquiry — Global Connection Travels & Tours*`,
      ``,
      `*Name:* ${v.name}`,
      `*Email:* ${v.email}`,
      `*Phone:* ${v.phone}`,
      `*Tour / Package:* ${v.tour}`,
      `*No. of Travelers:* ${v.travelers}`,
      v.departure ? `*Preferred Departure:* ${v.departure}` : null,
      v.message   ? `*Message:* ${v.message}` : null,
    ].filter(Boolean).join("\n");
  }

  function onWhatsApp(v: FormValues) {
    const text = encodeURIComponent(buildMessage(v));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast({ title: "Opening WhatsApp…", description: "Your enquiry is ready to send." });
    closeQuote();
  }

  function onEmail(v: FormValues) {
    const subject = encodeURIComponent(`Travel Enquiry: ${v.tour}`);
    const body    = encodeURIComponent(buildMessage(v).replace(/\*/g, ""));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client…", description: "Your enquiry is pre-filled and ready to send." });
    closeQuote();
  }

  const tourNames = tours.map((t) => t.title);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            onClick={closeQuote}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-white z-[70] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0F4C81] px-6 py-5 flex items-start justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-white/70" />
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">Get a Free Quote</h2>
                  <p className="text-blue-200 text-sm mt-0.5">We'll respond within 24 hours</p>
                </div>
              </div>
              <button
                data-testid="btn-close-quote"
                onClick={closeQuote}
                className="text-white/70 hover:text-white transition-colors mt-0.5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pre-fill indicator */}
            {defaults.tour && (
              <div className="bg-accent/10 border-b border-accent/20 px-6 py-3 flex items-center gap-2 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <p className="text-sm text-slate-700 font-medium">
                  Enquiring about: <span className="text-[#0F4C81] font-bold">{defaults.tour}</span>
                  {defaults.price && <span className="text-slate-500"> · {defaults.price}</span>}
                </p>
              </div>
            )}

            {/* Form */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <Form {...form}>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel className="text-slate-700 font-semibold text-sm">Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              data-testid="input-quote-name"
                              placeholder="e.g. Priya Silva"
                              className="rounded-lg border-slate-200 focus:border-[#0F4C81]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold text-sm">Email *</FormLabel>
                          <FormControl>
                            <Input
                              data-testid="input-quote-email"
                              type="email"
                              placeholder="you@email.com"
                              className="rounded-lg border-slate-200 focus:border-[#0F4C81]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold text-sm">Phone *</FormLabel>
                          <FormControl>
                            <Input
                              data-testid="input-quote-phone"
                              type="tel"
                              placeholder="+94 77 000 0000"
                              className="rounded-lg border-slate-200 focus:border-[#0F4C81]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="tour"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold text-sm">Tour / Package *</FormLabel>
                        <FormControl>
                          <select
                            data-testid="select-quote-tour"
                            className="w-full h-10 rounded-lg border border-slate-200 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] bg-white"
                            {...field}
                          >
                            <option value="">Select a tour package…</option>
                            <option value="General Enquiry">General Enquiry</option>
                            {tourNames.map((name) => (
                              <option key={name} value={name}>{name}</option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="travelers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold text-sm">Travelers *</FormLabel>
                          <FormControl>
                            <select
                              data-testid="select-quote-travelers"
                              className="w-full h-10 rounded-lg border border-slate-200 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] bg-white"
                              {...field}
                            >
                              {["1","2","3","4","5","6–10","10–20","20+"].map((n) => (
                                <option key={n} value={n}>{n} {n === "1" ? "person" : "people"}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="departure"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold text-sm">Preferred Departure</FormLabel>
                          <FormControl>
                            <Input
                              data-testid="input-quote-departure"
                              placeholder="e.g. Sep 2026"
                              className="rounded-lg border-slate-200 focus:border-[#0F4C81]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold text-sm">Additional Message</FormLabel>
                        <FormControl>
                          <Textarea
                            data-testid="input-quote-message"
                            placeholder="Any special requirements, questions, or notes…"
                            className="rounded-lg border-slate-200 focus:border-[#0F4C81] resize-none"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>

            {/* Footer actions */}
            <div className="border-t border-slate-100 px-6 py-5 bg-slate-50 flex-shrink-0 space-y-3">
              <p className="text-xs text-slate-400 text-center mb-4">Choose how you'd like to send your enquiry</p>
              <Button
                data-testid="btn-quote-whatsapp"
                onClick={form.handleSubmit(onWhatsApp)}
                className="w-full rounded-full bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold gap-2 h-11"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </Button>
              <Button
                data-testid="btn-quote-email"
                onClick={form.handleSubmit(onEmail)}
                variant="outline"
                className="w-full rounded-full border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white font-semibold gap-2 h-11"
              >
                <Mail className="w-4 h-4" />
                Send via Email
              </Button>
              <p className="text-xs text-slate-400 text-center pt-1 flex items-center justify-center gap-1">
                <Send className="w-3 h-3" />
                We respond to all enquiries within 24 hours
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function WaitlistDialog() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");

        const res = await fetch("/api/waitlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        });

        const data = await res.json();

        if (res.ok) {
            setStatus("success");
            setMessage(data.message);
        } else {
            setStatus("error");
            setMessage(data.error);
        }
    }

    function handleOpenChange(next: boolean) {
        setOpen(next);
        if (!next) {
            setTimeout(() => {
                setName("");
                setEmail("");
                setStatus("idle");
                setMessage("");
            }, 200);
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger
                render={
                    <Button variant="ghost" size="sm">
                        Pro Access
                    </Button>
                }
            />
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Waitlist for Pro</DialogTitle>
                    <DialogDescription>
                        Be the first to know when we release Pro blocks.
                    </DialogDescription>
                </DialogHeader>

                {status === "success" ? (
                    <p className="text-sm text-center py-4">
                        🎉 {message} We&apos;ll be in touch.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <div className="grid gap-1.5">
                            <Label htmlFor="waitlist-name">Name</Label>
                            <Input
                                id="waitlist-name"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={status === "loading"}
                            />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="waitlist-email">Email</Label>
                            <Input
                                id="waitlist-email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status === "loading"}
                            />
                        </div>
                        {status === "error" && (
                            <p className="text-destructive text-sm">{message}</p>
                        )}
                        <Button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full"
                        >
                            {status === "loading" ? "Joining..." : "Join the waitlist"}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}

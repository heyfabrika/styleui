import { prisma } from "@/lib/prisma";
import { Prisma } from "@/prisma/generated/prisma/client/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email } = await req.json();

    if (!name?.trim() || !email?.trim()) {
        return NextResponse.json(
            { error: "Name and email are required." },
            { status: 400 }
        );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json(
            { error: "Please enter a valid email address." },
            { status: 400 }
        );
    }

    try {
        await prisma.waitlistEntry.create({
            data: { name: name.trim(), email: email.trim().toLowerCase() },
        });

        return NextResponse.json(
            { message: "You're on the list!" },
            { status: 201 }
        );
    } catch (err) {
        console.error(err);
        if (
            err instanceof Prisma.PrismaClientKnownRequestError &&
            err.code === "P2002"
        ) {
            return NextResponse.json(
                { error: "This email is already on the waitlist." },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}

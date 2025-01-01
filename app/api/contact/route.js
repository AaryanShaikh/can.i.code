import { mailOptions, transporter } from "@/app/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json();

    try {
        const response = await fetch('https://formspree.io/f/xovqylbn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message,
                subject: `${data.name} messaged you from website!`
            })
        });

        if (response.ok) {
            return NextResponse.json({ status: "ok" });
        } else {
            console.log("Error from Formspree:", await response.text());
        }
    } catch (error) {
        console.log("Error in server:", error);
    }

    return NextResponse.json({ status: "error" });
}
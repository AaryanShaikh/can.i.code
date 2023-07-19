import { mailOptions, transporter } from "@/app/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json()
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `${data.name} messaged you from website`,
            text: `${data.name}\r\n${data.email}\r\n${data.message}\r\n${data.subject}`,
            html: `<div><p>${data.message}</p><br /><br /><span><b>${data.name}</b></span><br /><span>${data.email}</span><br /><span>${data.subject}</span></div>`
        })
        return NextResponse.json({ status: "ok" })
    } catch (error) {
        console.log("error in server", error);
    }
    return NextResponse.json({ status: "error" })
}
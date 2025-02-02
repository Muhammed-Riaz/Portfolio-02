import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Input validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your Gmail app password
      },
    });

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Apna email yahan use karein
      to: process.env.EMAIL_USER,  // Your email where messages should go
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error );
    return NextResponse.json({ success: false, message: "Error sending email", error }, { status: 500 });
  }
}

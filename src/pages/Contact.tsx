"use client"
import React, { useRef } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"


function Contact() {
  // useRef to access form fields directly
 const formRef = useRef<HTMLFormElement>(null);

  const submitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    // Wrap emailjs.sendForm inside a Promise for toast.promise
    const promise = emailjs.sendForm(
      "service_4g9n5sv",        // your Service ID
      "template_e3gu4r7",       // your Template ID
      formRef.current,          // form reference
      "1RZ5AxbODm4NnMxtU"       // your Public Key
    )

    toast.promise(promise, {
      loading: "Sending your email...",
      success: "Email sent successfully!",
      error: "Failed to send email. Please try again.",
      className: "bg-card text-card-foreground border-border",
    })

    // Optional: reset form after submission
    promise.then(() => formRef.current?.reset())
  }

  return (
    <div className="px-3">
  
    <Card>
      <CardContent>
        <form ref={formRef} onSubmit={submitEmail}>
          <div className="mb-3">
            <h1 className="text-2xl md:text-3xl font-bold">Contact Me</h1>
            <p className="text-sm md:text-base">Please fill in the form below to get in touch.</p>
          </div>

          <div className="mb-3">
            <Label className="text-base mb-2">Name</Label>
            <Input type="text" name="name" required />
          </div>

          <div className="mb-3">
            <Label className="text-base mb-2">Email</Label>
            <Input type="email" name="senderEmail" required />
          </div>

          <div className="mb-3">
            <Label className="text-base mb-2">Message</Label>
            <Textarea className="h-30" name="message" required></Textarea>
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer mt-2"
          >
            Submit
          </Button>

        
        </form>
    
      </CardContent>
    </Card>
        
    </div>
  );
}

export default Contact;

"use client";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ContactInput } from "@/components/contact/contact-input";
import { ContactTextarea } from "@/components/contact/contact-textarea";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z
    .string()
    .min(20, {
      message: "Message must be at least 20 characters.",
    })
    .max(1000, {
      message: "Message must be at most 1000 characters.",
    }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(false);
    const { name, email, message } = values;
    axios
      .post("/api/send", {
        name,
        email,
        message,
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: error.response.data,
        });
      })
      .finally(() => {
        setIsLoading(false);
        toast({
          title: "Email has been sent ✅",
          description: "I'll get back to you as soon as possible.",
        });
        form.reset();
      });

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 w-[90%] lg:w-[30%]"
      >
        <h3 className="text-2xl font-bold  tracking-tight text-center mb-[-16px]">
          There are a few ways to contact me
        </h3>
        <p className="text-center text-xs text-muted-foreground pb-4 border-b">
          I am flexible and open to exploring both freelance opportunities and
          traditional job positions.
        </p>
        <FormField
          control={form.control}
          name="name"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <ContactInput placeholder="J. Doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your e-mail adress</FormLabel>
              <FormControl>
                <ContactInput
                  placeholder="mail@example.com"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <ContactTextarea placeholder="..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {!isLoading ? "Send" : <LoaderCircle className="animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}

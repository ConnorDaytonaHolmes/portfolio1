import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Resend } from "resend";
import EmailTemplate from "../components/EmailTemplate";

interface Body {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function email(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { name, email, phone, message } = await request.json() as Body;
      const { data, error } = await resend.emails.send({
        from: 'Connor Holmes Software <outreach@mail.connorholmes.software>',
        to: ['connorholmes.419@gmail.com'],
        subject: `New message from ${name}`,
        react: EmailTemplate({ name, email, phone, message }),
      });
      if (error) {
        context.error(error);
        return { status: 500 };
      }
      return { status: 200 };
    } catch (error) {
        context.error(error);
        return { status: 500 };
    }
};

app.http('sendemail', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: email
});

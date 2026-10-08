
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
    try {
        // بررسی API Key
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is missing");

            return Response.json(
                {
                    success: false,
                    message: "تنظیمات ایمیل سرور کامل نیست.",
                },
                { status: 500 }
            );
        }

        // دریافت اطلاعات فرم
        const body = await request.json();

        const {
            firstName,
            lastName,
            phone,
            email,
            subject,
            message,
        } = body;

        // بررسی اطلاعات ضروری
        if (
            !firstName?.trim() ||
            !phone?.trim() ||
            !message?.trim()
        ) {
            return Response.json(
                {
                    success: false,
                    message:
                        "لطفاً نام، شماره تماس و پیام را کامل کنید.",
                },
                { status: 400 }
            );
        }

        // پاک‌سازی اطلاعات برای استفاده در HTML
        const safeFirstName = escapeHtml(String(firstName).trim());
        const safeLastName = escapeHtml(
            String(lastName || "").trim()
        );
        const safePhone = escapeHtml(String(phone).trim());
        const safeEmail = escapeHtml(String(email || "").trim());
        const safeSubject = escapeHtml(
            String(
                subject?.trim() || "پیام جدید از وب‌سایت"
            )
        );
        const safeMessage = escapeHtml(
            String(message).trim()
        ).replace(/\n/g, "<br />");

        // ارسال ایمیل
        const { data, error } = await resend.emails.send({
            from: "Zarring Ghazal Website <onboarding@resend.dev>",

            to: ["jalalianalexander@gmail.com"],

            replyTo: email?.trim() || undefined,

            subject: `زرین غزال | ${safeSubject}`,

            html: `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8" />
<meta
    name="viewport"
content="width=device-width, initial-scale=1.0"
    />
    <title>درخواست جدید سایت زرین غزال</title>
</head>

<body
style="
margin: 0;
padding: 30px 15px;
background: #f4f6f8;
font-family: Arial, Tahoma, sans-serif;
color: #182449;
"
>

<div
    style="
max-width: 700px;
margin: 0 auto;
background: #ffffff;
border-radius: 20px;
overflow: hidden;
border: 1px solid #e5e7eb;
"
>

<!-- Header -->
<div
    style="
background: #032b3a;
padding: 30px;
text-align: center;
"
>
<div
    style="
color: #d7a847;
font-size: 13px;
font-weight: bold;
letter-spacing: 2px;
margin-bottom: 10px;
"
>
ZARRING GHAZAL
</div>

<h1
style="
margin: 0;
color: #ffffff;
font-size: 24px;
"
>
درخواست جدید از سایت
</h1>
</div>

<!-- Content -->
<div style="padding: 30px;">

<div
    style="
background: #faf7ef;
border-radius: 14px;
padding: 18px;
margin-bottom: 12px;
"
>
<div
    style="
color: #8a8f9d;
font-size: 12px;
margin-bottom: 7px;
"
>
نام و نام خانوادگی
</div>

<div
style="
font-size: 16px;
font-weight: bold;
"
>
${safeFirstName}
${safeLastName}
</div>
</div>

<div
style="
background: #faf7ef;
border-radius: 14px;
padding: 18px;
margin-bottom: 12px;
"
>
<div
    style="
color: #8a8f9d;
font-size: 12px;
margin-bottom: 7px;
"
>
شماره تماس
</div>

<div
dir="ltr"
style="
font-size: 16px;
font-weight: bold;
text-align: right;
"
>
${safePhone}
</div>
</div>

<div
style="
background: #faf7ef;
border-radius: 14px;
padding: 18px;
margin-bottom: 12px;
"
>
<div
    style="
color: #8a8f9d;
font-size: 12px;
margin-bottom: 7px;
"
>
ایمیل
</div>

<div
dir="ltr"
style="
font-size: 15px;
font-weight: bold;
text-align: right;
"
>
${
    safeEmail ||
    "ثبت نشده"
}
</div>
</div>

<div
style="
background: #faf7ef;
border-radius: 14px;
padding: 18px;
margin-bottom: 20px;
"
>
<div
    style="
color: #8a8f9d;
font-size: 12px;
margin-bottom: 7px;
"
>
موضوع
</div>

<div
style="
font-size: 16px;
font-weight: bold;
"
>
${safeSubject}
</div>
</div>

<!-- Message -->
<div>
<div
    style="
color: #8a8f9d;
font-size: 12px;
margin-bottom: 10px;
"
>
متن پیام
</div>

<div
style="
background: #032b3a;
color: #ffffff;
border-radius: 14px;
padding: 20px;
font-size: 15px;
line-height: 2;
"
>
${safeMessage}
</div>
</div>

</div>

<!-- Footer -->
<div
style="
border-top: 1px solid #eeeeee;
padding: 20px 30px;
text-align: center;
color: #999999;
font-size: 12px;
"
>
این ایمیل به صورت خودکار از
فرم تماس وب‌سایت ارسال شده است.
</div>

</div>

</body>
</html>
    `,
        });

        // خطای Resend
        if (error) {
            console.error("Resend error:", error);

            return Response.json(
                {
                    success: false,
                    message:
                        error.message ||
                        "ارسال ایمیل انجام نشد.",
                },
                { status: 500 }
            );
        }

        console.log(
            "Email successfully sent:",
            data?.id
        );

        return Response.json({
            success: true,
            message: "پیام شما با موفقیت ارسال شد.",
            id: data?.id,
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return Response.json(
            {
                success: false,
                message:
                    "خطایی هنگام ارسال پیام رخ داد.",
            },
            { status: 500 }
        );
    }
}

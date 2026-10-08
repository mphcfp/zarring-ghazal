import { Resend } from "resend";

const resend = new Resend(
    process.env.RESEND_API_KEY
);

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
        if (!process.env.RESEND_API_KEY) {
            console.error(
                "RESEND_API_KEY is missing"
            );

            return Response.json(
                {
                    success: false,
                    message:
                        "تنظیمات ایمیل سرور کامل نیست.",
                },
                { status: 500 }
            );
        }

        const body = await request.json();

        const {
            firstName,
            phone,
            email,
            productName,
            brandName,
            categoryName,
            weight,
            cartonCount,
            message,
        } = body;

        if (
            !firstName?.trim() ||
            !phone?.trim() ||
            !productName?.trim()
        ) {
            return Response.json(
                {
                    success: false,
                    message:
                        "لطفاً نام، شماره تماس و محصول را مشخص کنید.",
                },
                { status: 400 }
            );
        }

        const safeFirstName = escapeHtml(
            String(firstName).trim()
        );

        const safePhone = escapeHtml(
            String(phone).trim()
        );

        const safeEmail = escapeHtml(
            String(email || "").trim()
        );

        const safeProductName = escapeHtml(
            String(productName).trim()
        );

        const safeBrandName = escapeHtml(
            String(brandName || "").trim()
        );

        const safeCategoryName = escapeHtml(
            String(categoryName || "").trim()
        );

        const safeWeight = escapeHtml(
            String(weight || "").trim()
        );

        const safeCartonCount = escapeHtml(
            String(cartonCount || "").trim()
        );

        const safeMessage = escapeHtml(
            String(message || "").trim()
        ).replace(/\n/g, "<br />");

        const { data, error } =
            await resend.emails.send({
                from:
                    "Zarring Ghazal Website <onboarding@resend.dev>",

                to: [
                    "jalalianalexander@gmail.com",
                ],

                replyTo:
                    email?.trim() || undefined,

                subject:
                    `زرین غزال | درخواست اطلاعات ${safeProductName}`,

                html: `
                    <!DOCTYPE html>

                    <html
                        lang="fa"
                        dir="rtl"
                    >
                        <head>
                            <meta
                                charset="UTF-8"
                            />

                            <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1.0"
                            />

                            <title>
                                درخواست اطلاعات محصول
                            </title>
                        </head>

                        <body
                            style="
                                margin:0;
                                padding:0;
                                background:#eef3f5;
                                font-family:Tahoma,Arial,sans-serif;
                                color:#17232a;
                            "
                        >
                            <div
                                style="
                                    max-width:700px;
                                    margin:40px auto;
                                    background:#ffffff;
                                    border-radius:24px;
                                    overflow:hidden;
                                    box-shadow:0 15px 50px rgba(0,0,0,.08);
                                "
                            >

                                <!-- Header -->

                                <div
                                    style="
                                        padding:35px;
                                        background:#032b3a;
                                        color:#ffffff;
                                    "
                                >
                                    <div
                                        style="
                                            font-size:13px;
                                            letter-spacing:3px;
                                            color:#d7a847;
                                            font-weight:bold;
                                        "
                                    >
                                        ZARRING GHAZAL
                                    </div>

                                    <h1
                                        style="
                                            margin:15px 0 0;
                                            font-size:26px;
                                        "
                                    >
                                        درخواست اطلاعات محصول
                                    </h1>

                                    <p
                                        style="
                                            margin:10px 0 0;
                                            color:rgba(255,255,255,.65);
                                            font-size:14px;
                                        "
                                    >
                                        یک درخواست جدید از وب‌سایت دریافت شده است.
                                    </p>
                                </div>

                                <!-- Product -->

                                <div
                                    style="
                                        padding:30px;
                                    "
                                >
                                    <div
                                        style="
                                            margin-bottom:12px;
                                            font-size:12px;
                                            color:#a07b24;
                                            font-weight:bold;
                                        "
                                    >
                                        PRODUCT
                                    </div>

                                    <div
                                        style="
                                            padding:24px;
                                            border-radius:18px;
                                            background:#f8f6ef;
                                            border:1px solid #eee4c7;
                                        "
                                    >
                                        <h2
                                            style="
                                                margin:0 0 20px;
                                                font-size:24px;
                                                color:#032b3a;
                                            "
                                        >
                                            ${safeProductName}
                                        </h2>

                                        <table
                                            style="
                                                width:100%;
                                                border-collapse:collapse;
                                            "
                                        >
                                            <tr>
                                                <td
                                                    style="
                                                        padding:10px 0;
                                                        color:#888;
                                                        font-size:13px;
                                                    "
                                                >
                                                    برند
                                                </td>

                                                <td
                                                    style="
                                                        padding:10px 0;
                                                        font-weight:bold;
                                                    "
                                                >
                                                    ${safeBrandName || "-"}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td
                                                    style="
                                                        padding:10px 0;
                                                        color:#888;
                                                        font-size:13px;
                                                    "
                                                >
                                                    دسته‌بندی
                                                </td>

                                                <td
                                                    style="
                                                        padding:10px 0;
                                                        font-weight:bold;
                                                    "
                                                >
                                                    ${safeCategoryName || "-"}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td
                                                    style="
                                                        padding:10px 0;
                                                        color:#888;
                                                        font-size:13px;
                                                    "
                                                >
                                                    وزن
                                                </td>

                                                <td
                                                    style="
                                                        padding:10px 0;
                                                        font-weight:bold;
                                                    "
                                                >
                                                    ${safeWeight || "-"}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td
                                                    style="
                                                        padding:10px 0;
                                                        color:#888;
                                                        font-size:13px;
                                                    "
                                                >
                                                    تعداد در کارتن
                                                </td>

                                                <td
                                                    style="
                                                        padding:10px 0;
                                                        font-weight:bold;
                                                    "
                                                >
                                                    ${safeCartonCount || "-"}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                                <!-- Customer -->

                                <div
                                    style="
                                        padding:0 30px 30px;
                                    "
                                >
                                    <div
                                        style="
                                            margin-bottom:12px;
                                            font-size:12px;
                                            color:#a07b24;
                                            font-weight:bold;
                                        "
                                    >
                                        REQUESTER
                                    </div>

                                    <div
                                        style="
                                            padding:24px;
                                            border-radius:18px;
                                            background:#f7f9fa;
                                            border:1px solid #e7edef;
                                        "
                                    >
                                        <p
                                            style="
                                                margin:0 0 14px;
                                            "
                                        >
                                            <strong>
                                                نام:
                                            </strong>

                                            ${safeFirstName}
                                        </p>

                                        <p
                                            style="
                                                margin:0 0 14px;
                                            "
                                        >
                                            <strong>
                                                شماره تماس:
                                            </strong>

                                            ${safePhone}
                                        </p>

                                        <p
                                            style="
                                                margin:0;
                                            "
                                        >
                                            <strong>
                                                ایمیل:
                                            </strong>

                                            ${safeEmail || "-"}
                                        </p>
                                    </div>
                                </div>

                                <!-- Message -->

                                <div
                                    style="
                                        padding:0 30px 35px;
                                    "
                                >
                                    <div
                                        style="
                                            margin-bottom:12px;
                                            font-size:12px;
                                            color:#a07b24;
                                            font-weight:bold;
                                        "
                                    >
                                        MESSAGE
                                    </div>

                                    <div
                                        style="
                                            padding:24px;
                                            border-radius:18px;
                                            background:#032b3a;
                                            color:#ffffff;
                                            line-height:2;
                                            font-size:14px;
                                        "
                                    >
                                        ${
                    safeMessage ||
                    "پیامی ثبت نشده است."
                }
                                    </div>
                                </div>

                                <!-- Footer -->

                                <div
                                    style="
                                        padding:22px 30px;
                                        background:#f4f6f7;
                                        text-align:center;
                                        color:#89959a;
                                        font-size:12px;
                                    "
                                >
                                    این ایمیل به صورت خودکار
                                    توسط وب‌سایت زرین غزال ارسال شده است.
                                </div>

                            </div>
                        </body>
                    </html>
                `,
            });

        if (error) {
            console.error(
                "Product request email error:",
                error
            );

            return Response.json(
                {
                    success: false,
                    message:
                        error.message ||
                        "ارسال درخواست انجام نشد.",
                },
                { status: 500 }
            );
        }

        console.log(
            "Product request email sent:",
            data?.id
        );

        return Response.json({
            success: true,
            message:
                "درخواست اطلاعات محصول با موفقیت ارسال شد.",
            id: data?.id,
        });
    } catch (error) {
        console.error(
            "Product request API error:",
            error
        );

        return Response.json(
            {
                success: false,
                message:
                    "خطایی هنگام ارسال درخواست رخ داد.",
            },
            { status: 500 }
        );
    }
}
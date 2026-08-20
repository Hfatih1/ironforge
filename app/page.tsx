import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  const headerList = await headers();
  const acceptLanguage = headerList.get("accept-language") ?? "";
  const prefersSerbian =
    acceptLanguage.toLowerCase().includes("sr") ||
    acceptLanguage.toLowerCase().includes("bs") ||
    acceptLanguage.toLowerCase().includes("hr");

  redirect(prefersSerbian ? "/sr" : "/en");
}

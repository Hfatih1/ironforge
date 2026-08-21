/**
 * Live smoke test for iron-forge.net
 * Run: node scripts/smoke-test.mjs
 */

const BASE = "https://www.iron-forge.net";

async function check(url, expect = 200) {
  const res = await fetch(url, { redirect: "follow" });
  const ok = res.status === expect;
  return { url, status: res.status, ok, expect };
}

async function main() {
  const results = [];

  results.push(await check(`${BASE}/sr`));
  results.push(await check(`${BASE}/en`));
  results.push(await check(`${BASE}/sr/politika-privatnosti`));
  results.push(await check(`${BASE}/en/privacy-policy`));
  results.push(await check(`${BASE}/sr/usluge/kapije`));
  results.push(await check(`${BASE}/en/services/gates`));
  results.push(await check(`${BASE}/sr/usluge/nepostoji`, 404));

  const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
  const sitemapOk = sitemapRes.ok;
  results.push({
    url: `${BASE}/sitemap.xml`,
    status: sitemapRes.status,
    ok: sitemapOk,
    expect: 200,
  });

  if (sitemapOk) {
    const xml = await sitemapRes.text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    for (const loc of locs) {
      results.push(await check(loc));
    }
  }

  for (let i = 1; i <= 11; i++) {
    results.push(await check(`${BASE}/gallery/${i}.png`));
  }

  const enHtml = await (await fetch(`${BASE}/en`)).text();
  const contentChecks = [
    ["info@iron-forge.net", enHtml.includes("info@iron-forge.net")],
    ["wa.me/38162298588", enHtml.includes("wa.me/38162298588")],
    ["instagram", enHtml.includes("instagram.com/ironforgenp")],
    ["facebook", enHtml.includes("facebook.com/IronForgeNP")],
    ["json-ld", enHtml.includes("application/ld+json")],
    ["no GA before consent", !enHtml.includes("googletagmanager.com/gtag")],
  ];

  const failed = results.filter((r) => !r.ok);
  console.log("\n=== URL checks ===");
  for (const r of results) {
    console.log(`${r.ok ? "OK" : "FAIL"} ${r.status} ${r.url}`);
  }

  console.log("\n=== Content checks (EN homepage) ===");
  for (const [name, ok] of contentChecks) {
    console.log(`${ok ? "OK" : "FAIL"} ${name}`);
  }

  const contentFailed = contentChecks.filter(([, ok]) => !ok);
  if (failed.length === 0 && contentFailed.length === 0) {
    console.log("\nAll automated checks passed.");
    process.exit(0);
  }

  console.log(`\n${failed.length} URL(s) and ${contentFailed.length} content check(s) failed.`);
  process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

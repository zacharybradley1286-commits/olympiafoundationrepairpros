# Partner details to fill in

This site is written as a first-party local business site. Anything that has to come from the business that runs it was left out rather than made up. Each gap is marked in the HTML with an HTML comment that starts with `PARTNER:`. Comments do not render on the page, but they are visible in view-source, so replace or delete them before launch.

This file is not linked from the site. `_redirects` sends `/PARTNER-DETAILS.md` to `/` and `_headers` marks it `noindex`.

## Placeholders in the HTML

| # | What is needed | Pages |
|---|---|---|
| 1 | WA contractor registration # (RCW 18.27.100 requires it in advertising). Render as: "WA contractor registration: XXXXXXXXXXXX" | every page (footer) |
| 2 | business hours | every page (footer) |
| 3 | owner name, year founded, team, and a real photo of the owner or crew | /about |
| 4 | confirm each process claim above | /about |
| 5 | WA contractor registration # and UBI; show them here once provided | /about |
| 6 | warranty terms for this service; confirm the process claims above | /concrete-slab-leveling, /crawl-space-encapsulation, /foundation-drainage-and-waterproofing, /helical-and-push-piering |
| 7 | financing offer, if any | /faq |
| 8 | warranty terms per service (length, transferable or not, what voids it) | /, /faq |
| 9 | real project photo can go here (must be your own work) | / |
| 10 | name the form processor / email provider and how long you keep inquiry records | /privacy |
| 11 | confirm outer service limits (Yelm, Rainier, Tenino, Shelton?) and list them here | /service-area |
| 12 | confirm whether you offer crack injection, carbon fiber wall straps, wall braces and seismic retrofits; add them here if so | /services |

## Other facts to confirm or supply

These are not marked in the HTML but should be checked before launch.

1. **Legal business name, UBI and WA contractor registration number.** RCW 18.27.100 requires the registration number in advertising. Add it to the footer comment slot (shows on every page) and the About page.
2. **Address or service-area-only.** The site and schema have no street address on purpose. If the business wants one shown, add a real one to the footer, the Contact page and `business_node()` in the schema.
3. **Hours.** Slots in the footer and on Contact. Add `openingHoursSpecification` to the business schema at the same time.
4. **Year founded, owner and team names, real photos.** About page slot. No stock photos presented as the crew.
5. **Real project photos.** Home page slot. The old stock images (hero.jpg, img-1.jpg, img-2.jpg) were removed because they would read as our own jobs.
6. **Warranty terms per service.** Slots on FAQ, Home and each service page. The site now says only "terms depend on the repair; written into your estimate". Do not add "lifetime" or "transferable" unless the written warranty says so.
7. **Insurance and bond.** Not stated anywhere. Add if the business wants it shown (L&I lists it publicly anyway).
8. **Reviews.** None shown and no `aggregateRating` in the schema. Add only real reviews with a real source.
9. **Financing.** FAQ slot. Say nothing about financing unless there is a real offer.
10. **Real-estate turnaround.** The buying/selling guide promises only to say right away whether a deadline can be met.
11. **Service area limits.** Service Area page slot. Currently Olympia, Lacey, Tumwater and nearby Thurston County. Confirm Yelm, Rainier, Tenino, Shelton or others.
12. **Process claims.** Confirm the business actually does these, or edit the copy: looks at the house before quoting; checks drainage (gutters, downspouts, grade) before recommending piers; measures floor levels where settlement is suspected; puts scope, price, exclusions and permit or engineering needs in a written estimate; confirms permit needs before scheduling. These appear on Home, About, service pages and FAQ.
13. **Services actually offered.** The four service pages cover piers, encapsulation, slab leveling and drainage. The guides also explain crack injection, carbon fiber wall straps, wall braces and seismic bolting as general information. Services page slot: confirm which of these are offered.
14. **Inbox.** `info@olympiafoundationrepairpros.com` is shown in the footer, Contact and legal pages. Confirm it exists and is monitored.
15. **Privacy policy details.** Privacy page slot: name the form processor and email provider, and the retention period for inquiry records. The form posts to `/api/contact` (a Worker outside this repo); field names were not changed.
16. **Search engine accounts.** Verify the site in Google Search Console and Bing Webmaster Tools under the business's own accounts.

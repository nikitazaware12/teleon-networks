#!/usr/bin/env python3
"""Generate pages/industries.html and pages/industries/*.html.
Edit INDUSTRIES below (text / image names), then run:  python3 tools/build-industries.py
Images live in assets/images/industries/<img>  (replace the placeholders with real photos, same file name)."""
from pathlib import Path
from html import escape as e
ROOT = Path(__file__).resolve().parent.parent

# slug, name, image file, hero line, overview, requirements(5), support paragraph, dropdown blurb
INDUSTRIES = [
 ("corporate-it-companies","Corporate & IT Companies","corporate-it-companies.png",
  "Powering your business with reliable IT infrastructure, networking and technical support solutions.",
  "Corporate offices and IT companies rely heavily on technology for daily operations, communication and data security. A stable IT infrastructure, secure network and quick technical support are essential to ensure business continuity and productivity.",
  ["Reliable IT infrastructure and system availability","Secure and high-speed network connectivity","Regular hardware and software maintenance","Scalable infrastructure for business growth","Quick technical support and issue resolution"],
  "TeleOn Networks Pvt. Ltd. provides customized IT support, networking solutions and infrastructure management to help corporate offices and IT companies operate efficiently. Our team ensures minimal downtime, better security and smooth IT operations.",
  "Office campuses, software parks and corporate IT setups"),
 ("manufacturing-industrial","Manufacturing & Industrial","manufacturing-industrial.jpg",
  "Dependable networks, systems and on-site support for factories, plants and industrial units.",
  "Manufacturing units depend on connected systems for production planning, inventory, quality records and office operations. Dusty, high-load shop-floor conditions and tight production schedules make dependable infrastructure and fast field support essential.",
  ["Robust cabling and network coverage across plant and office areas","Minimal downtime for ERP, billing and production systems","Surveillance for plant, gates and storage areas","Preventive maintenance of computers, printers and network devices","Quick on-site response when something fails"],
  "TeleOn Networks plans structured cabling, LAN and Wi-Fi, CCTV and system support around your plant layout and working shifts. Regular preventive visits and quick breakdown response keep your IT from slowing production.",
  "Factories, plants and industrial units"),
 ("healthcare-hospitals","Healthcare & Hospitals","healthcare-hospitals.png",
  "Secure, always-available IT and network support for hospitals, clinics and diagnostic centres.",
  "Hospitals, clinics and diagnostic centres depend on IT for patient records, billing, reporting and communication between departments. Systems must stay available, patient data must stay protected, and problems must be fixed quickly.",
  ["Continuous availability of patient and billing systems","Secure handling and backup of sensitive records","Reliable LAN and Wi-Fi across wards, labs and OPD","CCTV and security coverage for premises","Fast support for front-desk and clinical workstations"],
  "TeleOn Networks supports healthcare setups with structured networks, server and backup arrangements, workstation support and CCTV. Planned maintenance and quick response help keep departments connected.",
  "Hospitals, clinics and diagnostic centres"),
 ("education-institutions","Education & Institutions","education-institutions.jpg",
  "Campus-wide networking, labs and security support for schools, colleges and universities.",
  "Schools, colleges and universities run computer labs, administrative systems, campus Wi-Fi and surveillance across many rooms and buildings. Budgets are tight, so the infrastructure must be dependable and easy to maintain.",
  ["Campus-wide LAN and Wi-Fi for classrooms, labs and offices","Well-maintained computer labs and devices","Safe internet access with proper network management","CCTV coverage for campus safety","Support during admissions, exams and peak periods"],
  "TeleOn Networks designs and maintains campus networks, sets up and supports labs, and installs CCTV. Annual maintenance plans keep systems running through the academic year.",
  "Schools, colleges and universities"),
 ("banking-financial-services","Banking & Financial Services","banking-financial-services.jpg",
  "Secure, high-availability infrastructure for banks, NBFCs and financial institutions.",
  "Banks, NBFCs and financial offices handle sensitive data and run time-critical operations across branches. Network uptime, security and fast branch-level support are essential to serve customers without interruption.",
  ["High network availability across branches and offices","Strong network security and access control","Reliable backup and data protection","CCTV and surveillance for branches and ATMs areas","Quick on-site support at branch locations"],
  "TeleOn Networks supports branch rollouts and day-to-day operations with structured networking, security devices, CCTV and field technicians, so branches stay connected and secure.",
  "Banks, NBFCs and financial institutions"),
 ("retail-commercial-businesses","Retail & Commercial Businesses","retail-commercial-businesses.jpg",
  "Billing, networking and CCTV support that keeps stores, showrooms and outlets running.",
  "Retail chains, showrooms and commercial outlets depend on billing systems, internet connectivity and surveillance every single day. A system failure at the counter directly affects sales and customer experience.",
  ["Dependable billing and POS systems","Stable internet and Wi-Fi at every outlet","CCTV for stores, stockrooms and entrances","Multi-outlet support under one point of contact","Quick fixes during business hours"],
  "TeleOn Networks sets up and maintains outlet networks, billing computers and CCTV, and provides on-site support across multiple locations, so your counters keep moving.",
  "Retail chains, showrooms and commercial outlets"),
 ("hotels-hospitality","Hotels & Hospitality","hotels-hospitality.jpg",
  "Guest Wi-Fi, networking and security solutions for hotels, resorts and hospitality services.",
  "Hotels and resorts need seamless guest Wi-Fi, reliable front-desk and back-office systems and dependable surveillance. Guests notice connectivity problems immediately, so stable infrastructure is part of the service.",
  ["Reliable guest Wi-Fi across rooms and common areas","Dependable front-desk, booking and billing systems","CCTV and security coverage for premises","Neat, scalable cabling and rack arrangements","Quick support around the clock where needed"],
  "TeleOn Networks designs property-wide Wi-Fi and LAN, supports reception and back-office systems, and installs CCTV, with responsive support that protects the guest experience.",
  "Hotels, resorts and hospitality services"),
 ("real-estate-construction","Real Estate & Construction","real-estate-construction.jpg",
  "Network, CCTV and IT setup support for builders, developers and construction sites.",
  "Builders, developers and construction companies set up site offices, sales galleries and project locations that need quick and reliable IT, connectivity and security, often on tight timelines.",
  ["Fast setup of site offices and sales galleries","Reliable connectivity at project locations","CCTV for site and material security","Structured cabling for new buildings and offices","Flexible support as projects move or expand"],
  "TeleOn Networks handles survey, cabling, networking and CCTV installation for new sites and buildings, and supports them through handover and beyond.",
  "Builders, developers and construction sites"),
 ("logistics-warehousing","Logistics & Warehousing","logistics-warehousing.jpg",
  "Reliable connectivity and surveillance for warehouses, distribution centres and logistics hubs.",
  "Warehouses and logistics hubs depend on connected systems for inventory, dispatch and tracking across large floor areas and multiple locations. Coverage, uptime and security are the key concerns.",
  ["Wi-Fi and network coverage across large warehouse floors","Stable systems for inventory and dispatch software","CCTV for docks, yards and storage zones","Support across multiple depots and hubs","Quick response to keep operations moving"],
  "TeleOn Networks plans wide-area coverage, structured cabling and CCTV for warehouses, and provides multi-site technician support so every location stays online.",
  "Warehouses, distribution centres and logistics hubs"),
 ("telecom-internet-providers","Telecom & Internet Service Providers","telecom-internet-providers.jpg",
  "Field-ready fiber, network and technician support for telecom operators and ISPs.",
  "Telecom operators and internet service providers need dependable field execution for fiber routing, terminations, deployments and ongoing maintenance, often across many locations at once.",
  ["Fiber routing, termination and testing support","FTTH and last-mile deployment assistance","Skilled technicians for installation and breakdown calls","Preventive maintenance of network sites","Multi-site rollout support"],
  "TeleOn Networks provides trained field teams and project support for fiber and network work, helping providers deploy faster and restore service quickly.",
  "Telecom operators and ISPs"),
 ("government-public-sector","Government & Public Sector","government-public-sector.jpg",
  "Structured, documented and dependable IT support for government offices and public sector units.",
  "Government offices and public sector units need dependable systems, clear documentation and consistent support across departments and locations, often within defined procurement processes.",
  ["Reliable networks and systems across departments","Clear requirement analysis and BOQ-based supply","Planned installation, testing and handover","Annual maintenance for hardware and networks","CCTV and security for offices and premises"],
  "TeleOn Networks follows a structured approach of survey, supply, installation, testing and handover, with maintenance support so public offices keep running smoothly.",
  "Government offices and public sector units"),
 ("sme-small-medium-enterprises","Small & Medium Enterprises (SMEs)","sme-small-medium-enterprises.jpg",
  "Practical, affordable IT support that grows with your small or medium business.",
  "Growing businesses need the same dependable IT as larger companies, without a large in-house team. Simple setups, quick support and room to grow matter most.",
  ["Affordable, right-sized IT setup","One partner for hardware, network and support","Quick help when a system or network fails","Basic security and backup practices","Easy scaling as the team grows"],
  "TeleOn Networks acts as your outsourced IT team, handling procurement, setup, networking, CCTV and ongoing support, so you can focus on running the business.",
  "Growing businesses and SME offices"),
]

SERVICES_Q = [  # label, page, icon-key
 ("IT AMC & Support","it-support-amc","gear"),("Networking & LAN","lan-wifi-installation","net"),
 ("Server & Rack Configuration","it-infrastructure-management","server"),("Desktop & Laptop Support","it-support-amc","desktop"),
 ("CCTV & Security Solutions","cctv-solutions","cctv"),("IT Hardware Supply","it-procurement","box"),
 ("On-site Technical Support","manpower-field-technician-support","user")]
WHY = ["Experienced & Skilled Team","Quick Response & Resolution","Customized Service Plans","Quality Equipment & Solutions","Long-Term Support Partnership"]

def I(p,extra=""):  # stroke icon
    return f'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" {extra}>{p}</svg>'
ICON = {
 "gear":'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 "net":'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
 "server":'<rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"/>',
 "desktop":'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
 "laptop":'<rect x="4" y="4" width="16" height="12" rx="2"/><path d="M2 20h20"/>',
 "rack":'<rect x="5" y="2" width="14" height="20" rx="1.5"/><path d="M5 7h14M5 12h14M5 17h14M8 4.5h.01M8 9.5h.01M8 14.5h.01M8 19.5h.01"/>',
 "cctv":'<path d="M3 7l12-3 2 6-12 3z"/><path d="M17 10l4 1.5v4L17 14M9 14l-1 7M5 21h6"/>',
 "box":'<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
 "user":'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 "tools":'<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.6-.6-.6-2.6z"/>',
 "chev":'<path d="M9 6l6 6-6 6"/>',
 "check":'<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M7.5 12.5l3 3 6-6.5" stroke="#fff" stroke-width="2"/>',
 "tick":'<path d="M5 12.5l4.5 4.5L19 7"/>',
 "arrow":'<path d="M5 12h14M13 6l6 6-6 6"/>',
 "info":'<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/>',
 "building":'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/>',
 "list":'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8l1.5 1.5L14 6M9 14h6M9 17h4"/>',
 "support":'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
 "cfg":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
}
def ic(k,extra=""): return I(ICON[k],extra)

PICK = [("Desktop","Desktop computers, installation & support","desktop"),("Laptop","Laptop repair, maintenance & support","laptop"),
 ("Server","Server installation, configuration & support","server"),("Rack Mount","Rack setup, cable management & configuration","rack"),
 ("Networking","Switches, routers, firewall, LAN & Wi-Fi","net"),("CCTV","Camera installation, monitoring & maintenance","cctv"),
 ("Others","Additional requirements (please specify)","tools")]

HEAD = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title} | Teleon Networks Pvt Ltd</title>
  <meta name="description" content="{desc}">
  <link rel="icon" href="{b}assets/images/teleon-logo.jpeg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Manrope:wght@500..800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="{b}css/style.css">
  <link rel="stylesheet" href="{b}css/industries.css">
</head>
<body data-page="industries-all" data-base="{b}">
  <a class="skip-link" href="#main">Skip to main content</a>
  <div id="site-header"></div>
  <main id="main">
'''
TAIL = '''  </main>
  <div id="site-footer"></div>
  <button type="button" class="to-top" id="toTop" aria-label="Back to top">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"></path></svg>
  </button>
  <script src="{b}js/config.js"></script>
  <script src="{b}js/components.js"></script>
  <script src="{b}js/navigation.js"></script>
  <script src="{b}js/main.js"></script>
{extra}</body>
</html>
'''
IMGERR = "this.style.display='none'"

def listing():
    b="../"
    cards="".join(f'''      <a class="ind-card" href="industries/{s}.html">
        <div class="ind-card__img"><img src="{b}assets/images/industries/{img}" alt="{e(n)}" loading="lazy" onerror="{IMGERR}"></div>
        <div class="ind-card__body"><span class="ind-card__name">{e(n)}</span><span class="ind-card__go">{ic("chev","width=\"14\" height=\"14\"")}</span></div>
      </a>
''' for s,n,img,*_ in INDUSTRIES)
    out=HEAD.format(title="Industries We Serve",desc="IT infrastructure, networking and security solutions from Teleon Networks across corporate, manufacturing, healthcare, education, banking, retail, hospitality, real estate, logistics, telecom, government and SME sectors.",b=b)
    out+=f'''    <section class="ind-hero ind-hero--center">
      <div class="ind-hero__bg" style="background-image:url('{b}assets/images/industries/corporate-it-companies.png')"></div>
      <div class="ind-hero__in">
        <h1>Industries We Serve</h1>
        <p class="lede">We provide reliable IT infrastructure, networking and security solutions across a wide range of industries.</p>
      </div>
    </section>
    <section class="ind-grid" aria-label="Industries">
{cards}    </section>
'''
    out+=TAIL.format(b=b,extra="")
    (ROOT/"pages"/"industries.html").write_text(out,encoding="utf-8")

PICK_JS = '''  <script>
  (function(){
    var industry = document.body.getAttribute('data-industry') || '';
    var cfg = window.TELEON_CONFIG || {};
    var other = document.getElementById('otherWrap'), otherBox = document.getElementById('otherBox');
    var err = document.getElementById('pickErr');
    var boxes = document.querySelectorAll('.ind-opt input[type=checkbox]');
    Array.prototype.forEach.call(boxes, function(c){
      c.addEventListener('change', function(){
        if (c.value === 'Others') other.classList.toggle('is-on', c.checked);
        if (err) err.classList.remove('is-on');
      });
    });
    var btn = document.getElementById('getQuote');
    if (btn) btn.addEventListener('click', function(){
      var picked = [];
      Array.prototype.forEach.call(boxes, function(c){
        if (!c.checked) return;
        if (c.value === 'Others' && otherBox.value.trim()) picked.push('Others: ' + otherBox.value.trim());
        else picked.push(c.value);
      });
      if (!picked.length) { err.classList.add('is-on'); return; }
      var q = 'industry=' + encodeURIComponent(industry) + '&services=' + encodeURIComponent(picked.join(', '));
      window.location.href = '../contact.html?' + q + '#enquiry';
    });
  })();
  </script>
'''

def detail(i):
    s,n,img,hero,ov,reqs,sup,_=INDUSTRIES[i]; b="../../"
    quick="".join(f'''            <li><a href="{b}pages/services/{p}.html">{ic(k)}<span>{e(l)}</span>{ic("chev","class=\"chev\"")}</a></li>
''' for l,p,k in SERVICES_Q)
    checks="".join(f'          <li>{ic("check")}<span>{e(r)}</span></li>\n' for r in reqs)
    why="".join(f'            <li>{ic("tick")}<span>{e(w)}</span></li>\n' for w in WHY)
    pick="".join(f'''          <label class="ind-opt"><input type="checkbox" value="{l}" aria-label="{l}"><span class="ind-opt__ic">{ic(k)}</span><b>{l}</b><small>{e(d)}</small></label>
''' for l,d,k in PICK)
    out=HEAD.format(title=n+" – IT Solutions",desc=e(ov[:155]),b=b).replace('<body data-page="industries-all"',f'<body data-industry="{e(n)}" data-page="industries-all"')
    out+=f'''    <section class="ind-hero">
      <div class="ind-hero__bg" style="background-image:url('{b}assets/images/industries/{img}')">
        <video class="ind-vid" autoplay muted loop playsinline preload="auto" aria-hidden="true" tabindex="-1"><source src="{b}assets/videos/industries/{s}-hero.mp4" type="video/mp4"></video>
      </div>
      <div class="ind-hero__in">
        <ol class="ind-crumb" aria-label="Breadcrumb"><li><a href="{b}index.html">Home</a></li><li><a href="{b}pages/industries.html">Industries We Serve</a></li><li aria-current="page">{e(n)}</li></ol>
        <h1>{e(n)}</h1>
        <p class="lede">{e(hero)}</p>
      </div>
    </section>

    <div class="ind-main">
      <div class="ind-left">
        <section class="ind-sec">
          <h2 class="ind-h"><span class="ind-h__ic">{ic("building")}</span>Industry Overview</h2>
          <p>{e(ov)}</p>
        </section>
        <section class="ind-sec">
          <h2 class="ind-h"><span class="ind-h__ic">{ic("list")}</span>Key Industry Requirements</h2>
          <ul class="ind-checks">
{checks}          </ul>
        </section>
        <section class="ind-sec">
          <h2 class="ind-h"><span class="ind-h__ic">{ic("support")}</span>How TeleOn Supports This Industry</h2>
          <p>{e(sup)}</p>
          <a class="ind-btn" href="{b}pages/contact.html?industry={e(n).replace(" ","%20").replace("&amp;","%26")}#enquiry">Discuss Your Requirements {ic("arrow","width=\"16\" height=\"16\"")}</a>
        </section>
        <div class="ind-media">
          <video class="ind-vid" autoplay muted loop playsinline preload="metadata" aria-hidden="true" tabindex="-1"><source src="{b}assets/videos/industries/{s}-side.mp4" type="video/mp4"></video>
        </div>
      </div>

      <aside class="ind-side" aria-label="Related information">
        <div class="ind-box">
          <h3>Related Services (Quick Access)</h3>
          <ul class="ind-links">
{quick}          </ul>
          <a class="ind-viewall" href="{b}pages/services.html">View All Services &rarr;</a>
        </div>
        <div class="ind-box">
          <h3>Why Choose TeleOn?</h3>
          <ul class="ind-why">
{why}          </ul>
        </div>
        <div class="ind-cta">
          <h3>Need a Custom Solution?</h3>
          <p>Tell us your requirements and our team will get back to you with the best solution.</p>
          <a class="ind-btn ind-btn--light" href="{b}pages/contact.html#enquiry">Request a Quote {ic("arrow","width=\"14\" height=\"14\"")}</a>
        </div>
      </aside>
    </div>

    <section class="ind-pick" id="select-services" aria-labelledby="pickTitle">
      <div class="ind-pick__box">
        <h2 id="pickTitle">{ic("cfg")}Select the Services You Need</h2>
        <p class="ind-pick__sub">Choose the specific services you are looking for. You can select multiple options and get a customized solution for your business.</p>
        <div class="ind-pick__grid">
{pick}        </div>
        <div class="ind-other" id="otherWrap"><input type="text" id="otherBox" placeholder="Please specify your requirement" aria-label="Specify other requirement"></div>
        <p class="ind-err" id="pickErr" role="alert">Please select at least one service to continue.</p>
        <div class="ind-pick__foot">
          <button type="button" class="ind-btn" id="getQuote">Get a Quote {ic("arrow","width=\"16\" height=\"16\"")}</button>
          <p class="ind-pick__note">{ic("info")}You can select multiple services or describe your specific requirements in the enquiry form.</p>
        </div>
      </div>
    </section>
'''
    out+=TAIL.format(b=b,extra=PICK_JS)
    (ROOT/"pages"/"industries"/f"{s}.html").write_text(out,encoding="utf-8")

def header_items():
    """Print the dropdown markup so header.html stays in sync."""
    return INDUSTRIES

if __name__=="__main__":
    (ROOT/"pages"/"industries").mkdir(exist_ok=True)
    listing()
    for i in range(len(INDUSTRIES)): detail(i)
    print("generated listing +",len(INDUSTRIES),"industry pages")

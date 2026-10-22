/* ==========================================================================
   Teleon Networks — components.js
   Loads the shared header and footer into every page and resolves relative
   paths so the same markup works from the site root, /pages/ and
   /pages/services/.

   Responsibilities: fetching and injecting components only.
   Navigation behaviour lives in navigation.js; page behaviour in main.js.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Base path
     Works out how many directory levels the current page sits below the
     project root, so {{base}} can be replaced with '', '../' or '../../'.
     ------------------------------------------------------------------ */
  function getBasePath() {
    var path = window.location.pathname;

    // Allow a page to state its own depth: <body data-base="../">
    var declared = document.body && document.body.getAttribute('data-base');
    if (declared !== null && declared !== undefined) return declared;

    if (/\/pages\/(services|industries)\/[^/]*$/.test(path)) return '../../';
    if (/\/pages\/[^/]*$/.test(path)) return '../';
    return '';
  }

  var BASE = getBasePath();

  /* ------------------------------------------------------------------
     Offline fallback markup
     Browsers block fetch() on the file:// protocol, so the site would show
     no header or footer when the HTML files are opened by double-clicking.
     These strings are generated from components/header.html and
     components/footer.html by tools/build-components.py — edit those files,
     then re-run the script. Do not hand-edit the strings below.
     ------------------------------------------------------------------ */
  var FALLBACK = {
    header: `<!--
  Teleon Networks — shared site header.
  {{base}} is replaced at runtime by js/components.js with the correct
  relative path prefix for the page that is loading this file.
-->
<header class="site-header" id="siteHeader">
  <div class="header-bar">

    <a class="brand" href="{{base}}index.html" aria-label="Teleon Networks Pvt Ltd — home">
      <img src="{{base}}assets/images/teleon-logo.jpeg"
           alt="Teleon Networks Pvt Ltd logo"
           width="190" height="44">
    </a>

    <!-- Desktop navigation -->
    <nav class="nav-desktop" aria-label="Main navigation">
      <a class="nav-link" href="{{base}}index.html" data-nav="home">Home</a>
      <a class="nav-link" href="{{base}}pages/about.html" data-nav="about">About Us</a>

      <!-- SERVICES DROPDOWN (existing, unchanged) -->
      <div class="relative inline-flex items-center group" data-dropdown>
        <a
          href="{{base}}pages/services.html"
          data-nav="services-all"
          class="inline-flex items-center rounded-l-md py-2 pl-3 pr-1.5 text-sm font-semibold text-[#162033] transition-colors group-hover:bg-[#F5F9FD] group-hover:text-[#075FC8]">
          Services
        </a>
        <button
          type="button"
          id="servicesTrigger"
          data-dropdown-trigger
          aria-expanded="false"
          aria-controls="servicesDropdown"
          aria-label="Open services menu"
          class="inline-flex items-center justify-center rounded-r-md py-2 pl-1 pr-2.5 text-[#162033] transition-colors group-hover:bg-[#F5F9FD] group-hover:text-[#075FC8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FEA] focus-visible:ring-offset-2">
          <svg class="h-3 w-3 transition-transform duration-200 group-[.is-open]:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div id="servicesDropdown" role="menu" aria-labelledby="servicesTrigger"
             class="invisible absolute left-1/2 top-full z-50 mt-3 w-[min(920px,calc(100vw-3rem))] max-h-[70vh] overflow-y-auto -translate-x-1/2 translate-y-2 rounded-2xl border border-[#D9E5F2] bg-white p-2.5 opacity-0 shadow-[0_24px_60px_rgba(8,43,102,0.16)] transition-all duration-200 pointer-events-none group-[.is-open]:visible group-[.is-open]:translate-y-0 group-[.is-open]:opacity-100 group-[.is-open]:pointer-events-auto">
          <div class="grid grid-cols-3 gap-1">
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/cloud-services.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">01</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Cloud Services</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Backup, storage, cloud server, email and migration</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/it-infrastructure-management.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">02</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">IT Infrastructure Management</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Monitoring, maintenance, security and support</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/network-solutions.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">03</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Network Solutions</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">LAN/WAN, Wi-Fi, router, switch and firewall</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/cyber-security.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">04</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Cyber Security Services</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Endpoint, network, identity and email security</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/internet-management.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">05</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Internet Management &amp; Monitoring</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Leased line, WAN and bandwidth monitoring</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/it-procurement.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">06</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">IT Procurement &amp; Hardware Supply</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Requirement analysis, BOQ, supply and delivery</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/it-support-amc.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">07</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">IT Support &amp; AMC Services</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Remote and on-site support with AMC</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/project-implementation.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">08</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Project Implementation Services</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Survey, installation, testing and handover</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/lan-wifi-installation.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">09</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">LAN &amp; Wi-Fi Installation</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Structured LAN cabling, rack arrangement, patching, switches, access points, network configuration and testing</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/fiber-ftth-work.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">10</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Fiber / FTTH Work</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Fiber routing, termination support, ODF/FAT/FDB related field work, FTTH deployment assistance, testing and maintenance</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/cctv-solutions.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">11</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">CCTV Solutions</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">IP/analog CCTV installation, DVR/NVR setup, camera configuration, cabling, testing and maintenance</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/services/manpower-field-technician-support.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">12</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Manpower / Field Technician Support</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Deployment of technicians for installation, breakdown calls, preventive maintenance, site surveys, rollout projects and multi-site field support</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- ========== INDUSTRIES DROPDOWN ========== -->
      <div class="relative inline-flex items-center group" data-dropdown>
        <a
          href="{{base}}pages/industries.html"
          data-nav="industries-all"
          class="inline-flex items-center rounded-l-md py-2 pl-3 pr-1.5 text-sm font-semibold text-[#162033] transition-colors group-hover:bg-[#F5F9FD] group-hover:text-[#075FC8]">
          Industries
        </a>
        <button
          type="button"
          id="industriesTrigger"
          data-dropdown-trigger
          aria-expanded="false"
          aria-controls="industriesDropdown"
          aria-label="Open industries menu"
          class="inline-flex items-center justify-center rounded-r-md py-2 pl-1 pr-2.5 text-[#162033] transition-colors group-hover:bg-[#F5F9FD] group-hover:text-[#075FC8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FEA] focus-visible:ring-offset-2">
          <svg class="h-3 w-3 transition-transform duration-200 group-[.is-open]:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div id="industriesDropdown" role="menu" aria-labelledby="industriesTrigger"
             class="invisible absolute left-1/2 top-full z-50 mt-3 w-[min(720px,calc(100vw-3rem))] max-h-[70vh] overflow-y-auto -translate-x-1/2 translate-y-2 rounded-2xl border border-[#D9E5F2] bg-white p-2.5 opacity-0 shadow-[0_24px_60px_rgba(8,43,102,0.16)] transition-all duration-200 pointer-events-none group-[.is-open]:visible group-[.is-open]:translate-y-0 group-[.is-open]:opacity-100 group-[.is-open]:pointer-events-auto">
          <div class="grid grid-cols-2 gap-1">
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/corporate-it-companies.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">01</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Corporate Offices &amp; IT Companies</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Office campuses, software parks and corporate IT setups</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/manufacturing-industrial.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">02</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Manufacturing &amp; Industrial</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Factories, plants and industrial units</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/healthcare-hospitals.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">03</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Healthcare &amp; Hospitals</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Hospitals, clinics and diagnostic centres</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/education-institutions.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">04</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Education &amp; Institutions</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Schools, colleges and universities</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/banking-financial-services.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">05</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Banking &amp; Financial Services</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Banks, NBFCs and financial institutions</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/retail-commercial-businesses.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">06</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Retail &amp; Commercial Businesses</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Retail chains, showrooms and commercial outlets</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/hotels-hospitality.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">07</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Hotels &amp; Hospitality</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Hotels, resorts and hospitality services</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/real-estate-construction.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">08</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Real Estate &amp; Construction</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Builders, developers and construction sites</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/logistics-warehousing.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">09</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Logistics &amp; Warehousing</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Warehouses, distribution centres and logistics hubs</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/telecom-internet-providers.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">10</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Telecom &amp; Internet Service Providers</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Telecom operators and ISPs</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/government-public-sector.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">11</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Government &amp; Public Sector</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Government offices and public sector units</span>
              </span>
            </a>
            <a class="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F5F9FD]" role="menuitem" href="{{base}}pages/industries/sme-small-medium-enterprises.html">
              <span class="mt-0.5 shrink-0 rounded-md bg-[rgba(24,169,232,0.12)] px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#075FC8]">12</span>
              <span class="min-w-0">
                <span class="block text-[0.92rem] font-semibold leading-tight text-[#082B66]">Small &amp; Medium Enterprises (SMEs)</span>
                <span class="mt-0.5 block text-[0.78rem] leading-snug text-[#64748B]">Growing businesses and SME offices</span>
              </span>
            </a>
            </div>
        </div>
      </div>
      <!-- ========== END INDUSTRIES DROPDOWN ========== -->

      <a class="nav-link" href="{{base}}pages/contact.html" data-nav="contact">Contact Us</a>
    </nav>

    <div class="nav-actions">
      <a class="btn btn--primary" href="{{base}}pages/contact.html">Get in touch</a>
    </div>

    <!-- Mobile hamburger -->
    <button type="button"
            class="nav-toggle"
            id="navToggle"
            aria-expanded="false"
            aria-controls="mobileNav"
            aria-label="Open navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile navigation panel -->
  <nav class="nav-mobile" id="mobileNav" aria-label="Mobile navigation">
    <a class="nav-mobile__link" href="{{base}}index.html" data-nav="home">Home</a>
    <a class="nav-mobile__link" href="{{base}}pages/about.html" data-nav="about">About Us</a>

    <!-- Mobile Services toggle -->
    <button type="button"
            class="nav-mobile__toggle"
            id="mobileServicesToggle"
            aria-expanded="false"
            aria-controls="mobileServicesPanel">
      Services
      <svg class="nav-caret" width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </button>

    <div class="nav-mobile__panel" id="mobileServicesPanel">
      <a class="nav-mobile__sublink" href="{{base}}pages/services.html">All Services</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/cloud-services.html">Cloud Services</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/it-infrastructure-management.html">IT Infrastructure Management</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/network-solutions.html">Network Solutions</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/cyber-security.html">Cyber Security Services</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/internet-management.html">Internet Management &amp; Monitoring</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/it-procurement.html">IT Procurement &amp; Hardware Supply</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/it-support-amc.html">IT Support &amp; AMC Services</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/project-implementation.html">Project Implementation Services</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/lan-wifi-installation.html">LAN &amp; Wi-Fi Installation</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/fiber-ftth-work.html">Fiber / FTTH Work</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/cctv-solutions.html">CCTV Solutions</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/services/manpower-field-technician-support.html">Manpower / Field Technician Support</a>
    </div>

    <!-- Mobile Industries toggle -->
    <button type="button"
            class="nav-mobile__toggle"
            id="mobileIndustriesToggle"
            aria-expanded="false"
            aria-controls="mobileIndustriesPanel">
      Industries
      <svg class="nav-caret" width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </button>

    <div class="nav-mobile__panel" id="mobileIndustriesPanel">
      <a class="nav-mobile__sublink" href="{{base}}pages/industries.html">All Industries</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/corporate-it-companies.html">Corporate &amp; IT Companies</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/manufacturing-industrial.html">Manufacturing &amp; Industrial</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/healthcare-hospitals.html">Healthcare &amp; Hospitals</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/education-institutions.html">Education &amp; Institutions</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/banking-financial-services.html">Banking &amp; Financial Services</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/retail-commercial-businesses.html">Retail &amp; Commercial Businesses</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/hotels-hospitality.html">Hotels &amp; Hospitality</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/real-estate-construction.html">Real Estate &amp; Construction</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/logistics-warehousing.html">Logistics &amp; Warehousing</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/telecom-internet-providers.html">Telecom &amp; Internet Service Providers</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/government-public-sector.html">Government &amp; Public Sector</a>
      <a class="nav-mobile__sublink" href="{{base}}pages/industries/sme-small-medium-enterprises.html">Small &amp; Medium Enterprises (SMEs)</a>
    </div>

    <a class="nav-mobile__link" href="{{base}}pages/contact.html" data-nav="contact">Contact Us</a>

    <div class="nav-mobile__cta">
      <a class="btn btn--primary btn--block" href="{{base}}pages/contact.html">Get in touch</a>
    </div>
  </nav>
</header>`,
    footer: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Teleon Networks — Footer Preview</title>
<style>
  html, body { margin: 0 !important; padding: 0 !important; }
</style>
</head>
<body>
<style>
  .site-footer {
    --accent: #18A9E8;
    --accent-soft: rgba(24, 169, 232, 0.14);
    --accent-border: rgba(24, 169, 232, 0.35);
    --bg: #0A1220;
    --bg-raised: #0F1B2E;
    --line: rgba(255, 255, 255, 0.09);
    --text: #E8EDF4;
    --text-muted: #93A1B6;
    --orange: #FF8C00;
    position: relative;
    background: var(--bg);
    color: var(--text);
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    overflow: hidden;
    margin-top: 0 !important;
    padding: 0 !important;
  }

  .site-footer .shell {
    max-width: var(--shell, 1560px);
    margin: 0 auto !important;
    padding: 40px 32px 0 !important;
  }

  .site-footer .footer-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr 1.3fr 1.2fr;
    gap: 30px;
    padding-top: 0 !important;
    padding-bottom: 18px;
    margin-top: 0 !important;
  }

  .site-footer .footer-brand > a {
    display: inline-block;
    margin-top: 0 !important;
    margin-bottom: 8px;   /* 🔽 reduced from 18px */
    line-height: 0;
  }

  .site-footer .footer-brand img {
    display: block;
    height: 70px;
    width: auto;
    max-width: 260px;
    margin: 0 0 8px 0;    /* 🔽 reduced from 18px */
    background: none !important;
    padding: 0 !important;
    border-radius: 0 !important;
    mix-blend-mode: normal !important;
  }

  /* 🔽 Reduced description: shorter line-height + tighter margin */
  .site-footer .footer-brand p {
    color: var(--text-muted);
    font-size: 13.5px;
    line-height: 1.55;
    max-width: 38ch;
    margin: 0 0 12px;
  }

  .site-footer .footer-tagline {
    display: inline-block;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--accent);
    background: var(--accent-soft);
    border: 1px solid var(--accent-border);
    border-radius: 999px;
    padding: 6px 13px;
    margin: 0;
  }

  .site-footer .footer-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 16px;
  }

  .site-footer .footer-title .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 9px;
    background: var(--accent-soft);
    border: 1px solid var(--accent-border);
    color: var(--accent);
    flex-shrink: 0;
  }

  .site-footer .footer-title .badge svg { width: 15px; height: 15px; }

  .site-footer .footer-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .site-footer .footer-list a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.15s ease, transform 0.15s ease;
  }

  .site-footer .footer-list a::before {
    content: "›";
    color: var(--accent);
    font-weight: 700;
  }

  .site-footer .footer-list a:hover {
    color: var(--text);
    transform: translateX(2px);
  }

  .site-footer .footer-contact {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .site-footer .footer-contact__row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .site-footer .footer-contact__row .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: var(--accent-soft);
    border: 1px solid var(--accent-border);
    color: var(--accent);
    flex-shrink: 0;
  }

  .site-footer .footer-contact__label {
    display: block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 2px;
  }

  .site-footer .footer-placeholder {
    display: block;
    font-size: 14px;
    color: var(--text);
    font-style: italic;
    opacity: 0.75;
  }

  .site-footer .footer-link{display:block;font-size:14px;line-height:1.5;color:var(--text);text-decoration:none;word-break:break-word}
  .site-footer .footer-link:hover{color:var(--accent);text-decoration:underline}

  .site-footer .textlink {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: var(--accent) !important;
    border: 1px solid var(--accent-border);
    background: var(--accent-soft);
    padding: 9px 16px;
    border-radius: 8px;
    width: fit-content;
    transition: background 0.15s ease, transform 0.15s ease;
  }

  .site-footer .textlink:hover {
    background: rgba(24, 169, 232, 0.24);
    transform: translateX(2px);
  }

  .site-footer .footer-bottom {
    border-top: 1px solid var(--line);
    padding: 14px 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 13px;
    color: var(--text-muted);
  }

  .site-footer .footer-bottom p { margin: 0; }

  .site-footer .footer-credit {
    text-align: center;
    font-size: 13px;
    color: var(--text-muted);
  }

  .site-footer .footer-credit a {
    color: var(--orange);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.15s ease;
  }

  .site-footer .footer-credit a:hover {
    color: #FFB347;
    text-decoration: underline;
  }

  .footer-fab-left {
    position: fixed;
    left: 24px;
    bottom: 24px;
    z-index: 60;
  }

  .footer-fab-right {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 60;
  }

  .footer-fab__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    text-decoration: none;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    border: none;
    cursor: pointer;
  }

  .footer-fab__btn:hover { transform: translateY(-3px); }
  .footer-fab__btn.whatsapp { background: #25D366; color: #fff; }
  .footer-fab__btn.top {
    background: #0F1B2E;
    color: #18A9E8;
    border: 1px solid rgba(24, 169, 232, 0.4);
    font-size: 18px;
  }

  .footer-fab__btn svg { width: 24px; height: 24px; }

  @media (max-width: 980px) {
    .site-footer .footer-grid {
      grid-template-columns: 1fr 1fr;
      row-gap: 32px;
    }
  }

  @media (max-width: 620px) {
    .site-footer .shell { padding: 28px 20px 0 !important; }

    .site-footer .footer-brand img {
      height: 55px;
      max-width: 200px;
      margin-bottom: 6px;   /* 🔽 tighter on mobile */
    }
    .site-footer .footer-brand > a {
      margin-bottom: 6px;
    }

    .site-footer .footer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px 16px;
      padding-top: 0 !important;
    }
    .site-footer .footer-brand { grid-column: 1 / -1; }
    .site-footer .footer-grid > div:nth-child(2) { grid-column: 1 / 2; }
    .site-footer .footer-grid > div:nth-child(3) { grid-column: 2 / 3; }
    .site-footer .footer-grid > div:nth-child(4) { grid-column: 1 / -1; }
    .site-footer .footer-bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .footer-fab-left { left: 16px; bottom: 16px; }
    .footer-fab-right { right: 16px; bottom: 16px; }
    .footer-fab__btn { width: 46px; height: 46px; }
  }
</style>

<footer class="site-footer">
  <div class="shell">
    <div class="footer-grid">

      <div class="footer-brand">
        <a href="{{base}}index.html">
          <img src="{{base}}assets/images/logo-dark.png" alt="Teleon Networks Pvt Ltd">
        </a>
        <!-- 🔽 Shortened description -->
        <p>
          IT &amp; Infrastructure Solutions — proactive monitoring, maintenance,
          security, backup and on-site or remote support for your business.
        </p>
        <!-- <p class="footer-tagline">WE MANAGE IT. YOU GROW IT.</p> -->
      </div>

      <div>
        <h2 class="footer-title">
          <span class="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
          </span>
          Company
        </h2>
        <ul class="footer-list">
          <li><a href="{{base}}index.html">Home</a></li>
          <li><a href="{{base}}pages/about.html">About Us</a></li>
          <li><a href="{{base}}pages/services.html">Services</a></li>
          <li><a href="{{base}}pages/industries.html">Industries</a></li>
          <li><a href="{{base}}pages/contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h2 class="footer-title">
          <span class="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </span>
          Services
        </h2>
        <ul class="footer-list">
          <li><a href="{{base}}pages/services/cloud-services.html">Cloud Services</a></li>
          <li><a href="{{base}}pages/services/it-infrastructure-management.html">IT Infrastructure Management</a></li>
          <li><a href="{{base}}pages/services/network-solutions.html">Network Solutions</a></li>
          <li><a href="{{base}}pages/services/cyber-security.html">Cyber Security Services</a></li>
        </ul>
      </div>

      <div>
        <h2 class="footer-title">
          <span class="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          </span>
          Contact
        </h2>
        <div class="footer-contact">
          <div class="footer-contact__row">
            <span class="badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.26-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
            <span>
              <span class="footer-contact__label">Phone</span>
              <a class="footer-link" href="tel:+919876543210">+91 98765 43210</a>
            </span>
          </div>

          <div class="footer-contact__row">
            <span class="badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m2 7 10 6 10-6"></path></svg>
            </span>
            <span>
              <span class="footer-contact__label">Email</span>
              <a class="footer-link" href="mailto:info@teleonnetworks.com?subject=Enquiry%20-%20TeleOn%20Networks&amp;body=Hello%20TeleOn%20Networks%2C%0D%0A%0D%0AI%20would%20like%20to%20enquire%20about%20your%20services.%0D%0A%0D%0AName%3A%20%0D%0APhone%3A%20%0D%0ARequirement%3A%20">info@teleonnetworks.com</a>
            </span>
          </div>

          <div class="footer-contact__row">
            <span class="badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </span>
            <span>
              <span class="footer-contact__label">Office</span>
              <a class="footer-link" href="https://www.google.com/maps/search/?api=1&amp;query=Baner+Road+Pune+Maharashtra+411045" target="_blank" rel="noopener noreferrer">Office No. 204, Silver Arcade, Baner Road, Baner, Pune, Maharashtra 411045</a>
            </span>
          </div>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; <span data-current-year>2026</span> Teleon Networks Pvt Ltd. All rights reserved.</p>
      <p class="footer-credit">Developed by <a href="https://kunashmedia.com" target="_blank" rel="noopener noreferrer">Kunash Media</a></p>
      <p>IT &amp; Infrastructure Solutions</p>
    </div>
  </div>
</footer>

<div class="footer-fab-left">
  <a class="footer-fab__btn whatsapp" href="{{base}}pages/contact.html" aria-label="Contact us on WhatsApp" title="Chat with us">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.9 9.9 0 0 0 4.77 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C22 6.45 17.55 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.65-.6-2.91-1.26-4.81-4.19-4.95-4.38-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.26-.29.58-.36.77-.36h.55c.18 0 .42-.03.65.5.24.55.82 1.9.9 2.04.07.14.12.3.02.49-.09.18-.14.3-.28.46-.14.16-.29.35-.42.47-.14.13-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.24 2.25 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.13.44.19.5.3.07.11.07.61-.17 1.29z"></path></svg>
  </a>
</div>

<script>
  (function () {
    var yearEl = document.querySelector('.site-footer [data-current-year]');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    var topBtn = document.getElementById('teleonBackToTop');
    if (topBtn) {
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  })();
</script>

</body>
</html>`
  };

  /* ------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------ */
  function applyBase(markup) {
    return markup.replace(/\{\{base\}\}/g, BASE);
  }

  function inject(mount, markup) {
    mount.innerHTML = applyBase(markup);
  }

  function loadComponent(mount, file, fallbackKey) {
    var url = BASE + 'components/' + file;

    return fetch(url)
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.text();
      })
      .then(function (markup) {
        inject(mount, markup);
      })
      .catch(function () {
        // file:// protocol, or the component file is unreachable.
        inject(mount, FALLBACK[fallbackKey]);
      });
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function init() {
    var headerMount = document.getElementById('site-header');
    var footerMount = document.getElementById('site-footer');
    var jobs = [];

    if (headerMount) jobs.push(loadComponent(headerMount, 'header.html', 'header'));
    if (footerMount) jobs.push(loadComponent(footerMount, 'footer.html', 'footer'));

    Promise.all(jobs).then(function () {
      // Tell navigation.js and main.js that the shared markup is in the DOM.
      document.dispatchEvent(new CustomEvent('components:loaded', {
        detail: { base: BASE }
      }));
    });
  }

  // Expose the resolved base path for any other script that needs it.
  window.TELEON = window.TELEON || {};
  window.TELEON.base = BASE;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

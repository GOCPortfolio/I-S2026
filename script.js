/* =====================================================================
   WEDDING INVITATION: ALL TEXT AND SETTINGS LIVE IN THIS ONE OBJECT.
   Edit only this CONFIG block. The app code below it never needs editing.
   Items marked  TODO  are placeholders to confirm before sending the link.
   ===================================================================== */
const CONFIG = {
  siteUrl: 'https://gocportfolio.github.io/I-S2026/',

  couple: {
    heroBride: 'Irene',
    heroGroom: 'Shams',
    short: 'Irene & Shams',          // used in titles, calendar, share + RSVP messages
    sealLetters: 'I & S',
    hashtag: '#IS',
    tagline: 'Wedding Solemnization'
  },

  bride: {
    title: 'Miss',
    given: 'Irene Blessing',
    surname: 'Abraham',
    fatherLine: 'Late Mr. Abraham Kantiok',
    parents: 'Daughter of the late Mr. Abraham Kantiok'
  },
  groom: {
    title: 'Asp.',
    given: 'Habu Isah',
    surname: 'Shamaki',
    fatherLine: 'Late Mr. Isah Shamaki',
    parents: 'Son of the late Mr. Isah Shamaki'
  },

  card: {
    event: 'Solemnization',
    receptionNote: 'Reception follows immediately'
  },

  date: {
    iso: '2026-12-30T10:15:00+01:00',   // exact start, Lagos time (WAT, UTC+1)
    timeZone: 'Africa/Lagos',
    tzLabel: '(WAT)',
    durationHours: 4
  },

  venue: {
    city: 'Gwantu · Sanga LGA',
    ceremony: {
      label: 'Ceremony',
      name: 'Anjatom Football Field',
      address: 'Gwantu Dakachi, Sanga LGA',
      mapQuery: 'Anjatom Football Field, Gwantu, Sanga, Kaduna, Nigeria',  // TODO paste the exact address as Google Maps shows it
      mapsUrl: ''                                                           // optional: paste a Google Maps share link to override
    },
    reception: {
      label: 'Reception',
      name: 'Anjatom Football Field',
      address: 'Gwantu Dakachi, Sanga LGA',
      mapQuery: 'Anjatom Football Field, Gwantu, Sanga, Kaduna, Nigeria',  // TODO confirm reception address
      mapsUrl: ''
    }
  },

  colours: [
    { name: 'Lilac', hex: '#b9a0d8' },
    { name: 'Chocolate Brown', hex: '#3b1e12' },
    { name: 'Black', hex: '#111111' }
  ],

  contact: {
    callNumber: '07035140180',
    whatsapp: '2347035140180',          // international format, no +
    altNumber: '08036213416',           // second RSVP number printed on the invitation card ('' to hide)
    personName: 'Our wedding coordinator'   // TODO name of the contact person
  },

  father: { name: 'ALH MAIKANO ABUBAKAR MAIKANO', role: '' },   // set name to '' to hide this section

  story: {
    intro: 'Be Our Guest',
    lead: 'Every love story is a gift. Come and witness how two lives, held by faith and family, become one.',
    moments: [
      { label: 'Where it began', title: 'A Beautiful Beginning', photo: 1,
        text: 'Some meetings feel like coincidence until you look back and see the hand of God in them. In each other, Irene and Shams found a rare kind of peace: easy laughter, honest words and a quiet certainty that this was no accident.' },
      { label: 'Growing together', title: 'Learning Each Other\u2019s Hearts', photo: 4,
        text: 'Through ordinary days and seasons of waiting, they chose each other again and again, in prayer, in patience and in kindness. Their love grew deep roots in faith and was cherished by two families.' },
      { label: 'The promise', title: 'Forever, Beginning Now', photo: 3,
        text: 'With the blessings of their families, and in loving memory of the late Mr. Abraham Kantiok and the late Mr. Isah Shamaki, Irene and Shams say yes to a lifetime together. It would be our joy to have you beside us.' }
    ],
    closing: 'Two families, one covenant, and you, right beside us.'
  },

  gallery: [   // order = display order. thumb sizes are real pixel sizes (no layout shift)
    { src: 'assets/g1.webp', thumb: 'assets/g1-sm.webp', w: 520, h: 780, alt: 'Irene and Shams embracing in a rose garden' },
    { src: 'assets/g2.webp', thumb: 'assets/g2-sm.webp', w: 560, h: 373, alt: 'Irene and Shams beside a white rose arch' },
    { src: 'assets/g3.webp', thumb: 'assets/g3-sm.webp', w: 560, h: 700, alt: 'Shams kissing Irene\u2019s forehead on a cream sofa' },
    { src: 'assets/g4.webp', thumb: 'assets/g4-sm.webp', w: 520, h: 780, alt: 'Irene and Shams in gold and burgundy traditional attire on a golden throne' },
    { src: 'assets/g5.webp', thumb: 'assets/g5-sm.webp', w: 560, h: 700, alt: 'Irene and Shams in champagne tones against an arched wall' },
    { src: 'assets/g6.webp', thumb: 'assets/g6-sm.webp', w: 560, h: 700, alt: 'Irene and Shams on a candlelit rooftop at night' },
    { src: 'assets/g7.webp', thumb: 'assets/g7-sm.webp', w: 520, h: 650, alt: 'Irene and Shams holding hands on stone steps in burgundy and gold' },
    { src: 'assets/g8.webp', thumb: 'assets/g8-sm.webp', w: 560, h: 613, alt: 'Irene and Shams on the beach at sunset' }
  ],
  footerPhoto: 6,   // index into gallery

  toast: [
    'Lord, we thank You for the love that brought Irene and Shams together.',
    'May Your presence be the first guest in their home and the last word in every season.',
    'Where there is joy, let it be doubled; where there is trial, let it be shared.',
    'May their love be patient and kind, and their marriage stand on the Rock that cannot be moved.',
    'To every family member and friend standing with them today: thank you, and God bless you.',
    'So lift your glass: to Irene and Shams, one faith, one home, one forever!'
  ],

  rsvp: {
    endpoint: 'https://script.google.com/macros/s/AKfycbxUdwiewpri7EDVVS9Npev6_Yrw3NmTVTdgTpez2U7g4FCzbwcdskXK7cGtDpxJOU4l/exec',      // TODO paste your Google Apps Script Web App URL here (see README)
    maxGuests: 6
  },

  gifts: {
    message: 'Your presence is the greatest gift. Should you wish to bless us further, a gift towards our new beginning will be received with joy and gratitude.',
    bank: 'UBA',
    accountName: 'ISAH HABU SHAMAKI',
    accountNumber: '0072284947'
  },

  faq: [
    { q: 'What should I wear?', a: ['Please dress in the colours of the day: lilac, chocolate brown and black.'], swatches: true },
    { q: 'Where can I park?', a: [] },   // TODO add parking details. Left empty = this question is hidden
    { q: 'Where can I stay?', a: ['We recommend Arumbus Hotel for guests who need accommodation.'] },
    { q: 'Who can I contact?', contact: true },
    { q: 'Who created this beautiful wedding website?',
      a: ['This website was proudly designed by G.O.C | Brand Strategist \u00d7 AI, where we create beautiful, personalized digital wedding experiences.',
          'Planning your wedding? Let\u2019s create yours too!'],
      cta: { label: 'Chat with us on WhatsApp', href: 'https://wa.me/2348027134537' } }
  ],

  vendors: [],   // e.g. [{ role: 'Photography', name: 'Studio Name' }]. Empty = section hidden

  footer: {
    thanks: 'Thank you for celebrating with us. Your love, prayers and presence mean the world to us.'
  },

  share: { message: 'You are invited to celebrate the union of Irene & Shams, Wednesday, 30th December 2026.' },

  music: { src: 'assets/music.mp3', volume: 0.45 }   // TODO replace assets/music.mp3 with your own licensed file
};

/* =====================================================================
   APP CODE (no need to edit below this line)
   ===================================================================== */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const params = new URLSearchParams(location.search);
  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } };
  const get = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), CONFIG);

  /* ---------- derived date text (from CONFIG.date.iso) ---------- */
  (function deriveDate() {
    const d = new Date(CONFIG.date.iso), tz = CONFIG.date.timeZone;
    const f = o => new Intl.DateTimeFormat('en-GB', Object.assign({ timeZone: tz }, o)).format(d);
    const day = parseInt(f({ day: 'numeric' }), 10);
    const ord = (day % 100 >= 11 && day % 100 <= 13) ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[day % 10] || 'th');
    CONFIG.date.long = f({ weekday: 'long' }) + ', ' + day + ord + ' ' + f({ month: 'long' }) + ' ' + f({ year: 'numeric' });
    CONFIG.date.time = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit', hour12: true }).format(d).replace(/[\u202f\u00a0]/g, ' ');
  })();

  /* ---------- fill data-cfg text / attributes ---------- */
  $$('[data-cfg]').forEach(n => { const v = get(n.getAttribute('data-cfg')); if (v != null) n.textContent = v; });
  document.title = CONFIG.couple.short + ' | ' + CONFIG.couple.hashtag;

  /* ---------- guest name from ?guest= ---------- */
  const guest = (params.get('guest') || '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 60);
  if (guest) {
    const g1 = $('#envGreet'); g1.textContent = 'Dear ' + guest; g1.hidden = false;
    const g2 = $('#cardGuest'); g2.textContent = 'Dear ' + guest + ','; g2.hidden = false;
    $('#f-name').value = guest;
  }

  /* ---------- swatches ---------- */
  function swatchList(cls) {
    const ul = el('ul', cls || 'swatches');
    CONFIG.colours.forEach(c => {
      const li = el('li'); const dot = el('i'); dot.style.background = c.hex; dot.setAttribute('aria-hidden', 'true');
      li.appendChild(dot); li.appendChild(el('span', null, c.name)); ul.appendChild(li);
    });
    return ul;
  }
  const cs = $('#cardSwatches'); cs.replaceWith(Object.assign(swatchList('swatches'), { id: 'cardSwatches' }));

  /* ---------- maps links ---------- */
  const enc = encodeURIComponent;
  function mapLinks(v) {
    return {
      open: v.mapsUrl || 'https://www.google.com/maps/search/?api=1&query=' + enc(v.mapQuery),
      dir: 'https://www.google.com/maps/dir/?api=1&destination=' + enc(v.mapQuery)
    };
  }
  const vg = $('#venueGrid');
  [CONFIG.venue.ceremony, CONFIG.venue.reception].forEach(v => {
    const c = el('article', 'venue reveal'); const l = mapLinks(v);
    c.appendChild(el('p', 'label purple', v.label));
    c.appendChild(el('h3', 'v-name', v.name));
    c.appendChild(el('p', 'v-addr', v.address));
    c.appendChild(el('p', 'v-when', CONFIG.date.long + ' · ' + CONFIG.date.time));
    const row = el('div', 'btn-col');
    const a1 = el('a', 'btn btn-solid', 'Open in Google Maps'); a1.href = l.open; a1.target = '_blank'; a1.rel = 'noopener';
    const a2 = el('a', 'btn btn-ghost', 'Get directions'); a2.href = l.dir; a2.target = '_blank'; a2.rel = 'noopener';
    row.append(a1, a2); c.appendChild(row); vg.appendChild(c);
  });

  /* ---------- father of the day ---------- */
  if (CONFIG.father && CONFIG.father.name) {
    $('#father').hidden = false;
    $('#faRole').textContent = CONFIG.father.role || '';
    if (!CONFIG.father.role) $('#faRole').hidden = true;
  }

  /* ---------- story ---------- */
  const tl = $('#timeline');
  CONFIG.story.moments.forEach((m, i) => {
    const g = CONFIG.gallery[m.photo] || CONFIG.gallery[0];
    const li = el('li', 'moment reveal');
    const fig = el('div', 'm-photo'); const im = el('img'); im.src = g.thumb; im.width = g.w; im.height = g.h; im.alt = g.alt; im.loading = 'lazy'; im.decoding = 'async';
    fig.appendChild(im);
    const body = el('div', 'm-body');
    body.append(el('p', 'label purple', m.label), el('h3', 'm-title', m.title), el('p', 'm-text', m.text));
    li.append(fig, body); tl.appendChild(li);
  });

  /* ---------- gallery + lightbox ---------- */
  const mas = $('#masonry');
  CONFIG.gallery.forEach((g, i) => {
    const b = el('button', 'g-item reveal'); b.type = 'button'; b.setAttribute('aria-label', 'Open photo ' + (i + 1) + ': ' + g.alt);
    const im = el('img'); im.src = g.thumb; im.width = g.w; im.height = g.h; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async';
    b.appendChild(im); b.addEventListener('click', () => openLB(i)); mas.appendChild(b);
  });
  const lb = $('#lb'), lbImg = $('#lbImg'), lbCap = $('#lbCap'), lbCount = $('#lbCount');
  let lbIndex = 0, lbReturn = null;
  function showLB(i) {
    const n = CONFIG.gallery.length; lbIndex = (i + n) % n; const g = CONFIG.gallery[lbIndex];
    lbImg.src = g.src; lbImg.alt = g.alt; lbCap.textContent = g.alt; lbCount.textContent = (lbIndex + 1) + ' / ' + n;
    [1, -1].forEach(d => { const p = new Image(); p.src = CONFIG.gallery[(lbIndex + d + n) % n].src; });
  }
  function openLB(i) {
    lbReturn = document.activeElement; showLB(i); lb.hidden = false; document.documentElement.classList.add('lock');
    $('.lb-close', lb).focus();
  }
  function closeLB() {
    lb.hidden = true; document.documentElement.classList.remove('lock'); lbImg.removeAttribute('src');
    if (lbReturn && lbReturn.focus) lbReturn.focus();
  }
  $('.lb-close', lb).addEventListener('click', closeLB);
  $('.lb-prev', lb).addEventListener('click', () => showLB(lbIndex - 1));
  $('.lb-next', lb).addEventListener('click', () => showLB(lbIndex + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLB();
    else if (e.key === 'ArrowLeft') showLB(lbIndex - 1);
    else if (e.key === 'ArrowRight') showLB(lbIndex + 1);
    else if (e.key === 'Tab') {
      const f = $$('button', lb); const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  (function swipe() {
    let x0 = null;
    lb.addEventListener('pointerdown', e => { if (e.target.closest('button')) return; x0 = e.clientX; });
    lb.addEventListener('pointerup', e => {
      if (x0 == null) return; const dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) showLB(lbIndex + (dx < 0 ? 1 : -1));
    });
    lb.addEventListener('pointercancel', () => { x0 = null; });
  })();

  /* ---------- toast section ---------- */
  const tlines = $('#toastLines');
  CONFIG.toast.forEach((t, i) => tlines.appendChild(el('p', 't-line' + (i === CONFIG.toast.length - 1 ? ' t-last' : ''), t)));

  /* ---------- guests select ---------- */
  const gs = $('#f-guests');
  for (let i = 1; i <= CONFIG.rsvp.maxGuests; i++) gs.appendChild(Object.assign(el('option', null, i === 1 ? '1 guest' : i + ' guests'), { value: i }));

  /* ---------- FAQ ---------- */
  const faq = $('#faqList'); let faqN = 0;
  const phoneHref = 'tel:' + CONFIG.contact.callNumber.replace(/\s+/g, '');
  CONFIG.faq.forEach(item => {
    if (!item.contact && !(item.a && item.a.length)) return;
    const id = 'faq' + (++faqN);
    const wrap = el('div', 'faq-item');
    const h = el('h3'); const b = el('button', 'faq-q'); b.type = 'button'; b.id = id + '-b';
    b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', id);
    b.append(el('span', null, item.q), el('i', 'plus')); h.appendChild(b);
    const panel = el('div', 'faq-a'); panel.id = id; panel.setAttribute('role', 'region'); panel.setAttribute('aria-labelledby', id + '-b');
    const inner = el('div', 'faq-in');
    (item.a || []).forEach(p => inner.appendChild(el('p', null, p)));
    if (item.swatches) inner.appendChild(swatchList('swatches small'));
    if (item.contact) {
      const p = el('p'); p.append(CONFIG.contact.personName + ': ');
      const a = el('a', null, CONFIG.contact.callNumber); a.href = phoneHref; p.appendChild(a);
      if (CONFIG.contact.altNumber) { p.append(' or '); const a2 = el('a', null, CONFIG.contact.altNumber); a2.href = 'tel:' + CONFIG.contact.altNumber; p.appendChild(a2); }
      inner.appendChild(p);
      const wa = el('p'); wa.append('WhatsApp: '); const w = el('a', null, CONFIG.contact.callNumber);
      w.href = 'https://wa.me/' + CONFIG.contact.whatsapp; w.target = '_blank'; w.rel = 'noopener'; wa.appendChild(w); inner.appendChild(wa);
    }
    if (item.cta) { const a = el('a', 'btn btn-wa', item.cta.label); a.href = item.cta.href; a.target = '_blank'; a.rel = 'noopener'; inner.appendChild(a); }
    panel.appendChild(inner); wrap.append(h, panel); faq.appendChild(wrap);
    b.addEventListener('click', () => {
      const open = b.getAttribute('aria-expanded') === 'true';
      $$('.faq-q', faq).forEach(x => { x.setAttribute('aria-expanded', 'false'); x.parentNode.parentNode.classList.remove('open'); });
      if (!open) { b.setAttribute('aria-expanded', 'true'); wrap.classList.add('open'); }
    });
  });

  /* ---------- vendors ---------- */
  if (CONFIG.vendors && CONFIG.vendors.length) {
    $('#vendors').hidden = false; const ul = $('#vendorList');
    CONFIG.vendors.forEach(v => { const li = el('li'); li.append(el('span', 'v-role', v.role), el('span', 'v-nm', v.name)); ul.appendChild(li); });
  }

  /* ---------- footer photo ---------- */
  (function () {
    const g = CONFIG.gallery[CONFIG.footerPhoto] || CONFIG.gallery[0]; const im = $('#footPhoto');
    im.src = g.thumb; im.width = g.w; im.height = g.h; im.alt = g.alt;
  })();

  /* ---------- toast helper ---------- */
  const toastEl = $('#toast'); let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2600); }

  /* ---------- copy account number ---------- */
  $('#copyAcct').addEventListener('click', async () => {
    const t = CONFIG.gifts.accountNumber; let ok = false;
    try { await navigator.clipboard.writeText(t); ok = true; } catch (e) {
      try { const ta = el('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0'; document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove(); } catch (e2) { ok = false; }
    }
    toast(ok ? 'Account number copied' : 'Please copy the number manually: ' + t);
  });

  /* ---------- calendar ---------- */
  const start = new Date(CONFIG.date.iso), end = new Date(start.getTime() + CONFIG.date.durationHours * 3600000);
  const icsDate = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const calTitle = 'Wedding Solemnization of ' + CONFIG.couple.short;
  const calLoc = CONFIG.venue.ceremony.name + ', ' + CONFIG.venue.ceremony.address;
  const calDesc = 'You are invited to celebrate our union in marriage. ' + CONFIG.couple.hashtag + ' ' + CONFIG.siteUrl;
  $('#gcal').href = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + enc(calTitle) + '&dates=' + icsDate(start) + '/' + icsDate(end) + '&details=' + enc(calDesc) + '&location=' + enc(calLoc);
  $('#ics').addEventListener('click', () => {
    const esc = s => String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
    const fold = l => { const o = []; while (l.length > 73) { o.push(l.slice(0, 73)); l = ' ' + l.slice(73); } o.push(l); return o.join('\r\n'); };
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding Invitation//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      'UID:' + icsDate(start) + '-' + CONFIG.couple.hashtag.replace(/\W/g, '') + '@wedding-invitation',
      'DTSTAMP:' + icsDate(new Date()), 'DTSTART:' + icsDate(start), 'DTEND:' + icsDate(end),
      'SUMMARY:' + esc(calTitle), 'LOCATION:' + esc(calLoc), 'DESCRIPTION:' + esc(calDesc),
      'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:' + esc(calTitle + ' is tomorrow'), 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].map(fold);
    const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const a = el('a'); a.href = URL.createObjectURL(blob); a.download = CONFIG.couple.short.replace(/[^\w]+/g, '-').replace(/^-|-$/g, '') + '-wedding.ics';
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  });

  /* ---------- countdown ---------- */
  (function () {
    const target = start.getTime(); const nums = {}; $$('.cd-num').forEach(n => { nums[n.dataset.u] = n; });
    const pad = n => String(n).padStart(2, '0'); let timer;
    function set(k, v) { const n = nums[k]; if (n.textContent !== v) { n.textContent = v; n.classList.remove('flip'); void n.offsetWidth; if (!reduce) n.classList.add('flip'); } }
    function tick() {
      let diff = target - Date.now();
      if (diff <= 0) { $('#countdown').hidden = true; $('#married').hidden = false; clearInterval(timer); return; }
      const s = Math.floor(diff / 1000);
      set('d', pad(Math.floor(s / 86400))); set('h', pad(Math.floor(s % 86400 / 3600))); set('m', pad(Math.floor(s % 3600 / 60))); set('s', pad(s % 60));
    }
    tick(); timer = setInterval(tick, 1000);
  })();

  /* ---------- RSVP ---------- */
  const form = $('#rsvpForm');
  const attVal = () => { const r = form.querySelector('input[name=attending]:checked'); return r ? r.value : ''; };
  const waBase = 'https://wa.me/' + CONFIG.contact.whatsapp;
  $('#callRsvp').href = phoneHref; $('#callRsvp').setAttribute('aria-label', 'Call ' + CONFIG.contact.callNumber + ' to RSVP');
  function waText() {
    const n = form.name.value.trim(), a = attVal(), g = form.guests.value;
    let t = 'Hello! This is ' + (n || '[my name]') + '. ';
    if (a === 'yes') t += 'I will joyfully attend the wedding of ' + CONFIG.couple.short + ' on ' + CONFIG.date.long + '. Number of guests: ' + g + '.';
    else if (a === 'no') t += 'I regretfully cannot attend the wedding of ' + CONFIG.couple.short + ' on ' + CONFIG.date.long + '.';
    else t += 'I would like to RSVP for the wedding of ' + CONFIG.couple.short + ' on ' + CONFIG.date.long + '.';
    return t;
  }
  $('#waRsvp').href = waBase;
  $('#waRsvp').addEventListener('click', function () { this.href = waBase + '?text=' + enc(waText()); });
  form.addEventListener('change', e => { if (e.target.name === 'attending') $('#guestsField').hidden = attVal() === 'no'; });
  function setErr(id, input, msg) {
    $('#' + id).textContent = msg || ''; if (input) { if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid'); }
    return !msg;
  }
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = form.name.value.trim(), phone = form.phone.value.trim(), digits = phone.replace(/\D/g, ''), att = attVal();
    const bad = [];
    if (!setErr('e-name', form.name, name.length < 2 ? 'Please enter your name.' : '')) bad.push(form.name);
    if (!setErr('e-phone', form.phone, (digits.length < 7 || digits.length > 15) ? 'Please enter a valid phone number.' : '')) bad.push(form.phone);
    if (!setErr('e-att', null, att ? '' : 'Please choose one option.')) bad.push(form.querySelector('input[name=attending]'));
    if (bad.length) { bad[0].focus(); return; }
    if (form.website.value) { showResult('ok'); return; }  // honeypot: pretend success
    const payload = { name, phone, attending: att === 'yes' ? 'Joyfully accept' : 'Regretfully decline', guests: att === 'yes' ? Number(form.guests.value) : 0, message: form.message.value.trim().slice(0, 500), sentAt: new Date().toISOString(), site: CONFIG.couple.short };
    if (!CONFIG.rsvp.endpoint) { showResult('offline'); return; }
    const btn = $('#rsvpBtn'); btn.disabled = true; btn.textContent = 'Sending\u2026';
    try {
      await fetch(CONFIG.rsvp.endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
      showResult('ok');
    } catch (err) { btn.disabled = false; btn.textContent = 'Send my RSVP'; showResult('fail'); }
  });
  function showResult(kind) {
    const r = $('#rsvpResult'); r.hidden = false; r.className = 'rsvp-result ' + kind; r.textContent = '';
    if (kind === 'ok') {
      form.classList.add('done');
      r.innerHTML = '<svg class="check" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" fill="none" stroke="#b8893f" stroke-width="2"/><path d="M15 27l8 8 14-16" fill="none" stroke="#7a4a9e" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      r.appendChild(el('p', 'r-big script', 'Thank you!'));
      r.appendChild(el('p', null, 'Your RSVP has been received. We can\u2019t wait to celebrate with you.'));
    } else if (kind === 'offline') {
      r.appendChild(el('p', null, 'Online RSVP is not switched on yet. Please tap the WhatsApp or Call button below to confirm your attendance. Thank you!'));
    } else {
      r.appendChild(el('p', null, 'Sorry, that did not go through. Please check your connection or use the WhatsApp or Call button below.'));
    }
    r.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  }

  /* ---------- share ---------- */
  $('#shareWa').addEventListener('click', () => {
    window.open('https://wa.me/?text=' + enc(CONFIG.share.message + ' ' + CONFIG.siteUrl), '_blank', 'noopener');
  });

  /* ---------- reveal on scroll ---------- */
  (function () {
    const items = $$('.reveal');
    if (reduce || !('IntersectionObserver' in window)) { items.forEach(n => n.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(n => io.observe(n));
  })();

  /* ---------- music ---------- */
  const soundBtn = $('#sound'); let audio = null, muted = lsGet('is-muted') === '1', fadeT;
  function paintSound() { soundBtn.classList.toggle('off', muted); soundBtn.setAttribute('aria-pressed', String(!muted)); soundBtn.setAttribute('aria-label', muted ? 'Turn music on' : 'Turn music off'); }
  function fadeTo(a, v, ms, done) {
    clearInterval(fadeT); const from = a.volume, steps = 20, dt = ms / steps; let i = 0;
    fadeT = setInterval(() => { i++; a.volume = Math.max(0, Math.min(1, from + (v - from) * i / steps)); if (i >= steps) { clearInterval(fadeT); if (done) done(); } }, dt);
  }
  function startMusic() {
    if (muted) return;
    try {
      if (!audio) { audio = new Audio(CONFIG.music.src); audio.loop = true; audio.volume = 0; }
      const p = audio.play(); if (p && p.then) p.then(() => fadeTo(audio, CONFIG.music.volume, 2500)).catch(() => { });
    } catch (e) { /* ignore */ }
  }
  soundBtn.addEventListener('click', () => {
    muted = !muted; lsSet('is-muted', muted ? '1' : '0'); paintSound();
    if (muted) { if (audio) fadeTo(audio, 0, 400, () => audio.pause()); } else startMusic();
  });
  paintSound();

  /* ---------- envelope intro ---------- */
  const intro = $('#intro'), page = $('#page'), env = $('#env'), envCard = $('#envCard'), flap = $('#flap'), seal = $('#seal'), root = document.documentElement;
  let opened = false;
  const wait = (fn, ms) => setTimeout(fn, ms);
  function lock(on) { root.classList.toggle('lock', on); page.inert = on; if (on) page.setAttribute('aria-hidden', 'true'); else page.removeAttribute('aria-hidden'); }
  function finishIntro(ms) {
    const done = () => { intro.hidden = true; intro.style.display = 'none'; lock(false); const m = $('#main'); window.scrollTo(0, 0); m.focus({ preventScroll: true }); };
    if (reduce || !ms) { done(); return; }
    const a = intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms, easing: 'ease', fill: 'forwards' });
    a.onfinish = done;
  }
  function sparkles() {
    const r = seal.getBoundingClientRect(), er = env.getBoundingClientRect();
    for (let i = 0; i < 14; i++) {
      const s = el('i', 'spark'); s.style.left = (r.left - er.left + r.width / 2) + 'px'; s.style.top = (r.top - er.top + r.height / 2) + 'px'; env.appendChild(s);
      const ang = Math.PI * 2 * i / 14 + Math.random() * .4, dist = 50 + Math.random() * 60;
      const a = s.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 }, { transform: 'translate(calc(-50% + ' + Math.cos(ang) * dist + 'px), calc(-50% + ' + Math.sin(ang) * dist + 'px)) scale(0)', opacity: 0 }], { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(.2,.7,.3,1)' });
      a.onfinish = () => s.remove();
    }
  }
  function openEnvelope(skipped) {
    if (opened) return; opened = true; startMusic();
    if (reduce || skipped) { finishIntro(skipped ? 200 : 450); return; }
    intro.classList.add('opening');
    const ease = 'cubic-bezier(.45,0,.25,1)';
    // 1. seal presses, cracks, sparkles
    seal.animate([{ transform: 'translate(-50%,-50%) scale(1)' }, { transform: 'translate(-50%,-50%) scale(.88)' }], { duration: 150, fill: 'forwards', easing: 'ease-out' });
    wait(() => {
      sparkles();
      $('.seal-l', seal).animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(-22px,10px) rotate(-14deg)', opacity: 0 }], { duration: 500, fill: 'forwards', easing: 'ease-in' });
      $('.seal-r', seal).animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(22px,12px) rotate(14deg)', opacity: 0 }], { duration: 500, fill: 'forwards', easing: 'ease-in' });
    }, 150);
    // 2. flap opens in 3D
    wait(() => {
      flap.animate([{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(180deg)' }], { duration: 800, fill: 'forwards', easing: ease });
      wait(() => { flap.style.zIndex = '1'; }, 380);
    }, 550);
    // 3. photo slides up out of the envelope
    let up = 0;
    wait(() => {
      const cr = envCard.getBoundingClientRect(), er = env.getBoundingClientRect();
      up = Math.min(er.height * 0.62, cr.top - Math.max(28, innerHeight * 0.04));
      envCard.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(' + (-up) + 'px)' }], { duration: 800, fill: 'forwards', easing: 'cubic-bezier(.3,.7,.2,1)' });
    }, 1250);
    // 4. photo scales up to fill the screen while the envelope drops away
    wait(() => {
      const w = envCard.offsetWidth, h = envCard.offsetHeight, r = envCard.getBoundingClientRect();
      const s = Math.min(innerWidth * 0.94 / w, innerHeight * 0.8 / h);
      const dx = innerWidth / 2 - (r.left + r.width / 2), dy = innerHeight / 2 - (r.top + r.height / 2);
      envCard.style.zIndex = '20';
      envCard.animate([{ transform: 'translate(0px,' + (-up) + 'px) scale(1)' }, { transform: 'translate(' + dx + 'px,' + (-up + dy) + 'px) scale(' + s + ')' }], { duration: 1000, fill: 'forwards', easing: ease });
      [$('.env-back', env), $('.env-front', env)].forEach(n => n.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(' + (innerHeight * 0.9) + 'px)', opacity: 0 }], { duration: 750, fill: 'forwards', easing: 'cubic-bezier(.5,0,.9,.4)' }));
      flap.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: 'forwards' });
      $('.env-title', intro).animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' });
      $('.intro-glow', intro).animate([{ opacity: 1 }, { opacity: 0 }], { duration: 900, fill: 'forwards' });
      $('#skip').style.visibility = 'hidden';
    }, 2050);
    // 5. cross-fade into the page
    wait(() => finishIntro(450), 3050);
  }
  seal.addEventListener('click', () => openEnvelope(false));
  $('#skip').addEventListener('click', () => openEnvelope(true));
  if (params.has('nointro')) { intro.hidden = true; intro.style.display = 'none'; lock(false); }
  else { lock(true); window.scrollTo(0, 0); seal.focus({ preventScroll: true }); }
})();

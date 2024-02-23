var app = (function () {
    "use strict";
    function e() {}
    function t(e) {
      return e();
    }
    function n() {
      return Object.create(null);
    }
    function l(e) {
      e.forEach(t);
    }
    function r(e) {
      return "function" == typeof e;
    }
    function s(e, t) {
      return e != e
        ? t == t
        : e !== t || (e && "object" == typeof e) || "function" == typeof e;
    }
    let i, o;
    function c(e, t) {
      return i || (i = document.createElement("a")), (i.href = t), e === i.href;
    }
    function a(t, n, l) {
      t.$$.on_destroy.push(
        (function (t, ...n) {
          if (null == t) return e;
          const l = t.subscribe(...n);
          return l.unsubscribe ? () => l.unsubscribe() : l;
        })(n, l),
      );
    }
    function u(e, t, n, l) {
      if (e) {
        const r = d(e, t, n, l);
        return e[0](r);
      }
    }
    function d(e, t, n, l) {
      return e[1] && l
        ? (function (e, t) {
            for (const n in t) e[n] = t[n];
            return e;
          })(n.ctx.slice(), e[1](l(t)))
        : n.ctx;
    }
    function f(e, t, n, l) {
      if (e[2] && l) {
        const r = e[2](l(n));
        if (void 0 === t.dirty) return r;
        if ("object" == typeof r) {
          const e = [],
            n = Math.max(t.dirty.length, r.length);
          for (let l = 0; l < n; l += 1) e[l] = t.dirty[l] | r[l];
          return e;
        }
        return t.dirty | r;
      }
      return t.dirty;
    }
    function m(e, t, n, l, r, s) {
      if (r) {
        const i = d(t, n, l, s);
        e.p(i, r);
      }
    }
    function p(e) {
      if (e.ctx.length > 32) {
        const t = [],
          n = e.ctx.length / 32;
        for (let e = 0; e < n; e++) t[e] = -1;
        return t;
      }
      return -1;
    }
    function $(e, t) {
      e.appendChild(t);
    }
    function g(e, t, n) {
      e.insertBefore(t, n || null);
    }
    function h(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    function v(e, t) {
      for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
    }
    function b(e) {
      return document.createElement(e);
    }
    function y(e) {
      return document.createTextNode(e);
    }
    function x() {
      return y(" ");
    }
    function w() {
      return y("");
    }
    function k(e, t, n, l) {
      return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
    }
    function S(e, t, n) {
      null == n
        ? e.removeAttribute(t)
        : e.getAttribute(t) !== n && e.setAttribute(t, n);
    }
    function A(e, t) {
      (t = "" + t), e.wholeText !== t && (e.data = t);
    }
    function C(e, t, n, l) {
      null === n
        ? e.style.removeProperty(t)
        : e.style.setProperty(t, n, l ? "important" : "");
    }
    function T(e, t, n) {
      e.classList[n ? "add" : "remove"](t);
    }
    function j(e, t) {
      return new e(t);
    }
    function E(e) {
      o = e;
    }
    function B() {
      const e = (function () {
        if (!o)
          throw new Error("Function called outside component initialization");
        return o;
      })();
      return (t, n, { cancelable: l = !1 } = {}) => {
        const r = e.$$.callbacks[t];
        if (r) {
          const s = (function (
            e,
            t,
            { bubbles: n = !1, cancelable: l = !1 } = {},
          ) {
            const r = document.createEvent("CustomEvent");
            return r.initCustomEvent(e, n, l, t), r;
          })(t, n, { cancelable: l });
          return (
            r.slice().forEach((t) => {
              t.call(e, s);
            }),
            !s.defaultPrevented
          );
        }
        return !0;
      };
    }
    const I = [],
      z = [],
      L = [],
      N = [],
      _ = Promise.resolve();
    let D = !1;
    function M(e) {
      L.push(e);
    }
    const P = new Set();
    let q = 0;
    function W() {
      if (0 !== q) return;
      const e = o;
      do {
        try {
          for (; q < I.length; ) {
            const e = I[q];
            q++, E(e), F(e.$$);
          }
        } catch (e) {
          throw ((I.length = 0), (q = 0), e);
        }
        for (E(null), I.length = 0, q = 0; z.length; ) z.pop()();
        for (let e = 0; e < L.length; e += 1) {
          const t = L[e];
          P.has(t) || (P.add(t), t());
        }
        L.length = 0;
      } while (I.length);
      for (; N.length; ) N.pop()();
      (D = !1), P.clear(), E(e);
    }
    function F(e) {
      if (null !== e.fragment) {
        e.update(), l(e.before_update);
        const t = e.dirty;
        (e.dirty = [-1]),
          e.fragment && e.fragment.p(e.ctx, t),
          e.after_update.forEach(M);
      }
    }
    const R = new Set();
    let H;
    function O() {
      H = { r: 0, c: [], p: H };
    }
    function G() {
      H.r || l(H.c), (H = H.p);
    }
    function Q(e, t) {
      e && e.i && (R.delete(e), e.i(t));
    }
    function V(e, t, n, l) {
      if (e && e.o) {
        if (R.has(e)) return;
        R.add(e),
          H.c.push(() => {
            R.delete(e), l && (n && e.d(1), l());
          }),
          e.o(t);
      } else l && l();
    }
    function Y(e, t) {
      e.d(1), t.delete(e.key);
    }
    function U(e, t) {
      V(e, 1, 1, () => {
        t.delete(e.key);
      });
    }
    function J(e, t, n, l, r, s, i, o, c, a, u, d) {
      let f = e.length,
        m = s.length,
        p = f;
      const $ = {};
      for (; p--; ) $[e[p].key] = p;
      const g = [],
        h = new Map(),
        v = new Map();
      for (p = m; p--; ) {
        const e = d(r, s, p),
          o = n(e);
        let c = i.get(o);
        c ? l && c.p(e, t) : ((c = a(o, e)), c.c()),
          h.set(o, (g[p] = c)),
          o in $ && v.set(o, Math.abs(p - $[o]));
      }
      const b = new Set(),
        y = new Set();
      function x(e) {
        Q(e, 1), e.m(o, u), i.set(e.key, e), (u = e.first), m--;
      }
      for (; f && m; ) {
        const t = g[m - 1],
          n = e[f - 1],
          l = t.key,
          r = n.key;
        t === n
          ? ((u = t.first), f--, m--)
          : h.has(r)
            ? !i.has(l) || b.has(l)
              ? x(t)
              : y.has(r)
                ? f--
                : v.get(l) > v.get(r)
                  ? (y.add(l), x(t))
                  : (b.add(r), f--)
            : (c(n, i), f--);
      }
      for (; f--; ) {
        const t = e[f];
        h.has(t.key) || c(t, i);
      }
      for (; m; ) x(g[m - 1]);
      return g;
    }
    function K(e) {
      e && e.c();
    }
    function X(e, n, s, i) {
      const { fragment: o, after_update: c } = e.$$;
      o && o.m(n, s),
        i ||
          M(() => {
            const n = e.$$.on_mount.map(t).filter(r);
            e.$$.on_destroy ? e.$$.on_destroy.push(...n) : l(n),
              (e.$$.on_mount = []);
          }),
        c.forEach(M);
    }
    function Z(e, t) {
      const n = e.$$;
      null !== n.fragment &&
        (l(n.on_destroy),
        n.fragment && n.fragment.d(t),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []));
    }
    function ee(e, t) {
      -1 === e.$$.dirty[0] &&
        (I.push(e), D || ((D = !0), _.then(W)), e.$$.dirty.fill(0)),
        (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
    }
    function te(t, r, s, i, c, a, u, d = [-1]) {
      const f = o;
      E(t);
      const m = (t.$$ = {
        fragment: null,
        ctx: [],
        props: a,
        update: e,
        not_equal: c,
        bound: n(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(r.context || (f ? f.$$.context : [])),
        callbacks: n(),
        dirty: d,
        skip_bound: !1,
        root: r.target || f.$$.root,
      });
      u && u(m.root);
      let p = !1;
      if (
        ((m.ctx = s
          ? s(t, r.props || {}, (e, n, ...l) => {
              const r = l.length ? l[0] : n;
              return (
                m.ctx &&
                  c(m.ctx[e], (m.ctx[e] = r)) &&
                  (!m.skip_bound && m.bound[e] && m.bound[e](r), p && ee(t, e)),
                n
              );
            })
          : []),
        m.update(),
        (p = !0),
        l(m.before_update),
        (m.fragment = !!i && i(m.ctx)),
        r.target)
      ) {
        if (r.hydrate) {
          const e = (function (e) {
            return Array.from(e.childNodes);
          })(r.target);
          m.fragment && m.fragment.l(e), e.forEach(h);
        } else m.fragment && m.fragment.c();
        r.intro && Q(t.$$.fragment),
          X(t, r.target, r.anchor, r.customElement),
          W();
      }
      E(f);
    }
    class ne {
      $destroy() {
        Z(this, 1), (this.$destroy = e);
      }
      $on(t, n) {
        if (!r(n)) return e;
        const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          l.push(n),
          () => {
            const e = l.indexOf(n);
            -1 !== e && l.splice(e, 1);
          }
        );
      }
      $set(e) {
        var t;
        this.$$set &&
          ((t = e), 0 !== Object.keys(t).length) &&
          ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
      }
    }
    function le(t) {
      let n;
      return {
        c() {
          (n = b("div")),
            (n.innerHTML =
              '<ul class="box-area svelte-dxw7lp"><li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li> \n        <li class="svelte-dxw7lp"></li></ul>'),
            S(n, "class", "animation-area svelte-dxw7lp");
        },
        m(e, t) {
          g(e, n, t);
        },
        p: e,
        i: e,
        o: e,
        d(e) {
          e && h(n);
        },
      };
    }
    class re extends ne {
      constructor(e) {
        super(), te(this, e, null, le, s, {});
      }
    }
    function se(e, t, n) {
      const l = e.slice();
      return (l[4] = t[n]), l;
    }
    function ie(e, t) {
      let n,
        l,
        r,
        s,
        i,
        o,
        c,
        a,
        u,
        d = t[4].pageTitle + "";
      function f() {
        return t[2](t[4]);
      }
      return {
        key: e,
        first: null,
        c() {
          (n = b("li")),
            (l = b("i")),
            (s = x()),
            (i = b("span")),
            (o = y(d)),
            (c = x()),
            S(
              l,
              "class",
              (r = "mdi mdi-24px " + t[4].icon + " text-color svelte-11href6"),
            ),
            S(n, "class", "svelte-11href6"),
            T(n, "active", t[4].active),
            (this.first = n);
        },
        m(e, t) {
          g(e, n, t),
            $(n, l),
            $(n, s),
            $(n, i),
            $(i, o),
            $(n, c),
            a || ((u = k(n, "click", f)), (a = !0));
        },
        p(e, s) {
          (t = e),
            1 & s &&
              r !==
                (r =
                  "mdi mdi-24px " + t[4].icon + " text-color svelte-11href6") &&
              S(l, "class", r),
            1 & s && d !== (d = t[4].pageTitle + "") && A(o, d),
            1 & s && T(n, "active", t[4].active);
        },
        d(e) {
          e && h(n), (a = !1), u();
        },
      };
    }
    function oe(t) {
      let n,
        l,
        r = [],
        s = new Map(),
        i = t[0];
      const o = (e) => e[4].name;
      for (let e = 0; e < i.length; e += 1) {
        let n = se(t, i, e),
          l = o(n);
        s.set(l, (r[e] = ie(l, n)));
      }
      return {
        c() {
          (n = b("div")), (l = b("ul"));
          for (let e = 0; e < r.length; e += 1) r[e].c();
          S(l, "class", "uppercase svelte-11href6"),
            S(n, "class", "tabs svelte-11href6");
        },
        m(e, t) {
          g(e, n, t), $(n, l);
          for (let e = 0; e < r.length; e += 1) r[e].m(l, null);
        },
        p(e, [t]) {
          3 & t && ((i = e[0]), (r = J(r, t, o, 1, e, i, s, l, Y, ie, null, se)));
        },
        i: e,
        o: e,
        d(e) {
          e && h(n);
          for (let e = 0; e < r.length; e += 1) r[e].d();
        },
      };
    }
    function ce(e, t, n) {
      let { items: l = [] } = t;
      const r = B(),
        s = (e) => {
          r("tabChange", e),
            document
              .getElementById("drawer-anchor")
              .scrollIntoView({ behavior: "smooth", block: "start" });
        };
      return (
        (e.$$set = (e) => {
          "items" in e && n(0, (l = e.items));
        }),
        [l, s, (e) => s(e.name)]
      );
    }
    class ae extends ne {
      constructor(e) {
        super(), te(this, e, ce, oe, s, { items: 0 });
      }
    }
    const ue = [];
    var de = {
        name: "about",
        pageTitle: "About",
        icon: "mdi-account-cowboy-hat",
        greeting: "Hello, I am Ardit Dani.",
        description:
          "System Engineer experienced in IT Field, Computer Systems, Embedded Systems, Desktop and Networking. Currently working as a Data Tech at AWS - Amazon Web Services. Some of my previous work experience include industries sunch as Entertainment Games & Casino, IT Infrastructure in Restaurants, Online Sport Betting Systems, Data Centers, Free Open Source Project Translations.",
        birthYear: "1984",
        residence: "Frankfurt, Deutschland",
        freelance: "Unavailable",
        address: "Frankfurt, Deutschland",
        quote: "You learn by breaking stuff and disassembling them to pieces..",
        hobbies: [
          {
            title: "Football",
            icon: "mdi-soccer",
            description:
              "The Beautiful Game..it is by far my favourite game there is, i always try to find time to play in my spare time.",
          },
          {
            title: "Chess",
            icon: "mdi-chess-knight",
            description:
              "There is something special about chess..i am still looking to find out what it is by playing it.",
          },
          {
            title: "Technology",
            icon: "mdi-cog-sync",
            description:
              "My couriosity for technology has always been presend and i am always looking to learn something new.",
          },
        ],
      },
      fe = {
        name: "resume",
        pageTitle: "Resume",
        icon: "mdi-card-account-details",
        experience: {
          title: "Experience",
          icon: "mdi-tie",
          data: [
            {
              title: "Datacenter Operations Tech - L4",
              start: "07/2023",
              end: "present",
              company: "AWS-Amazon Web Services",
              description:
                "Improve/Optimizing Processes & Tasks to simply DC Technician's Operational Task. Creating training for internal used Tools/Programs/App's. Analyze internal tools/workflow constantly for bug's or other issues. Performing regularly/daily Audit's and Inspections of Rack's, Media Handling or Discrepancies. Trainer and providing guidance and learning path for new hires. On-boarding, Mentoring. Collaboration between other Team within AWS for daily activities in DC environment. POC for MDE's & Communication with producers. Assembly & Maintenance of MDE's. Deploy/Install new pilot MDE's equipment for FRA Cluster. Perform fully Rack Decommissioning Processes. Server and Network Troubleshooting, supporting team with technical escalation."
            },
            {
              title: "Decom Data-Tech L3",
              start: "04/2022",
              end: "07/2023",
              company: "AWS-Amazon Web Services",
              description:
                "Decommissioning legacy hardware/servers out of data center facilities. High volume of media destruction. Project activities coordination, equipment and tasks improvements. Work to meet SLA’s and trouble tickets system on workflow. Networking equipment removal/installation and configurations. Updating progress tasks through a ticketing system. Sanitization of networking equipment."
            },
            {
              title: "IT Specialist",
              start: "06/2017",
              end: "11/2019",
              company: "Lot Boutique Hotel",
              description:
                "Planning and implemenation of Fiber, LAN, IP Surveilance System, Fire Emergency System Infrastructure. Instalation of physical equipments. Rack, Servers, Routers, Fire Detection System, Guess Room Access System. ",
            },
            {
              title: "Electronic Engineer",
              start: "01/2011",
              end: "03/2019",
              company: "Sh.b - sha (Imperial Casino)",
              description:
                "Managing a team of 5 technicians. Responsible for implemenating new Gaming Machines. Roulette Machines, Online Monitoring Systems, Jackpot Systems, IP Security Surveilance System. Responsible for company office IT Infrastructure, Instalation and maintanance of Servers, Routers, Switches. Performing routine monitoring and validations of hardware and software, data recovery, testing platform. ",
            },
          ],
        },
        education: {
          title: "Education",
          icon: "mdi-school",
          data: [
            {
              major: "BTech",
              start: "09/2002",
              end: "07/2006",
              institute: "College of North West London",
              description: "GNVQ ICT Btech at College of North West London.",
            },
            {
              major: "AQA Numeracy",
              start: "09/2003",
              end: "07/2004",
              institute: "College of North West London",
              description: "AQA Numeracy Maths at College of North West London.",
            },
            {
              major: "ESOL",
              start: "09/2004",
              end: "07/2005",
              institute: "University of Cambridge",
              description:
                "English for Speakers of other languages, University of Cambridge Examination.",
            },
          ],
        },
        certificatesAndAwards: {
          title: "Certificates/Awards",
          icon: "mdi-medal",
          data: [
            {
              title: "Lead Auditor / Auditor",
              date: "11/2017",
              issuedBy: "AQSCert (Albania)",
              description: "Standart ISO/IEC 270001:2013.",
            },
            {
              title: "Serverless Developer",
              date: "01/2023",
              issuedBy: "Amazon Web Services (AWS)",
              description: "AWS Cloud Quest: Serverless Developer.",
            },
            {
              title: "Solution Architect",
              date: "01/2023",
              issuedBy: "Amazon Web Services (AWS)",
              description: "AWS Cloud Quest: Solution Architect.",
            },
          ],
        },
        academic: {
          title: "Volunteering",
          icon: "mdi-library-shelves",
          data: [
            {
              title: "Translator.",
              date: "02/2015",
              issuedBy: "https://mageia.org",
              description:
                "Translation of Open Source Linux Mageia to Albanian Language.",
            },
            {
              title: "Translator.",
              date: "04/2014",
              issuedBy: "https://transifex.com",
              description:
                "Translation of multiple Open Source Project to Albanian Language.",
            },
          ],
        },
        skills: [
          {
            title: "Technical Support",
            barType: "line",
            icon: "mdi-cog-clockwise",
            items: [
              { title: "Horizontally", level: 80 },
              { title: "Vertically", level: 90 },
            ],
          },
          {
            title: "Electronics",
            barType: "line",
            icon: "mdi-brush-variant",
            items: [
              { title: "Hardware", level: 90 },
              { title: "Circuits", level: 80 },
              { title: "Design", level: 75 },
            ],
          },
          {
            title: "Languages",
            barType: "dots",
            icon: "mdi-earth",
            items: [
              { title: "Albanian", level: 100 },
              { title: "English", level: 94 },
              { title: "Italian", level: 94 },
              { title: "German", level: 75 },
            ],
          },
          {
            title: "Knowledge",
            barType: "dots",
            icon: "mdi-book-open-page-variant",
            items: [
              { title: "Linux", level: 94 },
              { title: "Soldering", level: 91 },
            ],
          },
        ],
      },
      me = {
        name: "services",
        pageTitle: "Services",
        header: "Support Provider",
        icon: "mdi-monitor-shimmer",
        footer: "Fast and Reliable.",
        products: [
          {
            title: "Hardware",
            icon: "mdi-cog-outline",
            description:
              "Support dealing with hardware in multiply technological field areas. Planning and implemenating different type of systems based on requirements.",
          },
          {
            title: "Planning",
            icon: "mdi-webpack",
            description:
              "Planning and implemenating small-medium sized project of all type of systems requirements.",
          },
        ],
      },
      pe = {
        name: "contact",
        pageTitle: "Contact",
        header: "Drop a Line",
        icon: "mdi-send",
        mapsIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40936.86159384839!2d8.690961032104472!3d50.113357301321734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1677195227602!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        address: "Frankfurt, Deutschland",
        hours: "9AM - 5PM",
        email: "ardit.dani@gmail.com",
        tel: "+1 234 567 8900",
      };
    const $e =
        "https://pic.vsixhub.com/eb/76/c5463f77-75d9-4a25-8cc4-d8541a461285-logo.png",
      ge = "Ardit Dani | Personal Page",
      he = [
        {
          name: "description",
          content: "Ardit Dani is a Data Tech at AWS, based in Frankfurt.",
        },
        {
          name: "keywords",
          content:
            "ardit,dani,personal,site,engineer,software,web,desktop,aws,Frankfurt,reliable,resume",
        },
      ],
      ve = (function (t, n = e) {
        let l;
        const r = new Set();
        function i(e) {
          if (s(t, e) && ((t = e), l)) {
            const e = !ue.length;
            for (const e of r) e[1](), ue.push(e, t);
            if (e) {
              for (let e = 0; e < ue.length; e += 2) ue[e][0](ue[e + 1]);
              ue.length = 0;
            }
          }
        }
        return {
          set: i,
          update: function (e) {
            i(e(t));
          },
          subscribe: function (s, o = e) {
            const c = [s, o];
            return (
              r.add(c),
              1 === r.size && (l = n(i) || e),
              s(t),
              () => {
                r.delete(c), 0 === r.size && (l(), (l = null));
              }
            );
          },
        };
      })([
        ...[de, fe, me, pe].map((e) => ({ active: "about" === e.name, ...e })),
      ]);
    function be(e) {
      let t, n, l;
      return (
        (n = new ae({ props: { items: e[0] } })),
        n.$on("tabChange", e[1]),
        {
          c() {
            (t = b("div")),
              K(n.$$.fragment),
              S(t, "class", "grid-item-header mt-2 svelte-y17zse");
          },
          m(e, r) {
            g(e, t, r), X(n, t, null), (l = !0);
          },
          p(e, [t]) {
            const l = {};
            1 & t && (l.items = e[0]), n.$set(l);
          },
          i(e) {
            l || (Q(n.$$.fragment, e), (l = !0));
          },
          o(e) {
            V(n.$$.fragment, e), (l = !1);
          },
          d(e) {
            e && h(t), Z(n);
          },
        }
      );
    }
    function ye(e, t, n) {
      let l;
      a(e, ve, (e) => n(0, (l = e)));
      return [
        l,
        (e) => {
          const t = e.detail;
          ve.update((e) => {
            let n = [...e];
            return (
              n.forEach((e) => {
                e.active = e.name === t;
              }),
              n
            );
          });
        },
      ];
    }
    class xe extends ne {
      constructor(e) {
        super(), te(this, e, ye, be, s, {});
      }
    }
    var we = {
      coverImage:
        "https://raw.githubusercontent.com/Ard1t/ard1t.github.io/main/images/hardware.jpg",
      profileImage: "https://avatars.githubusercontent.com/u/1041415?v=4",
      fullName: "Ardit Dani",
      profession: "Data Tech L3",
      cv: {
        url: "http://www.msnlabs.com/img/resume-sample.pdf",
        icon: "mdi-download",
      },
      email: { address: "ardit.dani@gmail.com", icon: "mdi-email-send" },
      links: [
        { title: "Github", url: "https://github.com/Ard1t", icon: "mdi-github" },
        {
          title: "Linkedin",
          url: "https://linkedin.com/in/ardit-dani",
          icon: "mdi-linkedin",
        },
      ],
    };
    function ke(e, t, n) {
      const l = e.slice();
      return (l[1] = t[n]), l;
    }
    function Se(e) {
      let t, n, l, r, s;
      return {
        c() {
          (t = b("a")),
            (n = b("i")),
            (r = x()),
            S(
              n,
              "class",
              (l = "mdi mdi-24px " + e[1].icon + " text-color svelte-nrf3kx"),
            ),
            S(t, "class", "mr-1 svelte-nrf3kx"),
            S(t, "href", (s = e[1].url)),
            S(t, "target", "_blank");
        },
        m(e, l) {
          g(e, t, l), $(t, n), $(t, r);
        },
        p(e, r) {
          1 & r &&
            l !==
              (l = "mdi mdi-24px " + e[1].icon + " text-color svelte-nrf3kx") &&
            S(n, "class", l),
            1 & r && s !== (s = e[1].url) && S(t, "href", s);
        },
        d(e) {
          e && h(t);
        },
      };
    }
    function Ae(t) {
      let n,
        l = t[0],
        r = [];
      for (let e = 0; e < l.length; e += 1) r[e] = Se(ke(t, l, e));
      return {
        c() {
          n = b("ul");
          for (let e = 0; e < r.length; e += 1) r[e].c();
          S(n, "class", "social-media mt-1 svelte-nrf3kx");
        },
        m(e, t) {
          g(e, n, t);
          for (let e = 0; e < r.length; e += 1) r[e].m(n, null);
        },
        p(e, [t]) {
          if (1 & t) {
            let s;
            for (l = e[0], s = 0; s < l.length; s += 1) {
              const i = ke(e, l, s);
              r[s] ? r[s].p(i, t) : ((r[s] = Se(i)), r[s].c(), r[s].m(n, null));
            }
            for (; s < r.length; s += 1) r[s].d(1);
            r.length = l.length;
          }
        },
        i: e,
        o: e,
        d(e) {
          e && h(n), v(r, e);
        },
      };
    }
    function Ce(e, t, n) {
      let { links: l = [] } = t;
      return (
        (e.$$set = (e) => {
          "links" in e && n(0, (l = e.links));
        }),
        [l]
      );
    }
    class Te extends ne {
      constructor(e) {
        super(), te(this, e, Ce, Ae, s, { links: 0 });
      }
    }
    function je(t) {
      let n, r, s, i, o, c, a, u, d, f, m, p, v, y, w, A;
      return {
        c() {
          (n = b("div")),
            (r = b("button")),
            (s = b("span")),
            (s.textContent = "CV"),
            (i = x()),
            (o = b("i")),
            (a = x()),
            (u = b("div")),
            (d = x()),
            (f = b("button")),
            (m = b("span")),
            (m.textContent = "e-mail"),
            (p = x()),
            (v = b("i")),
            S(
              o,
              "class",
              (c =
                "mdi mdi-18px ml-1 " + t[0].icon + " text-color svelte-1fap73r"),
            ),
            S(r, "class", "btn download-cv uppercase svelte-1fap73r"),
            S(u, "class", "splitter svelte-1fap73r"),
            S(
              v,
              "class",
              (y =
                "mdi mdi-18px ml-1 " + t[1].icon + " text-color svelte-1fap73r"),
            ),
            S(f, "class", "btn email-me uppercase svelte-1fap73r"),
            S(n, "class", "bottom-buttons svelte-1fap73r");
        },
        m(e, l) {
          g(e, n, l),
            $(n, r),
            $(r, s),
            $(r, i),
            $(r, o),
            $(n, a),
            $(n, u),
            $(n, d),
            $(n, f),
            $(f, m),
            $(f, p),
            $(f, v),
            w || ((A = [k(r, "click", t[2]), k(f, "click", t[3])]), (w = !0));
        },
        p(e, [t]) {
          1 & t &&
            c !==
              (c =
                "mdi mdi-18px ml-1 " +
                e[0].icon +
                " text-color svelte-1fap73r") &&
            S(o, "class", c),
            2 & t &&
              y !==
                (y =
                  "mdi mdi-18px ml-1 " +
                  e[1].icon +
                  " text-color svelte-1fap73r") &&
              S(v, "class", y);
        },
        i: e,
        o: e,
        d(e) {
          e && h(n), (w = !1), l(A);
        },
      };
    }
    function Ee(e, t, n) {
      let { cv: l = "" } = t,
        { email: r = "" } = t;
      return (
        (e.$$set = (e) => {
          "cv" in e && n(0, (l = e.cv)), "email" in e && n(1, (r = e.email));
        }),
        [
          l,
          r,
          () => window.location.assign(l.url),
          () => (window.location.href = `mailto:${r.address}?subject=Hello`),
        ]
      );
    }
    class Be extends ne {
      constructor(e) {
        super(), te(this, e, Ee, je, s, { cv: 0, email: 1 });
      }
    }
    function Ie(t) {
      let n, l, r, s, i, o, a, u, d, f, m, p, v, y, w, k, A, C, T, j;
      return (
        (A = new Te({ props: { links: we.links } })),
        (T = new Be({ props: { cv: we.cv, email: we.email } })),
        {
          c() {
            (n = b("div")),
              (l = b("div")),
              (r = b("div")),
              (s = b("img")),
              (o = x()),
              (a = b("div")),
              (u = b("img")),
              (f = x()),
              (m = b("div")),
              (p = b("h1")),
              (p.textContent = `${we.fullName}`),
              (v = x()),
              (y = b("div")),
              (w = b("span")),
              (w.textContent = `${we.profession}`),
              (k = x()),
              K(A.$$.fragment),
              (C = x()),
              K(T.$$.fragment),
              S(s, "class", "banner svelte-1av93ij"),
              c(s.src, (i = we.coverImage)) || S(s, "src", i),
              S(s, "alt", "banner"),
              S(r, "class", "banner-container svelte-1av93ij"),
              c(u.src, (d = we.profileImage)) || S(u, "src", d),
              S(u, "alt", "profile pic"),
              S(u, "class", "profile-pic svelte-1av93ij"),
              S(a, "class", "profile-pic-container svelte-1av93ij"),
              S(p, "id", "full-name"),
              S(p, "class", "svelte-1av93ij"),
              S(m, "class", "full-name"),
              S(w, "class", "block primary-color"),
              S(w, "id", "profession"),
              S(y, "class", "subtitle svelte-1av93ij"),
              S(l, "class", "profile-content"),
              S(n, "class", "grid-item-profile svelte-1av93ij");
          },
          m(e, t) {
            g(e, n, t),
              $(n, l),
              $(l, r),
              $(r, s),
              $(l, o),
              $(l, a),
              $(a, u),
              $(l, f),
              $(l, m),
              $(m, p),
              $(l, v),
              $(l, y),
              $(y, w),
              $(l, k),
              X(A, l, null),
              $(l, C),
              X(T, l, null),
              (j = !0);
          },
          p: e,
          i(e) {
            j || (Q(A.$$.fragment, e), Q(T.$$.fragment, e), (j = !0));
          },
          o(e) {
            V(A.$$.fragment, e), V(T.$$.fragment, e), (j = !1);
          },
          d(e) {
            e && h(n), Z(A), Z(T);
          },
        }
      );
    }
    class ze extends ne {
      constructor(e) {
        super(), te(this, e, null, Ie, s, {});
      }
    }
    function Le(e) {
      let t,
        n = e[0].value + "";
      return {
        c() {
          t = y(n);
        },
        m(e, n) {
          g(e, t, n);
        },
        p(e, l) {
          1 & l && n !== (n = e[0].value + "") && A(t, n);
        },
        d(e) {
          e && h(t);
        },
      };
    }
    function Ne(e) {
      let t,
        n,
        l,
        r = e[0].value + "";
      return {
        c() {
          (t = b("a")), (n = y(r)), S(t, "href", (l = "tel:" + e[0].value));
        },
        m(e, l) {
          g(e, t, l), $(t, n);
        },
        p(e, s) {
          1 & s && r !== (r = e[0].value + "") && A(n, r),
            1 & s && l !== (l = "tel:" + e[0].value) && S(t, "href", l);
        },
        d(e) {
          e && h(t);
        },
      };
    }
    function _e(e) {
      let t,
        n,
        l,
        r = e[0].value + "";
      return {
        c() {
          (t = b("a")),
            (n = y(r)),
            S(t, "class", "lowercase"),
            S(t, "href", (l = "mailto:" + e[0].value));
        },
        m(e, l) {
          g(e, t, l), $(t, n);
        },
        p(e, s) {
          1 & s && r !== (r = e[0].value + "") && A(n, r),
            1 & s && l !== (l = "mailto:" + e[0].value) && S(t, "href", l);
        },
        d(e) {
          e && h(t);
        },
      };
    }
    function De(t) {
      let n,
        l,
        r,
        s,
        i,
        o,
        c = t[0].name + "";
      function a(e, t) {
        return "email" === e[0].name ? _e : "tel" === e[0].name ? Ne : Le;
      }
      let u = a(t),
        d = u(t);
      return {
        c() {
          (n = b("div")),
            (l = b("span")),
            (r = y(c)),
            (s = y(":")),
            (i = x()),
            (o = b("span")),
            d.c(),
            S(l, "class", "mr-2"),
            S(o, "class", "right"),
            S(n, "class", "field svelte-j9849");
        },
        m(e, t) {
          g(e, n, t), $(n, l), $(l, r), $(l, s), $(n, i), $(n, o), d.m(o, null);
        },
        p(e, [t]) {
          1 & t && c !== (c = e[0].name + "") && A(r, c),
            u === (u = a(e)) && d
              ? d.p(e, t)
              : (d.d(1), (d = u(e)), d && (d.c(), d.m(o, null)));
        },
        i: e,
        o: e,
        d(e) {
          e && h(n), d.d();
        },
      };
    }
    function Me(e, t, n) {
      let { field: l = { name: "", value: "" } } = t;
      return (
        (e.$$set = (e) => {
          "field" in e && n(0, (l = e.field));
        }),
        [l]
      );
    }
    class Pe extends ne {
      constructor(e) {
        super(), te(this, e, Me, De, s, { field: 0 });
      }
    }
    function qe(e, t, n) {
      const l = e.slice();
      return (l[1] = t[n]), (l[3] = n), l;
    }
    function We(e) {
      let t,
        n,
        l =
          e[3] % 2 == 0 &&
          (function (e) {
            let t, n, l, r, s, i;
            return (
              (n = new Pe({ props: { field: e[1] } })),
              (r = new Pe({ props: { field: e[0][e[3] + 1] } })),
              {
                c() {
                  (t = b("div")),
                    K(n.$$.fragment),
                    (l = x()),
                    K(r.$$.fragment),
                    (s = x()),
                    S(t, "class", "field-group mr-1 svelte-1azyi27");
                },
                m(e, o) {
                  g(e, t, o),
                    X(n, t, null),
                    $(t, l),
                    X(r, t, null),
                    $(t, s),
                    (i = !0);
                },
                p(e, t) {
                  const l = {};
                  1 & t && (l.field = e[1]), n.$set(l);
                  const s = {};
                  1 & t && (s.field = e[0][e[3] + 1]), r.$set(s);
                },
                i(e) {
                  i || (Q(n.$$.fragment, e), Q(r.$$.fragment, e), (i = !0));
                },
                o(e) {
                  V(n.$$.fragment, e), V(r.$$.fragment, e), (i = !1);
                },
                d(e) {
                  e && h(t), Z(n), Z(r);
                },
              }
            );
          })(e);
      return {
        c() {
          l && l.c(), (t = w());
        },
        m(e, r) {
          l && l.m(e, r), g(e, t, r), (n = !0);
        },
        p(e, t) {
          e[3] % 2 == 0 && l.p(e, t);
        },
        i(e) {
          n || (Q(l), (n = !0));
        },
        o(e) {
          V(l), (n = !1);
        },
        d(e) {
          l && l.d(e), e && h(t);
        },
      };
    }
    function Fe(e) {
      let t,
        n,
        l = e[0],
        r = [];
      for (let t = 0; t < l.length; t += 1) r[t] = We(qe(e, l, t));
      const s = (e) =>
        V(r[e], 1, 1, () => {
          r[e] = null;
        });
      return {
        c() {
          t = b("div");
          for (let e = 0; e < r.length; e += 1) r[e].c();
          S(t, "class", "fields uppercase svelte-1azyi27");
        },
        m(e, l) {
          g(e, t, l);
          for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
          n = !0;
        },
        p(e, [n]) {
          if (1 & n) {
            let i;
            for (l = e[0], i = 0; i < l.length; i += 1) {
              const s = qe(e, l, i);
              r[i]
                ? (r[i].p(s, n), Q(r[i], 1))
                : ((r[i] = We(s)), r[i].c(), Q(r[i], 1), r[i].m(t, null));
            }
            for (O(), i = l.length; i < r.length; i += 1) s(i);
            G();
          }
        },
        i(e) {
          if (!n) {
            for (let e = 0; e < l.length; e += 1) Q(r[e]);
            n = !0;
          }
        },
        o(e) {
          r = r.filter(Boolean);
          for (let e = 0; e < r.length; e += 1) V(r[e]);
          n = !1;
        },
        d(e) {
          e && h(t), v(r, e);
        },
      };
    }
    function Re(e, t, n) {
      let { fields: l = [] } = t;
      return (
        (e.$$set = (e) => {
          "fields" in e && n(0, (l = e.fields));
        }),
        [l]
      );
    }
    class He extends ne {
      constructor(e) {
        super(), te(this, e, Re, Fe, s, { fields: 0 });
      }
    }
    function Oe(t) {
      let n, l, r, s, i, o, c;
      return {
        c() {
          (n = b("div")),
            (l = b("span")),
            (l.textContent = '"'),
            (r = x()),
            (s = b("blockquote")),
            (i = y(t[0])),
            (o = x()),
            (c = b("span")),
            (c.textContent = '"'),
            S(l, "class", "left mt-1 primary-color svelte-sc5p3t"),
            C(l, "margin-left", "-10px"),
            S(c, "class", "right mt-3 mr-1 primary-color svelte-sc5p3t"),
            S(n, "class", "quote svelte-sc5p3t");
        },
        m(e, t) {
          g(e, n, t), $(n, l), $(n, r), $(n, s), $(s, i), $(n, o), $(n, c);
        },
        p(e, [t]) {
          1 & t && A(i, e[0]);
        },
        i: e,
        o: e,
        d(e) {
          e && h(n);
        },
      };
    }
    function Ge(e, t, n) {
      let { quote: l = "" } = t;
      return (
        (e.$$set = (e) => {
          "quote" in e && n(0, (l = e.quote));
        }),
        [l]
      );
    }
    class Qe extends ne {
      constructor(e) {
        super(), te(this, e, Ge, Oe, s, { quote: 0 });
      }
    }
    function Ve(e) {
      let t, n;
      const l = e[1].default,
        r = u(l, e, e[0], null);
      return {
        c() {
          (t = b("div")), r && r.c(), S(t, "class", "card svelte-uvh3go");
        },
        m(e, l) {
          g(e, t, l), r && r.m(t, null), (n = !0);
        },
        p(e, [t]) {
          r &&
            r.p &&
            (!n || 1 & t) &&
            m(r, l, e, e[0], n ? f(l, e[0], t, null) : p(e[0]), null);
        },
        i(e) {
          n || (Q(r, e), (n = !0));
        },
        o(e) {
          V(r, e), (n = !1);
        },
        d(e) {
          e && h(t), r && r.d(e);
        },
      };
    }
    function Ye(e, t, n) {
      let { $$slots: l = {}, $$scope: r } = t;
      return (
        (e.$$set = (e) => {
          "$$scope" in e && n(0, (r = e.$$scope));
        }),
        [r, l]
      );
    }
    class Ue extends ne {
      constructor(e) {
        super(), te(this, e, Ye, Ve, s, {});
      }
    }
    function Je(e) {
      let t,
        n,
        l,
        r,
        s,
        i,
        o,
        c = e[0].title + "",
        a = e[0].description + "";
      return {
        c() {
          (t = b("div")),
            (n = b("i")),
            (r = x()),
            (s = y(c)),
            (i = y(" - ")),
            (o = y(a)),
            S(
              n,
              "class",
              (l =
                "mdi mdi-48px " +
                e[0].icon +
                " primary-color mr-1 svelte-1mkegbz"),
            ),
            S(t, "class", "hobby-container svelte-1mkegbz");
        },
        m(e, l) {
          g(e, t, l), $(t, n), $(t, r), $(t, s), $(t, i), $(t, o);
        },
        p(e, t) {
          1 & t &&
            l !==
              (l =
                "mdi mdi-48px " +
                e[0].icon +
                " primary-color mr-1 svelte-1mkegbz") &&
            S(n, "class", l),
            1 & t && c !== (c = e[0].title + "") && A(s, c),
            1 & t && a !== (a = e[0].description + "") && A(o, a);
        },
        d(e) {
          e && h(t);
        },
      };
    }
    function Ke(e) {
      let t, n;
      return (
        (t = new Ue({
          props: { $$slots: { default: [Je] }, $$scope: { ctx: e } },
        })),
        {
          c() {
            K(t.$$.fragment);
          },
          m(e, l) {
            X(t, e, l), (n = !0);
          },
          p(e, [n]) {
            const l = {};
            3 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
          },
          i(e) {
            n || (Q(t.$$.fragment, e), (n = !0));
          },
          o(e) {
            V(t.$$.fragment, e), (n = !1);
          },
          d(e) {
            Z(t, e);
          },
        }
      );
    }
    function Xe(e, t, n) {
      let { hobby: l = { title: "", icon: "", description: "" } } = t;
      return (
        (e.$$set = (e) => {
          "hobby" in e && n(0, (l = e.hobby));
        }),
        [l]
      );
    }
    class Ze extends ne {
      constructor(e) {
        super(), te(this, e, Xe, Ke, s, { hobby: 0 });
      }
    }
    function et(e, t, n) {
      const l = e.slice();
      return (l[1] = t[n]), l;
    }
    function tt(t) {
      let n, l, r, s;
      return (
        (l = new Ze({ props: { hobby: t[1] } })),
        {
          c() {
            (n = b("div")), K(l.$$.fragment), (r = x()), S(n, "class", "mb-1");
          },
          m(e, t) {
            g(e, n, t), X(l, n, null), $(n, r), (s = !0);
          },
          p: e,
          i(e) {
            s || (Q(l.$$.fragment, e), (s = !0));
          },
          o(e) {
            V(l.$$.fragment, e), (s = !1);
          },
          d(e) {
            e && h(n), Z(l);
          },
        }
      );
    }
    function nt(e) {
      let t, n, l, r, s, i, o, c, a, u, d;
      (o = new He({ props: { fields: e[0] } })),
        (a = new Qe({ props: { quote: de.quote } }));
      let f =
        !!de.hobbies &&
        (function (e) {
          let t,
            n,
            l,
            r,
            s = de.hobbies,
            i = [];
          for (let t = 0; t < s.length; t += 1) i[t] = tt(et(e, s, t));
          const o = (e) =>
            V(i[e], 1, 1, () => {
              i[e] = null;
            });
          return {
            c() {
              (t = b("span")),
                (t.textContent = "Hobbies"),
                (n = x()),
                (l = b("div"));
              for (let e = 0; e < i.length; e += 1) i[e].c();
              S(t, "class", "block mt-3 bold mb-3");
            },
            m(e, s) {
              g(e, t, s), g(e, n, s), g(e, l, s);
              for (let e = 0; e < i.length; e += 1) i[e].m(l, null);
              r = !0;
            },
            p(e, t) {
              if (0 & t) {
                let n;
                for (s = de.hobbies, n = 0; n < s.length; n += 1) {
                  const r = et(e, s, n);
                  i[n]
                    ? (i[n].p(r, t), Q(i[n], 1))
                    : ((i[n] = tt(r)), i[n].c(), Q(i[n], 1), i[n].m(l, null));
                }
                for (O(), n = s.length; n < i.length; n += 1) o(n);
                G();
              }
            },
            i(e) {
              if (!r) {
                for (let e = 0; e < s.length; e += 1) Q(i[e]);
                r = !0;
              }
            },
            o(e) {
              i = i.filter(Boolean);
              for (let e = 0; e < i.length; e += 1) V(i[e]);
              r = !1;
            },
            d(e) {
              e && h(t), e && h(n), e && h(l), v(i, e);
            },
          };
        })(e);
      return {
        c() {
          (t = b("div")),
            (n = b("span")),
            (n.textContent = `${de.greeting}`),
            (l = x()),
            (r = b("p")),
            (r.textContent = `${de.description}`),
            (s = x()),
            (i = b("div")),
            K(o.$$.fragment),
            (c = x()),
            K(a.$$.fragment),
            (u = x()),
            f && f.c(),
            S(n, "class", "block bold"),
            S(r, "class", "description mb-3 svelte-pm7kco"),
            S(i, "class", "mb-3"),
            S(t, "class", "about-container");
        },
        m(e, m) {
          g(e, t, m),
            $(t, n),
            $(t, l),
            $(t, r),
            $(t, s),
            $(t, i),
            X(o, i, null),
            $(t, c),
            X(a, t, null),
            $(t, u),
            f && f.m(t, null),
            (d = !0);
        },
        p(e, [t]) {
          de.hobbies && f.p(e, t);
        },
        i(e) {
          d || (Q(o.$$.fragment, e), Q(a.$$.fragment, e), Q(f), (d = !0));
        },
        o(e) {
          V(o.$$.fragment, e), V(a.$$.fragment, e), V(f), (d = !1);
        },
        d(e) {
          e && h(t), Z(o), Z(a), f && f.d();
        },
      };
    }
    function lt(e) {
      return [
        [
          { name: "age", value: new Date().getFullYear() - de.birthYear || 2e3 },
          { name: "residence", value: de.residence },
          { name: "freelance", value: de.freelance },
          { name: "address", value: de.address },
        ],
      ];
    }
    class rt extends ne {
      constructor(e) {
        super(), te(this, e, lt, nt, s, {});
      }
    }
    function st(e) {
      let t,
        n,
        l,
        r,
        s,
        i,
        o,
        c,
        a,
        d = e[0].title + "";
      const v = e[2].default,
        w = u(v, e, e[1], null);
      return {
        c() {
          (t = b("div")),
            (n = b("div")),
            (l = b("i")),
            (s = x()),
            (i = b("span")),
            (o = y(d)),
            (c = x()),
            w && w.c(),
            S(
              l,
              "class",
              (r =
                "mdi mdi-48px " +
                e[0].icon +
                " mr-1 primary-color svelte-prgd0z"),
            ),
            S(i, "class", "uppercase"),
            S(n, "class", "section-title svelte-prgd0z");
        },
        m(e, r) {
          g(e, t, r),
            $(t, n),
            $(n, l),
            $(n, s),
            $(n, i),
            $(i, o),
            $(t, c),
            w && w.m(t, null),
            (a = !0);
        },
        p(e, [t]) {
          (!a ||
            (1 & t &&
              r !==
                (r =
                  "mdi mdi-48px " +
                  e[0].icon +
                  " mr-1 primary-color svelte-prgd0z"))) &&
            S(l, "class", r),
            (!a || 1 & t) && d !== (d = e[0].title + "") && A(o, d),
            w &&
              w.p &&
              (!a || 2 & t) &&
              m(w, v, e, e[1], a ? f(v, e[1], t, null) : p(e[1]), null);
        },
        i(e) {
          a || (Q(w, e), (a = !0));
        },
        o(e) {
          V(w, e), (a = !1);
        },
        d(e) {
          e && h(t), w && w.d(e);
        },
      };
    }
    function it(e, t, n) {
      let { $$slots: l = {}, $$scope: r } = t,
        { item: s = { title: "", icon: "" } } = t;
      return (
        (e.$$set = (e) => {
          "item" in e && n(0, (s = e.item)),
            "$$scope" in e && n(1, (r = e.$$scope));
        }),
        [s, r, l]
      );
    }
    class ot extends ne {
      constructor(e) {
        super(), te(this, e, it, st, s, { item: 0 });
      }
    }
    function ct(t) {
      let n,
        l,
        r,
        s,
        i,
        o,
        c,
        a,
        u,
        d,
        f,
        m,
        p,
        v,
        w,
        k = t[0].start + "",
        C = t[0].end + "",
        T = t[0].title + "",
        j = t[0].company + "",
        E = t[0].description + "";
      return {
        c() {
          (n = b("div")),
            (l = b("div")),
            (r = b("span")),
            (s = y(k)),
            (i = y(" - ")),
            (o = y(C)),
            (c = x()),
            (a = b("span")),
            (u = y(T)),
            (d = x()),
            (f = b("span")),
            (m = y(j)),
            (p = x()),
            (v = b("div")),
            (w = y(E)),
            S(r, "class", "duration svelte-1p85ix5"),
            S(a, "class", "block uppercase"),
            S(f, "class", "block company svelte-1p85ix5"),
            S(v, "class", "description svelte-1p85ix5"),
            S(n, "class", "experience mt-2 mb-2 svelte-1p85ix5");
        },
        m(e, t) {
          g(e, n, t),
            $(n, l),
            $(l, r),
            $(r, s),
            $(r, i),
            $(r, o),
            $(n, c),
            $(n, a),
            $(a, u),
            $(n, d),
            $(n, f),
            $(f, m),
            $(n, p),
            $(n, v),
            $(v, w);
        },
        p(e, [t]) {
          1 & t && k !== (k = e[0].start + "") && A(s, k),
            1 & t && C !== (C = e[0].end + "") && A(o, C),
            1 & t && T !== (T = e[0].title + "") && A(u, T),
            1 & t && j !== (j = e[0].company + "") && A(m, j),
            1 & t && E !== (E = e[0].description + "") && A(w, E);
        },
        i: e,
        o: e,
        d(e) {
          e && h(n);
        },
      };
    }
    function at(e, t, n) {
      let {
        experience: l = {
          title: "",
          start: "",
          end: "",
          company: "",
          description: "",
        },
      } = t;
      return (
        (e.$$set = (e) => {
          "experience" in e && n(0, (l = e.experience));
        }),
        [l]
      );
    }
    class ut extends ne {
      constructor(e) {
        super(), te(this, e, at, ct, s, { experience: 0 });
      }
    }
    function dt(t) {
      let n,
        l,
        r,
        s,
        i,
        o,
        c,
        a,
        u,
        d,
        f,
        m,
        p,
        v,
        w,
        k = t[0].start + "",
        C = t[0].end + "",
        T = t[0].major + "",
        j = t[0].institute + "",
        E = t[0].description + "";
      return {
        c() {
          (n = b("div")),
            (l = b("div")),
            (r = b("span")),
            (s = y(k)),
            (i = y(" - ")),
            (o = y(C)),
            (c = x()),
            (a = b("span")),
            (u = y(T)),
            (d = x()),
            (f = b("span")),
            (m = y(j)),
            (p = x()),
            (v = b("div")),
            (w = y(E)),
            S(r, "class", "duration svelte-1ljglih"),
            S(a, "class", "block uppercase"),
            S(f, "class", "block institute svelte-1ljglih"),
            S(v, "class", "description svelte-1ljglih"),
            S(n, "class", "education mt-2 mb-2 svelte-1ljglih");
        },
        m(e, t) {
          g(e, n, t),
            $(n, l),
            $(l, r),
            $(r, s),
            $(r, i),
            $(r, o),
            $(n, c),
            $(n, a),
            $(a, u),
            $(n, d),
            $(n, f),
            $(f, m),
            $(n, p),
            $(n, v),
            $(v, w);
        },
        p(e, [t]) {
          1 & t && k !== (k = e[0].start + "") && A(s, k),
            1 & t && C !== (C = e[0].end + "") && A(o, C),
            1 & t && T !== (T = e[0].major + "") && A(u, T),
            1 & t && j !== (j = e[0].institute + "") && A(m, j),
            1 & t && E !== (E = e[0].description + "") && A(w, E);
        },
        i: e,
        o: e,
        d(e) {
          e && h(n);
        },
      };
    }
    function ft(e, t, n) {
      let {
        education: l = {
          major: "",
          start: "",
          end: "",
          institute: "",
          description: "",
        },
      } = t;
      return (
        (e.$$set = (e) => {
          "education" in e && n(0, (l = e.education));
        }),
        [l]
      );
    }
    class mt extends ne {
      constructor(e) {
        super(), te(this, e, ft, dt, s, { education: 0 });
      }
    }
    function pt(t) {
      let n,
        l,
        r,
        s,
        i,
        o,
        c,
        a,
        u,
        d,
        f,
        m,
        p,
        v = t[0].date + "",
        w = t[0].title + "",
        k = t[0].issuedBy + "",
        C = t[0].description + "";
      return {
        c() {
          (n = b("div")),
            (l = b("div")),
            (r = b("span")),
            (s = y(v)),
            (i = x()),
            (o = b("span")),
            (c = y(w)),
            (a = x()),
            (u = b("span")),
            (d = y(k)),
            (f = x()),
            (m = b("div")),
            (p = y(C)),
            S(r, "class", "duration svelte-u0g1dt"),
            S(o, "class", "block uppercase"),
            S(u, "class", "block issued-by svelte-u0g1dt"),
            S(m, "class", "description svelte-u0g1dt"),
            S(n, "class", "award mt-2 mb-2 svelte-u0g1dt");
        },
        m(e, t) {
          g(e, n, t),
            $(n, l),
            $(l, r),
            $(r, s),
            $(n, i),
            $(n, o),
            $(o, c),
            $(n, a),
            $(n, u),
            $(u, d),
            $(n, f),
            $(n, m),
            $(m, p);
        },
        p(e, [t]) {
          1 & t && v !== (v = e[0].date + "") && A(s, v),
            1 & t && w !== (w = e[0].title + "") && A(c, w),
            1 & t && k !== (k = e[0].issuedBy + "") && A(d, k),
            1 & t && C !== (C = e[0].description + "") && A(p, C);
        },
        i: e,
        o: e,
        d(e) {
          e && h(n);
        },
      };
    }
    function $t(e, t, n) {
      let { award: l = { title: "", date: "", issuedBy: "", description: "" } } =
        t;
      return (
        (e.$$set = (e) => {
          "award" in e && n(0, (l = e.award));
        }),
        [l]
      );
    }
    class gt extends ne {
      constructor(e) {
        super(), te(this, e, $t, pt, s, { award: 0 });
      }
    }
    function ht(t) {
      let n,
        l,
        r,
        s,
        i,
        o,
        c,
        a,
        u,
        d,
        f,
        m,
        p,
        v = t[0].date + "",
        w = t[0].title + "",
        k = t[0].issuedBy + "",
        C = t[0].description + "";
      return {
        c() {
          (n = b("div")),
            (l = b("div")),
            (r = b("span")),
            (s = y(v)),
            (i = x()),
            (o = b("span")),
            (c = y(w)),
            (a = x()),
            (u = b("span")),
            (d = y(k)),
            (f = x()),
            (m = b("div")),
            (p = y(C)),
            S(r, "class", "duration svelte-zsmcjf"),
            S(o, "class", "block uppercase"),
            S(u, "class", "block issued-by svelte-zsmcjf"),
            S(m, "class", "description svelte-zsmcjf"),
            S(n, "class", "academic mt-2 mb-2 svelte-zsmcjf");
        },
        m(e, t) {
          g(e, n, t),
            $(n, l),
            $(l, r),
            $(r, s),
            $(n, i),
            $(n, o),
            $(o, c),
            $(n, a),
            $(n, u),
            $(u, d),
            $(n, f),
            $(n, m),
            $(m, p);
        },
        p(e, [t]) {
          1 & t && v !== (v = e[0].date + "") && A(s, v),
            1 & t && w !== (w = e[0].title + "") && A(c, w),
            1 & t && k !== (k = e[0].issuedBy + "") && A(d, k),
            1 & t && C !== (C = e[0].description + "") && A(p, C);
        },
        i: e,
        o: e,
        d(e) {
          e && h(n);
        },
      };
    }
    function vt(e, t, n) {
      let {
        academic: l = { title: "", date: "", issuedBy: "", description: "" },
      } = t;
      return (
        (e.$$set = (e) => {
          "academic" in e && n(0, (l = e.academic));
        }),
        [l]
      );
    }
    class bt extends ne {
      constructor(e) {
        super(), te(this, e, vt, ht, s, { academic: 0 });
      }
    }
    function yt(e, t, n) {
      const l = e.slice();
      return (l[3] = t[n]), (l[5] = n), l;
    }
    function xt(e) {
      let t,
        n,
        l = Array(20),
        r = [];
      for (let t = 0; t < l.length; t += 1) r[t] = kt(yt(e, l, t));
      return {
        c() {
          (t = b("div")), (n = b("div"));
          for (let e = 0; e < r.length; e += 1) r[e].c();
          S(n, "class", "dots svelte-ugy53v"), S(t, "class", "mt-1");
        },
        m(e, l) {
          g(e, t, l), $(t, n);
          for (let e = 0; e < r.length; e += 1) r[e].m(n, null);
        },
        p(e, t) {
          if (2 & t) {
            let s;
            for (l = Array(20), s = 0; s < l.length; s += 1) {
              const i = yt(e, l, s);
              r[s] ? r[s].p(i, t) : ((r[s] = kt(i)), r[s].c(), r[s].m(n, null));
            }
            for (; s < r.length; s += 1) r[s].d(1);
            r.length = l.length;
          }
        },
        d(e) {
          e && h(t), v(r, e);
        },
      };
    }
    function wt(e) {
      let t, n;
      return {
        c() {
          (t = b("div")),
            (n = b("div")),
            S(n, "class", "percentage svelte-ugy53v"),
            C(n, "width", e[2] + "%"),
            S(t, "class", "progress mt-1 svelte-ugy53v");
        },
        m(e, l) {
          g(e, t, l), $(t, n);
        },
        p(e, t) {
          4 & t && C(n, "width", e[2] + "%");
        },
        d(e) {
          e && h(t);
        },
      };
    }
    function kt(e) {
      let t;
      return {
        c() {
          (t = b("div")),
            S(t, "class", "dot svelte-ugy53v"),
            T(t, "active", e[1] > 5 * e[5]);
        },
        m(e, n) {
          g(e, t, n);
        },
        p(e, n) {
          2 & n && T(t, "active", e[1] > 5 * e[5]);
        },
        d(e) {
          e && h(t);
        },
      };
    }
    function St(t) {
      let n;
      function l(e, t) {
        return "line" === e[0] ? wt : "dots" === e[0] ? xt : void 0;
      }
      let r = l(t),
        s = r && r(t);
      return {
        c() {
          s && s.c(), (n = w());
        },
        m(e, t) {
          s && s.m(e, t), g(e, n, t);
        },
        p(e, [t]) {
          r === (r = l(e)) && s
            ? s.p(e, t)
            : (s && s.d(1), (s = r && r(e)), s && (s.c(), s.m(n.parentNode, n)));
        },
        i: e,
        o: e,
        d(e) {
          s && s.d(e), e && h(n);
        },
      };
    }
    function At(e, t, n) {
      let l,
        { type: r = "line" } = t,
        { level: s = 0 } = t;
      return (
        (e.$$set = (e) => {
          "type" in e && n(0, (r = e.type)), "level" in e && n(1, (s = e.level));
        }),
        (e.$$.update = () => {
          2 & e.$$.dirty && n(2, (l = s < 0 || s > 100 ? 50 : s));
        }),
        [r, s, l]
      );
    }
    class Ct extends ne {
      constructor(e) {
        super(), te(this, e, At, St, s, { type: 0, level: 1 });
      }
    }
    function Tt(e, t, n) {
      const l = e.slice();
      return (l[0] = t[n]), l;
    }
    function jt(e, t, n) {
      const l = e.slice();
      return (l[3] = t[n]), l;
    }
    function Et(e, t, n) {
      const l = e.slice();
      return (l[6] = t[n]), l;
    }
    function Bt(e, t, n) {
      const l = e.slice();
      return (l[9] = t[n]), l;
    }
    function It(e, t, n) {
      const l = e.slice();
      return (l[12] = t[n]), l;
    }
    function zt(e, t, n) {
      const l = e.slice();
      return (l[15] = t[n]), l;
    }
    function Lt(t) {
      let n, l;
      return (
        (n = new ut({ props: { experience: t[15] } })),
        {
          c() {
            K(n.$$.fragment);
          },
          m(e, t) {
            X(n, e, t), (l = !0);
          },
          p: e,
          i(e) {
            l || (Q(n.$$.fragment, e), (l = !0));
          },
          o(e) {
            V(n.$$.fragment, e), (l = !1);
          },
          d(e) {
            Z(n, e);
          },
        }
      );
    }
    function Nt(e) {
      let t,
        n,
        l = fe.experience.data,
        r = [];
      for (let t = 0; t < l.length; t += 1) r[t] = Lt(zt(e, l, t));
      const s = (e) =>
        V(r[e], 1, 1, () => {
          r[e] = null;
        });
      return {
        c() {
          t = b("div");
          for (let e = 0; e < r.length; e += 1) r[e].c();
        },
        m(e, l) {
          g(e, t, l);
          for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
          n = !0;
        },
        p(e, n) {
          if (0 & n) {
            let i;
            for (l = fe.experience.data, i = 0; i < l.length; i += 1) {
              const s = zt(e, l, i);
              r[i]
                ? (r[i].p(s, n), Q(r[i], 1))
                : ((r[i] = Lt(s)), r[i].c(), Q(r[i], 1), r[i].m(t, null));
            }
            for (O(), i = l.length; i < r.length; i += 1) s(i);
            G();
          }
        },
        i(e) {
          if (!n) {
            for (let e = 0; e < l.length; e += 1) Q(r[e]);
            n = !0;
          }
        },
        o(e) {
          r = r.filter(Boolean);
          for (let e = 0; e < r.length; e += 1) V(r[e]);
          n = !1;
        },
        d(e) {
          e && h(t), v(r, e);
        },
      };
    }
    function _t(e) {
      let t, n;
      return (
        (t = new ot({
          props: {
            item: fe.experience,
            $$slots: { default: [Nt] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            K(t.$$.fragment);
          },
          m(e, l) {
            X(t, e, l), (n = !0);
          },
          p(e, n) {
            const l = {};
            262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
          },
          i(e) {
            n || (Q(t.$$.fragment, e), (n = !0));
          },
          o(e) {
            V(t.$$.fragment, e), (n = !1);
          },
          d(e) {
            Z(t, e);
          },
        }
      );
    }
    function Dt(t) {
      let n, l;
      return (
        (n = new mt({ props: { education: t[12] } })),
        {
          c() {
            K(n.$$.fragment);
          },
          m(e, t) {
            X(n, e, t), (l = !0);
          },
          p: e,
          i(e) {
            l || (Q(n.$$.fragment, e), (l = !0));
          },
          o(e) {
            V(n.$$.fragment, e), (l = !1);
          },
          d(e) {
            Z(n, e);
          },
        }
      );
    }
    function Mt(e) {
      let t,
        n,
        l = fe.education.data,
        r = [];
      for (let t = 0; t < l.length; t += 1) r[t] = Dt(It(e, l, t));
      const s = (e) =>
        V(r[e], 1, 1, () => {
          r[e] = null;
        });
      return {
        c() {
          t = b("div");
          for (let e = 0; e < r.length; e += 1) r[e].c();
        },
        m(e, l) {
          g(e, t, l);
          for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
          n = !0;
        },
        p(e, n) {
          if (0 & n) {
            let i;
            for (l = fe.education.data, i = 0; i < l.length; i += 1) {
              const s = It(e, l, i);
              r[i]
                ? (r[i].p(s, n), Q(r[i], 1))
                : ((r[i] = Dt(s)), r[i].c(), Q(r[i], 1), r[i].m(t, null));
            }
            for (O(), i = l.length; i < r.length; i += 1) s(i);
            G();
          }
        },
        i(e) {
          if (!n) {
            for (let e = 0; e < l.length; e += 1) Q(r[e]);
            n = !0;
          }
        },
        o(e) {
          r = r.filter(Boolean);
          for (let e = 0; e < r.length; e += 1) V(r[e]);
          n = !1;
        },
        d(e) {
          e && h(t), v(r, e);
        },
      };
    }
    function Pt(e) {
      let t, n;
      return (
        (t = new ot({
          props: {
            item: fe.education,
            $$slots: { default: [Mt] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            K(t.$$.fragment);
          },
          m(e, l) {
            X(t, e, l), (n = !0);
          },
          p(e, n) {
            const l = {};
            262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
          },
          i(e) {
            n || (Q(t.$$.fragment, e), (n = !0));
          },
          o(e) {
            V(t.$$.fragment, e), (n = !1);
          },
          d(e) {
            Z(t, e);
          },
        }
      );
    }
    function qt(t) {
      let n, l;
      return (
        (n = new gt({ props: { award: t[9] } })),
        {
          c() {
            K(n.$$.fragment);
          },
          m(e, t) {
            X(n, e, t), (l = !0);
          },
          p: e,
          i(e) {
            l || (Q(n.$$.fragment, e), (l = !0));
          },
          o(e) {
            V(n.$$.fragment, e), (l = !1);
          },
          d(e) {
            Z(n, e);
          },
        }
      );
    }
    function Wt(e) {
      let t,
        n,
        l = fe.certificatesAndAwards.data,
        r = [];
      for (let t = 0; t < l.length; t += 1) r[t] = qt(Bt(e, l, t));
      const s = (e) =>
        V(r[e], 1, 1, () => {
          r[e] = null;
        });
      return {
        c() {
          t = b("div");
          for (let e = 0; e < r.length; e += 1) r[e].c();
        },
        m(e, l) {
          g(e, t, l);
          for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
          n = !0;
        },
        p(e, n) {
          if (0 & n) {
            let i;
            for (l = fe.certificatesAndAwards.data, i = 0; i < l.length; i += 1) {
              const s = Bt(e, l, i);
              r[i]
                ? (r[i].p(s, n), Q(r[i], 1))
                : ((r[i] = qt(s)), r[i].c(), Q(r[i], 1), r[i].m(t, null));
            }
            for (O(), i = l.length; i < r.length; i += 1) s(i);
            G();
          }
        },
        i(e) {
          if (!n) {
            for (let e = 0; e < l.length; e += 1) Q(r[e]);
            n = !0;
          }
        },
        o(e) {
          r = r.filter(Boolean);
          for (let e = 0; e < r.length; e += 1) V(r[e]);
          n = !1;
        },
        d(e) {
          e && h(t), v(r, e);
        },
      };
    }
    function Ft(e) {
      let t, n;
      return (
        (t = new ot({
          props: {
            item: fe.certificatesAndAwards,
            $$slots: { default: [Wt] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            K(t.$$.fragment);
          },
          m(e, l) {
            X(t, e, l), (n = !0);
          },
          p(e, n) {
            const l = {};
            262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
          },
          i(e) {
            n || (Q(t.$$.fragment, e), (n = !0));
          },
          o(e) {
            V(t.$$.fragment, e), (n = !1);
          },
          d(e) {
            Z(t, e);
          },
        }
      );
    }
    function Rt(t) {
      let n, l;
      return (
        (n = new bt({ props: { academic: t[6] } })),
        {
          c() {
            K(n.$$.fragment);
          },
          m(e, t) {
            X(n, e, t), (l = !0);
          },
          p: e,
          i(e) {
            l || (Q(n.$$.fragment, e), (l = !0));
          },
          o(e) {
            V(n.$$.fragment, e), (l = !1);
          },
          d(e) {
            Z(n, e);
          },
        }
      );
    }
    function Ht(e) {
      let t,
        n,
        l = fe.academic.data,
        r = [];
      for (let t = 0; t < l.length; t += 1) r[t] = Rt(Et(e, l, t));
      const s = (e) =>
        V(r[e], 1, 1, () => {
          r[e] = null;
        });
      return {
        c() {
          t = b("div");
          for (let e = 0; e < r.length; e += 1) r[e].c();
        },
        m(e, l) {
          g(e, t, l);
          for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
          n = !0;
        },
        p(e, n) {
          if (0 & n) {
            let i;
            for (l = fe.academic.data, i = 0; i < l.length; i += 1) {
              const s = Et(e, l, i);
              r[i]
                ? (r[i].p(s, n), Q(r[i], 1))
                : ((r[i] = Rt(s)), r[i].c(), Q(r[i], 1), r[i].m(t, null));
            }
            for (O(), i = l.length; i < r.length; i += 1) s(i);
            G();
          }
        },
        i(e) {
          if (!n) {
            for (let e = 0; e < l.length; e += 1) Q(r[e]);
            n = !0;
          }
        },
        o(e) {
          r = r.filter(Boolean);
          for (let e = 0; e < r.length; e += 1) V(r[e]);
          n = !1;
        },
        d(e) {
          e && h(t), v(r, e);
        },
      };
    }
    function Ot(e) {
      let t, n;
      return (
        (t = new ot({
          props: {
            item: fe.academic,
            $$slots: { default: [Ht] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            K(t.$$.fragment);
          },
          m(e, l) {
            X(t, e, l), (n = !0);
          },
          p(e, n) {
            const l = {};
            262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
          },
          i(e) {
            n || (Q(t.$$.fragment, e), (n = !0));
          },
          o(e) {
            V(t.$$.fragment, e), (n = !1);
          },
          d(e) {
            Z(t, e);
          },
        }
      );
    }
    function Gt(t) {
      let n,
        l,
        r,
        s,
        i,
        o,
        c,
        a = t[3].title + "";
      return (
        (i = new Ct({ props: { type: t[0].barType, level: t[3].level } })),
        {
          c() {
            (n = b("div")),
              (l = b("span")),
              (r = y(a)),
              (s = x()),
              K(i.$$.fragment),
              (o = x()),
              S(n, "class", "mt-2");
          },
          m(e, t) {
            g(e, n, t),
              $(n, l),
              $(l, r),
              $(n, s),
              X(i, n, null),
              $(n, o),
              (c = !0);
          },
          p: e,
          i(e) {
            c || (Q(i.$$.fragment, e), (c = !0));
          },
          o(e) {
            V(i.$$.fragment, e), (c = !1);
          },
          d(e) {
            e && h(n), Z(i);
          },
        }
      );
    }
    function Qt(e) {
      let t,
        n,
        l = e[0].items,
        r = [];
      for (let t = 0; t < l.length; t += 1) r[t] = Gt(jt(e, l, t));
      const s = (e) =>
        V(r[e], 1, 1, () => {
          r[e] = null;
        });
      return {
        c() {
          t = b("div");
          for (let e = 0; e < r.length; e += 1) r[e].c();
        },
        m(e, l) {
          g(e, t, l);
          for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
          n = !0;
        },
        p(e, n) {
          if (0 & n) {
            let i;
            for (l = e[0].items, i = 0; i < l.length; i += 1) {
              const s = jt(e, l, i);
              r[i]
                ? (r[i].p(s, n), Q(r[i], 1))
                : ((r[i] = Gt(s)), r[i].c(), Q(r[i], 1), r[i].m(t, null));
            }
            for (O(), i = l.length; i < r.length; i += 1) s(i);
            G();
          }
        },
        i(e) {
          if (!n) {
            for (let e = 0; e < l.length; e += 1) Q(r[e]);
            n = !0;
          }
        },
        o(e) {
          r = r.filter(Boolean);
          for (let e = 0; e < r.length; e += 1) V(r[e]);
          n = !1;
        },
        d(e) {
          e && h(t), v(r, e);
        },
      };
    }
    function Vt(e) {
      let t, n;
      return (
        (t = new ot({
          props: { item: e[0], $$slots: { default: [Qt] }, $$scope: { ctx: e } },
        })),
        {
          c() {
            K(t.$$.fragment);
          },
          m(e, l) {
            X(t, e, l), (n = !0);
          },
          p(e, n) {
            const l = {};
            262144 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
          },
          i(e) {
            n || (Q(t.$$.fragment, e), (n = !0));
          },
          o(e) {
            V(t.$$.fragment, e), (n = !1);
          },
          d(e) {
            Z(t, e);
          },
        }
      );
    }
    function Yt(e) {
      let t, n, l, r;
      return (
        (n = new Ue({
          props: { $$slots: { default: [Vt] }, $$scope: { ctx: e } },
        })),
        {
          c() {
            (t = b("section")),
              K(n.$$.fragment),
              (l = x()),
              S(t, "class", "svelte-m6h895");
          },
          m(e, s) {
            g(e, t, s), X(n, t, null), $(t, l), (r = !0);
          },
          p(e, t) {
            const l = {};
            262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
          },
          i(e) {
            r || (Q(n.$$.fragment, e), (r = !0));
          },
          o(e) {
            V(n.$$.fragment, e), (r = !1);
          },
          d(e) {
            e && h(t), Z(n);
          },
        }
      );
    }
    function Ut(e) {
      let t,
        n,
        l,
        r,
        s,
        i,
        o =
          !!fe.experience &&
          (function (e) {
            let t, n, l;
            return (
              (n = new Ue({
                props: { $$slots: { default: [_t] }, $$scope: { ctx: e } },
              })),
              {
                c() {
                  (t = b("section")),
                    K(n.$$.fragment),
                    S(t, "class", "svelte-m6h895");
                },
                m(e, r) {
                  g(e, t, r), X(n, t, null), (l = !0);
                },
                p(e, t) {
                  const l = {};
                  262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
                },
                i(e) {
                  l || (Q(n.$$.fragment, e), (l = !0));
                },
                o(e) {
                  V(n.$$.fragment, e), (l = !1);
                },
                d(e) {
                  e && h(t), Z(n);
                },
              }
            );
          })(e),
        c =
          !!fe.education &&
          (function (e) {
            let t, n, l;
            return (
              (n = new Ue({
                props: { $$slots: { default: [Pt] }, $$scope: { ctx: e } },
              })),
              {
                c() {
                  (t = b("section")),
                    K(n.$$.fragment),
                    S(t, "class", "svelte-m6h895");
                },
                m(e, r) {
                  g(e, t, r), X(n, t, null), (l = !0);
                },
                p(e, t) {
                  const l = {};
                  262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
                },
                i(e) {
                  l || (Q(n.$$.fragment, e), (l = !0));
                },
                o(e) {
                  V(n.$$.fragment, e), (l = !1);
                },
                d(e) {
                  e && h(t), Z(n);
                },
              }
            );
          })(e),
        a =
          !!fe.certificatesAndAwards &&
          (function (e) {
            let t, n, l;
            return (
              (n = new Ue({
                props: { $$slots: { default: [Ft] }, $$scope: { ctx: e } },
              })),
              {
                c() {
                  (t = b("section")),
                    K(n.$$.fragment),
                    S(t, "class", "svelte-m6h895");
                },
                m(e, r) {
                  g(e, t, r), X(n, t, null), (l = !0);
                },
                p(e, t) {
                  const l = {};
                  262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
                },
                i(e) {
                  l || (Q(n.$$.fragment, e), (l = !0));
                },
                o(e) {
                  V(n.$$.fragment, e), (l = !1);
                },
                d(e) {
                  e && h(t), Z(n);
                },
              }
            );
          })(e),
        u =
          !!fe.academic &&
          (function (e) {
            let t, n, l;
            return (
              (n = new Ue({
                props: { $$slots: { default: [Ot] }, $$scope: { ctx: e } },
              })),
              {
                c() {
                  (t = b("section")),
                    K(n.$$.fragment),
                    S(t, "class", "svelte-m6h895");
                },
                m(e, r) {
                  g(e, t, r), X(n, t, null), (l = !0);
                },
                p(e, t) {
                  const l = {};
                  262144 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
                },
                i(e) {
                  l || (Q(n.$$.fragment, e), (l = !0));
                },
                o(e) {
                  V(n.$$.fragment, e), (l = !1);
                },
                d(e) {
                  e && h(t), Z(n);
                },
              }
            );
          })(e),
        d =
          !!fe.skills &&
          (function (e) {
            let t,
              n,
              l,
              r,
              s = fe.skills,
              i = [];
            for (let t = 0; t < s.length; t += 1) i[t] = Yt(Tt(e, s, t));
            const o = (e) =>
              V(i[e], 1, 1, () => {
                i[e] = null;
              });
            return {
              c() {
                (t = b("span")), (t.textContent = "Skills"), (n = x());
                for (let e = 0; e < i.length; e += 1) i[e].c();
                (l = w()),
                  S(t, "class", "block bold mt-2 mb-2 "),
                  C(t, "width", "100%");
              },
              m(e, s) {
                g(e, t, s), g(e, n, s);
                for (let t = 0; t < i.length; t += 1) i[t].m(e, s);
                g(e, l, s), (r = !0);
              },
              p(e, t) {
                if (0 & t) {
                  let n;
                  for (s = fe.skills, n = 0; n < s.length; n += 1) {
                    const r = Tt(e, s, n);
                    i[n]
                      ? (i[n].p(r, t), Q(i[n], 1))
                      : ((i[n] = Yt(r)),
                        i[n].c(),
                        Q(i[n], 1),
                        i[n].m(l.parentNode, l));
                  }
                  for (O(), n = s.length; n < i.length; n += 1) o(n);
                  G();
                }
              },
              i(e) {
                if (!r) {
                  for (let e = 0; e < s.length; e += 1) Q(i[e]);
                  r = !0;
                }
              },
              o(e) {
                i = i.filter(Boolean);
                for (let e = 0; e < i.length; e += 1) V(i[e]);
                r = !1;
              },
              d(e) {
                e && h(t), e && h(n), v(i, e), e && h(l);
              },
            };
          })(e);
      return {
        c() {
          (t = b("div")),
            o && o.c(),
            (n = x()),
            c && c.c(),
            (l = x()),
            a && a.c(),
            (r = x()),
            u && u.c(),
            (s = x()),
            d && d.c(),
            S(t, "class", "resume-container svelte-m6h895");
        },
        m(e, f) {
          g(e, t, f),
            o && o.m(t, null),
            $(t, n),
            c && c.m(t, null),
            $(t, l),
            a && a.m(t, null),
            $(t, r),
            u && u.m(t, null),
            $(t, s),
            d && d.m(t, null),
            (i = !0);
        },
        p(e, [t]) {
          fe.experience && o.p(e, t),
            fe.education && c.p(e, t),
            fe.certificatesAndAwards && a.p(e, t),
            fe.academic && u.p(e, t),
            fe.skills && d.p(e, t);
        },
        i(e) {
          i || (Q(o), Q(c), Q(a), Q(u), Q(d), (i = !0));
        },
        o(e) {
          V(o), V(c), V(a), V(u), V(d), (i = !1);
        },
        d(e) {
          e && h(t), o && o.d(), c && c.d(), a && a.d(), u && u.d(), d && d.d();
        },
      };
    }
    class Jt extends ne {
      constructor(e) {
        super(), te(this, e, null, Ut, s, {});
      }
    }
    function Kt(e) {
      let t,
        n,
        l,
        r,
        s,
        i,
        o,
        c,
        a,
        u,
        d = e[0].title + "",
        f = e[0].description + "";
      return {
        c() {
          (t = b("div")),
            (n = b("div")),
            (l = b("i")),
            (s = x()),
            (i = b("span")),
            (o = y(d)),
            (c = x()),
            (a = b("span")),
            (u = y(f)),
            S(
              l,
              "class",
              (r =
                "mdi mdi-48px " +
                e[0].icon +
                " mr-1 primary-color svelte-1685fw3"),
            ),
            S(i, "class", "uppercase"),
            S(n, "class", "product-title mb-2 svelte-1685fw3"),
            S(t, "class", "container svelte-1685fw3");
        },
        m(e, r) {
          g(e, t, r),
            $(t, n),
            $(n, l),
            $(n, s),
            $(n, i),
            $(i, o),
            $(t, c),
            $(t, a),
            $(a, u);
        },
        p(e, t) {
          1 & t &&
            r !==
              (r =
                "mdi mdi-48px " +
                e[0].icon +
                " mr-1 primary-color svelte-1685fw3") &&
            S(l, "class", r),
            1 & t && d !== (d = e[0].title + "") && A(o, d),
            1 & t && f !== (f = e[0].description + "") && A(u, f);
        },
        d(e) {
          e && h(t);
        },
      };
    }
    function Xt(e) {
      let t, n;
      return (
        (t = new Ue({
          props: { $$slots: { default: [Kt] }, $$scope: { ctx: e } },
        })),
        {
          c() {
            K(t.$$.fragment);
          },
          m(e, l) {
            X(t, e, l), (n = !0);
          },
          p(e, [n]) {
            const l = {};
            3 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
          },
          i(e) {
            n || (Q(t.$$.fragment, e), (n = !0));
          },
          o(e) {
            V(t.$$.fragment, e), (n = !1);
          },
          d(e) {
            Z(t, e);
          },
        }
      );
    }
    function Zt(e, t, n) {
      let { product: l = { title: "", icon: "", description: "" } } = t;
      return (
        (e.$$set = (e) => {
          "product" in e && n(0, (l = e.product));
        }),
        [l]
      );
    }
    class en extends ne {
      constructor(e) {
        super(), te(this, e, Zt, Xt, s, { product: 0 });
      }
    }
    function tn(e, t, n) {
      const l = e.slice();
      return (l[0] = t[n]), l;
    }
    function nn(t) {
      let n, l, r, s;
      return (
        (l = new en({ props: { product: t[0] } })),
        {
          c() {
            (n = b("div")),
              K(l.$$.fragment),
              (r = x()),
              S(n, "class", "product svelte-1buubc");
          },
          m(e, t) {
            g(e, n, t), X(l, n, null), $(n, r), (s = !0);
          },
          p: e,
          i(e) {
            s || (Q(l.$$.fragment, e), (s = !0));
          },
          o(e) {
            V(l.$$.fragment, e), (s = !1);
          },
          d(e) {
            e && h(n), Z(l);
          },
        }
      );
    }
    function ln(e) {
      let t,
        n,
        l,
        r,
        s = me.products,
        i = [];
      for (let t = 0; t < s.length; t += 1) i[t] = nn(tn(e, s, t));
      const o = (e) =>
        V(i[e], 1, 1, () => {
          i[e] = null;
        });
      return {
        c() {
          (t = b("span")),
            (t.textContent = `${me.header}`),
            (n = x()),
            (l = b("div"));
          for (let e = 0; e < i.length; e += 1) i[e].c();
          S(t, "class", "block bold mb-2"),
            S(l, "class", "services-container svelte-1buubc");
        },
        m(e, s) {
          g(e, t, s), g(e, n, s), g(e, l, s);
          for (let e = 0; e < i.length; e += 1) i[e].m(l, null);
          r = !0;
        },
        p(e, [t]) {
          if (0 & t) {
            let n;
            for (s = me.products, n = 0; n < s.length; n += 1) {
              const r = tn(e, s, n);
              i[n]
                ? (i[n].p(r, t), Q(i[n], 1))
                : ((i[n] = nn(r)), i[n].c(), Q(i[n], 1), i[n].m(l, null));
            }
            for (O(), n = s.length; n < i.length; n += 1) o(n);
            G();
          }
        },
        i(e) {
          if (!r) {
            for (let e = 0; e < s.length; e += 1) Q(i[e]);
            r = !0;
          }
        },
        o(e) {
          i = i.filter(Boolean);
          for (let e = 0; e < i.length; e += 1) V(i[e]);
          r = !1;
        },
        d(e) {
          e && h(t), e && h(n), e && h(l), v(i, e);
        },
      };
    }
    class rn extends ne {
      constructor(e) {
        super(), te(this, e, null, ln, s, {});
      }
    }
    function sn(t) {
      let n, l;
      return (
        (n = new He({ props: { fields: t[0] } })),
        {
          c() {
            K(n.$$.fragment);
          },
          m(e, t) {
            X(n, e, t), (l = !0);
          },
          p: e,
          i(e) {
            l || (Q(n.$$.fragment, e), (l = !0));
          },
          o(e) {
            V(n.$$.fragment, e), (l = !1);
          },
          d(e) {
            Z(n, e);
          },
        }
      );
    }
    function on(e) {
      let t,
        n,
        l,
        r,
        s,
        i,
        o,
        c,
        a = pe.mapsIframe + "";
      return (
        (o = new Ue({
          props: { $$slots: { default: [sn] }, $$scope: { ctx: e } },
        })),
        {
          c() {
            (t = b("div")),
              (n = b("span")),
              (n.textContent = `${pe.header}`),
              (l = x()),
              (r = b("div")),
              (s = x()),
              (i = b("div")),
              K(o.$$.fragment),
              S(n, "class", "block bold mb-2"),
              S(r, "class", "map mb-3"),
              S(i, "class", "mb-3"),
              S(t, "class", "contact-container");
          },
          m(e, u) {
            g(e, t, u),
              $(t, n),
              $(t, l),
              $(t, r),
              (r.innerHTML = a),
              $(t, s),
              $(t, i),
              X(o, i, null),
              (c = !0);
          },
          p(e, [t]) {
            const n = {};
            2 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
          },
          i(e) {
            c || (Q(o.$$.fragment, e), (c = !0));
          },
          o(e) {
            V(o.$$.fragment, e), (c = !1);
          },
          d(e) {
            e && h(t), Z(o);
          },
        }
      );
    }
    function cn(e) {
      return [
        [
          { name: "address", value: pe.address },
          { name: "email", value: pe.email },
          { name: "hours", value: pe.hours },
          { name: "tel", value: pe.tel },
        ],
      ];
    }
    class an extends ne {
      constructor(e) {
        super(), te(this, e, cn, on, s, {});
      }
    }
    function un(e, t, n) {
      const l = e.slice();
      return (l[2] = t[n]), l;
    }
    function dn(e) {
      let t, n, l;
      var r = e[1][e[2].name];
      return (
        r && (t = j(r, {})),
        {
          c() {
            t && K(t.$$.fragment), (n = w());
          },
          m(e, r) {
            t && X(t, e, r), g(e, n, r), (l = !0);
          },
          p(e, l) {
            if (r !== (r = e[1][e[2].name])) {
              if (t) {
                O();
                const e = t;
                V(e.$$.fragment, 1, 0, () => {
                  Z(e, 1);
                }),
                  G();
              }
              r
                ? ((t = j(r, {})),
                  K(t.$$.fragment),
                  Q(t.$$.fragment, 1),
                  X(t, n.parentNode, n))
                : (t = null);
            }
          },
          i(e) {
            l || (t && Q(t.$$.fragment, e), (l = !0));
          },
          o(e) {
            t && V(t.$$.fragment, e), (l = !1);
          },
          d(e) {
            e && h(n), t && Z(t, e);
          },
        }
      );
    }
    function fn(e, t) {
      let n,
        l,
        r,
        s = t[2].active && dn(t);
      return {
        key: e,
        first: null,
        c() {
          (n = w()), s && s.c(), (l = w()), (this.first = n);
        },
        m(e, t) {
          g(e, n, t), s && s.m(e, t), g(e, l, t), (r = !0);
        },
        p(e, n) {
          (t = e)[2].active
            ? s
              ? (s.p(t, n), 1 & n && Q(s, 1))
              : ((s = dn(t)), s.c(), Q(s, 1), s.m(l.parentNode, l))
            : s &&
              (O(),
              V(s, 1, 1, () => {
                s = null;
              }),
              G());
        },
        i(e) {
          r || (Q(s), (r = !0));
        },
        o(e) {
          V(s), (r = !1);
        },
        d(e) {
          e && h(n), s && s.d(e), e && h(l);
        },
      };
    }
    function mn(e) {
      let t,
        n,
        l,
        r,
        s = [],
        i = new Map(),
        o = e[0];
      const c = (e) => e[2].name;
      for (let t = 0; t < o.length; t += 1) {
        let n = un(e, o, t),
          l = c(n);
        i.set(l, (s[t] = fn(l, n)));
      }
      return {
        c() {
          (t = b("div")), (n = b("a")), (l = x());
          for (let e = 0; e < s.length; e += 1) s[e].c();
          S(n, "id", "drawer-anchor"),
            C(n, "display", "inline"),
            S(t, "class", "grid-item-drawer mb-1 mt-2 svelte-1ema7hz");
        },
        m(e, i) {
          g(e, t, i), $(t, n), $(t, l);
          for (let e = 0; e < s.length; e += 1) s[e].m(t, null);
          r = !0;
        },
        p(e, [n]) {
          3 & n &&
            ((o = e[0]),
            O(),
            (s = J(s, n, c, 1, e, o, i, t, U, fn, null, un)),
            G());
        },
        i(e) {
          if (!r) {
            for (let e = 0; e < o.length; e += 1) Q(s[e]);
            r = !0;
          }
        },
        o(e) {
          for (let e = 0; e < s.length; e += 1) V(s[e]);
          r = !1;
        },
        d(e) {
          e && h(t);
          for (let e = 0; e < s.length; e += 1) s[e].d();
        },
      };
    }
    function pn(e, t, n) {
      let l;
      a(e, ve, (e) => n(0, (l = e)));
      return [l, { about: rt, resume: Jt, services: rn, contact: an }];
    }
    class $n extends ne {
      constructor(e) {
        super(), te(this, e, pn, mn, s, {});
      }
    }
    function gn(t) {
      let n;
      return {
        c() {
          (n = b("div")),
            (n.innerHTML =
              '<a href="https://github.com/jajosheni/N95">N95 Template</a>'),
            S(n, "class", "template-footer svelte-dtlrep");
        },
        m(e, t) {
          g(e, n, t);
        },
        p: e,
        i: e,
        o: e,
        d(e) {
          e && h(n);
        },
      };
    }
    class hn extends ne {
      constructor(e) {
        super(), te(this, e, null, gn, s, {});
      }
    }
    function vn(e, t, n) {
      const l = e.slice();
      return (l[0] = t[n]), l;
    }
    function bn(e, t) {
      let n;
      return {
        key: e,
        first: null,
        c() {
          (n = b("meta")),
            S(n, "name", t[0].name),
            S(n, "content", t[0].content),
            (this.first = n);
        },
        m(e, t) {
          g(e, n, t);
        },
        p(e, n) {
          t = e;
        },
        d(e) {
          e && h(n);
        },
      };
    }
    function yn(e) {
      let t,
        n,
        l,
        r,
        s,
        i,
        o,
        c,
        a,
        u,
        d,
        f,
        m,
        p,
        v,
        y,
        k = [],
        A = new Map();
      document.title = n = ge;
      let C = he;
      const T = (e) => e[0].name;
      for (let t = 0; t < C.length; t += 1) {
        let n = vn(e, C, t),
          l = T(n);
        A.set(l, (k[t] = bn(l, n)));
      }
      return (
        (s = new re({})),
        (a = new xe({})),
        (d = new ze({})),
        (m = new $n({})),
        (v = new hn({})),
        {
          c() {
            t = b("link");
            for (let e = 0; e < k.length; e += 1) k[e].c();
            (l = w()),
              (r = x()),
              K(s.$$.fragment),
              (i = x()),
              (o = b("main")),
              (c = b("div")),
              K(a.$$.fragment),
              (u = x()),
              K(d.$$.fragment),
              (f = x()),
              K(m.$$.fragment),
              (p = x()),
              K(v.$$.fragment),
              S(t, "rel", "icon"),
              S(t, "type", "image/png"),
              S(t, "href", $e),
              S(c, "class", "container svelte-1hlajfk"),
              S(o, "class", "svelte-1hlajfk");
          },
          m(e, n) {
            $(document.head, t);
            for (let e = 0; e < k.length; e += 1) k[e].m(document.head, null);
            $(document.head, l),
              g(e, r, n),
              X(s, e, n),
              g(e, i, n),
              g(e, o, n),
              $(o, c),
              X(a, c, null),
              $(c, u),
              X(d, c, null),
              $(c, f),
              X(m, c, null),
              g(e, p, n),
              X(v, e, n),
              (y = !0);
          },
          p(e, [t]) {
            (!y || 0 & t) && n !== (n = ge) && (document.title = n),
              0 & t &&
                ((C = he),
                (k = J(k, t, T, 1, e, C, A, l.parentNode, Y, bn, l, vn)));
          },
          i(e) {
            y ||
              (Q(s.$$.fragment, e),
              Q(a.$$.fragment, e),
              Q(d.$$.fragment, e),
              Q(m.$$.fragment, e),
              Q(v.$$.fragment, e),
              (y = !0));
          },
          o(e) {
            V(s.$$.fragment, e),
              V(a.$$.fragment, e),
              V(d.$$.fragment, e),
              V(m.$$.fragment, e),
              V(v.$$.fragment, e),
              (y = !1);
          },
          d(e) {
            h(t);
            for (let e = 0; e < k.length; e += 1) k[e].d();
            h(l),
              e && h(r),
              Z(s, e),
              e && h(i),
              e && h(o),
              Z(a),
              Z(d),
              Z(m),
              e && h(p),
              Z(v, e);
          },
        }
      );
    }
    return new (class extends ne {
      constructor(e) {
        super(), te(this, e, null, yn, s, {});
      }
    })({ target: document.body });
  })();
  //# sourceMappingURL=bundle.js.map
  

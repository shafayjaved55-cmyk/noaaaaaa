import { Reveal } from "@/components/reveal";

/* -------------------------------------------------------------------------- */
/*  SECP — Securities & Exchange Commission of Pakistan                        */
/* -------------------------------------------------------------------------- */

function SecpLogo() {
  const leafAngles = Array.from({ length: 30 }, (_, i) => i * 12);
  const ringText = "SECURITIES & EXCHANGE COMMISSION OF PAKISTAN";

  return (
    <svg viewBox="0 0 180 200" className="h-full w-full" role="img" aria-label="Securities and Exchange Commission of Pakistan (SECP)">
      <defs>
        <path id="secpArc" d="M 90,86 m -60,0 a 60,60 0 1,1 120,0" fill="none" />
      </defs>

      {/* laurel wreath */}
      {leafAngles.map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const cx = 90 + 55 * Math.cos(rad);
        const cy = 86 + 55 * Math.sin(rad);
        return (
          <ellipse
            key={deg}
            cx={cx}
            cy={cy}
            rx={4.2}
            ry={9.5}
            fill={deg % 24 === 0 ? "#8d9b93" : deg % 12 === 0 ? "#a7b3ab" : "#b9c3bc"}
            transform={`rotate(${deg + 90} ${cx} ${cy})`}
          />
        );
      })}

      {/* seal ring text */}
      <text fontSize="7.4" letterSpacing="0.9" fill="#8d9b93" fontWeight="600">
        <textPath href="#secpArc" startOffset="50%" textAnchor="middle">
          {ringText}
        </textPath>
      </text>

      {/* four-quadrant emblem */}
      <g>
        <path d="M 90,41 A 45,45 0 0 1 135,86 L 90,86 Z" fill="#0f766e" />
        <path d="M 135,86 A 45,45 0 0 1 90,131 L 90,86 Z" fill="#15803d" />
        <path d="M 90,131 A 45,45 0 0 1 45,86 L 90,86 Z" fill="#1e6fa8" />
        <path d="M 45,86 A 45,45 0 0 1 90,41 L 90,86 Z" fill="#14a08f" />

        {/* crescent + star */}
        <path
          d="M 116,58 a 12,12 0 1 0 4,17 a 9.5,9.5 0 1 1 -4,-17 Z"
          fill="#ffffff"
        />
        <circle cx="122" cy="63" r="2.4" fill="#ffffff" />

        {/* scales of justice */}
        <g stroke="#ffffff" strokeWidth="1.9" fill="none" strokeLinecap="round">
          <path d="M 64,96 L 64,110" />
          <path d="M 53,99 L 75,99" />
          <path d="M 53,99 L 48,108 M 53,99 L 58,108 M 48,108 A 5,4 0 0 0 58,108" />
          <path d="M 75,99 L 70,108 M 75,99 L 80,108 M 70,108 A 5,4 0 0 0 80,108" />
        </g>

        {/* open book */}
        <g fill="#ffffff">
          <path d="M 78,118 q 12,-5 12,0 q 0,-5 12,0 l 0,11 q -12,-5 -12,0 q 0,-5 -12,0 Z" />
        </g>

        {/* fields / growth */}
        <g stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" fill="none">
          <path d="M 106,112 L 106,126" />
          <path d="M 106,116 q 7,-3 9,-9 M 106,116 q -7,-3 -9,-9 M 106,122 q 7,-2 8,-7 M 106,122 q -7,-2 -8,-7" />
        </g>

        <circle cx="90" cy="86" r="45" fill="none" stroke="#dfe5e0" strokeWidth="3.5" />
        <path d="M 90,41 L 90,131 M 45,86 L 135,86" stroke="#ffffff" strokeWidth="1.1" opacity="0.35" />
      </g>

      <text x="90" y="176" textAnchor="middle" fontSize="22" letterSpacing="7" fill="#9aa5a0" fontWeight="500">
        SECP
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  P@SHA — Pakistan Software Houses Association                               */
/* -------------------------------------------------------------------------- */

function PashaLogo() {
  return (
    <svg viewBox="0 0 300 150" className="h-full w-full" role="img" aria-label="Pakistan Software Houses Association for IT and ITES (P@SHA)">
      <text fontSize="66" fontWeight="700" fill="#7f1d1d" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        <tspan x="24" y="78">P</tspan>
        <tspan x="66" y="78" fill="#b91c1c">@</tspan>
        <tspan x="118" y="78">SHA</tspan>
      </text>
      <text x="150" y="106" textAnchor="middle" fontSize="14.5" fill="#374151" fontWeight="500">
        Pakistan Software Houses Association
      </text>
      <text x="150" y="127" textAnchor="middle" fontSize="13" fill="#4b5563" fontWeight="500">
        for IT &amp; ITES
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  RCCI — The Rawalpindi Chamber of Commerce & Industry                       */
/* -------------------------------------------------------------------------- */

function RcciLogo() {
  const sideLeaves = Array.from({ length: 7 }, (_, i) => i);
  const teeth = Array.from({ length: 16 }, (_, i) => i * 22.5);

  return (
    <svg viewBox="0 0 200 210" className="h-full w-full" role="img" aria-label="The Rawalpindi Chamber of Commerce and Industry (RCCI)">
      {/* crossed flags */}
      <g strokeLinecap="round">
        <path d="M 93,44 L 79,15" stroke="#6b7a4a" strokeWidth="1.8" fill="none" />
        <path d="M 107,44 L 121,15" stroke="#6b7a4a" strokeWidth="1.8" fill="none" />
        <path d="M 79,15 L 93,20 L 79,27 Z" fill="#1f5132" />
        <path d="M 121,15 L 107,20 L 121,27 Z" fill="#1f5132" />
      </g>

      {/* wheat wreath */}
      {sideLeaves.map((i) => {
        const l = 118 + i * 19;
        const r = 62 - i * 19;
        return (
          <g key={i}>
            <ellipse cx={100 + 66 * Math.cos((l * Math.PI) / 180)} cy={100 + 66 * Math.sin((l * Math.PI) / 180)} rx={4} ry={10} fill="#a08c3f" transform={`rotate(${l + 90} ${100 + 66 * Math.cos((l * Math.PI) / 180)} ${100 + 66 * Math.sin((l * Math.PI) / 180)})`} />
            <ellipse cx={100 + 66 * Math.cos((r * Math.PI) / 180)} cy={100 + 66 * Math.sin((r * Math.PI) / 180)} rx={4} ry={10} fill="#a08c3f" transform={`rotate(${r + 90} ${100 + 66 * Math.cos((r * Math.PI) / 180)} ${100 + 66 * Math.sin((r * Math.PI) / 180)})`} />
          </g>
        );
      })}

      {/* gear */}
      {teeth.map((deg) => (
        <rect key={deg} x={96.5} y={46} width={7} height={11} rx={2} fill="#1f5132" transform={`rotate(${deg} 100 100)`} />
      ))}
      <circle cx="100" cy="100" r="49" fill="#1f5132" />
      <circle cx="100" cy="100" r="40" fill="#eef2ec" />

      {/* inner motifs */}
      <g>
        {/* crescent */}
        <path d="M 86,80 a 9,9 0 1 0 3,13 a 7,7 0 1 1 -3,-13 Z" fill="#1f5132" />
        {/* minaret */}
        <g stroke="#1f5132" strokeWidth="1.8" strokeLinecap="round" fill="none">
          <path d="M 104,92 L 104,112" />
          <path d="M 100,112 L 108,112" />
          <path d="M 104,92 L 101,86 L 104,82 L 107,86 Z" fill="#1f5132" />
        </g>
        {/* industry + fields */}
        <path d="M 74,116 L 84,108 L 94,116 L 104,108 L 114,116 L 114,124 L 74,124 Z" fill="#1f5132" opacity="0.85" />
        <path d="M 78,116 q 6,-9 12,0 q 6,-9 12,0" stroke="#2f6b47" strokeWidth="1.6" fill="none" />
      </g>

      {/* banner */}
      <path d="M 32,146 Q 100,164 168,146 L 168,164 Q 100,182 32,164 Z" fill="#1f5132" />
      <text
        x="100"
        y="159"
        textAnchor="middle"
        fontSize="6.2"
        fontWeight="700"
        letterSpacing="0.4"
        fill="#ffffff"
        textLength="126"
        lengthAdjust="spacingAndGlyphs"
      >
        The Rawalpindi Chamber of Commerce &amp; Industry
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  PSEB — Pakistan Software Export Board                                      */
/* -------------------------------------------------------------------------- */

function PsebLogo() {
  return (
    <svg viewBox="0 0 200 170" className="h-full w-full" role="img" aria-label="Pakistan Software Export Board (PSEB)">
      <rect x="8" y="7" width="184" height="2.6" fill="#1a1a4f" />
      <text x="100" y="25" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="4" fill="#111827">
        PAKISTAN
      </text>
      <rect x="8" y="31" width="184" height="2.6" fill="#1a1a4f" />

      {/* PSEB wordmark — the S is drawn as a blue swash */}
      <text x="12" y="108" fontSize="72" fontWeight="800" fill="#111827" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        P
      </text>
      <path
        d="M 91,55 C 62,49 54,70 74,78 C 96,86 96,104 62,105"
        fill="none"
        stroke="#2563eb"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <text x="96" y="108" fontSize="72" fontWeight="800" fill="#111827" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        <tspan x="96" y="108">E</tspan>
        <tspan x="140" y="108">B</tspan>
      </text>

      <rect x="8" y="126" width="184" height="2.6" fill="#1a1a4f" />
      <text x="100" y="144" textAnchor="middle" fontSize="11.5" fontWeight="600" letterSpacing="3.4" fill="#111827">
        SOFTWARE
      </text>
      <text x="100" y="161" textAnchor="middle" fontSize="11.5" fontWeight="600" letterSpacing="3.4" fill="#111827">
        EXPORT BOARD
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */

const registrations = [
  { id: "secp", name: "SECP", full: "Securities & Exchange Commission of Pakistan", Logo: SecpLogo },
  { id: "pasha", name: "P@SHA", full: "Pakistan Software Houses Association for IT & ITES", Logo: PashaLogo },
  { id: "rcci", name: "RCCI", full: "The Rawalpindi Chamber of Commerce & Industry", Logo: RcciLogo },
  { id: "pseb", name: "PSEB", full: "Pakistan Software Export Board", Logo: PsebLogo },
];

export function RegisteredWith({ dark = false }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-night py-20 text-bone md:py-24" : "bg-white py-20 md:py-24"}>
      <div className="container-x">
        <Reveal className="text-center">
          <h2
            className={`font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl ${
              dark ? "text-bone" : "text-ink"
            }`}
          >
            Registered With
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-28 rounded-full bg-accent" aria-hidden="true" />
          <p className={`mt-5 text-[1.02rem] ${dark ? "text-bone/60" : "text-smoke"}`}>
            We are registered with organizations
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 items-center gap-6 md:grid-cols-4 md:gap-8">
          {registrations.map(({ id, name, full, Logo }, i) => (
            <Reveal key={id} delay={i * 0.08}>
              <div
                title={full}
                className={`group mx-auto flex h-36 w-full max-w-[13rem] items-center justify-center rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${
                  dark ? "bg-white/[0.04] hover:bg-white/[0.07]" : "hover:bg-bone"
                }`}
              >
                <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.04]">
                  <Logo />
                </div>
                <span className="sr-only">
                  {name} — {full}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className={`mx-auto mt-12 max-w-2xl text-center text-[0.92rem] leading-relaxed ${dark ? "text-bone/45" : "text-fog"}`}>
            Nova Solution is a registered Pakistani company in good standing with the SECP, a member of P@SHA and the
            Rawalpindi Chamber of Commerce &amp; Industry, and registered with the Pakistan Software Export Board.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

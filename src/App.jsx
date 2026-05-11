import { useState, useEffect, useRef } from "react";

const S = {
  gold: "#C9A84C",
  goldLight: "#E5C76B",
  goldDim: "rgba(201,168,76,0.15)",
  goldBorder: "rgba(201,168,76,0.25)",
  bg: "#080808",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(201,168,76,0.05)",
  border: "rgba(255,255,255,0.08)",
  textPrimary: "#F5F5F0",
  textSecondary: "rgba(255,255,255,0.45)",
  textMuted: "rgba(255,255,255,0.22)",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#080808;color:#F5F5F0;font-family:'DM Sans',sans-serif;overflow-x:hidden}
  ::-webkit-scrollbar{width:3px}
  ::-webkit-scrollbar-track{background:#0a0a0a}
  ::-webkit-scrollbar-thumb{background:rgba(201,168,76,0.3);border-radius:2px}

  .cormorant{font-family:'Cormorant',serif}
  .mono{font-family:'DM Mono',monospace}
  
  .glass{
    background:rgba(255,255,255,0.04);
    backdrop-filter:blur(24px);
    -webkit-backdrop-filter:blur(24px);
    border:1px solid rgba(201,168,76,0.18);
    border-radius:20px;
  }
  .glass-dark{
    background:rgba(0,0,0,0.35);
    backdrop-filter:blur(24px);
    -webkit-backdrop-filter:blur(24px);
    border:1px solid rgba(255,255,255,0.07);
    border-radius:16px;
  }

  .gold-text{
    background:linear-gradient(130deg,#C9A84C 0%,#E5C76B 50%,#B8962E 100%);
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  }

  .btn-gold{
    background:linear-gradient(135deg,#C9A84C,#E5C76B);
    color:#08080B;font-weight:600;border:none;cursor:pointer;
    font-family:'DM Sans',sans-serif;letter-spacing:0.04em;
    transition:all 0.25s;text-transform:uppercase;font-size:12px;
  }
  .btn-gold:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(201,168,76,0.35)}
  .btn-gold:active{transform:translateY(0)}
  .btn-gold:disabled{opacity:0.5;cursor:not-allowed;transform:none}
  
  .btn-ghost{
    background:transparent;color:rgba(201,168,76,0.9);
    border:1px solid rgba(201,168,76,0.35);cursor:pointer;
    font-family:'DM Sans',sans-serif;letter-spacing:0.04em;
    transition:all 0.25s;text-transform:uppercase;font-size:12px;
  }
  .btn-ghost:hover{background:rgba(201,168,76,0.08);border-color:rgba(201,168,76,0.6)}

  .input-lux{
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.1);
    border-radius:10px;color:#F5F5F0;
    font-family:'DM Sans',sans-serif;font-size:14px;
    transition:all 0.25s;width:100%;padding:13px 16px;outline:none;
  }
  .input-lux:focus{border-color:rgba(201,168,76,0.5);background:rgba(201,168,76,0.04);box-shadow:0 0 0 3px rgba(201,168,76,0.08)}
  .input-lux::placeholder{color:rgba(255,255,255,0.2)}
  select.input-lux option{background:#141414;color:#F5F5F0}
  textarea.input-lux{resize:vertical}

  .tab-on{background:rgba(201,168,76,0.12);color:#C9A84C;border-color:rgba(201,168,76,0.4)!important}
  .tab-off{background:transparent;color:rgba(255,255,255,0.35);border-color:rgba(255,255,255,0.08)!important}
  .tab-off:hover{color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.2)!important;background:rgba(255,255,255,0.03)}

  .out-card{
    background:rgba(255,255,255,0.025);
    border:1px solid rgba(255,255,255,0.07);
    border-radius:14px;transition:all 0.3s;
  }
  .out-card:hover{border-color:rgba(201,168,76,0.22);background:rgba(201,168,76,0.03)}

  .badge{
    display:inline-flex;align-items:center;gap:6px;
    padding:5px 14px;border-radius:100px;
    background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.22);
    font-size:11px;color:#C9A84C;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
  }

  .glow-line{height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)}
  .glow-dot{width:7px;height:7px;border-radius:50%;background:#C9A84C}

  @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulseDot{0%,100%{opacity:1}50%{opacity:0.25}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

  .fade-up{animation:fadeUp 0.5s ease forwards}
  .pulse-dot{animation:pulseDot 1.5s infinite}
  .spin{animation:spin 1s linear infinite}
  .float-el{animation:float 4s ease-in-out infinite}
  .shimmer-bar{
    background:linear-gradient(90deg,rgba(255,255,255,0.04) 0%,rgba(201,168,76,0.12) 50%,rgba(255,255,255,0.04) 100%);
    background-size:200% 100%;animation:shimmer 2.2s infinite;border-radius:4px;
  }

  .hero-glow{
    position:absolute;top:0;left:50%;transform:translateX(-50%);
    width:900px;height:500px;pointer-events:none;
    background:radial-gradient(ellipse 60% 60% at 50% 0%,rgba(201,168,76,0.1) 0%,transparent 70%);
  }
  .hero-orb-l{
    position:absolute;top:15%;left:5%;width:320px;height:320px;border-radius:50%;
    background:radial-gradient(circle,rgba(201,168,76,0.05) 0%,transparent 70%);pointer-events:none;
  }
  .hero-orb-r{
    position:absolute;top:25%;right:5%;width:200px;height:200px;border-radius:50%;
    background:radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%);pointer-events:none;
  }

  .num-badge{
    width:30px;height:30px;border-radius:50%;
    background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);
    display:flex;align-items:center;justify-content:center;
    font-size:12px;color:#C9A84C;font-weight:700;flex-shrink:0;
  }

  .copy-btn{
    background:transparent;border:1px solid rgba(255,255,255,0.12);border-radius:7px;
    color:rgba(255,255,255,0.4);font-size:11px;cursor:pointer;padding:5px 12px;
    font-family:'DM Sans',sans-serif;transition:all 0.2s;text-transform:uppercase;letter-spacing:0.06em;
  }
  .copy-btn:hover{border-color:rgba(201,168,76,0.4);color:#C9A84C}
  .copy-btn.copied{border-color:rgba(201,168,76,0.5);color:#C9A84C;background:rgba(201,168,76,0.08)}

  .label-sm{font-size:11px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;font-weight:600;margin-bottom:7px;display:block}
  .section-eyebrow{font-size:11px;color:#C9A84C;text-transform:uppercase;letter-spacing:0.16em;font-weight:600;margin-bottom:14px}

  .feat-card{
    background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);
    border-radius:16px;padding:28px 24px;transition:all 0.3s;
  }
  .feat-card:hover{border-color:rgba(201,168,76,0.25);background:rgba(201,168,76,0.04);transform:translateY(-4px)}

  .step-num{
    font-family:'Cormorant',serif;font-size:80px;font-weight:700;
    color:rgba(201,168,76,0.08);line-height:1;
  }

  @media(max-width:640px){
    .hero-stat-row{flex-direction:column;gap:16px!important}
    .dash-grid{grid-template-columns:1fr!important}
    .form-grid{grid-template-columns:1fr!important}
    .feat-grid{grid-template-columns:1fr!important}
    .step-grid{grid-template-columns:1fr!important}
    .cta-grid{grid-template-columns:1fr!important}
    .tab-wrap{gap:6px!important}
    .tab-wrap button{font-size:11px!important;padding:7px 12px!important}
  }
`;

const TONES = ["Luxury","Aspirational","Urgent","Emotional","Exclusive","Investment-Focused","Conversational","Authoritative"];
const TYPES = ["Luxury Residential","Ultra-Luxury Penthouse","Premium Plotted","Luxury Villas","Commercial Luxury","Holiday Homes","Integrated Township","Smart Homes"];
const AUDIENCES = ["HNI Investors","NRI Buyers","End Users","C-Suite Executives","Business Owners","Ultra HNI","First-Time Luxury Buyers","Senior Professionals"];
const OBJECTIVES = ["Lead Generation","Site Visit Bookings","Brand Awareness","NRI Targeting","Investor Outreach","Launch Campaign","Pre-Sales","Referral Drive"];

const TABS = [
  { id:"meta", icon:"M", label:"Meta Ads" },
  { id:"google", icon:"G", label:"Google Ads" },
  { id:"hooks", icon:"⚡", label:"Hook Lines" },
  { id:"ctas", icon:"◎", label:"CTAs" },
  { id:"creatives", icon:"◈", label:"Creative Ideas" },
  { id:"prompts", icon:"◷", label:"Image Prompts" },
];

function CopyBtn({ text, id }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 2200); } catch(e) {}
  };
  return (
    <button className={`copy-btn ${done ? "copied" : ""}`} onClick={copy}>
      {done ? "✓ Copied" : "⎘ Copy"}
    </button>
  );
}

function FieldLabel({ children }) {
  return <span className="label-sm">{children}</span>;
}

function StatBadge({ val, label }) {
  return (
    <div style={{ textAlign:"center" }}>
      <div className="cormorant" style={{ fontSize:30, fontWeight:600, color:S.gold }}>{val}</div>
      <div style={{ fontSize:11, color:S.textMuted, marginTop:4, letterSpacing:"0.07em", textTransform:"uppercase" }}>{label}</div>
    </div>
  );
}

function HeroDashboard() {
  const items = [
    { tag:"Meta Ad · Primary", text:"Own Mumbai's most coveted address. Sky-high living from ₹4.2 Cr. Limited residences available — reserve your legacy." },
    { tag:"Hook Line", text:"Where ambition meets altitude. The address that defines you." },
    { tag:"Google Ad · RSA", text:"Luxury 3 & 4 BHK in BKC | Sea View | Private Elevator | Book Site Visit" },
  ];
  return (
    <div className="glass" style={{ padding:24, maxWidth:880, margin:"0 auto" }}>
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20, paddingBottom:16, borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display:"flex", gap:6 }}>
          {["#FF5F57","#FEBC2E","#28C840"].map(c => <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />)}
        </div>
        <div style={{ flex:1, height:22, borderRadius:6, background:"rgba(255,255,255,0.04)", display:"flex", alignItems:"center", paddingLeft:12 }}>
          <span style={{ fontSize:11, color:S.textMuted }}>luxeads.ai/generate</span>
        </div>
        <div style={{ display:"flex", gap:6 }}>
          <div className="pulse-dot" style={{ width:6, height:6, borderRadius:"50%", background:S.gold }} />
          <span style={{ fontSize:11, color:S.gold }}>Live</span>
        </div>
      </div>
      <div className="dash-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
        {items.map(({ tag, text }) => (
          <div key={tag} style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:10, color:S.gold, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:10, fontWeight:600 }}>{tag}</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.65)", lineHeight:1.65 }}>{text}</div>
            <div style={{ marginTop:14 }}>
              <div className="shimmer-bar" style={{ height:5, width:"80%", marginBottom:5 }} />
              <div className="shimmer-bar" style={{ height:5, width:"55%" }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:16, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
        {[["3 Meta Ads","✓ Ready"],["2 Google RSAs","✓ Ready"],["5 Hook Lines","✓ Ready"],["3 AI Prompts","✓ Ready"]].map(([a,b]) => (
          <div key={a} style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:8, padding:"10px 12px" }}>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.5)", marginBottom:4 }}>{a}</div>
            <div style={{ fontSize:11, color:S.gold, fontWeight:600 }}>{b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetaAdCard({ ad, i }) {
  return (
    <div className="out-card" style={{ padding:26 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:18 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div className="num-badge">{i+1}</div>
          <span style={{ fontSize:12, color:S.gold, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em" }}>Meta Ad Variation</span>
        </div>
        <CopyBtn text={`${ad.primaryText}\n\nHeadline: ${ad.headline}\n\nDescription: ${ad.description}`} />
      </div>
      <div style={{ marginBottom:16 }}>
        <FieldLabel>Primary Text</FieldLabel>
        <div style={{ fontSize:14, color:"rgba(255,255,255,0.78)", lineHeight:1.75 }}>{ad.primaryText}</div>
      </div>
      <div style={{ height:1, background:"rgba(255,255,255,0.05)", marginBottom:16 }} />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        <div>
          <FieldLabel>Headline</FieldLabel>
          <div style={{ fontSize:15, fontWeight:600, color:S.textPrimary }}>{ad.headline}</div>
        </div>
        <div>
          <FieldLabel>Description</FieldLabel>
          <div style={{ fontSize:13, color:"rgba(255,255,255,0.6)", lineHeight:1.6 }}>{ad.description}</div>
        </div>
      </div>
    </div>
  );
}

function GoogleAdCard({ ad, i }) {
  return (
    <div className="out-card" style={{ padding:26 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div className="num-badge">{i+1}</div>
          <span style={{ fontSize:12, color:S.gold, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em" }}>Google RSA</span>
        </div>
        <CopyBtn text={`H1: ${ad.headline1} | H2: ${ad.headline2} | H3: ${ad.headline3}\nD1: ${ad.description1}\nD2: ${ad.description2}`} />
      </div>
      <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:10, padding:18 }}>
        <div style={{ fontSize:10, color:S.textMuted, marginBottom:6 }}>Ad · yourbrand.in ›</div>
        <div style={{ fontSize:16, color:"#8AB4F8", fontWeight:500, marginBottom:8, lineHeight:1.4 }}>
          {ad.headline1} | {ad.headline2} | {ad.headline3}
        </div>
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.58)", lineHeight:1.65 }}>{ad.description1}</div>
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.58)", lineHeight:1.65 }}>{ad.description2}</div>
        {ad.extension && <div style={{ marginTop:10, fontSize:12, color:"#8AB4F8" }}>📌 {ad.extension}</div>}
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="glass" style={{ padding:"56px 40px", textAlign:"center", maxWidth:820, margin:"0 auto" }}>
      <div style={{ width:56, height:56, borderRadius:"50%", border:"2px solid rgba(201,168,76,0.15)", borderTop:"2px solid #C9A84C", margin:"0 auto 28px" }} className="spin" />
      <h3 className="cormorant" style={{ fontSize:32, fontWeight:500, marginBottom:12 }}>Crafting Your Luxury Ad Suite</h3>
      <p style={{ color:S.textSecondary, fontSize:14, lineHeight:1.7 }}>AI is analysing your project and generating premium marketing copies across all formats…</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center", marginTop:30 }}>
        {["Meta Ad Copies","Google RSAs","Hook Lines","CTAs","Creative Directions","Image Prompts"].map(item => (
          <span key={item} style={{ padding:"5px 14px", borderRadius:20, background:"rgba(201,168,76,0.06)", border:"1px solid rgba(201,168,76,0.15)", fontSize:11, color:"rgba(201,168,76,0.55)" }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState({
    projectName:"", location:"", startingPrice:"", projectType:"Luxury Residential",
    targetAudience:"HNI Investors", configuration:"", keyAmenities:"", brandName:"",
    offer:"", toneOfVoice:"Luxury", campaignObjective:"Lead Generation",
  });
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(null);
  const [activeTab, setActiveTab] = useState("meta");
  const [error, setError] = useState("");
  const outputRef = useRef(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const generateAds = async () => {
    if (!form.projectName || !form.location) { setError("Please fill in at least Project Name and Location."); return; }
    setError(""); setLoading(true); setGenerated(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          messages:[{
            role:"user",
            content:`You are an expert luxury real estate marketing specialist and performance marketer. Generate high-converting ad copies for this project. Return ONLY valid JSON with no markdown, no code fences, no preamble.

Project:
- Name: ${form.projectName}
- Location: ${form.location}
- Starting Price: ${form.startingPrice || "Premium pricing"}
- Type: ${form.projectType}
- Target Audience: ${form.targetAudience}
- Configuration: ${form.configuration || "Luxury residences"}
- Amenities: ${form.keyAmenities || "World-class amenities"}
- Brand/Developer: ${form.brandName || "Luxury Developer"}
- Offer/USP: ${form.offer || "Exclusive living"}
- Tone: ${form.toneOfVoice}
- Objective: ${form.campaignObjective}

Return this exact JSON structure:
{"metaAds":[{"primaryText":"...","headline":"...","description":"..."},{"primaryText":"...","headline":"...","description":"..."},{"primaryText":"...","headline":"...","description":"..."}],"googleAds":[{"headline1":"...","headline2":"...","headline3":"...","description1":"...","description2":"...","extension":"..."},{"headline1":"...","headline2":"...","headline3":"...","description1":"...","description2":"...","extension":"..."}],"hookLines":["...","...","...","...","..."],"ctas":["...","...","...","...","...","..."],"creativeIdeas":[{"title":"...","direction":"...","visual":"...","format":"..."},{"title":"...","direction":"...","visual":"...","format":"..."},{"title":"...","direction":"...","visual":"...","format":"..."}],"imagePrompts":[{"title":"...","prompt":"..."},{"title":"...","prompt":"..."},{"title":"...","prompt":"..."}]}`
          }]
        })
      });
      const data = await res.json();
      const raw = data.content?.[0]?.text || "";
      const clean = raw.replace(/\`\`\`json|\`\`\`/g,"").trim();
      const parsed = JSON.parse(clean);
      setGenerated(parsed);
      setTimeout(() => outputRef.current?.scrollIntoView({ behavior:"smooth", block:"start" }), 100);
    } catch(e) {
      setError("Generation failed. Check your inputs and try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <style>{css}</style>
      <div style={{ background:S.bg, minHeight:"100vh" }}>

        {/* ── NAV ── */}
        <nav style={{ position:"sticky", top:0, zIndex:100, backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)", background:"rgba(8,8,8,0.85)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth:1180, margin:"0 auto", padding:"0 28px", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div className="glow-dot" />
              <span style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:600, fontSize:15, letterSpacing:"0.1em", textTransform:"uppercase" }}>
                LuxeAds <span className="gold-text">AI</span>
              </span>
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <button className="btn-ghost" style={{ padding:"9px 22px", borderRadius:9, fontSize:12 }}>Log In</button>
              <button className="btn-gold" style={{ padding:"9px 22px", borderRadius:9 }}
                onClick={() => document.getElementById("form-section").scrollIntoView({ behavior:"smooth" })}>
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{ padding:"110px 28px 90px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div className="hero-glow" />
          <div className="hero-orb-l" />
          <div className="hero-orb-r" />
          <div style={{ maxWidth:780, margin:"0 auto", position:"relative" }}>
            <div className="badge float-el" style={{ marginBottom:32 }}>
              <span className="pulse-dot" style={{ width:6, height:6, borderRadius:"50%", background:S.gold }} />
              Powered by Claude AI
            </div>
            <h1 className="cormorant" style={{ fontSize:"clamp(44px,7.5vw,88px)", fontWeight:600, lineHeight:1.08, marginBottom:26, color:S.textPrimary }}>
              Generate High-Converting<br />
              <span className="gold-text">Real Estate Ads</span> with AI
            </h1>
            <p style={{ fontSize:"clamp(15px,2vw,19px)", color:S.textSecondary, maxWidth:540, margin:"0 auto 44px", lineHeight:1.75 }}>
              Create Meta Ads, Google Ads, Hook Lines, CTAs, and Performance Creatives for luxury real estate — in seconds.
            </p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <button className="btn-gold" style={{ padding:"15px 36px", borderRadius:11, fontSize:13 }}
                onClick={() => document.getElementById("form-section").scrollIntoView({ behavior:"smooth" })}>
                ✦ Generate Ads Now
              </button>
              <button className="btn-ghost" style={{ padding:"15px 36px", borderRadius:11, fontSize:13 }}>
                Watch Demo
              </button>
            </div>
            <div className="hero-stat-row" style={{ display:"flex", gap:52, justifyContent:"center", marginTop:72 }}>
              <StatBadge val="7+" label="Ad Formats" />
              <div style={{ width:1, height:48, background:"rgba(255,255,255,0.08)", alignSelf:"center" }} />
              <StatBadge val="10×" label="Faster Copy" />
              <div style={{ width:1, height:48, background:"rgba(255,255,255,0.08)", alignSelf:"center" }} />
              <StatBadge val="100%" label="AI Powered" />
            </div>
          </div>

          {/* Hero Dashboard Preview */}
          <div style={{ marginTop:72, position:"relative" }}>
            <HeroDashboard />
            <div style={{ position:"absolute", bottom:-30, left:"50%", transform:"translateX(-50%)", width:"55%", height:50, background:"rgba(201,168,76,0.12)", filter:"blur(28px)", borderRadius:"50%", pointerEvents:"none" }} />
          </div>
        </section>

        <div className="glow-line" style={{ maxWidth:1180, margin:"0 auto 80px" }} />

        {/* ── FORM SECTION ── */}
        <section id="form-section" style={{ padding:"0 28px 90px", maxWidth:920, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-eyebrow">Step 01 — Project Details</div>
            <h2 className="cormorant" style={{ fontSize:"clamp(30px,4.5vw,52px)", fontWeight:600, marginBottom:14, color:S.textPrimary }}>
              Enter Your Project Information
            </h2>
            <p style={{ color:S.textSecondary, fontSize:15, lineHeight:1.7 }}>
              The more detail you provide, the more powerful and targeted your ad copies will be.
            </p>
          </div>

          <div className="glass" style={{ padding:44 }}>
            <div className="form-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:22 }}>
              {[
                { name:"projectName", label:"Project Name", ph:"e.g. The Oberoi Sky Residences" },
                { name:"location", label:"Location", ph:"e.g. BKC, Mumbai" },
                { name:"startingPrice", label:"Starting Price", ph:"e.g. ₹4.2 Cr onwards" },
                { name:"brandName", label:"Developer / Brand Name", ph:"e.g. Oberoi Realty" },
                { name:"configuration", label:"Configuration", ph:"e.g. 3 & 4 BHK Ultra-Luxury" },
                { name:"offer", label:"Offer / Unique USP", ph:"e.g. Sea view, 30:70 payment plan" },
              ].map(f => (
                <div key={f.name}>
                  <FieldLabel>{f.label}</FieldLabel>
                  <input className="input-lux" name={f.name} placeholder={f.ph} value={form[f.name]} onChange={handleChange} />
                </div>
              ))}

              <div style={{ gridColumn:"1 / -1" }}>
                <FieldLabel>Key Amenities</FieldLabel>
                <textarea className="input-lux" name="keyAmenities" placeholder="e.g. Sky infinity pool, private elevator, golf course view, concierge, wine cellar…" value={form.keyAmenities} onChange={handleChange} rows={3} />
              </div>

              {[
                { name:"projectType", label:"Project Type", opts:TYPES },
                { name:"targetAudience", label:"Target Audience", opts:AUDIENCES },
                { name:"toneOfVoice", label:"Tone of Voice", opts:TONES },
                { name:"campaignObjective", label:"Campaign Objective", opts:OBJECTIVES },
              ].map(f => (
                <div key={f.name}>
                  <FieldLabel>{f.label}</FieldLabel>
                  <select className="input-lux" name={f.name} value={form[f.name]} onChange={handleChange}>
                    {f.opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>

            {error && (
              <div style={{ marginTop:22, padding:"12px 18px", borderRadius:10, background:"rgba(255,80,80,0.08)", border:"1px solid rgba(255,80,80,0.2)", fontSize:13, color:"#FF8080" }}>
                {error}
              </div>
            )}

            <div style={{ marginTop:36, textAlign:"center" }}>
              <button className="btn-gold" style={{ padding:"17px 56px", borderRadius:12, fontSize:14 }} onClick={generateAds} disabled={loading}>
                {loading
                  ? <span style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <span className="pulse-dot" style={{ width:7, height:7, borderRadius:"50%", background:"#08080B", display:"inline-block" }} />
                      Generating Your Ad Suite…
                    </span>
                  : "✦ Generate Ad Copies"
                }
              </button>
              <p style={{ marginTop:13, fontSize:12, color:S.textMuted }}>Powered by Claude AI · Results in ~10 seconds</p>
            </div>
          </div>
        </section>

        {/* ── LOADING ── */}
        {loading && (
          <div style={{ padding:"0 28px 80px" }}>
            <LoadingSpinner />
          </div>
        )}

        {/* ── OUTPUT SECTION ── */}
        {generated && !loading && (
          <section ref={outputRef} className="fade-up" style={{ padding:"0 28px 90px", maxWidth:1020, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <div className="section-eyebrow">Step 02 — Generated Output</div>
              <h2 className="cormorant" style={{ fontSize:"clamp(28px,4vw,46px)", fontWeight:600, marginBottom:14, color:S.textPrimary }}>
                Your Premium Ad Suite
              </h2>
              <p style={{ color:S.textSecondary, fontSize:14 }}>Click ⎘ Copy to copy any item instantly · Regenerate for fresh variations</p>
            </div>

            {/* Tabs */}
            <div className="tab-wrap" style={{ display:"flex", gap:8, marginBottom:36, flexWrap:"wrap", justifyContent:"center" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  style={{ padding:"9px 20px", borderRadius:9, fontSize:12, border:"1px solid", cursor:"pointer", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif", fontWeight:500, letterSpacing:"0.05em" }}
                  className={activeTab === t.id ? "tab-on" : "tab-off"}>
                  {t.icon} {t.label}
                </button>
              ))}
            </div>

            {/* META ADS */}
            {activeTab === "meta" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {generated.metaAds?.map((ad, i) => <MetaAdCard key={i} ad={ad} i={i} />)}
              </div>
            )}

            {/* GOOGLE ADS */}
            {activeTab === "google" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {generated.googleAds?.map((ad, i) => <GoogleAdCard key={i} ad={ad} i={i} />)}
              </div>
            )}

            {/* HOOK LINES */}
            {activeTab === "hooks" && (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:14 }}>
                {generated.hookLines?.map((hook, i) => (
                  <div key={i} className="out-card" style={{ padding:28, cursor:"pointer" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:18 }}>
                      <div className="num-badge">{i+1}</div>
                      <CopyBtn text={hook} />
                    </div>
                    <div className="cormorant" style={{ fontSize:26, fontWeight:500, color:S.textPrimary, lineHeight:1.3 }}>{hook}</div>
                    <div style={{ marginTop:16, height:1, background:"rgba(201,168,76,0.12)" }} />
                    <div style={{ marginTop:12, fontSize:11, color:S.textMuted, textTransform:"uppercase", letterSpacing:"0.1em" }}>Hook Line · {i+1} of {generated.hookLines.length}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            {activeTab === "ctas" && (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:12 }}>
                {generated.ctas?.map((cta, i) => (
                  <div key={i} className="out-card" style={{ padding:"22px 20px", textAlign:"center", cursor:"pointer" }}>
                    <div className="cormorant" style={{ fontSize:21, fontWeight:600, color:S.textPrimary, marginBottom:10 }}>{cta}</div>
                    <div style={{ height:1, background:"rgba(255,255,255,0.05)", marginBottom:12 }} />
                    <CopyBtn text={cta} />
                  </div>
                ))}
              </div>
            )}

            {/* CREATIVE IDEAS */}
            {activeTab === "creatives" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {generated.creativeIdeas?.map((idea, i) => (
                  <div key={i} className="out-card" style={{ padding:28 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
                      <div className="num-badge">{i+1}</div>
                      <h3 className="cormorant" style={{ fontSize:24, fontWeight:600, color:S.gold }}>{idea.title}</h3>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:20 }}>
                      {[
                        { label:"Creative Direction", val:idea.direction },
                        { label:"Visual Concept", val:idea.visual },
                        { label:"Format", val:idea.format },
                      ].map(({ label, val }) => (
                        <div key={label}>
                          <FieldLabel>{label}</FieldLabel>
                          <div style={{ fontSize:13, color:"rgba(255,255,255,0.68)", lineHeight:1.7 }}>{val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* IMAGE PROMPTS */}
            {activeTab === "prompts" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {generated.imagePrompts?.map((item, i) => (
                  <div key={i} className="out-card" style={{ padding:28 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:18 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <div className="num-badge">{i+1}</div>
                        <h3 className="cormorant" style={{ fontSize:22, fontWeight:600, color:S.gold }}>{item.title}</h3>
                      </div>
                      <CopyBtn text={item.prompt} />
                    </div>
                    <div className="mono" style={{ background:"rgba(201,168,76,0.04)", border:"1px solid rgba(201,168,76,0.1)", borderRadius:10, padding:18, fontSize:12, color:"rgba(255,255,255,0.65)", lineHeight:1.85 }}>
                      {item.prompt}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom actions */}
            <div style={{ textAlign:"center", marginTop:36, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <button className="btn-ghost" style={{ padding:"12px 28px", borderRadius:10, fontSize:12 }} onClick={generateAds}>⟳ Regenerate</button>
              <button className="btn-gold" style={{ padding:"12px 28px", borderRadius:10, fontSize:12 }}
                onClick={() => { setGenerated(null); setForm({ projectName:"", location:"", startingPrice:"", projectType:"Luxury Residential", targetAudience:"HNI Investors", configuration:"", keyAmenities:"", brandName:"", offer:"", toneOfVoice:"Luxury", campaignObjective:"Lead Generation" }); document.getElementById("form-section").scrollIntoView({ behavior:"smooth" }); }}>
                + New Project
              </button>
            </div>
          </section>
        )}

        <div className="glow-line" style={{ maxWidth:1180, margin:"0 auto 90px" }} />

        {/* ── FEATURES ── */}
        <section style={{ padding:"0 28px 90px", maxWidth:1140, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:60 }}>
            <div className="section-eyebrow">Capabilities</div>
            <h2 className="cormorant" style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:600, color:S.textPrimary }}>
              Everything You Need to Launch
            </h2>
          </div>
          <div className="feat-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:18 }}>
            {[
              { icon:"◻", label:"Meta Ad Generator", desc:"Primary text, headlines & descriptions optimised for Facebook & Instagram algorithms and buyer psychology." },
              { icon:"◎", label:"Google RSA Builder", desc:"Responsive Search Ad ready headlines, descriptions, and sitelink extensions for maximum Quality Score." },
              { icon:"⚡", label:"Hook Line Creator", desc:"Scroll-stopping opening lines crafted to capture attention within the first 3 seconds of exposure." },
              { icon:"◈", label:"CTA Optimizer", desc:"High-converting calls-to-action tailored specifically to your campaign objective and audience intent." },
              { icon:"◷", label:"Creative Director", desc:"Visual concepts, moodboard directions, and ad compositions for briefing your design studio." },
              { icon:"◧", label:"AI Image Prompts", desc:"Detailed, ready-to-use prompts for Midjourney, DALL·E 3, and Stable Diffusion XL." },
            ].map(f => (
              <div key={f.label} className="feat-card">
                <div style={{ fontSize:22, color:S.gold, marginBottom:16 }}>{f.icon}</div>
                <h3 className="cormorant" style={{ fontSize:21, fontWeight:600, marginBottom:10, color:S.textPrimary }}>{f.label}</h3>
                <p style={{ fontSize:13, color:S.textSecondary, lineHeight:1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding:"0 28px 90px", maxWidth:1000, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div className="section-eyebrow">Process</div>
            <h2 className="cormorant" style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:600, color:S.textPrimary }}>
              How It Works
            </h2>
          </div>
          <div className="step-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:48 }}>
            {[
              { n:"01", title:"Enter Project Details", desc:"Fill in your project name, location, price point, USP, and target audience. The more detail you share, the sharper your output." },
              { n:"02", title:"AI Generates Ads", desc:"Claude AI crafts luxury-optimised ad copies across Meta, Google, and performance channels — all in under 15 seconds." },
              { n:"03", title:"Launch Campaigns", desc:"One click to copy. Deploy directly to Meta Business Manager and Google Ads. Start generating leads immediately." },
            ].map((item, i) => (
              <div key={item.n} style={{ position:"relative" }}>
                <div className="step-num">{item.n}</div>
                <div style={{ marginTop:8, marginBottom:14, height:1, background:"linear-gradient(90deg, rgba(201,168,76,0.4), transparent)", width:60 }} />
                <h3 className="cormorant" style={{ fontSize:26, fontWeight:600, marginBottom:12, color:S.textPrimary }}>{item.title}</h3>
                <p style={{ fontSize:14, color:S.textSecondary, lineHeight:1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── AD FORMAT PREVIEW ── */}
        <section style={{ padding:"0 28px 90px", maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-eyebrow">Output Formats</div>
            <h2 className="cormorant" style={{ fontSize:"clamp(28px,4vw,46px)", fontWeight:600, color:S.textPrimary }}>
              Optimised for Every Placement
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:14 }}>
            {[
              { label:"Instagram Feed 1:1", tag:"Meta", dims:"1080 × 1080px" },
              { label:"Instagram Story 9:16", tag:"Meta", dims:"1080 × 1920px" },
              { label:"Google Search RSA", tag:"Google", dims:"3 Headlines · 2 Desc" },
              { label:"Google Display Banner", tag:"Google", dims:"300 × 250px · 728 × 90px" },
            ].map(f => (
              <div key={f.label} style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:24, textAlign:"center" }}>
                <div style={{ marginBottom:12 }}>
                  <span style={{ padding:"4px 12px", borderRadius:20, background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.2)", fontSize:10, color:S.gold, textTransform:"uppercase", letterSpacing:"0.1em", fontWeight:600 }}>{f.tag}</span>
                </div>
                <div className="cormorant" style={{ fontSize:18, fontWeight:600, color:S.textPrimary, marginBottom:8 }}>{f.label}</div>
                <div style={{ fontSize:12, color:S.textMuted }}>{f.dims}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="glow-line" style={{ maxWidth:1180, margin:"0 auto 90px" }} />

        {/* ── FINAL CTA ── */}
        <section style={{ padding:"0 28px 110px", maxWidth:740, margin:"0 auto" }}>
          <div className="glass" style={{ padding:"68px 48px", textAlign:"center", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)" }} />
            <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center top, rgba(201,168,76,0.07) 0%, transparent 65%)", pointerEvents:"none" }} />
            <div className="section-eyebrow">Start Now</div>
            <h2 className="cormorant" style={{ fontSize:"clamp(30px,5vw,54px)", fontWeight:600, marginBottom:18, lineHeight:1.15, color:S.textPrimary }}>
              Launch Better Performing<br />
              <span className="gold-text">Ads Faster with AI</span>
            </h2>
            <p style={{ fontSize:16, color:S.textSecondary, marginBottom:38, lineHeight:1.75, maxWidth:460, margin:"0 auto 38px" }}>
              Stop spending hours writing ad copy. Let AI produce luxury-grade performance marketing — ready to deploy in seconds.
            </p>
            <button className="btn-gold" style={{ padding:"17px 52px", borderRadius:12, fontSize:14 }}
              onClick={() => document.getElementById("form-section").scrollIntoView({ behavior:"smooth" })}>
              ✦ Generate Ads Now
            </button>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:"32px 28px", textAlign:"center" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:10 }}>
            <div className="glow-dot" style={{ width:5, height:5 }} />
            <span style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:600, fontSize:13, letterSpacing:"0.12em", textTransform:"uppercase" }}>
              LuxeAds <span className="gold-text">AI</span>
            </span>
          </div>
          <p style={{ fontSize:12, color:S.textMuted }}>
            © 2025 LuxeAds AI · Premium Performance Marketing for Luxury Real Estate
          </p>
        </footer>

      </div>
    </>
  );
}
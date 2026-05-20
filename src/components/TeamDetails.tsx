import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const memberImg = "https://www.hiroshima-u.ac.jp/system/files/91104/sempai36_01.jpg";

const teamMembers = [
  { id: "member-1", name: "Hiroshi Tanaka", role: "Senior Consultant", bio: "Hiroshi has 15 years of experience in cross-cultural communication." },
  { id: "member-2", name: "Aiko Sato", role: "Language Specialist", bio: "Aiko leads our Japanese language academy." },
  { id: "member-3", name: "Kenji Nakamura", role: "Market Entry Strategist", bio: "Kenji specializes in helping businesses navigate the Japanese market." },
  { id: "member-4", name: "Yuki Takahashi", role: "Career Coach", bio: "Yuki connects skilled professionals with Japanese employers." },
  { id: "member-5", name: "Mayumi Ito", role: "Cultural Liaison", bio: "Mayumi fosters deep cultural understanding through organized exchange initiatives." },
  { id: "member-6", name: "Takeshi Watanabe", role: "Operations Director", bio: "Takeshi oversees the seamless execution of our services." },
  { id: "member-7", name: "Sakura Kobayashi", role: "Client Relations", bio: "Sakura ensures every client receives tailored support." },
  { id: "member-8", name: "Daiki Kato", role: "Immigration Specialist", bio: "Daiki provides expert guidance on visa pathways." },
  { id: "member-9", name: "Emi Yoshida", role: "Education Coordinator", bio: "Emi organizes immersive language programs." },
];

export default function TeamDetails() {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const member = teamMembers.find(m => m.id === id) || { 
    id, 
    name: "Team Member", 
    role: "Expert Consultant", 
    bio: "Detailed biography coming soon." 
  };

  return (
    <div className="section team-details" style={{ minHeight: "100vh", paddingTop: "120px", background: "var(--color-bg-light)" }}>
      <div className="section__inner">
        <Link to="/" style={{ display: "inline-block", marginBottom: "40px", color: "var(--color-accent)", textDecoration: "none", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>
          &larr; Back to Home
        </Link>
        
        <div style={{ display: "flex", gap: "64px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
            <img src={memberImg} alt={member.name} style={{ width: "100%", borderRadius: "8px", aspectRatio: "1/1", objectFit: "cover", background: "rgba(38, 59, 106, 0.1)" }} />
          </div>
          
          <div style={{ flex: "2 1 400px" }}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", marginBottom: "8px" }}>{member.name}</h1>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--color-accent)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px", marginBottom: "32px", fontWeight: 600 }}>{member.role}</p>
            <p style={{ fontFamily: "var(--font-body)", color: "rgba(38,59,106,0.8)", fontSize: "15px", lineHeight: 1.8 }}>
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

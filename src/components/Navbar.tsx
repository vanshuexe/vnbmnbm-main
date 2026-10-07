import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import surgical from '../data/surgicalProcedures.json';
import nonSurgical from '../data/nonsurgicalProcedures.json';

const readable = (text: string) => text.replaceAll('&amp;', '&');
const surgicalCategories = ['Face', 'Eyes', 'Ears', 'Nose', 'Neck', 'Hair', 'Miscellaneous'];
const nonSurgicalCategories = ['Botox', 'Dermal Fillers', 'Hair', 'Skin Refinement', 'Thread Lift', 'Double Chin Reduction', 'Wellness', 'Miscellaneous'];
const additionalSurgical = [
  { title: 'Orthognathic surgery', category: 'Face' },
  { title: 'Revision rhinoplasty', category: 'Nose' },
  { title: 'Wart removal', category: 'Miscellaneous' },
  { title: 'Tongue tie', category: 'Miscellaneous' },
];
const groups = [
  ...nonSurgicalCategories.map(category => ({ title: category, section: 'Non-Surgical', items: nonSurgical.filter(p => p.category === category && p.id !== 'exosomes-mesotherapy').map(p => ({ title: readable(p.title), to: `/non-surgical#${p.id}` })) })),
  ...surgicalCategories.map(category => ({ title: category, section: 'Surgical', items: [...surgical.filter(p => p.category === category).map(p => ({ title: readable(p.title), to: `/surgical#${p.id}` })), ...additionalSurgical.filter(p => p.category === category).map(p => ({ title: p.title, to: '/surgical' }))] })),
];

function CenterBrand() {
  return <span className="max-w-[210px] md:max-w-none text-[10px] md:text-[11px] font-light leading-[1.5] tracking-[0.06em]">For Advanced Maxillofacial and Cosmetic Surgery</span>;
}

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);
  const dark = forceDark || activeMenu !== null;
  const close = () => { setActiveMenu(null); setMobileOpen(false); setMobileGroup(null); };
  // A heading whose only item has the same name (e.g. Thread Lift) links straight to it instead of repeating the name.
  const directLink = (group: typeof groups[number]) => group.items.length === 1 && group.items[0].title === group.title ? group.items[0] : null;
  const renderGroup = (group: typeof groups[number]) => { const direct = directLink(group); return <div key={`${group.section}-${group.title}`}>{direct ? <Link to={direct.to} onClick={close} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6e5038] hover:text-black transition-colors">{group.title}</Link> : <><h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6e5038] mb-4">{group.title}</h4><ul className="space-y-3">{group.items.map(item => <li key={item.title}><Link to={item.to} onClick={close} className="text-sm font-light leading-relaxed text-gray-700 hover:text-black transition-colors">{item.title}</Link></li>)}</ul></>}</div>; };
  return <header className={`relative z-50 w-full transition-colors ${dark ? 'bg-[#f7f6f2] text-[#1a1a1a]' : 'text-white'}`} onMouseLeave={() => setActiveMenu(null)}>
    <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 md:px-8 py-6 w-full">
      <button aria-label="Open menu" className="md:hidden" onClick={() => setMobileOpen(true)}><Menu size={24} strokeWidth={1.5} /></button>
      <nav aria-label="Main navigation" className="hidden md:flex gap-8 text-sm">
        {['Procedures', 'Discover'].map(label => <button key={label} aria-expanded={activeMenu === label} onMouseEnter={() => setActiveMenu(label)} onClick={() => setActiveMenu(label)} className="pb-1 hover:opacity-70">{label}</button>)}
      </nav>
      <Link to="/" onClick={close} aria-label="Advanced Maxillofacial and Cosmetic Surgery home" className="flex flex-col items-center text-center"><CenterBrand /></Link>
      <Link to="/contact" onClick={close} className="justify-self-end rounded-full border border-current px-3 md:px-8 py-2 md:py-3 text-[10px] tracking-[0.2em] hover:opacity-70">BOOK</Link>
    </div>
    {activeMenu === 'Procedures' && <div className="hidden md:block max-h-[75vh] overflow-y-auto border-t border-black/10 px-8 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 xl:grid-cols-[1fr_2fr] gap-10">
        {['Non-Surgical', 'Surgical'].map(section => <section key={section}><h3 className="text-sm font-semibold uppercase tracking-[0.15em] mb-6">{section}</h3><div className={`grid gap-8 ${section === 'Surgical' ? 'lg:grid-cols-2 xl:grid-cols-3' : ''}`}>{groups.filter(group => group.section === section).map(renderGroup)}</div></section>)}
      </div>
    </div>}
    {activeMenu === 'Discover' && <nav aria-label="Discover" className="hidden md:flex gap-10 border-t border-black/10 px-8 py-10">{[['The Feature', '/the-feature'], ['FAQ', '/faq'], ['Contact Us', '/contact']].map(([label, to]) => <Link key={to} to={to} onClick={close}>{label}</Link>)}</nav>}
    {mobileOpen && <div className="fixed inset-0 z-50 bg-[#f7f6f2] text-[#1a1a1a] overflow-y-auto md:hidden">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 p-4 border-b border-black/10"><button aria-label="Close menu" onClick={close}><X size={24} /></button><Link to="/" onClick={close} className="flex flex-col items-center text-center"><CenterBrand /></Link><Link to="/contact" onClick={close} className="text-[10px] tracking-widest">BOOK</Link></div>
      <nav aria-label="Mobile procedures" className="p-6 space-y-8">{['Non-Surgical', 'Surgical'].map(section => <section key={section}><h3 className="font-cormorant text-3xl mb-4">{section}</h3>{groups.filter(group => group.section === section).map(group => { const key = `${group.section}-${group.title}`; const direct = directLink(group); if (direct) return <div key={key} className="border-b border-black/10 py-3"><Link to={direct.to} onClick={close} className="w-full flex items-center justify-between text-sm">{group.title}<ChevronRight size={16} /></Link></div>; return <div key={key} className="border-b border-black/10 py-3"><button className="w-full flex items-center justify-between text-sm" aria-expanded={mobileGroup === key} onClick={() => setMobileGroup(mobileGroup === key ? null : key)}>{group.title}<ChevronDown size={16} /></button>{mobileGroup === key && <ul className="pt-4 pb-2 space-y-3">{group.items.map(item => <li key={item.title}><Link to={item.to} onClick={close} className="text-sm text-gray-600">{item.title}</Link></li>)}</ul>}</div>; })}</section>)}<div className="flex flex-col gap-4 border-t border-black/10 pt-6">{[['The Feature', '/the-feature'], ['FAQ', '/faq'], ['Contact Us', '/contact']].map(([label, to]) => <Link key={to} to={to} onClick={close}>{label}</Link>)}</div></nav>
    </div>}
  </header>;
}

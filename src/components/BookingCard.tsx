import { useEffect, useState } from 'react';

const WHATSAPP = '919444615554';

const interests = [
  "Not sure yet — I'd like advice",
  'Surgical procedure (rhinoplasty, face lift, eyelids…)',
  'Botox or dermal fillers',
  'Skin refinement / skin boosters',
  'Hair restoration',
  'Thread lift / double chin',
];

export const clinicOptions = [
  { value: 'Skin Lab Studio', note: 'Race Course · daily' },
  { value: 'Rootwise Aesthetic', note: 'R.S. Puram · Mon–Sat' },
];

type Props = { clinic?: string; onClinicChange?: (clinic: string) => void };

// Booking request goes straight to the clinic's WhatsApp with the details filled in.
// The page can control the clinic (e.g. the "Book here" buttons in the clinics section).
export default function BookingCard({ clinic: controlledClinic, onClinicChange }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(interests[0]);
  const [ownClinic, setOwnClinic] = useState(clinicOptions[0].value);
  const clinic = controlledClinic ?? ownClinic;
  const setClinic = onClinicChange ?? setOwnClinic;
  const [date, setDate] = useState('');
  // Set after hydration so the prerendered HTML doesn't carry the build date.
  const [today, setToday] = useState<string>();
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Hello Dr. Shruthilaya, I would like to book a consultation.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${interest}`,
      `Clinic: ${clinic}`,
      date ? `Preferred date: ${new Date(date + 'T00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}` : '',
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
    // Phones: go straight to the WhatsApp app in this tab (pop-ups are often blocked there).
    // Desktop: open WhatsApp Web in a new tab, falling back to this tab if the pop-up is blocked.
    const isPhone = window.matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isPhone) {
      window.location.href = url;
      return;
    }
    const tab = window.open(url, '_blank');
    if (tab) tab.opener = null;
    else window.location.href = url;
  };

  const field = 'w-full bg-white rounded-lg border border-white/20 px-3 py-2.5 text-sm text-[#001d3d] focus:outline-none focus:ring-2 focus:ring-[#c9a98a]';
  const label = 'block text-[10px] tracking-[0.2em] uppercase text-white/60 mb-2';

  return (
    <form id="book" onSubmit={submit} className="scroll-mt-24 rounded-2xl bg-white/[0.04] border border-white/15 p-4 sm:p-7 w-full">
      <div className="flex items-baseline justify-between mb-5">
        <h3 className="font-cormorant text-2xl text-white">Book a consultation</h3>
        <a href="tel:+919444615554" className="text-xs text-[#c9a98a] border-b border-[#c9a98a]/50 hover:text-white">or call us</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="bk-name" className={label}>Name</label>
          <input id="bk-name" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="bk-phone" className={label}>Phone</label>
          <input id="bk-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" className={field} />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="bk-interest" className={label}>I'm interested in</label>
        <select id="bk-interest" value={interest} onChange={(e) => setInterest(e.target.value)} className={field}>
          {interests.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>

      <fieldset className="mb-4">
        <legend className={label}>Clinic</legend>
        <div className="grid grid-cols-2 gap-2">
          {clinicOptions.map((c) => (
            <label key={c.value} className={`cursor-pointer rounded-lg border px-3 py-2.5 transition-colors ${clinic === c.value ? 'bg-white border-white' : 'border-white/20 hover:border-white/50'}`}>
              <input type="radio" name="bk-clinic" value={c.value} checked={clinic === c.value} onChange={() => setClinic(c.value)} className="sr-only" />
              <span className={`block text-sm ${clinic === c.value ? 'text-[#001d3d] font-medium' : 'text-white'}`}>{c.value}</span>
              <span className={`block text-[11px] ${clinic === c.value ? 'text-gray-600' : 'text-white/55'}`}>{c.note}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mb-5">
        <label htmlFor="bk-date" className={label}>Preferred date</label>
        <input id="bk-date" type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className={field} />
      </div>

      <button type="submit" className="w-full rounded-full bg-white text-[#001d3d] py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#c9a98a] hover:text-white transition-colors">
        Request appointment
      </button>
      <p className="text-center text-[11px] text-white/55 mt-3">Opens WhatsApp with your details — the clinic confirms your slot.</p>
    </form>
  );
}

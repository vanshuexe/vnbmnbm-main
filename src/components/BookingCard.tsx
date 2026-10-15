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
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  };

  const field = 'w-full bg-white border border-black/10 px-3 py-2.5 text-sm text-[#12284a] focus:outline-none focus:border-[#12284a]';
  const label = 'block text-[10px] tracking-[0.2em] uppercase text-gray-600 mb-2';

  return (
    <form id="book" onSubmit={submit} className="scroll-mt-24 bg-[#faf6f3] border border-black/5 shadow-xl p-6 sm:p-7 max-w-xl">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-cormorant text-2xl text-[#12284a]">Book a consultation</h2>
        <a href="tel:+919444615554" className="text-xs text-gray-600 border-b border-[#a07c5a]/50 hover:text-[#12284a]">or call us</a>
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
        <div className="grid grid-cols-2 border border-black/10">
          {clinicOptions.map((c, i) => (
            <label key={c.value} className={`cursor-pointer px-3 py-2.5 transition-colors ${i ? 'border-l border-black/10' : ''} ${clinic === c.value ? 'bg-[#dfe7f0]' : 'bg-white hover:bg-[#f4f6f9]'}`}>
              <input type="radio" name="bk-clinic" value={c.value} checked={clinic === c.value} onChange={() => setClinic(c.value)} className="sr-only" />
              <span className="block text-sm text-[#12284a]">{c.value}</span>
              <span className="block text-[11px] text-gray-600">{c.note}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mb-5">
        <label htmlFor="bk-date" className={label}>Preferred date</label>
        <input id="bk-date" type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className={field} />
      </div>

      <button type="submit" className="w-full bg-[#12284a] text-white py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#001d3d] transition-colors">
        Request appointment
      </button>
      <p className="text-center text-[11px] text-gray-600 mt-3">Opens WhatsApp with your details — the clinic confirms your slot.</p>
    </form>
  );
}

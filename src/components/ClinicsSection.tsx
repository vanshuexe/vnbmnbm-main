const clinics = [
  {
    label: 'Clinic 01',
    name: 'Skin Lab Studio',
    bookingValue: 'Skin Lab Studio',
    address: ['No. 166, Parijath, Sathyadev Enclave,', 'Race Course, Coimbatore 641018'],
    days: 'Mon – Sun',
    hours: '10:00 AM – 7:30 PM',
    directions: 'https://share.google/X54rfKMZyTi7j0lSV',
    bg: 'bg-[#f2e2dc]',
  },
  {
    label: 'Clinic 02',
    name: 'Rootwise Aesthetic Clinic',
    bookingValue: 'Rootwise Aesthetic',
    address: ['31, E TV Swamy Rd,', 'R.S. Puram, Coimbatore 641002'],
    days: 'Mon – Sat',
    hours: '9:30 – 10:30 AM · 7:30 – 8:30 PM',
    directions: 'https://share.google/4zPrH7dKJrDc9syyg',
    bg: 'bg-[#dfe7f0]',
  },
];

const contacts = [
  { label: 'Call', value: '+91 94446 15554', href: 'tel:+919444615554' },
  { label: 'WhatsApp', value: 'Message the clinic', href: 'https://wa.me/919444615554' },
  { label: 'Instagram', value: '@drshruthilayaganesan', href: 'https://www.instagram.com/drshruthilayaganesan' },
];

// "Two clinics, one surgeon": both locations with booking + directions.
export default function ClinicsSection({ onBook }: { onBook: (clinic: string) => void }) {
  return (
    <section className="w-full bg-[#f9f6f2] px-4 sm:px-8 lg:px-12 xl:px-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-600 mb-4">Visit</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-[#12284a] leading-tight">
            Two clinics, <em className="text-[#a07c5a]">one surgeon.</em>
          </h2>
          <p className="text-sm text-gray-600 mt-4">Dr. Shruthilaya consults at both — choose whichever is closer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {clinics.map((c) => (
            <article key={c.name} className={`${c.bg} p-7 sm:p-9 flex flex-col`}>
              <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#8a6d52] mb-4">{c.label}</p>
              <h3 className="font-cormorant text-3xl text-[#12284a] mb-4">{c.name}</h3>
              <p className="text-sm text-[#3c4a5c] leading-relaxed mb-6">
                {c.address[0]}<br />{c.address[1]}
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-1 border-t border-black/10 pt-5 mb-7 text-sm mt-auto">
                <span className="text-gray-600">{c.days}</span>
                <span className="text-[#12284a]">{c.hours}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onBook(c.bookingValue)}
                  className="bg-[#12284a] text-white px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase hover:bg-[#001d3d] transition-colors"
                >
                  Book here
                </button>
                <a
                  href={c.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#12284a]/60 text-[#12284a] px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase hover:bg-[#12284a] hover:text-white transition-colors"
                >
                  Directions
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-5 mt-12">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group">
              <span className="block text-[10px] tracking-[0.2em] uppercase text-gray-600 mb-1">{c.label}</span>
              <span className="block text-sm text-[#12284a] group-hover:text-[#a07c5a] transition-colors">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

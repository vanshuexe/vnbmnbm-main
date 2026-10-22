const clinics = [
  {
    label: 'Clinic 01',
    name: 'Skin Lab Studio by Jamuna Pai',
    bookingValue: 'Skin Lab Studio by Jamuna Pai',
    address: ['No. 166, Parijath, Sathyadev Enclave,', 'Race Course, Coimbatore 641018'],
    days: 'Mon – Sun',
    hours: '11:00 AM – 7:00 PM',
    directions: 'https://share.google/X54rfKMZyTi7j0lSV',
  },
  {
    label: 'Clinic 02',
    name: 'Rootwise Aesthetics',
    bookingValue: 'Rootwise Aesthetics',
    address: ['31, E TV Swamy Rd,', 'R.S. Puram, Coimbatore 641002'],
    days: 'Mon – Sat',
    hours: '9:00 – 10:30 AM · 7:30 – 8:30 PM',
    directions: 'https://share.google/4zPrH7dKJrDc9syyg',
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
    <section className="w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-24 pb-16 md:pb-24 pt-4 md:pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] md:text-xs tracking-[0.25em] font-semibold uppercase text-[#8a6d52] mb-4">Visit</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#001d3d] leading-tight">
            Two clinics, <em className="text-[#8a6d52] font-normal">one surgeon.</em>
          </h2>
          <p className="text-sm text-gray-600 mt-4">Dr. Shruthilaya consults at both — choose whichever is closer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {clinics.map((c) => (
            <article key={c.name} className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] ring-1 ring-black/10 shadow-xl text-white p-7 sm:p-10 flex flex-col">
              <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#c9a98a] mb-4">{c.label}</p>
              <h3 className="font-cormorant text-3xl md:text-4xl font-medium mb-4">{c.name}</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                {c.address[0]}<br />{c.address[1]}
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-1 border-t border-white/15 pt-5 mb-7 text-sm mt-auto">
                <span className="text-white/55">{c.days}</span>
                <span className="text-white">{c.hours}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onBook(c.bookingValue)}
                  className="rounded-full bg-white text-[#001d3d] px-7 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#c9a98a] hover:text-white transition-colors"
                >
                  Book here
                </button>
                <a
                  href={c.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/70 text-white px-7 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-[#001d3d] transition-colors"
                >
                  Directions
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto text-center mt-12">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group">
              <span className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8a6d52] mb-1">{c.label}</span>
              <span className="block text-sm text-[#001d3d] group-hover:text-[#8a6d52] transition-colors">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const fs = require('fs');
const path = require('path');

const nonSurgicalAdditions = [
  {
    id: "profilo",
    title: "PROFILO",
    subtitle: "(Bio-Remodeling)",
    category: "Skin Boosters",
    desc: "PROFILO is a revolutionary injectable treatment formulated with one of the highest concentrations of hyaluronic acid. It acts as a bio-remodeler rather than a traditional filler, spreading smoothly beneath the skin to stimulate collagen and elastin production, resulting in intensely hydrated, firmer, and more radiant skin.",
    benefits: [
      { title: "Intense Hydration", desc: "Provides deep, long-lasting moisture to combat dull and tired-looking skin." },
      { title: "Skin Laxity Treatment", desc: "Effectively tightens and lifts mildly sagging skin across the face, neck, and hands." },
      { title: "Stimulates Collagen", desc: "Triggers a bio-remodeling process that naturally boosts collagen and elastin production." },
      { title: "Natural Glow", desc: "Improves overall skin tone and texture, leaving a radiant, youthful glow." }
    ]
  },
  {
    id: "exosomes-mesotherapy",
    title: "Exosomes / Mesotherapy",
    subtitle: "(Cellular Rejuvenation)",
    category: "Skin Refinement",
    desc: "Harness the power of regenerative medicine with Exosomes and Mesotherapy. This treatment delivers potent growth factors, vitamins, and peptides directly into the skin to accelerate healing, reduce inflammation, and rejuvenate at a cellular level, providing unparalleled anti-aging benefits.",
    benefits: [
      { title: "Cellular Repair", desc: "Utilizes advanced exosome technology to repair damaged skin cells and promote regeneration." },
      { title: "Anti-Inflammatory", desc: "Significantly calms redness, irritation, and inflammation in sensitive skin." },
      { title: "Customized Cocktails", desc: "Mesotherapy blends are tailored with vitamins and antioxidants specific to your skin's needs." },
      { title: "Enhanced Vitality", desc: "Restores a bright, healthy, and revitalized appearance to aging or stressed skin." }
    ]
  },
  {
    id: "non-surgical-scar-management",
    title: "Scar Management",
    subtitle: "(Non-Surgical Refinement)",
    category: "Skin Refinement",
    desc: "Our non-surgical scar management combines advanced topical treatments, targeted injections, and minimally invasive resurfacing techniques to fade acne scars, surgical scars, and hyperpigmentation, restoring a smooth, even skin texture.",
    benefits: [
      { title: "Texture Improvement", desc: "Smooths out uneven or pitted skin caused by acne or minor injuries." },
      { title: "Color Blending", desc: "Reduces the redness or dark pigmentation often associated with healed scars." },
      { title: "Non-Invasive", desc: "Achieves significant improvement without the need for additional surgical incisions." },
      { title: "Customized Care", desc: "Tailored treatment plans combining peels, microneedling, or injections based on scar type." }
    ]
  },
  {
    id: "double-chin-reduction",
    title: "Double Chin Reduction",
    subtitle: "(Submental Contouring)",
    category: "Facial Contouring",
    desc: "Target and eliminate stubborn fat beneath the chin with our non-surgical double chin reduction treatments. Utilizing targeted fat-dissolving injections, this procedure breaks down fat cells to sculpt a tighter, more defined jawline without surgery.",
    benefits: [
      { title: "Targeted Fat Loss", desc: "Specifically addresses the submental fat pad that resists diet and exercise." },
      { title: "Defined Jawline", desc: "Enhances your lower facial profile, creating a sharper and more contoured jawline." },
      { title: "Permanent Results", desc: "Treated fat cells are permanently destroyed and naturally eliminated by the body." },
      { title: "No Surgery Required", desc: "Avoids the downtime, incisions, and risks associated with surgical liposuction." }
    ]
  },
  {
    id: "iv-infusions",
    title: "IV Infusions",
    subtitle: "(Wellness & Rejuvenation)",
    category: "Wellness",
    desc: "Revitalize your body and skin from the inside out with our customized IV infusions. Delivering a potent blend of essential vitamins, antioxidants (like Glutathione and Vitamin C), and hydration directly into your bloodstream for maximum absorption and instant glowing results.",
    benefits: [
      { title: "Instant Hydration", desc: "Replenishes bodily fluids immediately for an energized, refreshed feeling." },
      { title: "Skin Brightening", desc: "Glutathione and Vitamin C help lighten pigmentation and give the skin a radiant glow." },
      { title: "Immunity Boost", desc: "Strengthens the immune system with essential vitamins and powerful antioxidants." },
      { title: "Maximum Absorption", desc: "Bypasses the digestive system for 100% absorption of nutrients." }
    ]
  }
];

const surgicalAdditions = [
  {
    id: "forehead-lift",
    title: "Forehead Lift",
    subtitle: "(Upper Face Rejuvenation)",
    category: "Face",
    desc: "A surgical forehead lift addresses deep horizontal wrinkles and significant sagging in the upper face. By lifting the skin and repositioning underlying muscles, this procedure restores a smooth, serene, and youthful appearance to the forehead.",
    benefits: [
      { title: "Smooths Deep Lines", desc: "Effectively eliminates stubborn horizontal forehead creases." },
      { title: "Long-Lasting Results", desc: "Provides durable, permanent improvement compared to temporary injectables." },
      { title: "Refreshed Look", desc: "Alleviates a heavy or 'angry' appearance, making you look approachable and rested." }
    ]
  },
  {
    id: "surgical-brow-lift",
    title: "Brow Lift",
    subtitle: "(Surgical Elevation)",
    category: "Face",
    desc: "A surgical brow lift permanently corrects heavy, drooping eyebrows that can hood the upper eyelids. It lifts the brow arch to its ideal aesthetic position, harmonizing the upper face and opening up the eyes for a bright, awake look.",
    benefits: [
      { title: "Permanent Elevation", desc: "Surgically secures the brow at an optimal, youthful height." },
      { title: "Improves Eyelid Hooding", desc: "Reduces the weight of the brow on the upper eyelids, often complementing blepharoplasty." },
      { title: "Customized Arch", desc: "Tailors the shape and peak of the brow to perfectly suit your facial structure." }
    ]
  },
  {
    id: "surgical-mid-face-lift",
    title: "Mid-Face Lift",
    subtitle: "(Cheek Elevation)",
    category: "Face",
    desc: "A surgical mid-face lift specifically targets sagging cheeks and deep nasolabial folds. By elevating the fat pads of the cheeks vertically, it restores full, youthful cheekbones and smooths the transition between the lower eyelids and the cheeks.",
    benefits: [
      { title: "Restores Cheek Volume", desc: "Lifts descended fat back to the upper cheeks for natural, youthful volume." },
      { title: "Smooths Nasolabial Folds", desc: "Significantly reduces the depth of the smile lines running from the nose to mouth." },
      { title: "Natural Rejuvenation", desc: "Avoids a 'pulled' look by lifting vertically rather than horizontally." }
    ]
  },
  {
    id: "orthognathic-surgery",
    title: "Orthognathic Surgery",
    subtitle: "(Corrective Jaw Surgery)",
    category: "Face",
    desc: "Orthognathic surgery corrects severe jaw discrepancies and bite issues that cannot be resolved with orthodontics alone. It improves breathing, chewing function, and facial symmetry by surgically realigning the upper and lower jaws.",
    benefits: [
      { title: "Functional Improvement", desc: "Resolves difficulties with chewing, swallowing, and speech." },
      { title: "Facial Harmony", desc: "Dramatically improves lower facial proportions, symmetry, and profile." },
      { title: "Airway Expansion", desc: "Can effectively treat obstructive sleep apnea by opening the airway." }
    ]
  },
  {
    id: "dimple-creation",
    title: "Dimple Creation",
    subtitle: "(Dimpleplasty)",
    category: "Cheek & Implants",
    desc: "Dimpleplasty is a quick, minimally invasive surgical procedure designed to create natural-looking dimples on the cheeks or chin. The procedure involves a small incision inside the mouth, leaving no external scars, to tether the skin to the underlying muscle.",
    benefits: [
      { title: "Enhances Smile", desc: "Adds a charming, youthful characteristic to your smile." },
      { title: "No External Scars", desc: "Performed entirely from within the mouth for a flawless exterior." },
      { title: "Quick Procedure", desc: "Typically performed under local anesthesia in under an hour." }
    ]
  },
  {
    id: "silicon-facial-implants",
    title: "Facial Implants",
    subtitle: "(Chin, Nose, Cheek)",
    category: "Cheek & Implants",
    desc: "Custom silicone facial implants are used to enhance the fundamental bone structure of the face. Whether building a weak chin, augmenting flat cheekbones, or refining nasal contours, implants provide permanent, striking, and balanced facial definition.",
    benefits: [
      { title: "Permanent Volume", desc: "Offers a lifelong solution to structural volume deficiencies." },
      { title: "Custom Contouring", desc: "Implants are meticulously selected and shaped to fit your unique anatomy." },
      { title: "Balanced Proportions", desc: "Brings harmony to facial features, such as balancing a prominent nose with a stronger chin." }
    ]
  },
  {
    id: "canthoplasty",
    title: "Canthoplasty",
    subtitle: "(Eye Shape Refinement)",
    category: "Eyes",
    desc: "Canthoplasty is a specialized surgical procedure that reshapes and tightens the outer corner of the eye (the lateral canthus). It is used to correct drooping, create a more almond-shaped or 'fox eye' appearance, and provide essential support to the lower eyelid.",
    benefits: [
      { title: "Almond Eye Shape", desc: "Elongates and slightly elevates the outer corners of the eyes." },
      { title: "Lower Lid Support", desc: "Corrects lower eyelid laxity or 'ectropion', restoring functional integrity." },
      { title: "Refined Aesthetics", desc: "Adds an elegant, exotic, and youthful contour to the eyes." }
    ]
  },
  {
    id: "alarplasty",
    title: "Alarplasty",
    subtitle: "(Nostril Reduction)",
    category: "Nose",
    desc: "Alarplasty is a delicate surgical procedure aimed specifically at narrowing wide or flared nostrils. Often performed alongside rhinoplasty or on its own, it refines the nasal base to bring the nose into perfect proportion with the rest of the face.",
    benefits: [
      { title: "Narrows Nostrils", desc: "Reduces nostril flaring and decreases the width of the nasal base." },
      { title: "Hidden Incisions", desc: "Scars are concealed within the natural crease where the nostril meets the cheek." },
      { title: "Preserves Natural Look", desc: "Meticulously planned to ensure the nose looks naturally proportionate, not 'pinched'." }
    ]
  },
  {
    id: "surgical-scar-revision",
    title: "Scar Revision",
    subtitle: "(Surgical Refinement)",
    category: "Hair & Misc",
    desc: "Surgical scar revision aims to minimize the appearance of prominent, thick, or restrictive scars. Through precise excision and meticulous re-closure using advanced plastic surgery techniques, the scar is blended closely with surrounding healthy skin.",
    benefits: [
      { title: "Improves Appearance", desc: "Transforms wide, raised, or jagged scars into thin, neat lines." },
      { title: "Restores Function", desc: "Releases tight scar tissue (contractures) that may be restricting movement." },
      { title: "Advanced Closure", desc: "Utilizes multi-layered suturing to minimize tension and optimize healing." }
    ]
  },
  {
    id: "wart-tongue-tie-removal",
    title: "Wart & Tongue Tie Removal",
    subtitle: "(Minor Surgical Procedures)",
    category: "Hair & Misc",
    desc: "We perform minor, precise surgical procedures for the complete removal of stubborn facial warts, skin tags, and the release of tongue ties (ankyloglossia). These procedures are fast, virtually painless, and highly effective.",
    benefits: [
      { title: "Complete Removal", desc: "Surgically excises stubborn warts to prevent recurrence." },
      { title: "Improves Function", desc: "Tongue tie release instantly improves speech, eating, and oral mobility." },
      { title: "Minimal Downtime", desc: "Fast outpatient procedures with rapid, straightforward recovery." }
    ]
  }
];

const images = [
  "https://ik.imagekit.io/fdhgiehjz/667677765.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/65545443.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/88888.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/4344343.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/4544.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/8899.jpeg"
];

function generateSectionHTML(item, index) {
  const bgClass = index % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]";
  const flexClass = index % 2 === 0 ? "flex-col-reverse lg:flex-row" : "flex-col lg:flex-row";
  const image = images[index % images.length];

  let benefitsHTML = '';
  item.benefits.forEach(b => {
    benefitsHTML += '                <li className="flex items-start">\n';
    benefitsHTML += '                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>\n';
    benefitsHTML += '                  <p className="text-gray-800 font-light leading-relaxed">\n';
    benefitsHTML += '                    <strong className="font-medium text-[#1a1a1a]">' + b.title + ':</strong> ' + b.desc + '\n';
    benefitsHTML += '                  </p>\n';
    benefitsHTML += '                </li>\n';
  });

  let html = '        {/* ' + item.title + ' Section */}\n';
  html += '        <section id="' + item.id + '" className="py-24 px-6 md:px-12 lg:px-24 ' + bgClass + '">\n';
  html += '          <div className="max-w-7xl mx-auto flex ' + flexClass + ' gap-12 lg:gap-20 items-center">\n';
  
  if (index % 2 !== 0) {
    html += '            {/* Image */}\n';
    html += '            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">\n';
    html += '              <img src="' + image + '" alt="' + item.title + '" className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"/>\n';
    html += '            </div>\n';
  }

  html += '            {/* Content */}\n';
  html += '            <div className="w-full lg:w-1/2 flex flex-col">\n';
  html += '              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">' + item.category + '</p>\n';
  html += '              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">\n';
  html += '                ' + item.title + ' <br/>\n';
  html += '                <span className="text-gray-500 italic text-2xl md:text-3xl">' + item.subtitle + '</span>\n';
  html += '              </h2>\n';
  html += '              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>\n';
  html += '              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">' + item.desc + '</p>\n';
  html += '              <ul className="space-y-6 mb-12">\n' + benefitsHTML + '              </ul>\n';
  html += '              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">Book Consultation</a>\n';
  html += '            </div>\n';

  if (index % 2 === 0) {
    html += '            {/* Image */}\n';
    html += '            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">\n';
    html += '              <img src="' + image + '" alt="' + item.title + '" className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"/>\n';
    html += '            </div>\n';
  }

  html += '          </div>\n';
  html += '        </section>\n';

  return html;
}

function processFile(filePath, additions) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const mainEndTag = '</main>';
  const parts = content.split(mainEndTag);
  
  if (parts.length === 2) {
    let newSectionsHTML = '';
    additions.forEach((item, index) => {
      newSectionsHTML += generateSectionHTML(item, index) + '\n';
    });
    
    const newContent = parts[0] + newSectionsHTML + '\n      ' + mainEndTag + parts[1];
    fs.writeFileSync(filePath, newContent);
    console.log('Successfully updated ' + filePath);
  } else {
    console.log('Could not find </main> tag in ' + filePath);
  }
}

const nonSurgPath = path.join(__dirname, 'src', 'pages', 'NonSurgical.tsx');
const surgPath = path.join(__dirname, 'src', 'pages', 'Surgical.tsx');

processFile(nonSurgPath, nonSurgicalAdditions);
processFile(surgPath, surgicalAdditions);

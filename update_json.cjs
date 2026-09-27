const fs = require('fs');
const path = require('path');

const surgPath = path.join(__dirname, 'src', 'data', 'surgicalProcedures.json');
const nonSurgPath = path.join(__dirname, 'src', 'data', 'nonsurgicalProcedures.json');

const surgData = JSON.parse(fs.readFileSync(surgPath, 'utf8'));
const nonSurgData = JSON.parse(fs.readFileSync(nonSurgPath, 'utf8'));

const images = [
  "https://ik.imagekit.io/fdhgiehjz/667677765.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/65545443.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/88888.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/4344343.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/4544.jpeg",
  "https://ik.imagekit.io/fdhgiehjz/8899.jpeg"
];

const nonSurgicalAdditions = [
  {
    id: "profilo",
    category: "Skin Boosters",
    title: "PROFILO",
    subtitle: "Bio-Remodeling",
    image: images[0],
    description: "PROFILO is a revolutionary injectable treatment formulated with one of the highest concentrations of hyaluronic acid. It acts as a bio-remodeler rather than a traditional filler, spreading smoothly beneath the skin to stimulate collagen and elastin production, resulting in intensely hydrated, firmer, and more radiant skin.",
    bullets: [
      { title: "Intense Hydration:", text: "Provides deep, long-lasting moisture to combat dull and tired-looking skin." },
      { title: "Skin Laxity Treatment:", text: "Effectively tightens and lifts mildly sagging skin across the face, neck, and hands." },
      { title: "Stimulates Collagen:", text: "Triggers a bio-remodeling process that naturally boosts collagen and elastin production." },
      { title: "Natural Glow:", text: "Improves overall skin tone and texture, leaving a radiant, youthful glow." }
    ]
  },
  {
    id: "exosomes-mesotherapy",
    category: "Skin Boosters",
    title: "Exosomes / Mesotherapy",
    subtitle: "Cellular Rejuvenation",
    image: images[1],
    description: "Harness the power of regenerative medicine with Exosomes and Mesotherapy. This treatment delivers potent growth factors, vitamins, and peptides directly into the skin to accelerate healing, reduce inflammation, and rejuvenate at a cellular level, providing unparalleled anti-aging benefits.",
    bullets: [
      { title: "Cellular Repair:", text: "Utilizes advanced exosome technology to repair damaged skin cells and promote regeneration." },
      { title: "Anti-Inflammatory:", text: "Significantly calms redness, irritation, and inflammation in sensitive skin." },
      { title: "Customized Cocktails:", text: "Mesotherapy blends are tailored with vitamins and antioxidants specific to your skin's needs." },
      { title: "Enhanced Vitality:", text: "Restores a bright, healthy, and revitalized appearance to aging or stressed skin." }
    ]
  },
  {
    id: "non-surgical-scar-management",
    category: "Wellness",
    title: "Scar Management",
    subtitle: "Non-Surgical Refinement",
    image: images[2],
    description: "Our non-surgical scar management combines advanced topical treatments, targeted injections, and minimally invasive resurfacing techniques to fade acne scars, surgical scars, and hyperpigmentation, restoring a smooth, even skin texture.",
    bullets: [
      { title: "Texture Improvement:", text: "Smooths out uneven or pitted skin caused by acne or minor injuries." },
      { title: "Color Blending:", text: "Reduces the redness or dark pigmentation often associated with healed scars." },
      { title: "Non-Invasive:", text: "Achieves significant improvement without the need for additional surgical incisions." },
      { title: "Customized Care:", text: "Tailored treatment plans combining peels, microneedling, or injections based on scar type." }
    ]
  },
  {
    id: "double-chin-reduction",
    category: "Wellness",
    title: "Double Chin Reduction",
    subtitle: "Submental Contouring",
    image: images[3],
    description: "Target and eliminate stubborn fat beneath the chin with our non-surgical double chin reduction treatments. Utilizing targeted fat-dissolving injections, this procedure breaks down fat cells to sculpt a tighter, more defined jawline without surgery.",
    bullets: [
      { title: "Targeted Fat Loss:", text: "Specifically addresses the submental fat pad that resists diet and exercise." },
      { title: "Defined Jawline:", text: "Enhances your lower facial profile, creating a sharper and more contoured jawline." },
      { title: "Permanent Results:", text: "Treated fat cells are permanently destroyed and naturally eliminated by the body." },
      { title: "No Surgery Required:", text: "Avoids the downtime, incisions, and risks associated with surgical liposuction." }
    ]
  },
  {
    id: "iv-infusions",
    category: "Wellness",
    title: "IV Infusions",
    subtitle: "Wellness & Rejuvenation",
    image: images[4],
    description: "Revitalize your body and skin from the inside out with our customized IV infusions. Delivering a potent blend of essential vitamins, antioxidants (like Glutathione and Vitamin C), and hydration directly into your bloodstream for maximum absorption and instant glowing results.",
    bullets: [
      { title: "Instant Hydration:", text: "Replenishes bodily fluids immediately for an energized, refreshed feeling." },
      { title: "Skin Brightening:", text: "Glutathione and Vitamin C help lighten pigmentation and give the skin a radiant glow." },
      { title: "Immunity Boost:", text: "Strengthens the immune system with essential vitamins and powerful antioxidants." },
      { title: "Maximum Absorption:", text: "Bypasses the digestive system for 100% absorption of nutrients." }
    ]
  }
];

const surgicalAdditions = [
  {
    id: "forehead-lift",
    category: "Face",
    title: "Forehead Lift",
    subtitle: "Upper Face Rejuvenation",
    image: images[0],
    description: "A surgical forehead lift addresses deep horizontal wrinkles and significant sagging in the upper face. By lifting the skin and repositioning underlying muscles, this procedure restores a smooth, serene, and youthful appearance to the forehead.",
    bullets: [
      { title: "Smooths Deep Lines:", text: "Effectively eliminates stubborn horizontal forehead creases." },
      { title: "Long-Lasting Results:", text: "Provides durable, permanent improvement compared to temporary injectables." },
      { title: "Refreshed Look:", text: "Alleviates a heavy or 'angry' appearance, making you look approachable and rested." }
    ]
  },
  {
    id: "surgical-brow-lift",
    category: "Face",
    title: "Brow Lift",
    subtitle: "Surgical Elevation",
    image: images[1],
    description: "A surgical brow lift permanently corrects heavy, drooping eyebrows that can hood the upper eyelids. It lifts the brow arch to its ideal aesthetic position, harmonizing the upper face and opening up the eyes for a bright, awake look.",
    bullets: [
      { title: "Permanent Elevation:", text: "Surgically secures the brow at an optimal, youthful height." },
      { title: "Improves Eyelid Hooding:", text: "Reduces the weight of the brow on the upper eyelids, often complementing blepharoplasty." },
      { title: "Customized Arch:", text: "Tailors the shape and peak of the brow to perfectly suit your facial structure." }
    ]
  },
  {
    id: "surgical-mid-face-lift",
    category: "Face",
    title: "Mid-Face Lift",
    subtitle: "Cheek Elevation",
    image: images[2],
    description: "A surgical mid-face lift specifically targets sagging cheeks and deep nasolabial folds. By elevating the fat pads of the cheeks vertically, it restores full, youthful cheekbones and smooths the transition between the lower eyelids and the cheeks.",
    bullets: [
      { title: "Restores Cheek Volume:", text: "Lifts descended fat back to the upper cheeks for natural, youthful volume." },
      { title: "Smooths Nasolabial Folds:", text: "Significantly reduces the depth of the smile lines running from the nose to mouth." },
      { title: "Natural Rejuvenation:", text: "Avoids a 'pulled' look by lifting vertically rather than horizontally." }
    ]
  },
  {
    id: "orthognathic-surgery",
    category: "Face",
    title: "Orthognathic Surgery",
    subtitle: "Corrective Jaw Surgery",
    image: images[3],
    description: "Orthognathic surgery corrects severe jaw discrepancies and bite issues that cannot be resolved with orthodontics alone. It improves breathing, chewing function, and facial symmetry by surgically realigning the upper and lower jaws.",
    bullets: [
      { title: "Functional Improvement:", text: "Resolves difficulties with chewing, swallowing, and speech." },
      { title: "Facial Harmony:", text: "Dramatically improves lower facial proportions, symmetry, and profile." },
      { title: "Airway Expansion:", text: "Can effectively treat obstructive sleep apnea by opening the airway." }
    ]
  },
  {
    id: "dimple-creation",
    category: "Face",
    title: "Dimple Creation",
    subtitle: "Dimpleplasty",
    image: images[4],
    description: "Dimpleplasty is a quick, minimally invasive surgical procedure designed to create natural-looking dimples on the cheeks or chin. The procedure involves a small incision inside the mouth, leaving no external scars, to tether the skin to the underlying muscle.",
    bullets: [
      { title: "Enhances Smile:", text: "Adds a charming, youthful characteristic to your smile." },
      { title: "No External Scars:", text: "Performed entirely from within the mouth for a flawless exterior." },
      { title: "Quick Procedure:", text: "Typically performed under local anesthesia in under an hour." }
    ]
  },
  {
    id: "silicon-facial-implants",
    category: "Face",
    title: "Facial Implants",
    subtitle: "Chin, Nose, Cheek",
    image: images[5],
    description: "Custom silicone facial implants are used to enhance the fundamental bone structure of the face. Whether building a weak chin, augmenting flat cheekbones, or refining nasal contours, implants provide permanent, striking, and balanced facial definition.",
    bullets: [
      { title: "Permanent Volume:", text: "Offers a lifelong solution to structural volume deficiencies." },
      { title: "Custom Contouring:", text: "Implants are meticulously selected and shaped to fit your unique anatomy." },
      { title: "Balanced Proportions:", text: "Brings harmony to facial features, such as balancing a prominent nose with a stronger chin." }
    ]
  },
  {
    id: "canthoplasty",
    category: "Eyes",
    title: "Canthoplasty",
    subtitle: "Eye Shape Refinement",
    image: images[0],
    description: "Canthoplasty is a specialized surgical procedure that reshapes and tightens the outer corner of the eye (the lateral canthus). It is used to correct drooping, create a more almond-shaped or 'fox eye' appearance, and provide essential support to the lower eyelid.",
    bullets: [
      { title: "Almond Eye Shape:", text: "Elongates and slightly elevates the outer corners of the eyes." },
      { title: "Lower Lid Support:", text: "Corrects lower eyelid laxity or 'ectropion', restoring functional integrity." },
      { title: "Refined Aesthetics:", text: "Adds an elegant, exotic, and youthful contour to the eyes." }
    ]
  },
  {
    id: "alarplasty",
    category: "Nose",
    title: "Alarplasty",
    subtitle: "Nostril Reduction",
    image: images[1],
    description: "Alarplasty is a delicate surgical procedure aimed specifically at narrowing wide or flared nostrils. Often performed alongside rhinoplasty or on its own, it refines the nasal base to bring the nose into perfect proportion with the rest of the face.",
    bullets: [
      { title: "Narrows Nostrils:", text: "Reduces nostril flaring and decreases the width of the nasal base." },
      { title: "Hidden Incisions:", text: "Scars are concealed within the natural crease where the nostril meets the cheek." },
      { title: "Preserves Natural Look:", text: "Meticulously planned to ensure the nose looks naturally proportionate, not 'pinched'." }
    ]
  },
  {
    id: "surgical-scar-revision",
    category: "Hair & Misc",
    title: "Scar Revision",
    subtitle: "Surgical Refinement",
    image: images[2],
    description: "Surgical scar revision aims to minimize the appearance of prominent, thick, or restrictive scars. Through precise excision and meticulous re-closure using advanced plastic surgery techniques, the scar is blended closely with surrounding healthy skin.",
    bullets: [
      { title: "Improves Appearance:", text: "Transforms wide, raised, or jagged scars into thin, neat lines." },
      { title: "Restores Function:", text: "Releases tight scar tissue (contractures) that may be restricting movement." },
      { title: "Advanced Closure:", text: "Utilizes multi-layered suturing to minimize tension and optimize healing." }
    ]
  },
  {
    id: "wart-tongue-tie-removal",
    category: "Hair & Misc",
    title: "Wart & Tongue Tie Removal",
    subtitle: "Minor Surgical Procedures",
    image: images[3],
    description: "We perform minor, precise surgical procedures for the complete removal of stubborn facial warts, skin tags, and the release of tongue ties (ankyloglossia). These procedures are fast, virtually painless, and highly effective.",
    bullets: [
      { title: "Complete Removal:", text: "Surgically excises stubborn warts to prevent recurrence." },
      { title: "Improves Function:", text: "Tongue tie release instantly improves speech, eating, and oral mobility." },
      { title: "Minimal Downtime:", text: "Fast outpatient procedures with rapid, straightforward recovery." }
    ]
  }
];

// Deduplicate before pushing in case script is run multiple times
nonSurgicalAdditions.forEach(item => {
  if (!nonSurgData.find(x => x.id === item.id)) {
    nonSurgData.push(item);
  }
});

surgicalAdditions.forEach(item => {
  if (!surgData.find(x => x.id === item.id)) {
    surgData.push(item);
  }
});

fs.writeFileSync(surgPath, JSON.stringify(surgData, null, 2));
fs.writeFileSync(nonSurgPath, JSON.stringify(nonSurgData, null, 2));

console.log('Successfully updated JSON files for carousels.');

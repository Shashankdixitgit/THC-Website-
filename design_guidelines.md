{
  "brand": {
    "name": "The Healthtech Collective (THC)",
    "attributes": [
      "trustworthy",
      "clinical-credible",
      "operator-grade (practical)",
      "premium but accessible",
      "India-first community energy"
    ],
    "visual_personality": {
      "style_fusion": [
        "Swiss/Editorial typography (Playfair headline moments + generous whitespace)",
        "Bento-grid modular sections (community + events content)",
        "Soft healthcare warmth (cream surfaces) + innovation accents (teal/orange)",
        "Subtle ‘lab-notebook’ micro-details (mono tags, dotted dividers, data callouts)"
      ],
      "do_not": [
        "No emoji icons (use lucide-react)",
        "No centered ‘everything’ layouts; keep reading-flow left aligned",
        "No heavy gradients; keep gradients decorative and under 20% viewport",
        "No purple/pink saturated gradients"
      ]
    }
  },

  "design_tokens": {
    "notes": [
      "Implement as CSS custom properties in /app/frontend/src/index.css (:root) overriding shadcn defaults.",
      "Light-mode first; keep dark mode optional but not default.",
      "Use HSL tokens (shadcn style) but map to provided HEX palette." 
    ],

    "palette": {
      "brand_hex": {
        "navy": "#0D1B3E",
        "orange": "#E8541A",
        "cream": "#F5F0E8",
        "teal": "#1A7B6E"
      },

      "semantic": {
        "background": "Cream base (warm) with white cards",
        "foreground": "Navy ink",
        "primary": "Navy",
        "primary_accent": "Teal",
        "cta": "Orange",
        "borders": "Navy at low opacity",
        "muted": "Cream-2 / warm gray",
        "success": "Teal",
        "warning": "Orange",
        "destructive": "Use existing shadcn destructive but harmonize to warm red; avoid neon"
      },

      "recommended_hsl_tokens": {
        "--background": "36 33% 93%",
        "--foreground": "222 61% 15%",
        "--card": "0 0% 100%",
        "--card-foreground": "222 61% 15%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222 61% 15%",

        "--primary": "222 61% 15%",
        "--primary-foreground": "36 33% 96%",

        "--secondary": "34 28% 90%",
        "--secondary-foreground": "222 61% 15%",

        "--muted": "34 24% 89%",
        "--muted-foreground": "222 20% 35%",

        "--accent": "174 64% 29%",
        "--accent-foreground": "0 0% 100%",

        "--border": "222 25% 82%",
        "--input": "222 25% 82%",
        "--ring": "174 64% 29%",

        "--destructive": "6 78% 52%",
        "--destructive-foreground": "0 0% 100%",

        "--radius": "0.75rem"
      },

      "gradients": {
        "allowed_usage": [
          "Hero background only (max 20% viewport)",
          "Decorative corner glows behind section headers",
          "Large CTA band background (not on text blocks)"
        ],
        "gradient_recipes": [
          {
            "name": "Cream-to-ink header wash (hero only)",
            "css": "radial-gradient(900px circle at 15% 15%, rgba(26,123,110,0.10), transparent 60%), radial-gradient(700px circle at 85% 20%, rgba(232,84,26,0.10), transparent 55%), linear-gradient(180deg, rgba(13,27,62,0.06) 0%, rgba(245,240,232,1) 55%)"
          },
          {
            "name": "CTA band soft tint",
            "css": "linear-gradient(90deg, rgba(26,123,110,0.10), rgba(232,84,26,0.10))"
          }
        ]
      }
    },

    "typography": {
      "font_families": {
        "display": "'Playfair Display', serif",
        "body": "'DM Sans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        "mono": "'DM Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
      },
      "scale": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl font-[600] tracking-[-0.02em] leading-[1.05]",
        "h2": "text-2xl sm:text-3xl font-[600] tracking-[-0.01em] leading-[1.15]",
        "h3": "text-xl sm:text-2xl font-[600] leading-[1.2]",
        "body": "text-sm sm:text-base leading-[1.6]",
        "small": "text-xs sm:text-sm leading-[1.5]",
        "tag_mono": "font-mono text-[11px] tracking-[0.12em] uppercase"
      },
      "usage_rules": [
        "Use Playfair only for: hero headline, page titles, key section headers (keep sparse).",
        "Use DM Sans for all body, forms, navigation, tables.",
        "Use DM Mono for: badges/tags (e.g., CHAPTER, MEMBERSHIP TIER), small meta (date/time), data callouts."
      ]
    },

    "spacing_grid": {
      "layout": {
        "container": "max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        "section_padding": "py-12 sm:py-16 lg:py-20",
        "bento_gap": "gap-4 sm:gap-6",
        "card_padding": "p-5 sm:p-6"
      },
      "grid_system": {
        "default": "12-col on lg, 6-col on md, 4-col on mobile",
        "patterns": [
          "Hero: 7/5 split (copy/visual)",
          "Stakeholders: 2 cols mobile -> 3 cols md -> 4 cols lg",
          "Events: 1 col mobile -> 2 cols lg with sticky filter/rail"
        ]
      }
    },

    "elevation_radius": {
      "radius": {
        "sm": "rounded-md",
        "md": "rounded-xl",
        "lg": "rounded-2xl"
      },
      "shadows": {
        "card": "shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]",
        "card_hover": "hover:shadow-[0_1px_0_rgba(13,27,62,0.06),0_20px_45px_rgba(13,27,62,0.12)]",
        "focus_ring": "focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
      },
      "borders": {
        "default": "border border-[hsl(var(--border))]",
        "hairline": "border border-[rgba(13,27,62,0.12)]"
      }
    },

    "texture": {
      "noise_overlay": {
        "css": "background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.06%22/%3E%3C/svg%3E')",
        "usage": "Apply to large section wrappers via ::before overlay with mix-blend-mode:multiply; keep extremely subtle."
      }
    }
  },

  "layout_and_page_skeleton": {
    "global_nav": {
      "pattern": "Sticky top nav; cream background with subtle bottom border; CTA button on right",
      "desktop": "NavigationMenu with dropdown groups for Events/Community; secondary links; primary CTA 'Join'",
      "mobile": "Sheet (hamburger) with accordions; keep CTA pinned at bottom",
      "micro_interactions": [
        "Nav links: underline grows from left on hover (scaleX)",
        "Active route: teal dot indicator + bold",
        "On scroll: nav height reduces slightly (py-4 -> py-3), shadow appears"
      ]
    },

    "home": {
      "hero": {
        "layout": "Two-column split; left copy, right ‘community signal’ visual (flywheel teaser or photo mosaic)",
        "components": ["Button", "Badge", "Card"],
        "cta": ["Join the community", "Explore events"],
        "hero_background": "Use cream-to-ink header wash gradient + subtle noise overlay"
      },
      "logo_marquee": {
        "layout": "Full-width strip with masked edges (fade) and auto-scrolling logos",
        "note": "Keep background solid cream/white; no gradients"
      },
      "flywheel": {
        "layout": "Interactive diagram in a Card; hover highlights segments; click reveals detail panel",
        "implementation": "SVG + Framer Motion for hover transitions"
      },
      "stakeholders": "Grid of stakeholder cards (Founders, Clinicians, Operators, Pharma, Medtech, Investors) with icon + one-liner + CTA",
      "gallery": "Masonry-like 3x2 photo grid (AspectRatio). On hover: slight lift + caption fade in",
      "cta_banner": "Full-width band with soft tint gradient and crisp CTA buttons"
    },

    "who_its_for": {
      "pattern": "Left rail of stakeholder tabs; right content panel with accordion for FAQs per stakeholder",
      "components": ["Tabs", "Accordion", "Card", "Badge"]
    },

    "events": {
      "pattern": "Event formats as cards; Upcoming list with Calendar-like date pills; Past events as gallery + filters",
      "components": ["Card", "Badge", "Button", "Tabs", "Carousel", "Table"],
      "chapters": "Map-style list (no heavy map dependency): cards by city with counts"
    },

    "community": {
      "pattern": "Stats counters + benefits bento grid + engagement options (volunteer, host, speak) + testimonials",
      "components": ["Card", "Progress", "Badge", "Carousel"]
    },

    "membership": {
      "pattern": "Pricing tier cards (4) with highlighted 'most popular' (teal border); comparison table; FAQ accordion",
      "components": ["Card", "Table", "Accordion", "Badge", "Button"],
      "pricing_micro": "Toggle monthly/annual optional via Switch"
    },

    "partner": {
      "pattern": "Partnership types grid + contact form in Card; right rail with response expectations + email",
      "components": ["Card", "Input", "Textarea", "Select", "Button"]
    },

    "about": {
      "pattern": "Editorial story blocks + team grid with Avatar + role tags + LinkedIn icons + values cards",
      "components": ["Card", "Avatar", "Badge"]
    },

    "footer": {
      "pattern": "Cream background, top border; 4-column links; small mono meta; socials using lucide icons"
    }
  },

  "components": {
    "component_path": {
      "shadcn_ui": [
        "/app/frontend/src/components/ui/button.jsx",
        "/app/frontend/src/components/ui/navigation-menu.jsx",
        "/app/frontend/src/components/ui/sheet.jsx",
        "/app/frontend/src/components/ui/badge.jsx",
        "/app/frontend/src/components/ui/card.jsx",
        "/app/frontend/src/components/ui/accordion.jsx",
        "/app/frontend/src/components/ui/tabs.jsx",
        "/app/frontend/src/components/ui/table.jsx",
        "/app/frontend/src/components/ui/carousel.jsx",
        "/app/frontend/src/components/ui/avatar.jsx",
        "/app/frontend/src/components/ui/input.jsx",
        "/app/frontend/src/components/ui/textarea.jsx",
        "/app/frontend/src/components/ui/select.jsx",
        "/app/frontend/src/components/ui/separator.jsx",
        "/app/frontend/src/components/ui/sonner.jsx"
      ],
      "new_custom_components_to_create": [
        "/app/frontend/src/components/LogoMarquee.jsx",
        "/app/frontend/src/components/FlywheelDiagram.jsx",
        "/app/frontend/src/components/StakeholderCard.jsx",
        "/app/frontend/src/components/StatsCounter.jsx",
        "/app/frontend/src/components/TestimonialCard.jsx",
        "/app/frontend/src/components/PhotoMosaic.jsx",
        "/app/frontend/src/components/PricingTierCard.jsx",
        "/app/frontend/src/components/ComparisonTable.jsx"
      ]
    },

    "button_system": {
      "rules": [
        "Primary buttons use Navy fill, Cream text",
        "CTA accent buttons use Orange fill, white/cream text",
        "Secondary buttons are cream/white with navy border",
        "Do not use gradients on buttons < 100px"
      ],
      "tailwind_recipes": {
        "primary": "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[rgba(13,27,62,0.92)]",
        "cta": "bg-[#E8541A] text-white hover:bg-[#D84B17]",
        "secondary": "bg-white text-[hsl(var(--foreground))] border border-[rgba(13,27,62,0.18)] hover:bg-[rgba(245,240,232,0.65)]",
        "ghost": "bg-transparent text-[hsl(var(--foreground))] hover:bg-[rgba(13,27,62,0.06)]"
      },
      "motion": {
        "hover": "transition-colors duration-200; add group-hover underline animations for inline links",
        "press": "active:scale-[0.98] (apply only to button, not parent containers)",
        "focus": "use focus-visible ring (see elevation_radius.focus_ring)"
      }
    },

    "cards": {
      "base": "bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]",
      "hover": "hover:-translate-y-0.5 transition-transform duration-200 (no transition:all)",
      "header_tag": "Badge using mono style; small top label"
    },

    "data_testid_policy": {
      "required_on": [
        "Primary/secondary CTA buttons",
        "Nav links",
        "Tabs triggers",
        "Accordion triggers",
        "Form inputs + submit button",
        "Pricing tier select buttons",
        "Event RSVP buttons",
        "Newsletter/community join CTAs",
        "Critical info blocks (stats numbers, membership price)"
      ],
      "naming": "kebab-case describing role, e.g., 'nav-join-button', 'membership-tier-pro-select', 'partner-form-submit-button'"
    }
  },

  "motion_and_microinteractions": {
    "library": {
      "recommended": "framer-motion",
      "install": "npm i framer-motion",
      "usage": [
        "Section enter: fade + slight y (8px) with stagger for card grids",
        "Marquee: CSS animation, pause on hover",
        "Flywheel: hover highlight + click expand panel",
        "Stats counters: animate number on scroll into view"
      ]
    },
    "interaction_rules": [
      "No universal transitions; only transition-colors/opacity/shadow/transform per component",
      "Hover states must be visible but restrained (healthcare trust)"
    ]
  },

  "accessibility": {
    "contrast": [
      "Navy on cream passes; ensure orange text is only used on navy/white at sufficient size/weight.",
      "Avoid teal text on cream for long paragraphs—use navy for body; teal as accent only."
    ],
    "focus": [
      "All interactive elements must have visible focus ring (teal ring).",
      "Ensure keyboard navigation for NavigationMenu, Tabs, Accordion."
    ],
    "reduced_motion": [
      "Respect prefers-reduced-motion: disable marquee auto-scroll and heavy enter animations."
    ],
    "touch_targets": "Minimum 44px height for primary buttons and nav items"
  },

  "imagery": {
    "image_urls": {
      "home_gallery": [
        {
          "url": "https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZ3xlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NzI5NjU2NDR8MA&ixlib=rb-4.1.0&q=85",
          "description": "Abstract conference/networking moment; use as a small tile with overlay caption (avoid making it the main hero).",
          "category": "Home → Work in Action gallery"
        }
      ],
      "about_team_placeholders": [
        {
          "url": "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MHx8fHdoaXRlfDE3NzI5NjU2NTR8MA&ixlib=rb-4.1.0&q=85",
          "description": "Neutral professional portrait placeholder (crop to square for Avatar).",
          "category": "About → Team profiles"
        },
        {
          "url": "https://images.unsplash.com/photo-1576669801615-4e2f69504d58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MHx8fHdoaXRlfDE3NzI5NjU2NTR8MA&ixlib=rb-4.1.0&q=85",
          "description": "B/W group shot; good for ‘community history’ collage tile.",
          "category": "About → Story / community collage"
        }
      ],
      "abstract_innovation": [
        {
          "url": "https://images.unsplash.com/photo-1636249253913-40e83d5423e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDB8fHx3aGl0ZXwxNzcyOTY1NjQ3fDA&ixlib=rb-4.1.0&q=85",
          "description": "Abstract ‘health + tech’ concept image; use as small supporting image near stats/mission (avoid literal mental blocks caption by cropping tight).",
          "category": "Home/About → supporting visual tile"
        }
      ]
    },
    "image_direction": [
      "Prefer real community photos (events, panels, networking) over stock doctor imagery.",
      "If using stock: choose neutral, documentary, India-relevant when possible.",
      "Apply consistent treatment: warm tone, slight desaturation, subtle grain, rounded corners."
    ]
  },

  "instructions_to_main_agent": {
    "global_css_updates": [
      "Replace the default shadcn :root tokens in /app/frontend/src/index.css with the recommended_hsl_tokens above.",
      "Set body font-family to DM Sans; define utility classes for Playfair and DM Mono (or use Tailwind config if present).",
      "Remove CRA demo styles in /app/frontend/src/App.css (App-header dark center). Do NOT add text-align:center on .App."
    ],
    "fonts": {
      "include": [
        "Add Google Fonts imports in index.html or CSS: Playfair Display (wght 500-700), DM Sans (wght 400-700), DM Mono (wght 400-500)."
      ]
    },
    "routing": [
      "Use React Router for 7 pages; in-page smooth scroll only for Home sections.",
      "Nav items must have data-testid, e.g., data-testid='nav-events-link'."
    ],
    "components_build_sequence": [
      "1) SiteLayout: Nav + footer + container + page header pattern",
      "2) Home hero + logo marquee",
      "3) Flywheel diagram component",
      "4) Stakeholder cards + Who-it’s-for tabs/accordion",
      "5) Events listings + galleries",
      "6) Membership pricing + comparison table + FAQ",
      "7) Partner form + About team"
    ],
    "testing_ids_examples": [
      "data-testid='home-hero-join-button'",
      "data-testid='home-hero-events-button'",
      "data-testid='logo-marquee-strip'",
      "data-testid='flywheel-segment-founders'",
      "data-testid='stakeholder-card-clinicians'",
      "data-testid='events-upcoming-register-button'",
      "data-testid='membership-tier-free-select-button'",
      "data-testid='partner-form-email-input'",
      "data-testid='partner-form-submit-button'"
    ]
  }
}

<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>

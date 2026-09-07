import { Snowflake, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const LINK_COLUMNS = [
  {
    title: 'Pages',
    links: ['Home', 'About', 'Feature', 'Blog', 'Pricing', 'Integration', 'Contact'],
  },
  {
    title: 'Inner Pages',
    links: ['Pricing single', 'Blog single', 'Integration single'],
  },
  {
    title: 'Utility Pages',
    links: ['Early Access', 'Cookie policy', '404'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-kairos-border py-16">
      <div className="max-w-container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <h3 className="text-lg font-medium text-white">Subscribe Newsletter</h3>
            <form
              className="mt-4 flex max-w-sm items-center gap-2 rounded-full border border-kairos-border bg-kairos-surface p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors"
              >
                Send Code
              </button>
            </form>

            <a href="#" className="mt-8 flex items-center gap-2 text-sm font-medium text-white">
              <Snowflake size={18} />
              PAYMARK
            </a>
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-white">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-kairos-border pt-6 sm:flex-row">
          <p className="text-xs text-white/40">© Copyright 2026. All rights reserved.</p>
          <div className="flex gap-3 text-white/50">
            <Facebook size={16} />
            <Instagram size={16} />
            <Twitter size={16} />
            <Linkedin size={16} />
          </div>
        </div>
      </div>
    </footer>
  )
}

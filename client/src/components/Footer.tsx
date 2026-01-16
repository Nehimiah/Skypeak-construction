import { Link } from "wouter";
import { Building2, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D3436] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8" />
              <span className="font-heading font-bold text-lg">Sky Peak Construction</span>
            </div>
            <p className="text-sm text-white/80">Serving Accra and the Eastern Region of Ghana</p>
            <p className="text-sm text-white/90">Reliable, Affordable & Professional Construction Solutions in Ghana</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" data-testid="link-footer-about">
                <span className="text-sm text-white/80 hover:text-white cursor-pointer">About Us</span>
              </Link>
              <Link href="/services" data-testid="link-footer-services">
                <span className="text-sm text-white/80 hover:text-white cursor-pointer">Services</span>
              </Link>
              <Link href="/projects" data-testid="link-footer-projects">
                <span className="text-sm text-white/80 hover:text-white cursor-pointer">Projects</span>
              </Link>
              <Link href="/certifications" data-testid="link-footer-certifications">
                <span className="text-sm text-white/80 hover:text-white cursor-pointer">Certifications</span>
              </Link>
              <Link href="/contact" data-testid="link-footer-contact">
                <span className="text-sm text-white/80 hover:text-white cursor-pointer">Contact</span>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-white/80">General Construction</p>
              <p className="text-sm text-white/80">Property Development</p>
              <p className="text-sm text-white/80">Real Estate Sales & Land Acquisition</p>
              <p className="text-sm text-white/80">Renovations & Remodeling</p>
              <p className="text-sm text-white/80">Plumbing & Electrical Works</p>
              <p className="text-sm text-white/80">Interior & Exterior Finishings</p>
              <p className="text-sm text-white/80">Construction Management & Maintenance</p>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-sm text-white/80">Accra & Koforidua, Eastern Region<br />Ghana</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:0507159245" className="text-sm text-white/80 hover:text-white" data-testid="link-phone">
                  (050) 715-9245
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@skypeakconstruction.com" className="text-sm text-white/80 hover:text-white" data-testid="link-email">
                  info@skypeakconstruction.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-sm text-white/80">Mon-Fri: 7:30 AM - 5:00 PM<br />Sat: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-testid="link-facebook">
                <Facebook className="h-5 w-5 text-white/80 hover:text-white cursor-pointer" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-testid="link-instagram">
                <Instagram className="h-5 w-5 text-white/80 hover:text-white cursor-pointer" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5 text-white/80 hover:text-white cursor-pointer" />
              </a>
            </div>
            <div className="text-sm text-white/70 text-center">
              © 2026 Sky Peak Construction | Reliable, Affordable & Professional Construction Solutions in Ghana
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-white/60">
            Consulted by The Purity Life Group - A Multi-industry technology company
          </div>
        </div>
      </div>
    </footer>
  );
}

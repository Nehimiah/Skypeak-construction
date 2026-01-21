import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import { Building, Home as HomeIcon, Landmark, Palmtree, Users, FileCheck, Handshake } from "lucide-react";
import heroImage from "@assets/generated_images/Homepage-hero.jpg";
import commercialImage from "@assets/generated_images/Commercial_building_tropical_palms_7d7d8ac8.png";
import residentialImage from "@assets/generated_images/Modern_island_home_ocean_ed434fed.png";
import schoolImage from "@assets/generated_images/School_building_playground_tropical_a27fae50.png";
import resortImage from "@assets/generated_images/Completed_resort_hotel_tropical_e8ee713a.png";
import constructionSiteImage from "@assets/generated_images/Construction_site_overview_tropical_2ba6d7f9.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const features = [
    {
      icon: Palmtree,
      title: "Reliable Project Delivery",
      description: "We are committed to delivering projects with consistency, accountability, and clear communication."
    },
    {
      icon: Users,
      title: "Skilled Professionals & Expertise",
      description: "Our team is made up of experienced professionals with strong technical knowledge and practical industry experience."
    },
    {
      icon: FileCheck,
      title: "Quality Materials & Modern Construction Methods",
      description: "We use carefully selected, quality materials sourced from trusted suppliers and apply modern construction methods to ensure long-term value."
    },
    {
      icon: Handshake,
      title: "Client-Focused Approach",
      description: "We place our clients at the center of every project. We deliver tailored solutions that meet practical needs and expectations."
    }
  ];

  return (
    <>
      <Hero
        image={heroImage}
        title="Reliable, Affordable & Professional Construction Solutions in Ghana"
        subtitle="Delivering high-quality construction, real estate, and property services across Accra and the Eastern Region through disciplined project management, skilled professionals, and trusted industry practices"
        showCTA={true}
      />
      
      <TrustBar />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Comprehensive Construction & Property Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              icon={Building}
              image={commercialImage}
              title="General Construction"
              description="Residential and commercial construction services delivered with quality materials, professional supervision, and disciplined project execution. We manage projects from foundation to completion, ensuring durability, safety, and long-term value."
              link="/services"
            />
            <ServiceCard
              icon={HomeIcon}
              image={residentialImage}
              title="Property Development"
              description="End-to-end property development and real estate services, including property sales, land acquisition, and investment support. We help clients make informed decisions and deliver value-driven developments."
              link="/services"
            />
            <ServiceCard
              icon={Landmark}
              image={schoolImage}
              title="Renovations & Interior / Exterior Works"
              description="Professional renovation, remodeling, and finishing services designed to upgrade, restore, and modernize existing properties. Our work combines functionality, aesthetics, and structural integrity."
              link="/services"
            />
             <ServiceCard
              icon={Landmark}
              image={schoolImage}
              title="Real Estate Development"
              description="Comprehensive real estate development solutions including apartments available for rent, finished and unfinished homes for sale, and land available for residential, commercial, and agricultural purposes, delivered with value, transparency, and long-term growth in mind."
              link="/services"
            />
             <ServiceCard
              icon={Landmark}
              image={schoolImage}
              title="Architectural & Building Designs"
              description="Professional architectural and building design services focused on functionality, aesthetics, compliance, and structural efficiency, delivering well-planned designs that transform ideas into practical, sustainable, and build-ready solutions."
              link="/services"
            />
             <ServiceCard
              icon={Landmark}
              image={schoolImage}
              title="Front Wall Fence & Compound Designs"
              description="Expert front wall fence and compound design services that combine security, durability, and visual appeal, creating well-structured boundaries that enhance property value while meeting functional and aesthetic requirements."
              link="/services"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Recent Projects Across CNMI
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProjectCard
              image={resortImage}
              title="Coral Bay Resort Renovation - Saipan"
              stats="$2.3M | 8 Months | 2024"
            />
            <ProjectCard
              image={schoolImage}
              title="Kagman Elementary Expansion - Saipan"
              stats="$1.8M | 12 Months | 2023"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" data-testid="button-view-all-projects">
              <Button size="lg" className="bg-primary hover:bg-primary text-primary-foreground">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FeatureSection 
        title="Why Sky Peak Construction?" 
        features={features}
        backgroundImage={constructionSiteImage}
      />

      <CTASection
        title="Ready to Start Your Project?"
        description="Whether you’re planning a new build, renovation, or large construction project, Sky Peak Construction is ready to deliver excellence from foundation to finish."
        primaryButtonText="Contact Us Now"
        primaryButtonLink="/contact"
        secondaryButtonText="Call (050) 715-9245"
        secondaryButtonLink="tel:0507159245"
      />
    </>
  );
}

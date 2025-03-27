import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectHero } from "@/components/ProjectHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Portfolio | Speed Agency",
  description: "Explore our successful digital projects, web applications, and marketing campaigns that drive real business results.",
  openGraph: {
    title: "Digital Project Portfolio - Speed Agency",
    description: "View our portfolio of successful web development and digital marketing projects.",
    images: [{ url: "/images/projects-banner.jpg", alt: "Projects Portfolio Banner" }],
  },
};

const ProjectsPage = async () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-zinc-900 dark:via-purple-950/20 dark:to-zinc-900">
      <ProjectHero />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Featured Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Featured Projects
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full ml-2"></div>
          </h2>
          <ProjectGrid featured={true} limit={2} columns={2} />
        </section>

        {/* All Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              All Projects
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full ml-2"></div>
          </h2>
          <ProjectGrid featured={false} limit={6} columns={3} />
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
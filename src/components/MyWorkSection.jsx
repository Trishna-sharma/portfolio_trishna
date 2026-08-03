import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 4 Focused Portfolio Projects with Minimal Status Badges
const portfolioProjects = [
  {
    id: 'her-by-mou',
    title: 'Her By Mou Website',
    category: 'Web & API Testing',
    categoryTag: 'WEB DEVELOPMENT',
    status: 'In Progress',
    statusColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    description:
      'An elegant e-commerce brand platform built with responsive modern web standards. Features custom UI components, smooth navigation, and optimized media rendering.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    github: 'https://github.com/Trishna-sharma/Her',
    demo: 'https://her-by-mou-frontend.vercel.app/',
  },
  {
    id: 'journal-app',
    title: 'JournalApp Digital Platform',
    category: 'Web Testing',
    categoryTag: 'FULL-STACK WEB APP',
    status: 'Completed',
    statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    description:
      'A full-stack digital journaling platform allowing users to securely capture daily entries, organize thoughts, and track moods with rich content features.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Trishna-sharma/JournalApp',
    demo: 'https://journal-app-lilac-seven.vercel.app/',
  },
  {
    id: 'playwright-automation',
    title: 'Playwright Test Automation Hub',
    category: 'Web & API Testing',
    categoryTag: 'WEB & API TESTING',
    status: 'In Progress',
    statusColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    description:
      'A professional-grade end-to-end testing framework leveraging Playwright and TypeScript. Features automated visual regression, API mock harnesses, and parallel execution.',
    tags: ['Playwright', 'TypeScript', 'Cucumber', 'GitHub Actions'],
    github: 'https://github.com/Trishna-sharma',
  },
  {
    id: 'cypress-quality-gate',
    title: 'Cypress CI/CD Quality Gate',
    category: 'Web Testing',
    categoryTag: 'WEB TESTING',
    status: 'Just Started',
    statusColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    description:
      'A continuous integration dashboard and E2E regression suite using Cypress. Includes custom plugins for visual accessibility validation and build pipeline integration.',
    tags: ['Cypress', 'JavaScript', 'Axe-core', 'CI/CD'],
    github: 'https://github.com/Trishna-sharma',
  },
];

const categories = ['All', 'Web & API Testing', 'Web Testing', 'Full-Stack'];

function MyWorkSection({ theme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects by category and search term
  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="my-work" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
          Automated test harnesses, full-stack applications, and responsive web platforms.
        </p>
      </div>

      {/* Filter Bar: Search Input + Category Pills */}
      <div
        className={`p-3 rounded-2xl mb-8 border flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md transition-colors ${
          theme === 'light'
            ? 'bg-slate-100/90 border-slate-200'
            : 'bg-slate-800/60 border-slate-700/60'
        }`}
      >
        {/* Search Input Box */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            type="text"
            placeholder="Search projects or tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl border outline-none transition-all ${
              theme === 'light'
                ? 'bg-white border-slate-300 text-slate-800 focus:border-purple-500'
                : 'bg-slate-900/80 border-slate-700 text-slate-100 focus:border-purple-400'
            }`}
          />
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-start md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : theme === 'light'
                  ? 'bg-slate-200/60 text-slate-600 hover:bg-slate-200'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2x2 Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-6 rounded-2xl border flex flex-col justify-between text-left transition-all duration-300 hover:shadow-lg ${
              theme === 'light'
                ? 'bg-white border-slate-200 hover:border-purple-300'
                : 'bg-slate-800/40 border-slate-700/80 hover:border-purple-500/50'
            }`}
          >
            <div>
              {/* Category Tag & Minimal Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {project.categoryTag}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${project.statusColor}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2.5 text-slate-900 dark:text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      theme === 'light'
                        ? 'bg-slate-100 text-slate-700 border border-slate-200'
                        : 'bg-slate-900/60 text-slate-300 border border-slate-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Source Code & Live Demo Links */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm font-medium">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-slate-400 dark:text-slate-500 text-xs italic">
                  Demo Coming Soon
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center text-slate-500">
          No projects found matching your search term.
        </div>
      )}
    </section>
  );
}

export default MyWorkSection;
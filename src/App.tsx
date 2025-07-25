"use client";

// Uncomment these imports when re-enabling the projects section
/*
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
*/
import {
	Mail,
	// Download,
	// ExternalLink,
	// Database,
	// Globe,
	// Music,
	// Eye,
} from "lucide-react";

import { Icon } from "@iconify/react";

export default function PersonalWebsite() {
	// Social media links - easily editable
	const socialLinks = {
		twitter: "https://x.com/ardaonearth", // Replace with your Twitter URL
		github: "https://github.com/ardasoyturk", // Replace with your GitHub URL
		linkedin: "https://www.linkedin.com/in/ardasoyturk/", // Replace with your LinkedIn URL
		email: "ardasoyturk@outlook.com.tr", // Replace with your email
	};

	// Uncomment this projects array when re-enabling the projects section
	/*
	const projects = [
		{
			title: "Twitter Profile Viewer",
			description:
				"A very detailed profile viewer that I made for Twitter using Vite and Vue 3.",
			technologies: ["Vue 3", "Vite", "JavaScript"],
			icon: <Eye className="w-5 h-5" />,
			link: "#", // Placeholder link
			github: "#", // Placeholder link
		},
		{
			title: "Cloudflare Worker for Twitter API",
			description:
				"A very simple Cloudflare Worker for fetching data from the Twitter API.",
			technologies: ["Cloudflare Workers", "JavaScript"],
			icon: <Database className="w-5 h-5" />,
			link: "#", // Placeholder link
			github: "#", // Placeholder link
		},
		{
			title: "This Website",
			description: "My personal website is also open-sourced on GitHub.",
			technologies: ["Next.js", "React", "Tailwind CSS"],
			icon: <Globe className="w-5 h-5" />,
			link: "#", // Placeholder link
			github: "#", // Placeholder link
		},
		{
			title: "Music Downloader",
			description:
				"A simple script for downloading multiple music files using youtube-dl.",
			technologies: ["Python", "youtube-dl", "CLI"],
			icon: <Music className="w-5 h-5" />,
			link: "#", // Placeholder link
			github: "#", // Placeholder link
		},
	];
	*/

	return (
		<div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white p-4 sm:p-6 md:p-8 lg:p-12">
			<div className="w-full max-w-2xl flex justify-center">
				{/* Centered Profile Section */}
				<div className="flex flex-col justify-center items-center text-center">
					<div className="w-24 h-24 bg-zinc-700 rounded-full flex items-center justify-center text-4xl font-bold mb-6 shadow-lg">
						AS
					</div>
					<h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white leading-tight">
						Arda Soyturk
					</h1>
					<p className="text-xl text-zinc-300 mb-6">
						Computer Engineering Student
					</p>
					<p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
						I'm a passionate computer engineering student with a
						strong foundation in Node.js and modern web
						technologies. I enjoy building creative solutions,
						exploring new frameworks, and continuously expanding my
						skill set.
					</p>
					<div className="flex space-x-6 mb-8">
						<a
							href={socialLinks.twitter}
							className="text-zinc-400 hover:text-zinc-200 transition-colors"
							aria-label="Twitter"
						>
							<Icon icon="simple-icons:x" className="w-6 h-6" />
						</a>
						<a
							href={socialLinks.github}
							className="text-zinc-400 hover:text-zinc-200 transition-colors"
							aria-label="GitHub"
						>
							<Icon
								icon="simple-icons:github"
								className="w-6 h-6"
							/>
						</a>
						<a
							href={socialLinks.linkedin}
							className="text-zinc-400 hover:text-zinc-200 transition-colors"
							aria-label="LinkedIn"
						>
							<Icon
								icon="simple-icons:linkedin"
								className="w-6 h-6"
							/>
						</a>
						<a
							href={`mailto:${socialLinks.email}`}
							className="text-zinc-400 hover:text-zinc-200 transition-colors"
							aria-label="Email"
						>
							<Mail className="w-6 h-6" />
						</a>
					</div>
					{/* <Button className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 text-sm border border-zinc-600">
						<Download className="w-4 h-4 mr-2" />
						Download Resume
					</Button> */}
				</div>

				{/* Projects Section - Commented out for now, uncomment when ready to show projects
				<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="bg-zinc-800 border border-zinc-600 hover:border-zinc-500 transition-all duration-300"
						>
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<div className="flex items-center space-x-3">
									<div className="p-2 bg-zinc-700 rounded-lg text-zinc-300">
										{project.icon}
									</div>
									<CardTitle className="text-xl font-semibold text-white">
										{project.title}
									</CardTitle>
								</div>
								<div className="flex space-x-2">
									<Button
										size="icon"
										variant="ghost"
										className="text-zinc-400 hover:text-zinc-600"
										aria-label={`View ${project.title} project`}
									>
										<ExternalLink className="w-4 h-4" />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="text-zinc-400 hover:text-zinc-600"
										aria-label={`View ${project.title} on GitHub`}
									>
										<Github className="w-4 h-4" />
									</Button>
								</div>
							</CardHeader>
							<CardContent className="pt-2">
								<CardDescription className="text-zinc-300 mb-4 leading-relaxed">
									{project.description}
								</CardDescription>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map(
										(tech, techIndex) => (
											<Badge
												key={techIndex}
												variant="outline"
												className="border-zinc-500 text-zinc-300 bg-zinc-700"
											>
												{tech}
											</Badge>
										)
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
				*/}
			</div>
		</div>
	);
}

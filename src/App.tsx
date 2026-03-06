import { HugeiconsIcon } from "@hugeicons/react";
import {
	GithubIcon,
	Linkedin02Icon,
	Mail01Icon,
	TwitterIcon,
} from "@hugeicons/core-free-icons";

type PersonalWebsiteProps = {
	avatarWebpSrc: string;
	avatarJpegSrc: string;
};

const socialLinks = [
	{ href: "https://x.com/ardaonearth", label: "Twitter", icon: TwitterIcon },
	{ href: "https://github.com/ardasoyturk", label: "GitHub", icon: GithubIcon },
	{
		href: "https://www.linkedin.com/in/ardasoyturk/",
		label: "LinkedIn",
		icon: Linkedin02Icon,
	},
	{
		href: "mailto:ardasoyturk@outlook.com.tr",
		label: "Email",
		icon: Mail01Icon,
	},
] as const;

export default function PersonalWebsite({
	avatarWebpSrc,
	avatarJpegSrc,
}: PersonalWebsiteProps) {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background p-4 pt-24 text-foreground transition-colors duration-300 sm:p-6 sm:pt-24 md:p-8 md:pt-24 lg:p-12 lg:pt-24">
			<div className="flex w-full max-w-2xl justify-center">
				<div className="flex flex-col items-center justify-center text-center">
					<div className="avatar-frame mb-6">
						<div className="avatar-glow" aria-hidden="true" />
						<picture className="profile-avatar block h-36 w-36 overflow-hidden rounded-full border border-border/60 shadow-lg ring-2 ring-background/70 md:h-40 md:w-40">
							<source srcSet={avatarWebpSrc} type="image/webp" />
							<img
								src={avatarJpegSrc}
								alt="Arda Soytürk profile photo"
								className="h-full w-full object-cover"
								loading="eager"
							/>
						</picture>
					</div>
					<h1 className="mb-3 font-extrabold text-4xl leading-tight transition-colors duration-300 md:text-5xl">
						Arda Soytürk
					</h1>
					<p className="mb-6 text-xl transition-colors duration-300">
						Computer Engineering Student
					</p>
					<p className="mb-8 max-w-md leading-relaxed transition-colors duration-300">
						I'm a passionate computer engineering student with a strong
						foundation in Node.js and modern web technologies. I enjoy building
						creative solutions, exploring new frameworks, and continuously
						expanding my skill set.
					</p>
					<div className="mb-8 flex space-x-6">
						{socialLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="social-icon-link transition-colors"
								aria-label={link.label}
								rel={link.href.startsWith("http") ? "noreferrer" : undefined}
								target={link.href.startsWith("http") ? "_blank" : undefined}
							>
								<HugeiconsIcon icon={link.icon} size={24} strokeWidth={1.7} />
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

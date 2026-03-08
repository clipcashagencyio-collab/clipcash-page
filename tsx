import {
	ArrowRight,
	BarChart3,
	ChevronRight,
	DollarSign,
	Download,
	Eye,
	GraduationCap,
	LayoutDashboard,
	Link2,
	MonitorPlay,
	Play,
	Scissors,
	ShieldCheck,
	Smartphone,
	Sparkles,
	Star,
	Target,
	TrendingUp,
	Upload,
	Users,
	Zap,
} from "lucide-react";

const CHECKOUT_URL = "https://whop.com/checkout/plan_r9Osrhp3TCgZF";
const LOGO_URL =
	"https://img-v2-prod.whop.com/SfhPUU8mb1zWCk_gXUrg5JErLUKS1E1fctbHNPF-zbE/mb:180000/plain/https://assets-2-prod.whop.com/uploads/user_21565024/image/bots/2026-01-22/ec0953b4-de16-4dc6-92d0-7fb356d5ab7e.png";

export default function App() {
	return (
		<div className="min-h-screen bg-[#060a14] text-white antialiased overflow-x-hidden">
			{/* Nav */}
			<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#060a14]/80 backdrop-blur-xl">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<div className="flex items-center gap-3">
						<img
							src={LOGO_URL}
							alt="ClipCash"
							className="h-9 w-9 rounded-lg object-cover"
						/>
						<span className="text-lg font-bold tracking-tight">ClipCash</span>
					</div>
					<a
						href={CHECKOUT_URL}
						className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-blue-400 hover:scale-105"
					>
						Join Free
					</a>
				</div>
			</nav>

			{/* Hero */}
			<section className="relative pt-32 pb-20 px-6">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-blue-500/8 blur-[120px]" />
				</div>

				<div className="relative mx-auto max-w-4xl text-center">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
						<Zap className="h-3.5 w-3.5" />
						<span>Over 100M+ Views Generated</span>
					</div>

					<h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] mb-6">
						Turn Clips Into{" "}
						<span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
							Cash
						</span>
					</h1>

					<p className="mx-auto max-w-2xl text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed">
						The complete creator economy platform for clipping. Start clipping
						content, grow your social media pages, and earn real money through
						performance-based campaigns.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<a
							href={CHECKOUT_URL}
							className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
						>
							Get Started — It's Free
							<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
						</a>
						<div className="flex items-center gap-2 text-sm text-zinc-500">
							<div className="flex -space-x-2">
								{["a1", "a2", "a3", "a4"].map((id) => (
									<div
										key={id}
										className="h-8 w-8 rounded-full border-2 border-[#060a14] bg-gradient-to-br from-zinc-600 to-zinc-700"
									/>
								))}
							</div>
							<span>16,000+ members inside</span>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Bar */}
			<section className="border-y border-white/5 bg-white/[0.02]">
				<div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-4 divide-x divide-white/5">
					{[
						{ value: "100M+", label: "Views Generated", icon: Eye },
						{ value: "16K+", label: "Community Members", icon: Users },
						{ value: "Free", label: "To Join", icon: DollarSign },
						{ value: "24/7", label: "Active Community", icon: Zap },
					].map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col items-center gap-1 py-8 px-4"
						>
							<stat.icon className="h-5 w-5 text-blue-400 mb-2" />
							<div className="text-2xl sm:text-3xl font-black text-white">
								{stat.value}
							</div>
							<div className="text-xs sm:text-sm text-zinc-500">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Creator Workflow */}
			<section className="py-24 px-6">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
							<Sparkles className="h-3.5 w-3.5" />
							<span>Creator Workflow</span>
						</div>
						<h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
							From Zero to <span className="text-blue-400">Earning</span> in 5
							Steps
						</h2>
						<p className="text-zinc-400 text-lg max-w-2xl mx-auto">
							ClipCash provides a complete system to start clipping, grow your
							pages, and get paid. Follow the workflow and start earning.
						</p>
					</div>

					<div className="grid gap-0 lg:gap-0">
						{[
							{
								step: "01",
								icon: MonitorPlay,
								title: "Install Your Editor",
								description:
									"Set up a professional video editing tool like CapCut or any editor of your choice. You'll use it to edit and export high-quality short-form clips optimized for social media.",
							},
							{
								step: "02",
								icon: Target,
								title: "Select a Campaign",
								description:
									"Browse active campaigns on the ClipCash platform and choose one based on your interests, CPM rates, and campaign budgets. Each campaign has clear guidelines and payout terms.",
							},
							{
								step: "03",
								icon: Smartphone,
								title: "Set Up Social Media Pages",
								description:
									"Create or optimize your pages on TikTok, Instagram Reels, and YouTube Shorts. Position your accounts to reach large audiences and maximize engagement on every clip you post.",
							},
							{
								step: "04",
								icon: ShieldCheck,
								title: "Warm Up Your Account",
								description:
									"Before posting clips, build organic activity — complete your profile, engage with niche content, interact with relevant accounts. This avoids spam detection and ensures your clips get maximum reach.",
							},
							{
								step: "05",
								icon: Upload,
								title: "Create & Submit Clips",
								description:
									"Produce engaging clips from campaign content, post them to your social media pages, then submit your clip links to ClipCash for tracking and payout eligibility. That's it — you're earning.",
							},
						].map((item, idx) => (
							<div
								key={item.step}
								className="group relative flex gap-6 sm:gap-8"
							>
								<div className="flex flex-col items-center">
									<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-colors group-hover:bg-blue-500/20 group-hover:border-blue-500/40">
										<item.icon className="h-6 w-6" />
									</div>
									{idx < 4 && (
										<div className="w-px flex-1 bg-gradient-to-b from-blue-500/20 to-transparent min-h-8" />
									)}
								</div>

								<div className="pb-12 pt-1">
									<div className="text-xs font-bold text-blue-500/60 tracking-widest uppercase mb-1">
										Step {item.step}
									</div>
									<h3 className="text-xl font-bold mb-2">{item.title}</h3>
									<p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ClipCash Standards */}
			<section className="py-24 px-6 border-t border-white/5">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
							The ClipCash <span className="text-blue-400">Standard</span>
						</h2>
						<p className="text-zinc-400 text-lg max-w-2xl mx-auto">
							We hold our creators to a high standard. These principles ensure
							everyone succeeds and the platform stays premium.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{[
							{
								icon: Sparkles,
								title: "Quality Over Quantity",
								description:
									"Focus on creating engaging, high-quality clips that capture attention — not mass posting. One great clip outperforms ten mediocre ones.",
							},
							{
								icon: Zap,
								title: "Professional Workflow",
								description:
									"Submit clips quickly after publishing so engagement can be tracked in real-time. Fast turnaround means faster payouts.",
							},
							{
								icon: ShieldCheck,
								title: "Authentic Engagement",
								description:
									"Artificial views, bots, and fake engagement are strictly prohibited. We verify all engagement to maintain platform integrity.",
							},
							{
								icon: BarChart3,
								title: "Performance-Based Earnings",
								description:
									"Your payouts are determined by the real engagement your clips generate. More views and interactions mean higher earnings.",
							},
						].map((standard) => (
							<div
								key={standard.title}
								className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-all hover:border-blue-500/20 hover:bg-blue-500/[0.03]"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
									<standard.icon className="h-6 w-6" />
								</div>
								<h3 className="mb-2 text-lg font-bold">{standard.title}</h3>
								<p className="text-sm text-zinc-400 leading-relaxed">
									{standard.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Creator Toolkit */}
			<section className="py-24 px-6 border-t border-white/5">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
							<Scissors className="h-3.5 w-3.5" />
							<span>Creator Toolkit</span>
						</div>
						<h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
							Everything You Need,{" "}
							<span className="text-blue-400">Built In</span>
						</h2>
						<p className="text-zinc-400 text-lg max-w-2xl mx-auto">
							Get access to a full suite of tools and resources designed to help
							you clip, post, and earn — all in one platform.
						</p>
					</div>

					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{
								icon: Download,
								title: "Video Download Tools",
								description:
									"Source and download clips from campaign content with ease.",
							},
							{
								icon: MonitorPlay,
								title: "Professional Editing Software",
								description:
									"Recommended editors and templates to create scroll-stopping clips.",
							},
							{
								icon: GraduationCap,
								title: "Training Resources & Guides",
								description:
									"Step-by-step tutorials on clipping, editing, and growing pages.",
							},
							{
								icon: LayoutDashboard,
								title: "Campaign Dashboard",
								description:
									"Browse campaigns, submit clips, and track your earnings in one place.",
							},
							{
								icon: Link2,
								title: "Account Linking for Payouts",
								description:
									"Connect your payout method and get paid directly for your performance.",
							},
							{
								icon: TrendingUp,
								title: "Analytics & Tracking",
								description:
									"Monitor your clip views, engagement, and earnings in real-time.",
							},
						].map((tool) => (
							<div
								key={tool.title}
								className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-blue-500/15 hover:bg-blue-500/[0.02]"
							>
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
									<tool.icon className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-bold text-sm mb-1">{tool.title}</h3>
									<p className="text-xs text-zinc-500 leading-relaxed">
										{tool.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* What You Get (Features) */}
			<section className="py-24 px-6 border-t border-white/5">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
							Why Creators Choose{" "}
							<span className="text-blue-400">ClipCash</span>
						</h2>
						<p className="text-zinc-400 text-lg max-w-xl mx-auto">
							From beginner to full-time clipper. We give you the tools,
							knowledge, and community to succeed.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{
								icon: Scissors,
								title: "Clipping Strategies",
								description:
									"Learn what clips go viral, which creators to clip, and how to maximize your reach across platforms.",
							},
							{
								icon: TrendingUp,
								title: "Growth Tactics",
								description:
									"Proven methods to grow your pages from 0 to millions of views. Algorithm hacks and posting strategies.",
							},
							{
								icon: DollarSign,
								title: "Monetization Guide",
								description:
									"Turn views into revenue. Learn brand deals, affiliate marketing, and building a clipping business.",
							},
							{
								icon: BarChart3,
								title: "Analytics & Tools",
								description:
									"Access curated tools and resources to find trending content, track performance, and optimize clips.",
							},
							{
								icon: Users,
								title: "Active Community",
								description:
									"Network with 16,000+ clippers. Get feedback, find collaborations, and stay ahead of trends.",
							},
							{
								icon: Play,
								title: "Step-by-Step Courses",
								description:
									"Structured learning paths for editing, posting, and scaling — from complete beginner to pro clipper.",
							},
						].map((feature) => (
							<div
								key={feature.title}
								className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-blue-500/20 hover:bg-blue-500/[0.03]"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
									<feature.icon className="h-6 w-6" />
								</div>
								<h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
								<p className="text-sm text-zinc-400 leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Social Proof */}
			<section className="py-24 px-6 border-t border-white/5">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
							Real Results From{" "}
							<span className="text-blue-400">Real Members</span>
						</h2>
						<p className="text-zinc-400 text-lg">
							Hear from clippers who turned their passion into profit.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{
								quote:
									"Went from 0 to 500K followers in 3 months using the strategies inside ClipCash. This community changed my life.",
								name: "Alex R.",
								result: "500K followers",
							},
							{
								quote:
									"Made my first $1,000 from clipping within the first month. The monetization guides are insanely valuable.",
								name: "Jordan M.",
								result: "$1K first month",
							},
							{
								quote:
									"The community is unmatched. Everyone shares what's working and helps each other grow. Best decision I made.",
								name: "Chris L.",
								result: "2M+ monthly views",
							},
						].map((testimonial) => (
							<div
								key={testimonial.name}
								className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
							>
								<div className="mb-4 flex gap-1">
									{["s1", "s2", "s3", "s4", "s5"].map((id) => (
										<Star
											key={id}
											className="h-4 w-4 fill-blue-400 text-blue-400"
										/>
									))}
								</div>
								<p className="text-sm text-zinc-300 leading-relaxed mb-6">
									"{testimonial.quote}"
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-sm font-bold text-white">
											{testimonial.name[0]}
										</div>
										<span className="font-semibold text-sm">
											{testimonial.name}
										</span>
									</div>
									<span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
										{testimonial.result}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-24 px-6">
				<div className="mx-auto max-w-3xl text-center">
					<div className="rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-12 sm:p-16">
						<h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
							Turn Viral Content Into Scalable Income
						</h2>
						<p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
							ClipCash is the modern creator economy platform for editors and
							content creators. Join 16,000+ members and start earning today.
						</p>
						<a
							href={CHECKOUT_URL}
							className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-10 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
						>
							Join ClipCash Free
							<ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
						</a>
						<p className="mt-4 text-sm text-zinc-500">
							No credit card required • Instant access
						</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-white/5 py-8 px-6">
				<div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<img
							src={LOGO_URL}
							alt="ClipCash"
							className="h-7 w-7 rounded-md object-cover"
						/>
						<span className="text-sm font-semibold">ClipCash</span>
					</div>
					<p className="text-xs text-zinc-500">
						© {new Date().getFullYear()} ClipCash. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

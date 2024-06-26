import { FC } from "react";
import Link from "next/link";

export const Navbar: FC = () => {
	return (
		<div className="flex items-center justify-center sticky p-5 top-0 backdrop-blur-lg">
			<div className="flex md:w-7/12 w-10/12 justify-between">
				<div className="flex items-center">
					<Link href="/" legacyBehavior>
						<a className="text-2xl font-bold text-gray-200">yuricunha.</a>
					</Link>
				</div>
				<div className="flex items-center text-gray-300">
					<Link href="/projects" className="mx-3" legacyBehavior>
						<a className="mx-3">Projects</a>
					</Link>
					<a
						href="mailto:isyuricunha@duck.com"
						className="px-5 p-2 transition rounded-full hover:bg-[#262626] bg-[#1f1f1f]"
					>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

import React from 'react'
import BlogList from '../BlogList/BlogList'

const HomePage = (props) => {
	return (
		<div className="flex flex-col items-center py-10">
			{/*======================================first blogs image======================= */}
			<div
				style={{
					backgroundImage: "url('/img/bg.png')",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="lg:px-20 px-10 lg:flex flex-row items-center lg:my-5 mb-32 mt-4">
					<div className="border-2 w-[18.688rem] h-[12.526rem] lg:w-[50%] lg:h-[25%] rounded-lg overflow-hidden">
						<img
							className="rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
							src="./img/blogs.png"
							alt="Bonnie "
						/>
					</div>
					<div
						className={
							"w-[18rem] translate-x-[2rem] translate-y-[-6rem] lg:w-[38%] h-fit border-[#F05225] border-2 absolute lg:translate-x-[36rem] lg:translate-y-[-0.3rem] rounded-xl " +
							(props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
						}
					>
						<div className="p-5 flex flex-col lg:gap-y-5">
							<h1 className="font-semibold text-description lg:text-[28px] capitalize">
								Worldwide Repls, part 3: Firing Up The Engines
							</h1>
							<span className="lg:text-description text-[0.75rem]">
								Mar 22, 2023
							</span>
							<p className="lg:text-subtitle capitalize text-[0.8rem]">
								MACHINE LEARNING- the most hyped technology these days due to
								its ability to automate tasks, detect patterns.
							</p>
							<h5 className="text-subtitle text-gradient cursor-pointer">
								Read more
							</h5>
						</div>
						{/* Animated Square */}
						<div className="absolute -top-28 -right-20 square xl:block hidden">
							<img src="/img/square.svg" alt="" />
						</div>
						<div className="absolute -bottom-10 -right-32 xl:block hidden">
							<img src="/img/square.svg" alt="" width={"60%"} />
						</div>
					</div>
				</div>
			</div>
			<BlogList theme={props.theme} />
		</div>
	)
}

export default HomePage
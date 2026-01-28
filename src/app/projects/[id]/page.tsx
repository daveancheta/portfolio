import { Badge } from "@/components/ui/badge"
import { MoveLeft } from "lucide-react"
import Link from "next/link"

type Project = {
    id: number
    title: string
    imgUrl: string
    problem: string
    solution: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "ReQuake",
        imgUrl: "/requake.png",
        problem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit autem iure, delectus id sit blanditiis reprehenderit cupiditate explicabo possimus officia aliquid. Nisi temporibus nam ipsa ipsum iure perferendis doloribus et recusandae, assumenda, at minima, beatae a voluptatum mollitia fuga nihil cumque. Voluptatibus assumenda incidunt facilis officiis eveniet animi dolores iure architecto asperiores optio, beatae natus quia, dignissimos, nulla rerum adipisci laboriosam quaerat laudantium voluptatum dolorum sequi. Quis iusto consequuntur corrupti labore at officiis commodi minus ad inventore accusamus quidem maiores beatae nisi ab necessitatibus corporis a saepe itaque fugit magnam voluptatum voluptatem, quo placeat. Ipsam necessitatibus commodi excepturi cupiditate.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit autem iure, delectus id sit blanditiis reprehenderit cupiditate explicabo possimus officia aliquid. Nisi temporibus nam ipsa ipsum iure perferendis doloribus et recusandae, assumenda, at minima, beatae a voluptatum mollitia fuga nihil cumque. Voluptatibus assumenda incidunt facilis officiis eveniet animi dolores iure architecto asperiores optio, beatae natus quia, dignissimos, nulla rerum adipisci laboriosam quaerat laudantium voluptatum dolorum sequi. Quis iusto consequuntur corrupti labore at officiis commodi minus ad inventore accusamus quidem maiores beatae nisi ab necessitatibus corporis a saepe itaque fugit magnam voluptatum voluptatem, quo placeat. Ipsam necessitatibus commodi excepturi cupiditate.",
    },
    {
        id: 2,
        title: "Grindax",
        imgUrl: "/grindax.png",
        problem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit autem iure, delectus id sit blanditiis reprehenderit cupiditate explicabo possimus officia aliquid. Nisi temporibus nam ipsa ipsum iure perferendis doloribus et recusandae, assumenda, at minima, beatae a voluptatum mollitia fuga nihil cumque. Voluptatibus assumenda incidunt facilis officiis eveniet animi dolores iure architecto asperiores optio, beatae natus quia, dignissimos, nulla rerum adipisci laboriosam quaerat laudantium voluptatum dolorum sequi. Quis iusto consequuntur corrupti labore at officiis commodi minus ad inventore accusamus quidem maiores beatae nisi ab necessitatibus corporis a saepe itaque fugit magnam voluptatum voluptatem, quo placeat. Ipsam necessitatibus commodi excepturi cupiditate.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit autem iure, delectus id sit blanditiis reprehenderit cupiditate explicabo possimus officia aliquid. Nisi temporibus nam ipsa ipsum iure perferendis doloribus et recusandae, assumenda, at minima, beatae a voluptatum mollitia fuga nihil cumque. Voluptatibus assumenda incidunt facilis officiis eveniet animi dolores iure architecto asperiores optio, beatae natus quia, dignissimos, nulla rerum adipisci laboriosam quaerat laudantium voluptatum dolorum sequi. Quis iusto consequuntur corrupti labore at officiis commodi minus ad inventore accusamus quidem maiores beatae nisi ab necessitatibus corporis a saepe itaque fugit magnam voluptatum voluptatem, quo placeat. Ipsam necessitatibus commodi excepturi cupiditate.",
    },
    {
        id: 3,
        title: "CarVibe",
        imgUrl: "/carvibe.png",
        problem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit autem iure, delectus id sit blanditiis reprehenderit cupiditate explicabo possimus officia aliquid. Nisi temporibus nam ipsa ipsum iure perferendis doloribus et recusandae, assumenda, at minima, beatae a voluptatum mollitia fuga nihil cumque. Voluptatibus assumenda incidunt facilis officiis eveniet animi dolores iure architecto asperiores optio, beatae natus quia, dignissimos, nulla rerum adipisci laboriosam quaerat laudantium voluptatum dolorum sequi. Quis iusto consequuntur corrupti labore at officiis commodi minus ad inventore accusamus quidem maiores beatae nisi ab necessitatibus corporis a saepe itaque fugit magnam voluptatum voluptatem, quo placeat. Ipsam necessitatibus commodi excepturi cupiditate.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit autem iure, delectus id sit blanditiis reprehenderit cupiditate explicabo possimus officia aliquid. Nisi temporibus nam ipsa ipsum iure perferendis doloribus et recusandae, assumenda, at minima, beatae a voluptatum mollitia fuga nihil cumque. Voluptatibus assumenda incidunt facilis officiis eveniet animi dolores iure architecto asperiores optio, beatae natus quia, dignissimos, nulla rerum adipisci laboriosam quaerat laudantium voluptatum dolorum sequi. Quis iusto consequuntur corrupti labore at officiis commodi minus ad inventore accusamus quidem maiores beatae nisi ab necessitatibus corporis a saepe itaque fugit magnam voluptatum voluptatem, quo placeat. Ipsam necessitatibus commodi excepturi cupiditate.",
    },
    {
        id: 4,
        title: "SitterLy",
        imgUrl: "/sitterly.png",
        problem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit autem iure, delectus id sit blanditiis reprehenderit cupiditate explicabo possimus officia aliquid. Nisi temporibus nam ipsa ipsum iure perferendis doloribus et recusandae, assumenda, at minima, beatae a voluptatum mollitia fuga nihil cumque. Voluptatibus assumenda incidunt facilis officiis eveniet animi dolores iure architecto asperiores optio, beatae natus quia, dignissimos, nulla rerum adipisci laboriosam quaerat laudantium voluptatum dolorum sequi. Quis iusto consequuntur corrupti labore at officiis commodi minus ad inventore accusamus quidem maiores beatae nisi ab necessitatibus corporis a saepe itaque fugit magnam voluptatum voluptatem, quo placeat. Ipsam necessitatibus commodi excepturi cupiditate.",
        solution: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit autem iure, delectus id sit blanditiis reprehenderit cupiditate explicabo possimus officia aliquid. Nisi temporibus nam ipsa ipsum iure perferendis doloribus et recusandae, assumenda, at minima, beatae a voluptatum mollitia fuga nihil cumque. Voluptatibus assumenda incidunt facilis officiis eveniet animi dolores iure architecto asperiores optio, beatae natus quia, dignissimos, nulla rerum adipisci laboriosam quaerat laudantium voluptatum dolorum sequi. Quis iusto consequuntur corrupti labore at officiis commodi minus ad inventore accusamus quidem maiores beatae nisi ab necessitatibus corporis a saepe itaque fugit magnam voluptatum voluptatem, quo placeat. Ipsam necessitatibus commodi excepturi cupiditate.",
    },
]

async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((project) => project.id === Number(id))

    return (
        <div className="wrapper my-4">
            <Link href="/" className="flex flex-row items-center gap-2 text-muted-foreground">
                <MoveLeft />
                Back to Home
            </Link>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 justify-between gap-4">
                <div className="space-y-6 order-2 sm:order-1">
                    <div className="space-y-3">
                        <span className="uppercase font-medium tracking-widest text-xs">case study</span>

                        <h1 className="font-bold text-3xl">{project?.title}</h1>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="uppercase tracking-widest text-xs font-bold">Problem</h1>
                            <p className="border border-border/60 rounded-xl p-4 sm:p-5">
                                {project?.problem}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h1 className="uppercase tracking-widest text-xs font-bold">Solution</h1>
                            <p className="border border-border/60 rounded-xl p-4 sm:p-5">
                                {project?.solution}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative order-1 sm:order-2">
                    <div className="relative border border-border/60 rounded-xl overflow-hidden">
                        <img className="w-full h-100 object-cover hover:scale-102 
                    transition-all duration-500 ease-in-out rounded-b-none border border-border/60" src={project?.imgUrl} alt={project?.title} />
                        <div className="flex justify-between p-4 items-center">
                            <div className="flex flex-col items-center">
                                <span className="uppercase tracking-wider text-xs text-muted-foreground">overview</span>
                                <h1 className="font-bold">{project?.title}</h1>
                            </div>
                            <span className="text-xs rounded-full border border-border/60 p-1 px-2 text-muted-foreground">
                                Selected Work
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
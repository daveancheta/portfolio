import { Layers } from "lucide-react"

function TechStackSection() {
    return (
        <section className="wrapper mt-10">
            <h1 className="text-4xl font-bold flex items-center gap-2">
                <Layers className="text-muted-foreground" />
                Tech Stack
            </h1>
        </section>
    )
}

export default TechStackSection
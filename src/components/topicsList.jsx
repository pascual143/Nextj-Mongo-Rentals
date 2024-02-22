import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import MenuSearch from "@/components/menuSearch"

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

export default async function TopicsList() {
    const { topics } = await getTopics();

    return (
        <>
            <div className="flex gap-4">
                <div className="w-150 px-3 flex m-2">
                    <MenuSearch />
                </div>
                <div className="flex">
                    <div className="flex gap-3">

                        {topics.map((t) => (
                            <div
                                key={t._id}
                                className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                            >
                                <div>
                                    <h2 className="font-bold text-2xl">{t.title}</h2>
                                    <div>{t.description}</div>
                                </div>

                                <div className="flex gap-2">
                                    <RemoveBtn id={t._id} />
                                    <Link href={`/editTopic/${t._id}`}>
                                        <HiPencilAlt size={24} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
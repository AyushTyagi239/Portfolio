import React, {useEffect} from "react";
import SectionIntro from "../components/SectionIntro";
import VideoPlayer from "../components/VideoPlayer";
import PointsSection from "../components/PointsSection";
import TwoColumnList from "../components/TwoColumnList";
import { readMoreData } from "../data/readMoreData";
import ReadMoreBlog from "../components/ReadMoreBlog";

const ReadMorePage = () => {
    const { title, intro, video, advantages, useCases } = readMoreData;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <main className="w-full min-h-screen bg-[#0f172a] text-white overflow-x-hidden overflow-y-auto">
            <SectionIntro title={title} content={intro} />
            <VideoPlayer {...video} />
            <PointsSection title="Advantages" points={advantages} />
            <TwoColumnList title="Use Cases" sections={useCases} />
            {/* <ReadMoreBlog data={readMoreData} /> */}
        </main>

    );
};

export default ReadMorePage;

import React from "react";
import SectionIntro from "../components/SectionIntro";
import VideoPlayer from "../components/VideoPlayer";
import PointsSection from "../components/PointsSection";
import TwoColumnList from "../components/TwoColumnList";
import { readMoreData } from "../data/readMoreData";
import ReadMoreBlog from "../components/ReadMoreBlog";

const ReadMorePage = () => {
    const { title, intro, video, advantages, useCases } = readMoreData;

    return (
        <main className="w-full min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden overflow-y-auto">
        <SectionIntro title={title} content={intro} />
        <VideoPlayer {...video} />
        <PointsSection title="Advantages" points={advantages} />
        <TwoColumnList title="Use Cases" sections={useCases} />
        {/* <ReadMoreBlog data={readMoreData} /> */}
        </main>
    );
};

export default ReadMorePage;

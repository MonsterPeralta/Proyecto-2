import React from "react";
import FeedPost from "./Feed/Post";
import StoriesReels from "./Feed/StoryReels";

const Grid = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr 1fr",
                gap: "7rem",
                height: "300rem",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ gridColumn: "2/3" }}>
                <StoriesReels/>
                <FeedPost />
            </div>
            <div style={{ gridColumn: "1/2", backgroundColor: "lightgray" }}>
                {/* Contenido de la columna 1 */}
            </div>
            <div style={{ gridColumn: "3/4", backgroundColor: "lightgray" }}>
                {/* Contenido de la columna 3 */}
            </div>
        </div>
    );
};

export default Grid;
import React, { useState } from "react";

export default function PostBody({src}) {
    return (
        <div className="post-image-wrapper">
            <img
            alt="post thumbnail"
            className="post-image"
            src={src}
            />
        </div>
    )
};
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackCoverSmallAni = () => {
    const [screenSize, setScreenSize] = useState("sm");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 640) setScreenSize("sm");
            else setScreenSize("md");
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const variantX = {
        sm: [0, -95, -190, -285],
        md: [0,-125,-250,-375]
    };

    const images = [
        "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/product-0.png",
        "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/product-1.png",
        "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/product-2.png",
        "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/product-0.png",
    ];

    return (
        <div className="w-full relative overflow-hidden">
            <motion.div
                className="flex absolute"
                animate={{ x: variantX[screenSize] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
            >
                {images.map((src, index) => (
                    <img key={index} src={src} alt="" />
                ))}
            </motion.div>
            <img
                src="https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/product-background.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
            />
        </div>
    );
};

export default BackCoverSmallAni;

import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Import all images at once using Vite's glob import
const images = import.meta.glob('../images/*.{jpg,jpeg,png,gif}', { eager: true });

function OptionPage() {
  const { optionId } = useParams();
  
  // Convert imported images to array of URLs
  const imageUrls = Object.values(images).map(module => module.default);
  
  console.log('Available images:', imageUrls); // Debug log

  let scenario = {};

  switch (optionId) {
    case "miss":
      scenario = {
        title: "If you miss him",
        text: "It's natural to miss someone who was once a part of your life, even if they didn't deserve you. But don't mistake nostalgia for love—you miss the comfort, not the chaos. You deserve someone who sees your worth, not someone you have to remind. Let go with grace, knowing better days and better people are ahead.",
        images: imageUrls.slice(0, 3), // First 3 images
      };
      break;
    case "not-enough":
      scenario = {
        title: "If you feel like you're not enough",
        text: "You are not just enough—you are everything. The right people will never make you question your worth. You bring so much light, love, and energy into the world, and no one's inability to appreciate that changes the fact that you are amazing exactly as you are.",
        images: imageUrls.slice(3, 6), // Next 3 images
      };
      break;
    case "sad":
      scenario = {
        title: "If you're sad and angry at the world",
        text: "I know it's frustrating when things don't go the way they should. But the world isn't against you—it's just clearing the way for something better. Let yourself feel, but don't let the anger stay. You're too good to waste your energy on people and situations that were never meant to keep up with you.",
        images: imageUrls.slice(6, 9), // Last 3 images
      };
      break;
    default:
      scenario = {
        title: "Unknown Scenario",
        text: "We couldn't find the right scenario. Please go back and try again.",
        images: [],
      };
  }

  // Refs for all images (we'll attach them on render)
  const imageRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  // Update max height by measuring each image after they load
  const updateMaxHeight = () => {
    // Get the rendered heights of all images
    const heights = imageRefs.current.map((img) => (img ? img.offsetHeight : 0));
    // Ensure a minimum height of 300px
    const newMax = Math.max(...heights, 300);
    if (newMax !== maxHeight) {
      setMaxHeight(newMax);
    }
  };

  // Use an effect to update after initial render (and whenever scenario.images changes)
  useEffect(() => {
    // A short delay to allow images to render
    const timer = setTimeout(() => {
      updateMaxHeight();
    }, 300);
    return () => clearTimeout(timer);
  }, [scenario.images]);

  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">{scenario.title}</h1>
      <p className="lead">{scenario.text}</p>
      <div className="image-grid">
        {scenario.images.map((img, idx) => (
          <div
            className="image-container"
            key={idx}
            style={maxHeight ? { height: maxHeight } : {}}
          >
            <img
              ref={(el) => (imageRefs.current[idx] = el)}
              src={img}
              alt={`${scenario.title} collage ${idx + 1}`}
              onLoad={updateMaxHeight}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Changed from "contain" to "cover" to fill the container
              }}
            />
          </div>
        ))}
      </div>
      <div className="btn-container">
        <Link to="/" className="btn btn-primary">
          Return back
        </Link>
      </div>
    </div>
  );
}

export default OptionPage;
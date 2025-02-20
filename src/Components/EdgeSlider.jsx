import React from "react";
import { Carousel } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

function EdgeSlider() {
  const cards = [
    {
      img: "https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif",
      title: "Ultimate Guide to Edge AI",
      description:
        "Edge Impulse, the leading edge AI development platform, brings intelligence to any edge device.",
    },
    {
      img: "https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif",
      title: "Revolutionizing AI at the Edge",
      description:
        "Discover how AI at the edge is changing industries and making devices smarter.",
    },
    {
      img: "https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif",
      title: "AI-Powered Innovation",
      description:
        "Explore the latest trends in AI and how they impact real-world applications.",
    },
    {
      img: "https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif",
      title: "The Future of AI",
      description: "AI is transforming industries and shaping the future.",
    },
    {
      img: "https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif",
      title: "Machine Learning at the Edge",
      description: "Learn how edge AI is powering next-gen applications.",
    },
    {
      img: "https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif",
      title: "Smart Devices and AI",
      description: "AI is making devices smarter and more efficient.",
    },
  ];

  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 3) {
    groupedCards.push(cards.slice(i, i + 3));
  }
  return (
    <div className=" mt-4">
      <Carousel controls={true} indicators={false} interval={3000}>
        {groupedCards.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {group.map((card, idx) => (
                <div key={idx} className="col-md-4">
                  <div className="edge-impulse-card">
                    <div className="edge-impulse-img">
                      <img className="d-block w-100" src={card.img} alt="" />
                    </div>
                    <div className="ultimate-guide-header text-center">
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                      <a href="#">
                        Read More <IoIosArrowForward />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default EdgeSlider





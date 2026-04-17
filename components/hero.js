

const hero = () => {
    
    //hero-left
    let heroLeftText = React.createElement('p', {id: "left-text"}, '2026   ━━━━━━━━━━━━━━━━━━━   Product Designer')
    const heroLeft = React.createElement("div", {id: "hero-left"}, heroLeftText);

    //hero-middle
    const heroMiddleCounter1Heading = React.createElement("h4", null, "200+");
    const heroMiddleCounter1Text = React.createElement("p", null, "Projects completed");
    const heroMiddleCounter1 = React.createElement("div", null, [heroMiddleCounter1Heading, heroMiddleCounter1Text]);
    
    const heroMiddleCounter2Heading = React.createElement("h4", null, "55+");
    const heroMiddleCounter2Text = React.createElement("p", null, "Startups raised");
    const heroMiddleCounter2 = React.createElement("div", null, [heroMiddleCounter2Heading, heroMiddleCounter2Text]);

    const heroMiddleCountersContainer = React.createElement("div", {id: "counters-container"}, [heroMiddleCounter1, heroMiddleCounter2]);

    const heroMiddleHeading = React.createElement("h1", {id: "middle-heading"}, "Hello");
    const heroMiddleText = React.createElement("p", {id: "middle-heading"}, "— It’s Finox a design wizerd");
    const heroMiddleHeadingContainer = React.createElement("div", {id: "heading-container"}, [heroMiddleHeading, heroMiddleText])


    const scrollBtn = React.createElement("p", {id: "scroll"}, "Scroll down ↓");
    const heroMiddle = React.createElement("div", {id: "hero-middle"}, heroMiddleCountersContainer, heroMiddleHeadingContainer, scrollBtn);


    //hero-right
    const heroRightImage = React.createElement("img", {id: "right-image", src: "/images/hero-image.webp"}, null)
    const heroRightContainer = React.createElement("div", {id: "hero-right"}, heroRightImage)

    // hero-section
    const heroSection = React.createElement("section", {id: "hero"}, [heroLeft, heroMiddle, heroRightContainer]);



    return heroSection;
}

export default hero;
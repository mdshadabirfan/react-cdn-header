const navbar = () => {

    // logo
    const logo = React.createElement("img", {id: "logo", src: "./images/logo.svg"}, null);

    //navLinks
    const link1 = React.createElement("a", {href: "#"}, "about me");
    const link2 = React.createElement("a", {href: "#"}, "portfolio");
    const link3 = React.createElement("a", {href: "#"}, "pages");
    const link4 = React.createElement("a", {href: "#"}, "services");
    const link5 = React.createElement("a", {href: "#"}, "blog");
    //linksContainer
    const linksContainer = React.createElement("div", {id: "links-container"}, [link1, link2, link3, link4, link5]);

    //ctaLink
    const ctaText = React.createElement("a", {href: "#"}, "book a call");
    const ctaArrow = React.createElement("img", {src: "./images/cta-arrow.svg"});
    //ctaContainer
    const ctaContainer = React.createElement("div", {id: "cta-container"}, [ctaText, ctaArrow]);

    //navbarContainer
    const navbar = React.createElement("nav", null, [logo, linksContainer, ctaContainer]);

    return navbar;
}

export default navbar;
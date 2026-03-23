function Work({title, desc, link, order, period, noImage}) {

    const isLink = link && link.includes("http");

    const Card = isLink ? "a" : "div";
    const CardProps = isLink ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <Card className="work-card" {...CardProps}>
            <div className="work-image">
                <img src={noImage ? "./images/works/default.jpg" : `./images/works/work${order}.jpg`} alt="" />
                {
                    !isLink && <span className="work-message">{link}</span>
                }
            </div>
            <div className="work-text">
                <h3>{title}</h3>
                <p>{period}</p>
                <p dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
        </Card>
    );
}

export default Work;
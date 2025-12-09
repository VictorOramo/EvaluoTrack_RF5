import PrismCode from "Common/Prisam";

// Link Colors

const linksColor =

`
<p><Link to="#" className="link-primary">Primary link</Link></p>
    
<p><Link to="#" className="link-secondary">Secondary link</Link></p>
    
<p><Link to="#" className="link-success">Success link</Link></p>
    
<p><Link to="#" className="link-danger">Danger link</Link></p>
    
<p><Link to="#" className="link-warning">Warning link</Link></p>
    
<p><Link to="#" className="link-info">Info link</Link></p>
    
<p><Link to="#" className="link-light">Light link</Link></p>
    
<p><Link to="#" className="link-dark">Dark link</Link></p>
    
<p><Link to="#" className="link-body-emphasis mb-0">Emphasis link</Link></p>
`

const LinkColorsExample = () => (
    <PrismCode
        code={linksColor}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Link Utilities

const linkutilities =

`
<p><Link to="#" className="link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</Link></p>

<p><Link to="#" className="link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</Link></p>

<p><Link to="#" className="link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Success link</Link></p>

<p><Link to="#" className="link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</Link></p>

<p><Link to="#" className="link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</Link></p>

<p><Link to="#" className="link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Info link</Link></p>

<p><Link to="#" className="link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Light link</Link></p>

<p><Link to="#" className="link-dark link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</Link></p>

<p><Link to="#" className="link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0">Emphasis link</Link></p>
`
const LinkUtilitiesExample = () => (
    <PrismCode
        code={linkutilities}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Link Opacity

const linkOpacity =

`
<p><Link className="link-opacity-10" to="#">Link opacity 10</Link></p>

<p><Link className="link-opacity-25" to="#">Link opacity 25</Link></p>

<p><Link className="link-opacity-50" to="#">Link opacity 50</Link></p>

<p><Link className="link-opacity-75" to="#">Link opacity 75</Link></p>
<p className="mb-0"><Link className="link-opacity-100" to="#">Link opacity 100</Link></p>
`
const LinkOpacityExample = () => (
    <PrismCode
        code={linkOpacity}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Link Opacity Hover

const linkOpacityHover =
`
<p><Link className="link-opacity-10-hover" to="#">Link hover opacity 10</Link></p>

<p><Link className="link-opacity-25-hover" to="#">Link hover opacity 25</Link></p>

<p><Link className="link-opacity-50-hover" to="#">Link hover opacity 50</Link></p>

<p><Link className="link-opacity-75-hover" to="#">Link hover opacity 75</Link></p>

<p className="mb-0"><Link className="link-opacity-100-hover" to="#">Link hover opacity 100</Link></p>
`
const LinkOpacityHoverExample = () => (
    <PrismCode
        code={linkOpacityHover}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Underline color

const underlineColor =
`
<p><Link to="#" className="text-decoration-underline link-underline-primary">Primary underline</Link></p>

<p><Link to="#" className="text-decoration-underline link-underline-secondary">Secondary underline</Link></p>

<p><Link to="#" className="text-decoration-underline link-underline-success">Success underline</Link></p>

<p><Link to="#" className="text-decoration-underline link-underline-danger">Danger underline</Link></p>

<p><Link to="#" className="text-decoration-underline link-underline-warning">Warning underline</Link></p>

<p><Link to="#" className="text-decoration-underline link-underline-info">Info underline</Link></p>

<p><Link to="#" className="text-decoration-underline link-underline-light">Light underline</Link></p>

<p className="mb-0"><Link to="#" className="text-decoration-underline link-underline-dark">Dark underline</Link></p>
`
const UnderlineColorExample = () => (
    <PrismCode
        code={underlineColor}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Underline opacity

const underlineOpacity =

`
<p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-0" to="#">Underline opacity 0</Link></p>

<p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-10" to="#">Underline opacity 10</Link></p>

<p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-25" to="#">Underline opacity 25</Link></p>

<p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-50" to="#">Underline opacity 50</Link></p>

<p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-75" to="#">Underline opacity 75</Link></p>

<p className="mb-0"><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-100" to="#">Underline opacity 100</Link></p>
`

const UnderlineOpacityExample = () => (
    <PrismCode
        code={underlineOpacity}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Underline offset

const underlineOffset =
`
<p><a href="#">Default link</a></p>

<p><a className="text-decoration-underline link-offset-1" href="#">Offset 1 link</a></p>

<p><a className="text-decoration-underline link-offset-2" href="#">Offset 2 link</a></p>

<p className="mb-0"><a className="text-decoration-underline link-offset-3" href="#">Offset 3 link</a></p>
`

const UnderlineOffsetExample = () => (
    <PrismCode
        code={underlineOffset}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


//  Icon Link

const iconLink =

`
<Link className="icon-link" to="#">
    <i className="bi bi-box-seam align-baseline"></i> Icon link
</Link>

<Link className="icon-link" to="#">
    Icon link <i className="bi bi-arrow-right"></i>
</Link>

<Link className="icon-link icon-link-hover" to="#">
    Icon link <i className="bi bi-arrow-right"></i>
</Link>
<Link className="icon-link icon-link-hover" style={{ transform: "translate3d(0, -.125rem, 0)" }} to="#">                                 
    <i className="bi bi-clipboard"></i> Icon link
</Link>
<Link className="icon-link icon-link-hover" style={{
    color: isHovered ? '#2dcb73' : '#3762ea',
    transition: 'color 0.5s ease-in-out'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="#">
    Icon link <i className="bi bi-arrow-right"></i>
</Link>
<Link className="icon-link icon-link-hover link-success text-decoration-underline link-underline-success link-underline-opacity-25" to="#">
    Icon link <i className="bi bi-arrow-right"></i>
</Link>
`
const IconLinkExample = () => (
    <PrismCode
        code={iconLink}
        language={("js")}
        plugins={["line-numbers"]}
    />
);




export { LinkColorsExample, LinkUtilitiesExample, LinkOpacityExample, LinkOpacityHoverExample, UnderlineColorExample, UnderlineOpacityExample, UnderlineOffsetExample, IconLinkExample }
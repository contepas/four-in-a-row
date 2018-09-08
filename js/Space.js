class Space{
    constructor(x,y){
        this.diameter = 76;
        this.radious = this.diameter/2;
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
    }


    //=== METHODS =========

    /**
     * Draw SVG space in the HTML
     */
    drawSVGSpace(){
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");

        document.querySelector("#mask").appendChild(svgSpace); 
    }
}
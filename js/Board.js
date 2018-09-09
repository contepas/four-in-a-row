class Board{
    constructor(){
        this.rows = 6;
        this.cols = 7;
        this.spaces = this.createSpaces();
    }


    //=== METHODS =========
    
    /**
     * Generate 2 dimensional array of spaces
     * @return {array} array of spaces
     */
    createSpaces(){
        const spaces = [];

        for(let x=0; x<this.cols; x++){
            const col = [];

            for(let y=0; y<this.rows; y++){
                const space = new Space(x,y);
                col.push(space);
            }

            spaces.push(col);
        }

        return spaces;
    }

    /**
     * Draw the HTML Board
     */
    drawHTMLBoard(){
        for(let col of this.spaces){
            for(let space of col){
                space.drawSVGSpace();
            }
        }
    }
}
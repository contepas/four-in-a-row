class Board{
    constructor(){
        this.rows = 6;
        this.cols = 7;
        this.space = this.createSpace();
    }

    /**
     * Generate 2 dimensional array of spaces
     * @return {array} array of spaces
     */
    createSpace(){
        const spaces = [];

        for(let x=0; x<this.rows; i++){
            const col = [];

            for(let y=0; y<this.cols; i++){
                const space = new Space(x,y);
                col.push(space);
            }

            spaces.push(column);
        }

        return spaces;
    }
}
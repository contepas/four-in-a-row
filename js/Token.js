class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }


    //=== GET/SET =========

   /** 
     * Gets associated HTML token.
     * @return  {element}   THML element associated with token object.
     */
    get htmlToken() {
        return document.querySelector(`#${this.id}`);
    }

    /** 
    * Gets left offset of html element.
    * @return  {number}   Left offset of token object's htmlToken.
    */
    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }


    //=== METHODS =========

    /**
     * Draw the HTML token 
     */
    drawHTMLToken() {
        const token = document.createElement("div");
        const gameBoardUnderlay = document.querySelector("#game-board-underlay");
        
        gameBoardUnderlay.appendChild(token);
        token.setAttribute("id", this.id);
        token.setAttribute("class", "token");
        token.style.backgroundColor = this.owner.color;
    }

    /**
     * Moves html token one column to left.
     */
    moveLeft() {
        if(this.columnLocation > 0){
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }
    }

    /**
     * Moves html token one column to right.
     * @param {number} cols - token colon number
     */
    moveRight(cols) {
        if(this.columnLocation < cols -1){
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }   
    }
}
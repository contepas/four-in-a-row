class Token {
    constructor(owner, index){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }


    //=== GET/SET =========

    /** 
     * call the method to draw the SVG HTML token on the page
     */
    get htmlToken(){
        this.drawHTMLToken();
    }


    //=== METHODS =========

    /**
     * Draw the HTML token 
     */
    drawHTMLToken(){
        const token = document.createElement("div");
        const gameBoardUnderlay = document.querySelector("#game-board-underlay");
        
        gameBoardUnderlay.appendChild(token);
        token.setAttribute("id", this.id);
        token.setAttribute("class", "token");
        token.style.backgroundColor = this.owner.color;
    }
}
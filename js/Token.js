class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }


    //=== GET/SET =========

   /** 
     * Gets associated HTML token.
     * @return  {element}   THML element associated with token object.
     */
    get htmlToken() {
        return document.querySelector(`#${this.id}`);
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
        console.log(this.id);
    }
}
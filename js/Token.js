class Token {
    constructor(owner, index){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    get htmlToken(){
        return this.drawHTMLToken();
    }

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
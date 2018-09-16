class Player{
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }
    

    //=== GET/SET =========
    
    /**
     * Gets all unused tokens
     * @return {array} return all player's Token objects whose dropped properties are equal to false
     */
    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }

    /**
     * Gets the first unused token from the array of unused tokens
     * @return {object} return the first unused token
     */
    get activeToken(){
        return this.unusedTokens[0];
    }


    //=== METHODS =========

    /**
     * Creates token objects for the player
     * @param {integer} num - number of token objects needed
     * @return {array} an array of token objects
     */
    createTokens(num){
        const tokens = [];

        for(let i = 0; i<num; i++){
            let token = new Token(i, this);
            tokens.push(token);
        }

        return tokens;
    }

    /**
     * Check if a player has any undropped tokens left
     * @return {Boolean} 
     */
    checkTokens(){
        return this.unusedTokens.length == 0 ? false : true;
        // if(this.unusedTokens === undefined || this.unusedTokens.length === 0){
        //     return false;
        // }

        // return true;
    }
}
class Player{
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

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
     * 
     * @return {array} return all player's Token objects whose dropped properties are equal to false
     */
    get unusedTokens(){
        const tokens

        for (token of this.tokens){
            if (!token.dropped){
                tokens.push(token);
            }
        }

        return tokens;
    }

    /**
     * 
     * @return {object} return the first unused token
     */
    get activeToken(){
        token = this.unusedTokens();

        return token[0];
    }
}